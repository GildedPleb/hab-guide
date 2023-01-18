---
sidebar_position: 1
---

# Start Here

:::warning

As of December 31, 2022, our chosen load balancer, Metal LB, has changed their
API. As such, the guide, as written, will fail when attempting to install Metal
LB.

You can still use the guide, but you will need to make changes accordingly. You
have two ways forward:

1. Edit the Ansible scripts to alter the Metal LB deployment and get it working
   manually, either by targeting releases below `13` or by adding new resource
   definitions.
1. Replace Metal LB with something else.

Investigating this problem has revealed that the implementation of our load
balancer was not actually HA. This is not a problem as the cluster is not made
to host incoming traffic like web requests. But it does present an opportunity
to make this infrastructure HA in case HA is needed here in the future. We will
be pursuing a [solution](https://kube-vip.io/docs/usage/k3s/?query=k3s) in the
coming weeks and release a fix.

:::

## Build Your Own HAB Node

In this tutorial we will be bootstrapping, from raw hardware, a Highly Available
Bitcoin Node.

We intend to do this by providing the technical code and tutorial walk-throughs
to empower any journeyman node operator to turn any three or more computers, be
they Raspberry Pis, NUCs, or any single home computers, into one Highly
Available Bitcoin node.

:::warning

This project is very new, raw, and not battle tested yet. Under no circumstance
should this project defend Private Keys for real Bitcoin. Many of the best
practices are yet to be discovered. And there are undoubtedly many bugs.

**! PROCEED WITH CAUTION !**

:::

:::tip

As per the warning, we _highly_ recommend reading the entire guide before doing
anything.

:::

## What Is It?

A Highly Available Bitcoin node is a node that—like the Bitcoin network
itself—is extremely hard to kill. To accomplish this, we will be engineering
away as many single-points-of-failure as we can, such as:

- Hard drive failures
- RAM failures
- Motherboard/AUX electronics failures
- Software Zero-days
- Supply chain co-option
- Etc.

At the moment, this guide covers how to do this at home, from consumer parts
sourced anywhere computers are sold.

It's going to be a journey, so make sure you have eaten a steak recently.
