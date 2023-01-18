---
sidebar_position: 7
---

# Plan of Attack

As we `standup` the Vanilla state of one layer, we will be defining the raw
state of the next layer, simultaneously. When we `standup` a Live state, we are
all but making the vanilla state of the next layer of our stack a reality. For
instance, if we build limitations on host communication inside the vanilla k3s
cluster (not that you would), that might impact bitcoin node ability to
communicate with each other, aka the raw bitcoin framework is impacted.

The following pipeline should illustrate not only this fact, but will also serve
as a roadmap as to how the guide will navigate and build on these layers.

Where: `R = Raw` `V = Vanilla` `L = Live` and: `═══►` is the deployment path,
`──►` is the knock-on's of that path:

```
L3 Bitcoin:                         R ──► V ══► Live HAB Node
                                    ▲     ▲
                                    │     ║
L2 Kubernetes:                R ──► V ══► L
                              ▲     ▲
                              │     ║
L1 Hosts:       Raw Hosts ══► V ══► L
```

We will also be architecting the path to be bidirectional. So, though we will
move forward through the deployment path via `standup`, we will also, at all
moments be able to move backwards in the path via `teardown`. As fruitless as
this may seem at first glance, this feature is absolutely necessary, not only
for sussing out issues and testing, but its also `required` if we want to
preserve our Hydra Option.

A general rule of thumb is this: to `standup` a _Live Host_ is practically
synonymous with `standup` _Vanilla K8s_—we could, if we wanted, run all
`standup-lower-level-live` commands and `standup-next-level-vanilla` as one
command. But `teardown` a live host is completely different from `teardown`
vanilla k3s. One means killing a higher layer entirely via the lower layer, and
the other means killing the current layer without any affect to lower or higher
layers. Further, as mentioned, there is very little need or risk in `teardown`
for items in the vanilla state, whereas `teardown` of a live host holds all the
risk and meaning.

This concludes the introduction. Up next, we will outline specific requirements,
get your control computer set up, and begin building.
