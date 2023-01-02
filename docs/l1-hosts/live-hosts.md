---
sidebar_position: 12
---

# Stand-up Live Hosts

## Create a Host Plan

Before we can stand up live hosts, we need to organize our machines to declare
who is who in the cluster.

### Create A Plan From The Plan Template

If you have never created a plan before, run:

```bash
awk 'NR>=6' ~/.HAB/inventory/host-plan.tpl > ~/.HAB/inventory/host-plan-$(date "+%Y-%m-%d")
```

Let's look at what this does:

- `awk` is a text manipulation tool.
- `'NR>=6'` means to take all the lines in a file that are after the 5th line.
- `>` means take those lines from the file `host-plan.tpl` and write them to the
  file `host-plan-$(date "+%Y-%m-%d")`.
- `$(date "+%Y-%m-%d")` formats the date year-month-day and appends it to the
  file name.

:::info

If you run this command twice in one day it will reset and overwrite any work
you have done in the output file—it's not idempotent—you might consider altering
the output file name.

:::

You only need to run that command when your vanilla inventory has changed, you
can edit or rename any previously existing host-plans at any time—just refrain
from changing the inline definitions at this stage. As in, move the host lines
around, but don't change the content of those lines.

### Edit the New Plan

We are now going to decide the rolls that each host has.

In `~/.HAB/inventory/host-plan-{inserted-date}` (or whatever file name you
chose), manually move all your hosts by name. Ansible will use this definition
to create a host list, validate it, and build our cluster according to plan.

**Some guidelines:**

- Move each hosts to under either `leader`, `lieutenants`, or `workers` and
  remove the `#` before the line
- There can only be one leader. But the title 'leader' is merely semantic for
  this guide as that will be the host that will start the HA process first. All
  master hosts will be server hosts in an HA quorum.
- Total master hosts (`leader` + `lieutenants`) here must be odd and must be 3
  or more.
- Worker hosts are all other hosts and can be 0 total hosts.
- You do not have to activate all hosts: Only removing the `#` and placing the
  host will activate a host.

Don't worry, Ansible will also validate the plan to make sure you didn't miss
anything.

Example of a valid plan:

```ini title="~/.HAB/inventory/host-plan-2022-03-17"
# Assign your vanilla hosts to the roles that you would like them to have by  #
# ... giant block of commented text removed for sanity ...
#                   -*- End Of Unassigned Inventory -*-                       #

[leader]
nuc1 ansible_user=ubuntu ansible_ssh_pass=ubuntuRaw mac=1c:69:xx:xx:xx:xx

[lieutenants]
pi1 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
pi2 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx

[workers]
nuc2 ansible_user=ubuntu ansible_ssh_pass=ubuntuRaw mac=1c:69:xx:xx:xx:xx
pi3 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
pi4 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
pi5 ansible_user=pi ansible_ssh_pass=raspberryRaw mac=dc:a6:xx:xx:xx:xx
```

At this point, all the heavy lifting with regard to hardware is done. Running
the next `standup` Ansible command, will stand up live hosts, which is to say,
it will be ready to stand up a vanilla k3s instance.

## Stand Up Live Hosts

Finally, review and then run this script, replace `host-plan-2022-03-17` with
your host plan name:

```bash
apb Hosts/standup-live.yml -e "plan=host-plan-2022-03-17"
```

### What Does This Script Do?

Let's look at what this has given us:

1. We now have new users which are mapped to the role the host has: e.g.
   "worker" on "pi3". Ansible will be using these users from here on out to
   perform k3s functions.
1. We can now ssh into each host using the right role that host has with our SSH
   keys, e.g. `ssh worker@pi3`, try it, you should get right in:
   ```bash
   ssh leader@nuc1
   ```
1. In case of SSH keys being destroyed (it has happened to us) we also have a
   backup way of getting SSH access to the hosts via password entry. Those
   passwords are encrypted in our ansible-vault which you can view with

   ```bash
   ansible-vault view ~/.HAB/vault-hosts
   ```

   Just keep in mind this will print your passwords to the terminal, which is
   ill-advised, you might want to use this instead, and just don't edit
   anything.

   ```bash
   ansible-vault edit ~/.HAB/vault-hosts
   ```

1. We have locked out all other accounts, including the raw account user so no
   one but the named role account now has access to the host, and they need the
   ssh keys or the encrypted password.

:::note

We could also lock down all unneeded connections via `ufw` but because we are
assuming we are behind a heavy gateway firewall, we don't really need it, as at
that point it would mean local machines are p0wned which may indicate a far
bigger problem, like an attacker having physical access.

:::

## Hosts Are Golden

We how have live hosts 🙌

Before we can move on to getting k3s set up, we need to review how to take down
a host. Let's do that now.
