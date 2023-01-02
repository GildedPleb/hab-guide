---
sidebar_position: 2
---

# Stand-up Vanilla

Now, let's finally get Kubernetes up and running.

## K3s

Let's inspect `K3s/standup-vanilla.yml`:

1. The first thing we will do is a get a script from `https://get.k3s.io/` that
   installs K3s, from the official k3s distribution source. If you would like to
   view that script, and you should, open up the link in a web browser.
1. Then we are going to create and save a server token which is used by our
   hosts to identify and join the cluster.
1. Then we are going to install k3s using the token on our Leader, followed by
   Lieutenants, followed by Workers.
1. Once the worker hosts are ready, we will transfer the cluster credentials to
   the control computer giving us access to the cluster.

```bash
apb K3s/standup-vanilla.yml
```

It may take a few minutes, so give it some time.

To confirm that everything is up and running, on your control machine run:

```bash
kubectl get nodes -o wide
```

And you should see something like this:

```bash
% kubectl get nodes -o wide
NAME   STATUS   ROLES                       AGE     VERSION        INTERNAL-IP   EXTERNAL-IP   OS-IMAGE                         KERNEL-VERSION      CONTAINER-RUNTIME
nuc1   Ready    control-plane,etcd,master   2m56s   v1.23.4+k3s1   10.1.0.30     <none>        Ubuntu 20.04.4 LTS               5.4.0-104-generic   containerd://1.5.9-k3s1
nuc2   Ready    worker                      74s     v1.23.4+k3s1   10.1.0.31     <none>        Ubuntu 20.04.4 LTS               5.4.0-104-generic   containerd://1.5.9-k3s1
pi1    Ready    control-plane,etcd,master   99s     v1.23.4+k3s1   10.1.0.20     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1
pi2    Ready    control-plane,etcd,master   85s     v1.23.4+k3s1   10.1.0.21     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1
pi3    Ready    worker                      47s     v1.23.4+k3s1   10.1.0.22     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1
pi4    Ready    worker                      81s     v1.23.4+k3s1   10.1.0.23     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1
pi5    Ready    worker                      80s     v1.23.4+k3s1   10.1.0.24     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1

```

You are now the proud owner of a Kubernetes Cluster—Yet another Pleb is the
server farm now.

## Add New Vanilla Hosts

If needed, we now have the ability to bring a new vanilla host into the cluster,
which has been added to the host plan, with a one-liner command, without tearing
down or setting up anything but that host:

```bash
apb Hosts/standup-live.yml -e "plan=host-plan-2022-03-17" && apb K3s/standup-vanilla.yml
```

Now that we are up and running, let's investigate how to tear it down.
