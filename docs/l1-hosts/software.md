---
sidebar_position: 2
---

# Software Requirements

This guide assumes you have already installed everything needed to complete the
RaspiBolt Guide. It also assumes you are proficient enough to install command
lines tools correctly. Please refer to the respective installation docs if you
have further questions.

Also, we will not be installing everything we need up front, but layer by layer,
to keep things sane. This is only the software we need for Layer 1. Do check out
[other layers](/docs/l2-k3s/control-prep) if you are worried your machine will
not be able to handle something (it shouldn't be a problem, as it's all pretty
light weight).

1. **Raspberry Pi Imager** Get
   [Raspberry Pi Imager >1.7.1](https://www.raspberrypi.com/software/). This can
   also image most anything, so it's well worth having.

1. **Python 3+**: Python is a programming language used by and needed for
   Ansible. If you are on a mac, python is non-intuitive to get installed and
   working correctly, so be advised (Apple has Python 2 installed on the PATH,
   so you need to edit your PATH, use `which python` or `which python3`, to make
   sure its working correctly). If you run `python3 -V`("tell me what version
   this is") you should see `Python 3.10.8` or greater
   [Install](https://realpython.com/installing-python/)

1. **ssh**: Needed by Ansible to get access to remote hosts. Should be good to
   go on all machines except
   [Windows](https://duckduckgo.com/?q=how+to+install+ssh+on+windows&t=ffab&ia=web)
   run `ssh -V ` in terminal to confirm it is installed

1. **Ansible**: Ansible is a remote host automation tool that allows one to set
   up Infrastructure as Code (IoC) idempotently. This means that no matter how
   many times you run the code, it always gives the same result.
   [Install](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

1. **Kubernetes Client**: Kubernetes Python Client. This is needed to allow
   Ansible to communicate with Kubernetes.
   [Install](https://github.com/kubernetes-client/python)

1. **sshpass**: Also, for Ansible, you will need to install `sshpass` which is a
   simple password tool for ssh used by Ansible. This is not as secure, but
   convenient for vanilla provisioning. More secure pathways are added later.
   [Install](https://duckduckgo.com/?t=ffab&q=how+to+install+sshpass&ia=web)

1. **openssl**: `openssl` is a
   [cryptographic tool kit](https://www.openssl.org/) for the command line. We
   will need it to create passwords. It should already be installed on most
   systems but be sure it is up-to-date and correctly on your PATH.

   - Mac:

   ```bash
   brew install openssl
   ```

   You will then need to add the correct version to your PATH in your rc file.
   What is the rc file? "rc" stands for
   "[run command](https://unix.stackexchange.com/questions/3467/what-does-rc-in-bashrc-stand-for)".
   It is a list of commands that are run every time we open up a new terminal.
   What is PATH? Path is a list of directories to search for executables by
   name. When a program isn't 'on your path' that means you can not run it
   without the absolute path `/usr/local/opt/openssl@3/bin/openssl` vs `openssl`

   You can find out which command will add `openssl` to your PATH (and thus
   which rc file is important) by using the command:

   ```bash
   echo $0
   ```

   Then choose accordingly:

   ```bash title="zsh"
   echo 'export PATH="/usr/local/opt/openssl@3/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
   ```

   ```bash title="bash"
   echo 'export PATH="/usr/local/opt/openssl@3/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
   ```

   - Linux:

   ```bash
   sudo apt update && sudo apt upgrade && sudo apt install openssl
   ```

   - [Windows](https://duckduckgo.com/?t=ffab&q=how+to+install+openssl&ia=web)

   For **ALL** installs, it will be important that this new install of `openssl`
   lives on your PATH. To confirm this, when you check the version you should
   see something like this (and in particular with macOS, you should _not_ see
   `LibreSSL`):

   ```bash
   % openssl version
   OpenSSL 3.0.7 1 Nov 2022 (Library: OpenSSL 3.0.7 1 Nov 2022)
   ```

1. **nmap**: `nmap` is a "Network MAPper" (commonly used by pen testers to find
   vulnerabilities in networks) and it is needed by one of our Ansible playbooks
   to find hosts.

   - Mac:

   ```bash
   brew install nmap
   ```

   - Linux:

   ```bash
   apt-get update && apt-get upgrade && install nmap
   ```

   - [Windows](https://duckduckgo.com/?t=ffab&q=how+to+install+nmap&ia=web)

1. **jq**: JQ is a JSON string parser. It's a pretty handy utility.

   - Mac:

   ```bash
   brew install jq
   ```

   - Linux:

   ```bash
   apt-get update && apt-get upgrade && install jq
   ```

1. **guildedpleb/hab-plays** You will need to clone the HAB Node repo to get all
   the Ansible commands we are going to run.

```bash
  git clone https://github.com/gildedpleb/hab-plays.git
```

:::tip

You'll notice many of the installation links above are DuckDuckGo searches. The
entire full stack developer ecosystem moves fast, it is in many senses wiser to
link to top search results for systems and setups because linking to a direct
source might be impossible to test (we don't use Windows machines, for
instance), where a search result has built in obsolescence and up-to-date
information. What is more, this is honestly how many professional and deeply
experienced developers solve everyday problems and spend a good chunk of their
time.

If you have better links, edit this page!

:::
