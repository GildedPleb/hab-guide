---
sidebar_position: 4
---

# Stand-up Live

Let's now stand-up a live k3s cluster.

Though k3s is fully live and active in its "vanilla state" we can't build
anything substantial on top of it without first running some "low level apps"
that open up its functionality layers. All these apps will be required to get
Bitcoin in the proper environment. As such, completing these steps will be
getting Bitcoin not just into the raw state, but into the vanilla state as well.
As mentioned, once we lean deeper into the software side of things, we start to
get very streamlined.

## Live K3s

All of these apps can be installed with one Ansible-Playbook command, which we
will do at the end, but we may need to edit more than a few settings beforehand.
Though pre-sets exist, you should tinker, try to get your barrings, and change a
handful of things. We will try to point out all the needed changes and offer
basic explanations.

:::caution

`yml` is a language that is dependent on white space—this means that the number
of spaces before each line of text matter. If you are opening up the playbook in
a text editor, be sure to turn off all non-yml auto-formatting, as it may
destroy the file. Or use a code editor built to purpose which is how you should
do it anyway, for instance, VS Code.

:::

### Editing The Live Settings

Before you do any editing, in a text editor, open up the file
`K3s/standup-live.yml`. It will be the playbook that we run, and the next few
sections here will follow along with it. In particular, you should pay attention
to the following `include_tasks`, and how those included tasks point to the
`K3s/charts/` directory.

```bash title="hab-plays/K3s/standup-live.yml"
...
    # Install k3s automated upgrades
    - include_tasks: tasks/system-upgrade-controller.yml

    # Add and Install nginx
    - include_tasks: tasks/nginx.yml

...

    # Add and Install Cert Manager
    - include_tasks: tasks/cert-manager.yml

    # Add and Install Longhorn
    - include_tasks: tasks/longhorn.yml
...
```

By and large, we will be editing settings that are in `K3s/charts/`, as such, we
will be editing definitions for Kubernetes resources, and not Ansible tasks.

So, lets jump into the actual applications.

### System-Upgrade-Controller

The system upgrade controller automates the process of updating the k3s version
on each node. Essentially, when SUC (great name...) sees that a new version of
k3s is available, it sections off one host ("cordons"), updates it, and then
returns it to the pool of hosts ("uncordons"). It first does this for masters
and then for workers. In effect, you can think of _this entire upgrade app_ as
being declared by the file Ansible downloads and these blocks of `yml`.

You should be able to see that it uses `concurrency: 1` to cordon 1 host at a
time while it updates. The defaults should suffice for all, (unless you _need_
to be on the _stable_ release of k3s, as opposed to the _latest_) but do consult
the [docs](https://rancher.com/docs/k3s/latest/en/upgrades/automated/) first if
you would like to make changes.

To change the SUC settings, edit these files before installing:

- **`K3s/charts/SUC/plan-agent.yml`**
- **`K3s/charts/SUC/plan-server.yml`**

:::caution Cordoning may be expencive

If you plan on running a node where resources are regularly maxed out, and/or if
your steady-state HAB node does not have N+1 available space, you may be
counting down days till downtime with a SUC installed. But, many will not have
access to 4 computers to do this anyway, so if that is you, you might consider
commenting out this upgrading code in `K3s/standup-live.yml` so that it is not
deployed on your cluster, like so:

```yml
# # Install k3s automated upgrades
# - include_tasks: tasks/system-upgrade-controller.yml
```

This also means you will have to upgrade your cluster manually.

:::

### MetalLB

MetalLB is already installed as a load balancer because a load balancer is a
fundamental component of a HA system, but let's dive into it now.

[MetalLB](https://metallb.universe.tf/) is a load balancer which opens up your
k3s cluster to its wider network: it gives the services on your HAB cluster IP
addresses. Don't worry, none of this is public if your LAN subnet is not public
and is behind a firewall like pfSense. There are a few load balancers in the k8s
universe, but this one is a basic one for bare metal, and self-hosting, which,
at the time of research in Jan 2023, many load balancers did not offer. Remember
that Kubernetes is _cloud_ native, not _edge_ native, but it does work wonders
at the edge!

### NGINX

Nginx (pronounced "Engine-X") is an ingress, it takes traffic which is coming in
and says "Ah! I know what to do with this `web request`". More
[here](https://kubernetes.github.io/ingress-nginx/). You will need this ingress
to handle potentially many things in the cluster, most notably is the Longhorn
UI.

There are no settings to change for this one. But you will notice, this is the
first block to use Helm, as evident from the lines
`kubernetes.core.helm_repository` and `kubernetes.core.helm:` in
`hab-plays/K3s/tasks/nginx.yml`. The equivalent commands for this Ansible block
are:

```bash
helm repo add nginx https://kubernetes.github.io/ingress-nginx
helm install nginx nginx/ingress-nginx -n kube-system --set defaultBackend.enabled=false
```

If you run these commands, and also run them in the Ansible script, guess what?
Nothing should happen! Ansible is declarative, Helm is declarative, and
Kubernetes is declarative. All of these systems are given instructions like
"Hey, we want this software to be defined as such", and if the software is
already defined as such, it says, "Looks great!" and does nothing.

Once the ingress controller has been installed, Ansible will wait for the
LoadBalancer IP to be available. You can watch the status by running the
following command in another terminal window, but do so before standing up live
k8s because it will happen _fast_:

```bash
% kubectl ns kube-system
% watch kubectl get services
```

By the time the Ansible command is finished, you should see something like:

```
% kubectl get services
NAME                                       TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE
kube-dns                                   ClusterIP      10.43.0.10     <none>        53/UDP,53/TCP,9153/TCP       50m
metrics-server                             ClusterIP      10.43.53.37    <none>        443/TCP                      50m
nginx-ingress-nginx-controller             LoadBalancer   10.43.92.27    10.1.0.51     80:31559/TCP,443:31850/TCP   43m
nginx-ingress-nginx-controller-admission   ClusterIP      10.43.90.232   <none>        443/TCP                      43m
```

Finally, to make sure it is indeed working, open a web browser on your control
computer and point it to the `nginx-ingress-nginx-controller` `EXTERNAL-IP`
(e.g. 10.1.0.51 in the example above) and you should see the infamous

```
        404 Not Found
-------------------------------
            nginx
```

This means it's working—that your web traffic is making it to your cluster—but
that your cluster has nothing to serve at that address, which is expected.
Insert failed successfully memes.

### Cert-Manager

The [Cert Manager](https://cert-manager.io/v0.14-docs/installation/kubernetes/)
allows your cluster to automatically issue, request, and sign certificates to
encrypt communications.

There are no settings to change for this one either.

We are automatically adding self-signing certs to the manager, so you can deploy
services privately. It is out of the scope of this guide to create a public
interface (one attached to an internationally resolvable website), though it's
perfectly feasible once you have a Cert Manager!

To ensure that it is installed and working correctly, in the `cert-manager`
namespace you should see three running pods. If you wanted, you could open yet
another terminal window and `watch` them get populated with the command, (It
will be important to _not_ set the namespace with `ns` for this, as that will
alter the other `watch` command, if you are also running that):

```bash
watch kubectl get pod -n cert-manager
```

Otherwise, after the Ansible command has run, confirm it's good to go by
running:

```
% kubectl ns cert-manager
Context "default" modified.
Active namespace is "cert-manager".
% kubectl get pod
NAME                                     READY   STATUS    RESTARTS   AGE
cert-manager-76d44b459c-hntxp            1/1     Running   0          115m
cert-manager-cainjector-9b679cc6-n8jpv   1/1     Running   0          115m
cert-manager-webhook-57c994b6b9-tkfc9    1/1     Running   0          115m
```

Above, you should see three healthy pods: `cert-manager`,
`cert-manager-cainjector`, and `cert-manager-webhook`.

### Longhorn

Alright, now it's time for the big guy: Longhorn.

[Longhorn](https://longhorn.io/) is a highly available persistent storage
solution for Kubernetes. It makes managing blockchain data a little more sane.
But it's also not without its downsides and added complications. For now, we
still think its worth including in the cluster as it will allow us to easily
monitor storage, and backup data. Plus, it's a straightforward and useful primer
to seeing just how vastly powerful this cluster can become.

First, Ansible will be running
[this script](https://longhorn.io/docs/1.4.0/deploy/install/#using-the-environment-check-script)
on the local machine which will use `kubectl` to spin up pods on each host to
make sure everything meets minimum requirements and was installed correctly.

Then, Ansible will run a version of the commands found
[here](https://longhorn.io/docs/1.4.0/deploy/install/install-with-helm/) and
[here](https://longhorn.io/docs/1.4.0/deploy/accessing-the-ui/longhorn-ingress/)
but will run it in a way as to save secrets safely. Most of the Ansible script
herein, will be better understood by also reading these links. Ansible will add
a secret for volume encryption, which can be found in the Ansible vault at
`~/.HAB/vault-lh-encryption-token`, and it will save the authentication password
to `~/.HAB/vault-lh-auth-token`.

Take note that Ansible installs an ingress, and a certificate. Can you guess
what web-traffic directing and encrypting might get you? Access to an
in-browsers user interface for your HAB node storage!

**The Longhorn UI**

To get access to this UI you will need to edit a few lines to meet your needs.
Below we have taken care to try and explain all the lines in the ingress, as it
is perhaps one of the more opaque parts of this entire process.

Take a deep breath. The only parts you need to edit are the **three** locations
of `lh.gilded.lan`. And you don't even need to edit those if you don't want to.
If you do decide to edit them, _they must be the same_, and they _must match_
the following longhorn cert. Also, make sure it has a unique sub-domain, domain,
and top-level-domain that remains local (like `.lan`).

Here is the annotated Longhorn Ingress and Cert:

```yml title="hab-plays/K3s/charts/longhorn/ingress.yml"
# Version that this resource definition applies to
apiVersion: networking.k8s.io/v1
# Kind of resource definition that this is
kind: Ingress
# The data needed to define the resource for outside services and managers looking in
metadata:
  name: longhorn-ingress
  namespace: longhorn-system
  annotations:
    kubernetes.io/ingress.class: 'nginx' # Use the nginx ingress we previously defined.
    # type of authentication
    nginx.ingress.kubernetes.io/auth-type: basic # A pop-up window asking for a user name and password
    # prevent the controller from redirecting (308) to HTTPS
    # nginx.ingress.kubernetes.io/ssl-redirect: 'false'
    cert-manager.io/cluster-issuer: 'selfsigned-issuer' # Encrypt using the ClusterIssuer deployed while setting up Cert-Manager
    # name of the secret that contains the user/password definitions, this is defined in the longhorn Ansible script, search for "basic-auth"
    nginx.ingress.kubernetes.io/auth-secret: basic-auth
    # message to display with an appropriate context why the authentication is required
    nginx.ingress.kubernetes.io/auth-realm: 'Authentication Required'
    # custom max body size for file uploading like backing image uploading
    nginx.ingress.kubernetes.io/proxy-body-size: 10000m
# The specification of the resource internally
spec:
  rules:
    - host: lh.gilded.lan # the location of the host
      http:
        paths:
          - pathType: Prefix
            path: '/'
            backend:
              service:
                name: longhorn-frontend # this is a service defined by Longhorn. It is where, 'lh.gilded.lan' will point to, it is the UI.
                port:
                  number: 80
    tls: # placing a host in the TLS config will determine what ends up in the cert's subjectAltNames
      - hosts:
        - lh.gilded.lan # Host to access longhorn
      # Name of the certifciate (see `kubectl get certificate -A`)
      secretName: longhorn-tls # cert-manager will store the created certificate in this secret.
```

```yml title="hab-plays/K3s/charts/longhorn/cert.yml"
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: longhorn-tls
  namespace: longhorn-system
spec:
  # The secret that this cert will be refering to, the secret `longhorn-tls` will contain the private keys for this certificate. The cert manager will create these private keys once this resource definition is applied to k8s.
  secretName: longhorn-tls
  # The domain name that this cert will apply to
  dnsNames:
    - "lh.gilded.lan"
  # The authority who will be signing the cert, this was defined earlier when we installed the cert manager.
  issuerRef:
    name: selfsigned-issuer
```

You will also need to add `lh.gilded.lan` (or whatever you edit it to) to your
DNS resolver in your router. It should resolve to the
`nginx-ingress-nginx-controller` `LoadBalancer` `External-IP` address assigned
[above](/docs/l2-k3s/standup-live#nginx) (in our case `10.1.0.51`, for which we
got `404 Not Found nginx`).

The upshot to getting this kind of exposure to an ingress this early on is that,
well, all the cool visual stuff needs an ingress.

**Reserve Amounts**

Longhorn automatically reserves a % of your host storage for OS. This is a
little silly when the storage is in the TB range, and the % is in tens. Ansible
will change this limit to 32 Gi automatically. If you would like to change it,
in the UI, under the Node tab, you will see, next to each host a column for
"Size", in each row there should be a "+32 Gi Reserved". You can also change it
to whatever you want in the Ansible script.

Once everything is installed, you can confirm everything is running by
navigating in a browser to `lh.gilded.lan` (or whatever you changed it to). To
log in, you will need the user and password created and stored in Ansible vault
`vault-lh-auth-token` (to get these credentials run
`ansible-vault edit vault-lh-auth-token`).

Once logged in, you should see a list of all your cluster storage resources,
make sure they line up with reality, issues here may need to be taken care of on
a per-host basis.

## Stand-up Live K3s

Double check that you are all set and run the command:

```bash
apb K3s/standup-live.yml
```

Did it run without issues? If so, congratulations! You now have a live
Kubernetes cluster capable of:

- Hosting highly available frontends
- Hosting highly available backends
- Encrypting traffic
- Self Updating
- Persisting highly available data

And, importantly,

- Hosting any peer to peer architecture, like a Bitcoin Node, in a highly
  available capacity.

Which is to say, we now have the cluster in a state where we can begin adding
arbitrary apps, services, and frameworks to the cluster. And there is an
outlandishly large ecosystem out there: logging, analytics, networking, backup,
monitoring, alerting, security, and everything else under the sun.

Going forward, we can use both Ansible scripts and Helm install scripts. For
Bitcoin, we will use Helm, as the complication that Ansible abstracts away in
setting up the cluster is a bit lost for individual one-off apps until we need
to install many at once.

Before we launch our HAB Bitcoin node (Layer 3), let's quickly run through
tearing down a live cluster.
