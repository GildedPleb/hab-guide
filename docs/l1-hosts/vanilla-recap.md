---
sidebar_position: 10
---

# Stand-up Vanilla Recap

Before proceeding with live hosts, let's review where we are and what we have
done.

## Inventory

Go ahead and open up `~/.HAB/inventory/vanilla-hosts`, if you haven't.

You should see something like this:

```ini title="~/.HAB/inventory/vanilla-hosts"
###########################################
# -*- Complete List of Vanilla Hosts -*- #
# Editing hosts below is welcome, but be sure to validate after with command: ansible-playbook standup-vanilla-hosts.yml
# HOWEVER, once you have live hosts, you can do a great deal of damage to your cluster if you edit this file.
# ONLY EDIT AND VALIDATE BEFORE STANDING UP VANILLA K3S
# DO NOT EDIT THIS COMMENT BLOCK AND THE FOLLOWING LINE "[vanillahosts]": MANGED BY ANSIBLE!
############################################
[vanillahosts]
pi1 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
pi2 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
pi3 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
pi4 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
pi5 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
nuc1 ansible_user=ubuntu ansible_ssh_pass=ubuntuRaw mac=1c:69:xx:xx:xx:xx
nuc2 ansible_user=ubuntu ansible_ssh_pass=ubuntuRaw mac=1c:69:xx:xx:xx:xx
```

If all went well, this should be a list of all the machines you expect to be in
your cluster, and will be how Ansible interacts with them as vanilla hosts.

## Review

Congratulations! Making it here is no small feat and as you will see, the steps
get more and more automated the further we get into software and away from
hardware. Towards our goal of creating a HAB Node, you should notice that we now
have:

1. Multiple hosts, which is _essential_ for removing single points of failure in
   a HAB node. You should now have checked off a few of the following:
   - [ ] Multiple physical computers
   - [ ] Multiple hard drives
   - [ ] Multiple supply-chain
   - [ ] Multiple architectures: AMD and ARM
   - [ ] Multiple OS': Ubuntu / Debian
1. We also now have DNS mapping for those hosts by name which resolve to IP
   addresses.
1. Hostnames by which we can identify hosts in Ansible.
1. Usernames and passwords for ssh.
1. All software and firmware up-to-date.
1. Quality of life improvements automated.
1. Infrastructure as Code: If something messes up, it is now trivial to get back
   to working order.

At this point, all machines should be able to have the `Hosts/standup-vanilla`
playbooks run against them and return practically idempotent (non-failing)
results.

In fact, to ensure that all hosts that have already been stood up are golden,
you can and should test it, run:

```bash
apb Hosts/standup-vanilla.yml
```

We are now hardware-ready to stand up `live host` running a Kubernetes cluster.

But before we can do that, we first need a secure way to manage authentication
and a plan for host assignment...
