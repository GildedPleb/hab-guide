---
sidebar_position: 4
---

# Design Considerations

## Vanilla Goals

In pursuit of a HAB node, a few high level goals first come to mind. These goals
are not necessarily specific to Bitcoin, but are goals which would apply to any
HA system.

### Known Threat Elimination

In [Why?](/why) we define the following as "known threats". In particular, the
node needs to be designed such that it has the option to **NOT** be reliant on:

1. One single computer
1. One single internet source
1. One single power source
1. One single bitcoin code repo
1. One single bitcoin release
1. One single physical location
1. One single supply chain
1. Etc

Essentially, these are obvious and non-exhaustive single points of failure that
running two or more computers in the cluster mitigates. It is a primary goal in
designing a HAB Node to remove these single points of failure.

### Role Definition

We should also spend a second discussing
[host roles](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/)
and how they will affect design. In a basic k8s cluster, there are two types of
hosts: Leader ("control plain node" in k8s speak) and Worker ("worker node").
The leader runs the cluster, the workers run all the apps the cluster runs. A
leader can also run the apps in the cluster, but a worker can not run the
cluster. In an HA cluster, which we will build, the big difference is that there
are many Leaders, not just one.

Generally speaking, if host resources are practically unlimited, say if you are
running a cluster in GKE, you'd want to separate these two groups. Because we
will not be assuming unlimited resources, and because the number of apps and
services we will be running won't be commercial scale, we will allow for role
overlap.

In terms of design goals, this presents some challenges and considerations.
Because leader nodes should be expected to be pulling double duty, we should
avoid assigning them to weaker hosts in terms of number of cores and available
RAM. However, to improve Bitcoin performance, we also might want to consider not
making highly performant hosts into leaders either, so we can reserve those
resources for Bitcoin.

Another thing to consider here is that etcd (which runs on Leader hosts) will
require _a lot_ of write and re-write to the hard drive. As such, it is less
than ideal to apply a Leader to a host with a slower, older, and/or used SSD
drive.

Additionally, its _required_ that to run in HA mode, there must be at least 3
Leaders:

- If you only have 3 hosts, then they will all be Leaders, and none of this
  matters.
- If you have more than 3 hosts, there must always be an uneven number of
  Leaders.

For the [Ionico Base Node](/poc) we decided to employ 1 NUC and 2 Raspberry Pi's
to be leaders, and the rest workers. The justification being, we wanted the
leadership group to have representation on all hardware types, and to also leave
one NUC free for high performance testing as a worker. All our hard drives were
new, so we had little worries there, and we have had no related issues with this
setup.

With single-points-of-failure and role definitions considered, let's now look at
how Bitcoin is peculiar and has at least some other, more difficult realities
associated with it which can affect designing for availability.

## Bitcoin Specific Goals

As also defined in [Why?](/why), we can think of these as ways to mitigate
"unknown threats". Here are two Bitcoin specific design considerations that
should come fairly easily:

1. A HAB node should not centralize resources
1. If a HAB node does not have the Hydra Option, it still has options
1. A HAB node should not be a pre-packaged end-consumer product

These considerations are important for both security and functionality.

### Decentralizing Resources: Hydra Option

In bitcoin parlance centralization is evil, decentralization is good. Though we
could build HAB nodes as $10,000 supercomputers which can only work if all the
parts operate together as one, it is far better to utilize those resources in
ways that are friendly with decentralizing, or splitting up the node. To address
this, the node must be composable (or decomposable). As in, it should be trivial
for the node operator to slice off a piece of the node where that slice can
operate on its own, as its own full node. This serves a few purposes listed in
[Why?](/why#obscure-threat-mitigation--hydra-option).

### No Hydra Option? No problem.

The Hydra Option should always be a priority, however, it may simply not be
practical: if you do not have or can not get multiple 2 TB drives, whatever you
_can_ get will have to suffice, and you can prune the nodes that will be
utilizing lower storage hosts. If this is the case for you, keep notes of which
nodes will need to be which, we will revisit this when we look at Hardware, and
when we get to Layer 3 - Bitcoin. That said, it should still be a priority of
every HAB Node to keep as many full copies of the blockchain as possible.

### No pre-packaged HAB Node: Aesthetic Option

Though many excellent companies offer individual Bitcoin nodes as pre-packaged
products which can and should be employed in HAB Clusters (consult individual
companies whether their hardware can be re-imaged to use modern Linux distros),
HAB Clusters themselves should seek to diversify hardware, vendors, and supply
chain as much as possible and avoid cluster-level "ready-made" solutions.

Far from a production-line computer, a HAB node should be the highest caliber
node that the node operator can muster, and he should take absolute ownership,
pride, and mastery in his node at the exclusion of what others believe his node
should be.

In our present moment, it seems as though the best way for HAB Nodes to thrive
is under a culture of
[extreme ownership](https://www.youtube.com/watch?v=ljqra3BcqWM) which might
manifest itself as such:

1. The HAB node operator should know how it works, how to build it from scratch,
   how to take it apart, and how to fix it. And they should be passionate about
   it with finality. "This is my node..."
1. A HAB node should be well-designed. It should fit operator needs and
   resources, it should be carefully scrutinized, secured, organized, and, in
   the end, closer to being a piece of art than a heap of cables and hodgepodge
   acrylic boxes with loud fans. The aesthetics of the node matter. Which is why
   we call this the Aesthetic Option for the purposes of this guide.
1. As much as this guide may help a node operator set up a HAB node, we would be
   remiss if all HAB nodes looked exactly like the PoC (indeed they _shouldn't_,
   considering the [lessons learned](/poc#host-diversification)). The intention
   of this guide is to solve a lot of problems standing in the way of getting
   HAB nodes operational, so that others can focus on solving specific problems
   that their own needs encounter.

## Your Node

The following are questions you should ask yourself, and answer, about your HAB
Node before getting started. Literally write down answers to all of these
questions:

1. What can I afford?
1. How loud can it be?
1. What will I use for cooling?
1. How will I organize cabling?
1. How will I arrange the hosts?
1. What do I want my node to look like?
1. How will I organize and provide power?
1. Where will I keep all my host computers?
1. What performance goals do I want to hit?
1. What unused hardware can I incorporate?
1. What colors do I want to my node to have?
1. What lights should or should not be visible?
1. What Single Points of Failure can I tolerate?
1. How can I turn this node into a piece of art?
1. How many computers do I want in the node?
1. How many bitcoin instances do I want to run?
1. How many copies of the blockchain can I afford?
1. How much time do I have to work on this project?
1. What small tweaks can I make which could add up?
1. What unused hardware should I avoid incorporating?
1. What Single Points of Failure do I want/need to eliminate?
1. How will I label, name, or identify the hosts and the node itself?
1. Of the above questions, which ones are most and least important to me?
1. Given all my constraints, what ways can I find pride in my node, and how can
   I lean into them?

For example answers to some of these questions, and ideas about how to pursue
them, see the [PoC](/poc).
