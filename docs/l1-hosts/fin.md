---
sidebar_position: 13
---

# Tear-down Live Hosts

We now come to the first applicable teardown script. This script undoes all the
work that the `standup-live` script does and returns hosts to a vanilla state.
This is important to have if we plan on changing the host plan.

```bash
apb Hosts/teardown-live.yml
```

And it has the option for tearing down individual live hosts, without tearing
them all down:

```bash
apb Hosts/teardown-live.yml -e "killhosts=pi4,pi5"
```

You probably only need to do this if you need low-security host access restored,
and don't want to re-image, the host is in need of deep maintenance, or if you
want to re-organize your cluster roles. Be it unlikely, it is also essential for
a clean host exit in the case of exercising a
[Hydra Option](/why#obscure-threat-mitigation--hydra-option)

## Hosts Are Finished

Taking a step back, we now hopefully have a multi-architecture,
multi-manufacturer, multi-supply-chain, multi-OS host array. It's not wholly
unlikely that one component is compromised or on the verge of breaking, it's
very unlikely that they all are.

You made it. That's it for hosts, from here on out, it's all higher level
software, staring with the big man on campus, Kubernetes. Get excited!
