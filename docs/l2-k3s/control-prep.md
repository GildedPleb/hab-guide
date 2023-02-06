---
sidebar_position: 1
---

# Control Prep

As you can imagine, k8s can get outrageously complex. To deploy any application
on Kubernetes you may need a half dozen to a few hundred resource definitions,
scripts, templates and all sorts of complication. This guide is not meant to be
a deep dive into Kubernetes—heck, we've been working with it for years and at
times only feel we have scratched the surface—so we will be consolidating our
interactions with k3s as much as possible.

As such, to really make the most out of k3s, as novices, we need to have some
tools installed first that will make our lives easier. Most importantly, we will
be using Helm—the Kubernetes package manager—to provide organization,
separations of concerns, and simplicity to Kubernetes. But, there are a handful
of other tools that are must-haves.

We will now install all these tools on our local control computer, and get them
set up appropriately.

## Install Kubectl

Kubectl is how you control and interact with a Kubernetes cluster. You may
recall from [How?](/how#the-bigger-picture) that Kubernetes adds centralized
command and control to a distributed system. Kubectl ("Kube Control") is that
centralized control. Whoever has the cert which gives them full access to the
cluster, fully owns that cluster.

Make sure you have `kubectl` installed on your local/control machine (it also
gets installed on the leader node, but it's best to have locally, so you don't
have to ssh into the cluster)
[Install](https://kubernetes.io/docs/tasks/tools/).

Once installed, it's a great idea to enable
[bash/zsh completion](https://kubernetes.io/docs/tasks/tools/included/) though
not required.

You can make sure Kubectl is working by running:

```bash
% kubectl
kubectl controls the Kubernetes cluster manager.

 Find more information at: https://kubernetes.io/docs/reference/kubectl/overview/

Basic Commands (Beginner):
  create        Create a resource from a file or from stdin
...
```

## Install Krew

Krew is a plugin manager for Kubectl (yes, both Kubernetes and Kubectl have
their ecosystem managers, did we mention that the Kubernetes landscape has ten
of billions of funding behind it?). Krew makes life with Kubectl, and thus
Kubernetes, much better.

1. Install Krew from
   [here](https://krew.sigs.k8s.io/docs/user-guide/setup/install/) and make sure
   it's working by running:

   ```bash
   % kubectl krew
   krew is the kubectl plugin manager.
   You can invoke krew through kubectl: "kubectl krew [command]..."
   ...
   ```

   Once installed, poke around, you might find a plugin you find interesting.

1. We highly recommend adding `ns` which allows you to change namespace via the
   command:

   ```bash
   kubectl ns bitcoin
   ```

   This will deeply come in handy as without it, nearly every command will need
   a namespace flag, which is cumbersome.

   To install:

   ```bash
   kubectl krew install ns
   ```

1. Lastly, make sure you are good to go by running
   ```bash
   kubectl krew update
   ```

## Install Kube-ps1 (optional)

Kube-ps1 puts your current namespace in the prompt of you terminal. When
combined with `ns` installed above, it is the best way to use k8s (that we have
seen, so far). Take it from us, being in the wrong namespace and/or context has
killed production websites in real time (and we know this, because we have
mistakenly done it).

Install from [here](https://github.com/jonmosco/kube-ps1)

You can edit it accordingly, but your command prompt should now look something
like this:

```
(⎈|default:default) %
```

The first `default` is the context. If you had multiple clusters, like a test
cluster and production cluster, that is where context comes in handy. We won't
be paying much attention to this at this time. The second `default` is the
namespace, which we will be utilizing, and which will affect where apps get
installed.

## Install Helm

Helm consolidates app deployments from a myriad of resources, definitions,
variables, and redundancies into single line install, update, and uninstall
scripts. We will be using it to install and manage as much as we can.
[Install](https://helm.sh/docs/intro/install/). Ansible will primarily use Helm
at first, but we will use it directly once we get to Bitcoin.

```bash
% helm
The Kubernetes package manager

Common actions for Helm:

- helm search:    search for charts
...
```

## What are `namespaces`?

For a full definition, check out
[this article](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/).
For our novice purposes, we can think of namespaces as folders which isolate
apps. Apps in k8s are generally not solitary programs, but a collection of
containers, storage, pods, tasks and other resources, that all work together in
replaceable ways to deliver a functional App with minimized (or completely
removed) single points of failure. It is helpful to isolate these resources into
namespaces so that the cluster does not become overly cluttered with definitions
and thus hard (or impossible) to navigate. Namespaces exist cluster wide, they
are not assigned to hosts.

All set? Let's spin up Kubernetes!
