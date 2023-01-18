---
sidebar_position: 6
---

# Stand-up Raw Hosts

## Networking

Unless you have an atypical network setup, your router is your source of truth
for your entire network architecture. As such, it should be consulted first as
the entry point for any HAB Node.

Further, it is very important for Kubernetes to keep _static_ addresses for all
nodes in the cluster, and to have addresses it can assign to exposed
services/ingress. Before designating IP addresses, inventory the computers that
you intend to use in the cluster, and try to think about how your cluster might
expand. It will be far easier to assign new computers (should new computers
enter the cluster) to reserved pools than it will be to continue to find new
addresses for them ad hoc.

## Designate IP Address Block

This may simply look like a plan kept on paper, or you may have a router that
can create groups of aliases. The variety of ways to solve this is pretty big as
there are many routers out there, so do consult your router user manual as a
first resource.

For this guide, we have 2 NUCs and 5 Pis, so, we will use the schema:

| Block: 10.1.0.x | Assigned For                   |
| --------------- | ------------------------------ |
| .20 - .29       | Raspberry Pis                  |
| .30 - .39       | NUCs                           |
| .40 - .49       | Non-conforming expansion hosts |
| .50 - .99       | Kubernetes                     |

As such, we should always expect to find a Raspberry Pi at `10.1.0.20`, or a NUC
at `10.1.0.30` and we have a block of IPs reserved for any new computer we wish
to add.

Thought we are using pfSense, we are not adding these to aliases, simply to keep
clutter down (actually, they are a part of a larger alias group). We are
sectioning off the IPs `10.1.0.20`-`10.1.0.99` so that no other services (Like
DHCP) can assign or use these addresses.

## Adding Raw Hosts

Finally, we can start to define some Raw hosts for our cluster!

In this guide, we will add two types of hosts:

- Raspberry pis
- NUCs

After you see how each of the above is configured, you should at least have a
framework for making any machine a host:

- BONUS: Generic PC

### Assign Addresses for Raw Hosts

To start, we need to have our router see MAC addresses for our hosts. We will be
re-imaging everything after we get static mapping, so it really doesn't matter
what your starting place is, or how you get MAC addresses, what matters is
getting a MAC address and IP address visible in your router and knowing which
host it is in reference to.

Get your host computers into a state where they can get power and LAN access and
are viewable from your routers Admin page. If you are using non-imaged Pi's this
may mean burning an image first, and may also mean the same for NUCs or any
other device. Almost every device which is already imaged or already has an OS
should be able to communicate with the router simply by plugging it in to the
network. MAC addresses are factory set, and though they can be changed, we won't
need to change them for this guide, and they shouldn't change image-to-image (we
assume...).

:::warning

Be sure all hosts and all SD/SSD media do not have any information on them that
is not backed up or can not be lost. _Imaging will erase this information._

:::

### Using a Generic Router

1. Attach the hosts to your LAN network.
1. Using the router you have, for each host in DHCP:
   1. Name the record the hosts name, e.g. `pi1`
   1. Assign the host MAC address to a static address.
   1. Delete old leases associated with the MAC address.
   1. Delete entries in ARP tables (if necessary).
1. Then, in DNS Resolution (assuming your router resolves DNS names):
   1. Add a record to resolve the host name, e.g. `pi1`, to the DHCP assigned IP
      address.
   1. Or, if different from what was assigned, add a record to resolve the host
      name to the static address

It should be prudent to reboot your host just to make sure it takes, and is
getting the same IP address from your router after being connected/disconnect.

### Using pfSense

If your router is pfSense, for each entry you would do something like this:

1. Find each Node in DHCP leases,
   `Services / DHCP Server / (The Interface that the host is connected to)`
1. Click `Add Static Mapping`
1. Add appropriate IP address
   - In pfSenese, it can't be the address assigned by DHCP (or an address in the
     DHCP range) so when you change it, you should restart the host after
     completing all these steps.
1. Add appropriate Hostname: e.g. `pi1`

:::caution IMPORTANT

This name needs to match the hostname for that host when defined, and should not
be changed here.

:::

5. Check: `✅ ARP Table Static Entry`
1. `SAVE`
1. `CONFIRM SAVED`
1. Delete previous lease in arp table and DHCP leases (if not already
   expired/purged)
1. Goto `DNS Resolver`
1. Add the appropriate name server resolution to the bottom
   1. Domain Name: e.g. `pi1`
   1. IP Address: as per what was assigned in DHCP for `pi1`

Upon completion of this step, you should be able to ping every host on your
network from your router by their name. In pfSense, you can open up the `ping`
tool and `ping pi1`.

### Ping It

Your control computer also needs to be connected to the same network in a way
that it can view the hosts on the network (look out for firewall settings,
though it will not affect most users). From your control computer, you should be
able to ping all hosts:

```bash
% ping pi1
PING pi1 (10.1.0.20): 56 data bytes
64 bytes from 10.1.0.20: icmp_seq=0 ttl=63 time=1.185 ms
64 bytes from 10.1.0.20: icmp_seq=1 ttl=63 time=1.222 ms
64 bytes from 10.1.0.20: icmp_seq=2 ttl=63 time=1.109 ms
```

Are they all pingable? If so, congratulations! You now have a full set of Raw
Hosts. Let's bring them into the Vanilla State, so they are ready for k3s!
