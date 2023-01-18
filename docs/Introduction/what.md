---
sidebar_position: 3
---

# What Will We Do

Hopefully the previous page didn't scare you off. It's not going be too bad as
you will see.

We have already outlined, in very broad strokes, what a HAB Node does in
[How?](/how#bitcoin-on-a-highly-available-node) So, let's now look a little
closer at **what** is needed to get that _how_ working. Looking at the
menu/outline at the left will get you a decent outline, but considering it seems
like a lot, let's bring some cohesion to it.

To create a Highly Available Bitcoin Node, we will:

1. Design a cluster on paper tailored to your specific situation (up next)
1. Review guide terminology and methodology for achieving that design
1. Prep our Control Computer with needed software
1. Name, organize, network and prep host computers, so they are ready to enter
   into a cluster (Layer 1 - Hosts)
1. Cluster these host computers together with Kubernetes (Layer 2 - K3s:
   Vanilla)
1. Provision our cluster with apps and services that make it welcoming for
   Bitcoin (Layer 2 - K3s: Live)
1. Add Bitcoin to the cluster (Layer 3 - Bitcoin)

Undoubtedly, this can seem intimidating. But don't grow faint-hearted, the vast
majority of this guide is _reading and comprehension_ not _doing_.

## The Content vs The Commands

To that end, here is a (nearly) full list of the commands that will be required
to spin up a HAB Node from this guide, assuming your hosts are imaged and
networked, and your Control Computer has all the software installed correctly:

:::caution

It should go without saying but, DO NOT run this code block. We will run these
commands one by one in the guide.

:::

```bash
git clone https://github.com/gildedpleb/hab-plays.git
echo $0
echo 'alias apb="ansible-playbook"' >> ~/.zshrc && source ~/.zshrc
mkdir ~/.HAB
echo '#!/bin/sh\n\necho '"\"$(/usr/bin/openssl rand -base64 63 | tr -d '\n')\"" > ~/.HAB/.ansible_vault_access
chmod +x ~/.HAB/.ansible_vault_access
cd hab-plays
ansible-config dump --only-changed
apb Hosts/validate-hostname.yml --extra-vars "hostName=test1"
apb Hosts/prep-raw-pis-for-boot-from-usb.yml -e "subnet=10.1.0.20-29"
apb Hosts/standup-vanilla.yml -e "rawhosts=pi1,pi2,pi3,pi4,pi5"
apb Hosts/standup-vanilla.yml -e "rawhosts=nuc1,nuc2 nameservers=10.1.0.1,1.1.1.1 timezone=EST"
touch ~/.HAB/vault-hosts
ansible-vault encrypt ~/.HAB/vault-hosts
cat ~/.HAB/vault-hosts
awk 'NR>=6' ~/.HAB/inventory/host-plan.tpl > ~/.HAB/inventory/host-plan-$(date "+%Y-%m-%d")
apb Hosts/standup-live.yml -e "plan=host-plan-2022-03-17"
apb K3s/standup-vanilla.yml
kubectl get nodes -o wide
apb K3s/standup-live.yml
helm repo add gildedpleb https://gildedpleb.github.io/helm-charts/
helm show values gildedpleb/hab > values.hab.yml
helm install hab gildedpled/hab -f values.hab.yaml
```

Yup. That's it. That's the entire guide. Just short of 25 commands, many of
which can be combined, and some of which are not needed but offer some fun or
verification. Less than 25 commands will get you a production grade industrially
defended node, and nearly unlimited optionality, a setup not dissimilar to how
_trillions_ of value in the legacy web is presently managed and defended—all
from home. Of course, you will have to edit some text files, change some
settings, the exact commands you run will be slightly different, and you'll have
to work with additional UIs, but the above commands constitute _all_ the heavy
lifting.

**#WorthIt**

We are striving to make it so a full 95% of what this guide entails is _reading_
to understand what the few lines of codes you are to execute are _doing_. This
is for at least two reasons:

1. We hope that this seems intuitively important; this will hopefully make any
   future HAB Node work that seeks to wrap these commands (or commands like
   them) into a friendly GUI as easy as possible, so that future HAB Node setups
   may not have to run commands _at all_ but instead can simply open up a
   management GUI and drag and drop.
1. We hope that this teaches other developers unfamiliar with the stack the
   entry level architecture needed to get up to speed on the technology quickly
   so that they can start thinking about this stuff practically in how they
   develop other bitcoin ecosystem apps.

This is also a note on just how fresh this technology truly is. We hope that
from here, this guide would become two separate setup paths: a guide like
RaspiBolt and a straightforward GUI solution.

:::note Is "One Click" Possible?

Unfortunately, we don't think it's feasible to get a HAB Node set up with "1
click" until we can codify best practices around choosing roles for hosts. The
difficulty lies in an answer to this question: Under what metrics should the
quorum of leaders be distinguished from the workers? Presently, it depends on
number of hosts, host type, location, compute, hardware, storage, stability,
connectivity, etc., and for all of those loose metrics, we must determine how
they are quantified. Until best practices are known, the answers here will be
opinionated and dependent on operator capabilities, resources, and budget.

Point is, it seems like there will be, for a while to come, a needed step where
the operator decides who is who among his hosts and how each should be
provisioned. As such, a HAB Node can not be created in "1 click". But let's not
overstate that: with netbooting and a GUI, we can get _incredibly_ close. It's
not inconceivable to get there with "n clicks" where n does not exceed the
number of _hosts_.

A first order solution to achieve that may be to investigate the feasibility of
making _all_ hosts control plane hosts, so long as there are an odd number of
these hosts, and they meet control plane best practices, then make the remainder
(if any) workers.

:::

Now that we have some more details about what we are about to do, let's address
a few design and practical considerations which will affect how we build our
node, the hardware that we choose to employ, and how we will think about roles.
