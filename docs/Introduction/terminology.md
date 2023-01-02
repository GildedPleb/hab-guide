---
sidebar_position: 6
---

# Terminology

We need to define some terms that will have specific meaning for this guide.

## Layers

This guide is divided into three layers, which are distinct from the broader
layers of Bitcoin and web1/2/3/etc:

Layer 1: **Hosts** These are the physical machines, OSs, users, and other basic
low-level, groundwork, or foundational architecture.

Layer 2: **K3s** Can be thought of as the HAB node operating system. It is the
interim layer between Bitcoin and the physical machines.

Layer 3: **Bitcoin** This is the final layer of the node. It is the software
running on the Operating System, running on the Hardware.

At the moment, this guide does not incorporate Lightning or other Bitcoin
reliant L2 systems, so this is where the guide stops (hopefully to be expanded
in the future!). The entire project is organized around these three layers, and
they correspond to the file structure of the repo where you will be executing
code, and the guide itself.

## Actions

For the purposes of this guide, a `standup` takes a machine in a lower state and
elevates it to the desired state. A `teardown` take a machine from its current
state and demotes it to a lower state. Grammatically there may be a bit of
confusion here, as subject in one is a future state and in the other it is the
current state. However, this methodology is useful because it is linear: we can
not teardown a host which has not been first stood up.

- `teardown live host` means taking a live host and moving it to a vanilla
  state.
- `standup live host` means taking a vanilla host and elevating it to a live
  host.

## Descriptors

**Raw** : a raw describer indicates either fresh out of the box, or newly
repurposed, and _not_ ready to use. If its a host, it hasn't even been turned on
or correctly imaged, or if it has, it is certainly not in any assured state of
being ready to receive kubernetes.

Raw is almost exclusively used for devices: be it computers, hard drives, or
other hardware. We neither `standup` a raw device nor `teardown` a raw device. A
raw device is at the entry point to the ecosystem. Instead, we may add a new raw
device to inventory, prep a raw device, and then `standup` a vanilla device.

**Vanilla** : a vanilla describer indicates uniform, minimal, basic
characteristics that allow for something to be eligible as generically useful.

When we `standup` a vanilla device we take it from a known or unknown raw state,
to a known, uniform, usable preliminary state. We generally have no need for
`teardown` of a vanilla host and returning it to the raw state, because that
would mean returning something to an unknown state. However, we do have need to
`teardown` higher vanilla layers, like a vanilla app in the cluster to shut the
cluster down.

We should also note that hosts in the vanilla state are to be assumed insecure:
they are vanilla, they have nothing to defend.

**Live** : a live describer indicates active participation at the top of class.

When we `standup` a live host we are putting it in the cluster, where the host
can now support layers that reside above it. When we `teardown` a live host we
are returning it to the vanilla state. This may be useful when redesigning the
cluster topology. Say, if we need to distribute or service a device.

A host in the live state should have security assurances locked down.

## A 'node' vs a 'node'

Kubernetes internally labels each host a 'node', and by putting a bitcoin node
on a k8s node, there is a conflict between what a node is: is it a software
bitcoin node or a k8s hardware node? In this guide, we will use Node (node) to
mean Bitcoin software as much as possible or the entire cluster acting as such,
and Host (host) to mean Kubernetes/physical computer as much as possible. This
is convenient because Ansible uses hosts to mean, essentially, the same thing as
k8s nodes. Though of course, as you will see, this will get violated (mostly
unintentionally), so do pay attention to the context with which the term is
being mentioned.
