---
sidebar_position: 5
---

# Tear-down Live

Unlike previous teardown scripts, tearing down a live Kubernetes cluster and
returning it to a vanilla state can not happen host-by-host. You can still add
and remove hosts from the cluster (though we'd be cautious about removing hosts
with Longhorn actively managing storage), but once you get into the live cluster
layer you begin to abstract away the differentiation between hosts, and start to
reason with the cluster as one single entity.

As such, tearing down a live cluster is better thought of as simply uninstalling
the software we just installed.

In standing up a live k3s cluster we used an Ansible script to install 5
essential apps. We did this because the installation order was important, and
the apps were fairly cut and dry. Because the installation order matters, so
does the order by which we _uninstall_ these apps. As you browse
`K3s/teardown-live.yml` keep this in mind.

Further, if you have additional apps, like Bitcoin running, on top of your live
cluster you **should not** tear down the live cluster. First, you _must_
uninstall those apps. Think about it like this: running teardown live without
first backing up, and uninstalling, all your apps and data would be akin to
installing a new operating system on your laptop without first backing up all
your apps and data, and expecting those apps to still work and the data to still
be there.

:::warning

Do not run `K3s/teardown-Live.yml` while any layer 3 apps are running.

:::

To teardown a live cluster (with no additionally installed apps running) run:

```bash
apb K3s/teardown-live.yml
```
