---
sidebar_position: 3
---

# Tear-down Vanilla

Let's now walk through the process of tearing down a vanilla k3s cluster and
individual host.

## Tear It Down

If you would like, you now have the option to tear-down the entire vanilla k3s
cluster by running:

```bash
apb K3s/teardown-vanilla.yml
```

- This will not change any hosts, and still keep them in the live state, but it
  will tear down k3s. So if you run `kubectl get nodes -o wide` again, you will
  get an error.
- If you do not plan on changing the host plan, you can use this to bounce k3s.
  If you plan on changing the host plan, you should also tear down the live
  hosts.

However, it has been a part of the plan from the outset to be able to trivially
remove hosts willy-nilly.

You can now also run this command:

```bash
apb K3s/teardown-live.yml -e "killhosts=pi4,pi5"
```

This will safely remove a host by name (separated by commas if more than one).
In this case, `killhosts=pi4,pi5` are to be removed from the Kubernetes cluster
and have k3s uninstalled from them, only. They will be returned to the live host
state and are ready to be brought back into the cluster if need be.

:::info

As of the time of writing (Dec 2022) there appears to be
[a bug](https://github.com/k3s-io/k3s/issues/4023) which may cause a master host
to rejoin if you try to remove him. We'd just not intentionally remove
individual master hosts for the time being... If you want to tear-down a master
host, and you have 3 master hosts, you should tear-down the entire cluster, if
you have more, like 5 or 7, you should only tear them down two at a time to
maintain an odd quorum.

:::

## What is the Teardown Command Doing?

You should notice a new and strange command now entering the Ansible landscape:

```bash title="hab-plays/K3s/teardown-vanilla.yml"
...
    - name: Drain Node before terminating
      when: killhosts is defined
      kubernetes.core.k8s_drain:
        state: drain
        name: "{{ item }}"
        delete_options:
          wait_timeout: 0
          wait_sleep: 5
          ignore_daemonsets: yes
          disable_eviction: yes
          terminate_grace_period: 5
          force: yes
      loop: "{{ killhosts.split(',') }}"
      failed_when: false
    - name: Delete Node
      when: killhosts is defined
      kubernetes.core.k8s:
        api_version: v1
        name: "{{ item }}"
        kind: Node
        state: absent
      loop: "{{ killhosts.split(',') }}"
...
```

In particular, this bit `kubernetes.core...`. This is Ansible calling its
Kubernetes package. You'll see this pattern frequently going forward. Because
Ansible and Kubernetes both use `yml` formatting to interpret what we want them
to do, we can seamlessly move from an Ansible setting to a Kubernetes one. In
the above block, the `Drain Node before terminating` task is a fairly
well-defined k8s task for a host, so it comes with presets. Moving forward, you
will also see a `definition` key after `kubernetes.core` which is actually a
pure k8s resource definition, such that you wouldn't even need Ansible to add it
to k8s (you could simply use `kubectl apply -f resource.yml`). At that point, we
continue to use Ansible to make sure we are idempotent and thorough.

- **What is `Drain Node...` doing?** If `killhosts` is set, Drain is moving
  _all_ the resources and pods off the hosts and making sure they are working
  properly on other hosts. This makes sense, obviously, because we are removing
  the host from the cluster.
- **What is `Delete Node` doing?** If `killhosts` is set, by setting the
  `kind: Node` resource to a `absent` state we are telling Kubernetes to no
  longer retain the resource with name `{{ item from killhost list }}` in the
  cluster. Bye bye host.

:::caution

When you remove a host, k3s transfers resources to other nodes. As such, you
should avoid removing hosts if you can not absorb the work load and storage
requirements on remaining hosts. Further, this might take a long time with a
heavy host load.

:::

## Implications

If you want to re-add these hosts, you will need to add them back into the
cluster as they were previously defined, unless you also change the host-plan,
which might mean also needing to tear down the entire cluster.

All vanilla+-k3s-live-hosts can not be changed at the vanilla host level without
first bringing them down to the vanilla host state. To re-org the cluster, you
must either tear everything down, and re-build all-at-once, or you must do it
incrementally, host-by-host. It can not be done, declarative, "on-the-fly", but,
perhaps one day.

Fool around with your node plan, and take a moment to appreciate your cluster.
It's truly hard to overstate the level of complexity which is taking place as
you watch your node build layers of abstraction that support further layers of
abstraction. And not from our Ansible scripts, but from standing on the
shoulders of giants that this is built on.

:::tip Advanced HAB node exercise

Given 3 master hosts and at least 4 workers, tear down two worker hosts, and
stand them up as master hosts, then tear down two previous master hosts and
stand them up as worker hosts, repeat this until you have fully cycled all
master hosts.

Is your cluster still operational?

:::

Comfortable? Let's prepare Kubernetes to be warm and welcoming for Bitcoin.
