---
sidebar_position: 5
---

# Ansible

The word "ansible" [comes from](https://en.wikipedia.org/wiki/Ansible) 1960s
sci-fi for a device which can communicate faster than the speed of light over
unlimited distances. Though Ansible, the software, certainly does not move at
faster than light speed, if you have ever provisioned multiple computers at the
same time, Ansible fully lives up to the namesake.

Ansible is a suite of open source software tools for configuring remote systems
via the
[Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code)
paradigm. Or, rather, this is a fancy way of saying "it's a program that runs
scripts on other machines and offers certain guarantees when doing so". One of
the big guarantees is idempotence, which you just saw in
[Control Prep](/docs/l1-hosts/control-prep#indempotent-ness). The basic upside
of Ansible is that you can use code to define the state of a machine, and that
code can be applied to many machines. As such, you only need to execute a
command one time, and it can completely change the state of multiple machines.

Generally speaking, Ansible works by ssh-ing into a remote host, and begins
executing commands, such as, `copy a file to the host`, `create a new user`,
`close this port`, etc.

:::warning Warning: READ THE CODE BEFORE EXECUTION

Ansible is capable of executing **ANY** arbitrary code on **ANY** host in your
network that it can log into. As such, one should _always_ read the code to be
executed before running an Ansible command. Luckily for us, it is also a part of
Ansible framework to explicitly describe, in English, every command to be
executed, and print out that description when it is executing.

:::

## Ansible Config

Because of the above warning, before we run any command, we should be familiar
with the config file we will be using for Ansible. It is in the root directory
of the `gildedpleb/hab-plays` repo. Navigate to where you cloned that repo now.
You will need to be in the root of that directly for ALL Ansible commands in
this guide. If you simply cloned it earlier and have not moved directories in
your terminal, you should be able to get there with:

```bash
cd hab-plays
```

Let's take a look at the config, it should match this:

```ini title="hab-plays/ansible.cfg"
[defaults]
inventory = ~/.HAB/inventory/hosts                    ; Location of the hosts file we will use
host_key_checking = False                             ; This affects ~.ssh/known_hosts and helps aleviate erronious warnings when on a LAN network with DNS resolved hosts
vault_password_file = ~/.HAB/.ansible_vault_access    ; Location of the password file we created already
forks = 7                                             ; The number of concurent threads that can run at the same time

gathering = smart                                     ; Reduces the amount of fact gathering durring plays that contact the same host more than once
fact_caching = jsonfile                               ; The file type of the fact gathering cache
fact_caching_connection = ~/.HAB/.facts_cache         ; The location of that cache

# two hours timeout
fact_caching_timeout = 7200                           ; The expiration of that fact gathering cache
```

### Visually Assert Config Is Correct

To make sure everything is
[in working order](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#avoiding-security-risks-with-ansible-cfg-in-the-current-directory),
let's ask Ansible to dump whatever it thinks the current config is, and it
should match the above:

```bash
ansible-config dump --only-changed
```

You should see the following, and it should match the above, no less and no
more:

```
CACHE_PLUGIN(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = jsonfile
CACHE_PLUGIN_CONNECTION(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = ~/.HAB/.facts_cache
CACHE_PLUGIN_TIMEOUT(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = 7200
DEFAULT_FORKS(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = 7
DEFAULT_GATHERING(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = smart
DEFAULT_HOST_LIST(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = ['/Users/<YOU>/.HAB/inventory/hosts']
DEFAULT_VAULT_PASSWORD_FILE(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = /Users/<YOU>/.HAB/.ansible_vault_access
HOST_KEY_CHECKING(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = False
```

### Alter Config

You should alter the config to meet your needs best. In particular, you should
change `forks` to match the number of hosts you have. The PoC has 7 hosts, thus
7 forks, so we can run the same plays at the same time on each host without
waiting for a previous host to finish first.

:::caution the cache

Be advised, the cache is a dump of system details about your hosts. After you
run commands, you can view it in plain text at the address above.

1. You may want to disable the cash by commenting it out, so that it does not
   save all this info to disk. This will cost you playback speed.
1. You may want to delete the cache from time to time, you can find it at the
   location listed above. Or run the delete command
   ```bash
   rm -rf ~/.HAB/.facts_cache
   ```

:::

## First Command

We will now execute our first Ansible command to check the validity of a
potential host name.

Before we run the command, we are going to walk through everything it does, and
thus, how to walk through all Ansible commands. Don't run it just yet, but the
command we are going to run is this:

```bash
apb Hosts/validate-hostname.yml --extra-vars "hostName=test1"
```

- `apb` is the alias for `ansible-playbook` which we set earlier.
  `ansible-playbook` is the executable for running multiple commands and threads
  called "playbooks".
- `Hosts/validate-hostname.yml` is the actual code that comprises the command.
  It is this:

  ```yml title="hab-plays/Hosts/validate-hostname.yml"
  - hosts: localhost
    tasks:
      - include_tasks: tasks/validate-host-name.yml
  ```

  In the above code, we see two things:

  - **hosts**: where the command should run. In this case, on the machines we
    are running the command from, the localhost.
  - **tasks**: the tasks which are to run on that host. In this case, it is the
    tasks located at `tasks/validate-host-name.yml`

  Heading over to `tasks/validate-host-name.yml` we see this code:

  ```yml title="hab-plays/Hosts/tasks/validate-host-name.yml"
  - name:
      Make sure all characters in hostnames are lowercase alphanumeric '-' or
      '.'
    assert:
      that: hostName is match('^[a-z0-9][a-z0-9.-]{0,}[a-z0-9]$')
      quiet: yes
      fail_msg:
        "The node name '{{ hostName }}' either: 1. Starts or ends with something
        other than alphanumeric, 2. Is not all lowercase, or 3. Includes an
        invalid character"
  - name: Make sure hostnames are less than 253 characters
    assert:
      that: hostName | length < 253
      quiet: yes
      fail_msg: "The node name '{{ hostName }}' is longer than 253 characters"
  ```

  Spend a second trying to understand this code. It is fairly generic Ansible
  boilerplate for checking if a passed extra variable `hostName` is up to snuff.
  If the tests fail, the fail message is printed.

- Lastly, in our original command, the `--extra-vars "hostName=test1"` flag
  tells Ansible to set the variable `hostName` to the text "test1" and make it
  available to our script.

## Run It

Replace "test1" with any potential name choice and give it a run. A successful
run should not be dissimilar to this:

:::info

Moving forward, we will be truncating `--extra-vars` to `-e`, which is the short
version of that flag.

:::

```bash
% apb Hosts/validate-hostname.yml --extra-vars "hostName=test1"
PLAY [localhost] ***********************************************************************************************

TASK [Gathering Facts] *****************************************************************************************
ok: [localhost]

TASK [include_tasks] *******************************************************************************************
included: /Users/<YOU>/<PATH_TO>/hab-plays/Hosts/tasks/validate-host-name.yml for localhost

TASK [Make sure all characters in hostnames are lowercase alphanumeric '-' or '.'] *****************************
ok: [localhost]

TASK [Make sure hostnames are less than 253 characters] ********************************************************
ok: [localhost]

PLAY RECAP *****************************************************************************************************
localhost                  : ok=4    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

And a failure run might look like this:

```bash
% apb Hosts/validate-hostname.yml --extra-vars "hostName=???"
PLAY [localhost] ***********************************************************************************************

TASK [include_tasks] *******************************************************************************************
included: /Users/<YOU>/<PATH_TO>/hab-plays/Hosts/tasks/validate-host-name.yml for localhost

TASK [Make sure all characters in hostnames are lowercase alphanumeric '-' or '.'] *****************************
fatal: [localhost]: FAILED! => {"assertion": "hostName is match('^[a-z0-9][a-z0-9.-]{0,}[a-z0-9]$')", "changed": false, "evaluated_to": false, "msg": "The node name '???' either: 1. Starts or ends with something other than alphanumeric, 2. Is not all lowercase, or 3. Includes an invalid character"}

PLAY RECAP *****************************************************************************************************
localhost                  : ok=1    changed=0    unreachable=0    failed=1    skipped=0    rescued=0    ignored=0
```

:::tip Yes, this is Overkill

In case you were wondering, yes, it is complete overkill to use Ansible to check
a words' validity when any human can read for these very easy checks, or a
simple command can do it. In our case, we need this check in Ansible for another
script, to fool-proof the system, so we might as well make use of it twice.

:::

## What is Ansible Doing Here?

Right off the bat, you should notice that Ansible is following the directions
exactly as specified in the `.yml` file and reporting everything it's doing.
First, Ansible gets the list of hosts and gathers information about them. Then,
it gets the tasks and begins execution. You will notice it did not do any fact
gathering in the fail case above, that is thanks to the cache. Only once we get
into more complex Ansible commands, will you really see where Ansible shines.

:::note Atypical Ansible Structuring

If you are familiar with Ansible, you will immediately notice that we are not
using `roles`, `ansible-galaxy` and a host of other best practices and community
resources that Ansible scripts are typically designed around.

This is intentional.

For instance, the `role` pattern, though undoubtedly useful in commercial host
provisioning with large experienced teams and thousands of computers, is opaque
to navigate and disorienting to read. Having to open up multiple files and
directories to find `variables` and figure out how they connect with other
`tasks` in yet other files and folders is indirection and does not make for
readable or digestible code, which is a first priority for this guide. We are
using Ansible as a beginner would use it and reason with it because the
expectation is that the audience is indeed beginners.

:::

Now that we have some validated names, and a brief intro on Ansible, let's start
networking our hosts together.
