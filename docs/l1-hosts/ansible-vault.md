---
sidebar_position: 11
---

# Ansible Vault

An Ansible Vault is a secure way (albeit rudimentary) for us to handle
passwords. We will need it to help secure our cluster, and we already have it
installed as it comes with Ansible, and we have already set it with our script
at the very beginning of the guide. Later, we will be able to migrate passwords
to even more secure locations.

Run this command:

```bash
touch ~/.HAB/vault-hosts && ansible-vault encrypt ~/.HAB/vault-hosts
```

This will create the vault (an empty file named `vault-hosts`) and encrypt it
with the password found at `~/HAB/.ansible_vault_access` (check out
`ansible.cfg` to see the mapping)

You should see this response:

```
% touch ~/.HAB/vault-hosts && ansible-vault encrypt ~/.HAB/vault-hosts
Encryption successful
```

You should also view the file you just encrypted to see what is looks like in
clear text:

```bash
cat ~/.HAB/vault-hosts
```

Voilà! No need to worry about these files hitting the terminal from basic
commands, they can not be read! To view the decrypted file, you can run (though,
the file is empty, so you won't see anything, yet):

```bash
ansible-vault view ~/.HAB/vault-hosts
```

We will keep secrets in encrypted files like this when possible. To edit, you
would simply use

```bash
ansible-vault edit ~/.HAB/vault-hosts
```

## Word To The Wise

Ansible Vault can get really finicky with regard to finding the config files
needed to map to your password, so be sure you are executing commands in the top
level `hab-plays` folder at all times.

To be clear, we could put all these steps in Ansible, and totally abstract away
this layer, but it's instructive to have them outside automation as these files
will hold the keys to a lot of the castle we are building, and in the case of
lock out, it's important to know how to get access to things.

:::caution

You will be unable to build any live hosts without first following the Ansible
Vault steps in this section. Which is by design.

:::

## Speaking of Security...

If you don't have any ssh RSA keys, you should
[create some](https://www.freecodecamp.org/news/the-ultimate-guide-to-ssh-setting-up-ssh-keys/)
before moving on.

Ready to get some live hosts? Let's do it!
