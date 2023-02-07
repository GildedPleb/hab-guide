---
sidebar_position: 3
---

# Control Prep

We now have the previously outlined software installed on the control computer
and will begin using it to build out the interface needed to manage a HAB Node.

## Control Computer System Prep

Most of the commands in this guide will start with `ansible-playbook` so for the
sake of sanity, we will add an `alias`, so we don't have to type that all out
but instead just type `apb`.

The following commands write an alias to the end of your rc file. Every time we
open a new terminal, we want to be able to not type `ansible-playbook` but
instead type `apb`.

If on `zsh`, run:

```bash
echo 'alias apb="ansible-playbook"' >> ~/.zshrc && source ~/.zshrc
```

or if `bash`, run:

```bash
echo 'alias apb="ansible-playbook"' >> ~/.bashrc && source ~/.bashrc
```

We will also be using Ansible-Vault to store secrets for our cluster. For this,
we will need a vault password which we will store in an executable clear text
file. This isn't secure. But, it gives us good options for later. Like changing
the executable script from echoing the password to a script which calls the
password from Bitwarden, asks for user input, or we can simply remove the
password and lock down all actions.

To add this Ansible Vault password, run this command:

```bash
mkdir ~/.HAB && echo '#!/bin/sh\n\necho '"\"$(/usr/bin/openssl rand -base64 63 | tr -d '\n')\"" > ~/.HAB/.ansible_vault_access && chmod +x ~/.HAB/.ansible_vault_access
```

What is this doing?

```bash
mkdir ~/.HAB        # make a new directory in the root user file called .HAB
&&                  # then perform a entirely separate second command
echo '
        #!/bin/sh\n
        \n
        echo
    ' # write these exact three above lines to stdout, then write the below computed output to standard out:
    "
        \"
            $(
                /usr/bin/openssl rand -base64 63 | tr -d '\n'  # get a new random string of 63 length, remove the new lines in it and write that to stdout
            )
        \"
    "
> ~/.HAB/.ansible_vault_access            # take all the stdout output from above and write it to a file in your home directory
&&                                  # then perform a entirely separate third command
chmod +x ~/.HAB/.ansible_vault_access     # make that file an executable file
```

## Indempotent-ness

Because this newly created file is an executable, to view the password you have
just created you can run `~/.HAB/.ansible_vault_access`, and it will print that
password to the terminal. Do that now to make sure everything took.

If you see your newly generated random password, Congrats! However, there is a
new problem: You now have your password printed in your terminal and should
probably consider that password burned.

It's time you get a new password. Run the super long command above again,
without altering it. What happened?

You should see the error:

```
mkdir: /Users/<YOU>/.HAB: File exists
```

The above command (or rather, more specifically, `mkdir ~/.HAB`) is not
idempotent, meaning, if you run it more than once, you will get different
results.

We are belaboring this point because it is integral to the entire architecture
of Ansible and this guide.

Ansible is designed from the ground up to be idempotent. Meaning, we should
expect to run an Ansible command over and over and get the same results. This is
a big deal because we are not running commands to get results of math equations,
but we are running commands to get computers to have a particular set of
properties or be in a particular state. In our case, a state that allows a HAB
node to function. On top of this, it is important because what if you forget
your place or forget if you have run a command or not? Easy, just run it again!
If you have run it already, then nothing will happen, and if you have not, it
will do what you want.

To make the above long command idempotent add a `-p` flag to the `mkdir ~/.HAB`
section, like this, `mkdir -p ~/.HAB` and run the giant command again (the `-p`
flag says "Hey, don't throw an error if this doesn't work").

You should now have a file with a new and different password. Though it's not
the same password, we can now consider our command idempotent for our purposes,
because it is the same output: a cryptographically secure random, base64
encoded, 63 bytes of entropy password. AKA a needlessly strong password.

To view this new password and confirm that it is indeed new, without printing to
terminal, run `nano ~/.HAB/.ansible_vault_access`
