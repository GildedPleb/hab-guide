---
sidebar_position: 1
---

# Stand-up Live

Standing up a live Bitcoin node will require downloading the `gildedpleb` high
availability bitcoin helm chart, editing the values, and then installing the
chart.

Before we do that, you should carefully read the
[documentation](https://github.com/GildedPleb/helm-charts/blob/master/charts/hab/configuration.md)
on the HAB node chart, and browse
[examples](https://github.com/GildedPleb/helm-charts/blob/master/charts/hab/examples.md)
of how to use it.

Importantly, you will need to create a `values.hab.yml` file which corresponds
to your `host-plan` and design objectives. This is where the rubber hits the
road. And there will be a great deal of customization and unique circumstances
dictating exactly how your `values.hab.yml` look. The original `values.hab.yml`
for the Ionico Base Node is
[here](https://github.com/GildedPleb/helm-charts/blob/master/charts/hab/examples.md#poc-hab-node).

Once you have reviewed the documentation, and have an idea about how your node
deployment should look:

1. First let's get the chart into Helm. On the control computer run:

   ```bash
   helm repo add gildedpleb https://gildedpleb.github.io/helm-charts/
   helm repo update
   ```

   You can make sure it's added by running

   ```bash
   helm repo list
   ```

1. Then lets copy over the default values to a new values file.

   ```bash
   helm show values gildedpleb/hab > ~/.HAB/values.hab.yml
   ```

1. We will then edit `values.hab.yml` according to configuration options,
   examples, resources, and needs of your setup. This is the most difficult
   step, again be mindful of `.yml` syntax.
   [Here](https://www.linode.com/docs/guides/yaml-reference/) is a good primer.

1. Lastly, we will install the chart. First, create a new namespace for bitcoin,
   and get into that namespace:

   ```bash
   kubectl create namespace bitcoin
   kubectl ns bitcoin
   ```

   Before installing, run a template and review it to make sure it looks good
   and passes validation:

   ```bash
   helm template gildedpleb/hab -f ~/.HAB/values.hab.yml > ./ChartBeingDeployed.yml
   ```

   Then, if it looks good, install the bitcoin chart using the values you
   created.

   ```bash
   helm install hab gildedpled/hab -f ~/.HAB/values.hab.yml
   ```

Did it install without error? Congrats! You now have a Highly Available Bitcoin
Node.

To make changes, edit `~/.HAB/values.hab.yml` and run the installation command
again.

Here are some useful commands to see it in action:

```bash
# View the pods, you should have 1 pod for each defined bitcoin instance, something like this:
% kubectl get pods
NAME                READY   STATUS     RESTARTS   AGE
hab-bitcoind-ha-0   0/1     Init:0/1   0          16s
hab-bitcoind-ha-1   0/1     Init:0/1   0          25s
hab-bitcoind-ha-2   1/1     Running    0          35s

# Take the name of one pod and look up the logs for it here:
% kubectl logs hab-bitcoind-ha-2 --tail=5
Defaulted container "hab" out of: hab, init-hab (init)
2022-12-29T23:46:38Z New outbound peer connected: version: 70016, blocks=769471, peer=401 (block-relay-only)
2022-12-29T23:50:14Z New outbound peer connected: version: 70015, blocks=769471, peer=402 (block-relay-only)
2022-12-29T23:50:41Z UpdateTip: new best=000000000000000000026df884685dd8e297d9d5e686c35dcd5abe9dbf42e916 height=769472 version=0x20000000 log2_work=93.919827 tx=791945937 date='2022-12-29T23:50:26Z' progress=1.000000 cache=77.1MiB(566609txo)
2022-12-30T00:02:06Z UpdateTip: new best=00000000000000000002aa7c40297d9c401b1f04aa35fedb2b3513f001357704 height=769473 version=0x20000004 log2_work=93.919839 tx=791948046 date='2022-12-30T00:01:50Z' progress=1.000000 cache=77.5MiB(569831txo)
2022-12-30T00:06:03Z UpdateTip: new best=00000000000000000001371706efcda9dbf0489877d974a661804506577998bf height=769474 version=0x253ca000 log2_work=93.919850 tx=791949222 date='2022-12-30T00:06:00Z' progress=1.000000 cache=77.6MiB(570778txo)

# To run commands against a bitcoin instance:
% kubectl exec hab-bitcoind-ha-2 -- bitcoind --help
Defaulted container "hab" out of: hab, init-hab (init)
Bitcoin Core version v22.0.0
Copyright (C) 2009-2021 The Bitcoin Core developers

Please contribute if you find Bitcoin Core useful. Visit
...
```

Don't forget you can also navigate to `lh.gilded.lan` (or whatever you changed
it to) to see the provisioning and storage allocations.
