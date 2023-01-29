---
title: HAB Node Proof of Concept
---

# Proof of Concept

Technical design considerations and specifications for the Proof of Concept
Highly Available Bitcoin Node featured herein.

The Ionico Base Node: ![HAB Node White Backdrop](/img/white_profile.JPG)

## Name

It is named after
[Ionic Columns](https://www.thoughtco.com/what-is-an-ionic-column-177515), not
just for the essence of the column as vertical blades with alternating convex
and concave space, but, in particular, for the base which is "stacked disks".
And, because of course, pillars are the quintessential symbol of Western
Civilization.

## Design Considerations

The only real purpose of this project was that it needed to be a functional
Bitcoin node which was highly available, as outlined in the docs elsewhere.
Everything else came in second place, including all higher layer services, like
lightning, which was not implemented for this PoC, and security concerns,
outlined below.

### Constraints

The largest _guiding_ constraints when designing this node were these:

1. It should be cheaper than a high-end laptop
1. It should be quiet enough for running in a room with humans
1. It should look awesome

### Cost

At no point were we worried about exceeding the cost constraint. It should not
come as a surprise to anyone that the second you leave the walled garden of,
say, Apple, everything gets considerably cheaper (if perhaps not the most
cutting edge or beautiful).

### Power

Managing 7x clunky power cables would have made this project unmanageable for
consumer bare-metal, and it would have made it look like a rats nest. Power Over
Ethernet (PoE) hats were deployed for the Raspberry Pi hosts bringing total
power bricks down to three, and massively reducing cabling.

Additionally, many USB 3.1 SSD hard drives (especially in higher TB ranges) draw
too much power from a Raspberry Pi, and are thus unstable and need external
power sources—which, again, was a no-go for this build. Samsung's 2 TB external
drive was the only SSD hard drive solutions found (at build time) after
considerable research and testing.

### Noise

Consumer deployment requires ultra quiet operation. Even the world's quietest
active cooling system for an RPi can become problematic when multiplied by five.
Not to mention moving parts are far more prone to breaking.

Passive cooling for the Raspberry Pis and open casing were used to facilitate
air flow. Though not photographed, the node lives on an open-faced rack that
provides vertical and unobstructed airflow between the pi hosts. In extreme
conditions, a standard desk or box fan can be applied externally to the entire
underside of the node, as the air has a clean exit upward, dramatically reducing
temps.

Our hats are off to [Geekworm](https://geekworm.com/) for designing a PoE hat
that fits with a passive cooling case. Pun intended.

This node is quieter than a mouse.

### Looks

An apropos mix of Borg, Nolan Batman, Gunmetal and Light:
![HAB Node on Blue Background](/img/poc_blue_flat.png)

## Hardware

:::caution Warning: Fiat Prices Ahead

This hardware was purchased at variable prices (especially for the 5x items)
mostly over the course of 6 months from Oct '21 to April '22 while testing and
rebuilding. The prices shown constitute averages, and mostly do not include the
rapid price rises in consumer electronics caused by fiat currency. In other
words, prices you are about to read are practically meaninglessness apart from
their relationship to one another, which itself is wanting.

:::

| Item                                                                                                                               |    Cost |   Count   |         Total |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------: | :-------: | ------------: |
| Raspberry Pi 4 Model B 8 GB RAM, 1.5GHz Quad-core                                                                                  | $142.99 |     5     |       $714.95 |
| Samsung T5 Portable SSD 2 TB, MU-PA2T0B/AM                                                                                         | $219.95 |     5     |     $1,099.75 |
| 1 inch USB-C Male to USB-3.0 Male Adapter                                                                                          |   $7.99 |     5     |        $39.95 |
| Geekworm for Raspberry Pi 4 Model B/Pi 3 Model B+, Raspberry Pi Power Over Ethernet (PoE+) X765 PoE HAT 802.3at/802.3af 5Vdc       |  $34.99 |     5     |       $174.95 |
| Geekworm Raspberry Pi 4 Model B CNC Ultra-Thin Aluminum Alloy Metal Passive Cooling Case                                           |  $26.99 |     5     |       $134.95 |
| Monoprice 134211 Cat6 Ethernet Patch Cable, .5ft, Black, Stranded, 550MHz, UTP, Pure Bare Copper Wire, 32AWG, Micro SlimRun Series |   $1.79 |     5     |        $10.74 |
| HVAZI 240pcs M2.5 Nylon Hex Spacer Standoffs Screws Nuts Assortment Kit, Male-Female, Black                                        |  $11.99 |     1     |        $11.99 |
| Intel NUC 11, Core i3-1115G4 2-Core, 3.0 GHz–4.1 GHz Turbo, NUC11PAHi3                                                             | $395.00 |     2     |       $790.00 |
| Samsung 970 EVO Plus SSD 2 TB NVMe M.2 Internal Solid State Hard Drive w/ V-NAND, MZ-V7S2T0B/AM                                    | $209.99 |     2     |       $419.98 |
| 32 GB DDR4 3200MHz PC4-25600 1.2V 2Rx8 260-Pin SODIMM Laptop RAM, M471A4G43AB1-CWE                                                 | $138.95 |     4     |       $555.80 |
| Monoprice 107687 3ft 18AWG Grounded AC Power Cord, 10A (NEMA 5-15P to IEC-320-C5)                                                  |   $8.95 |     2     |        $17.90 |
| Cat6 Ethernet Cable 1ft Black, 6 Pack, flat, snagless Rj45 Connectors                                                              |  $13.99 |     1     |        $13.99 |
| Netgear 8-Port Gigabit Ethernet Unmanaged PoE Switch w/ 8 x PoE+ @ 123W, GS108PP                                                   | $109.99 |     1     |       $109.99 |
|                                                                                                                                    |         | **Total** | **$4,094.94** |

### Cluster Totals

| Memory | Storage | Cores |
| :----: | :-----: | :---: |
| 168 GB |  14 TB  |  24   |

### Comparison

As of Dec 2022, a maxed out 16‑inch MacBook Pro Apple M1 Max chip:

| Memory | Storage | Cores |    Total Cost |
| :----: | :-----: | :---: | ------------: |
| 64 GB  |  8 TB   |  58   | **$6,099.00** |

All this for less than an Apple MacBook
![HAB Node Black Backdrop](/img/fin_black.png)

## Single Points of Failure

The focus of this build, again, was to present a Proof of Concept, it was to
prove that we _could_ eliminate choke-points, but not, necessarily, to eliminate
every single one. But we did get some notable ones.

### Eliminated

- **Hardware Failure:** We have eliminated the most problematic node SPF as it
  almost for sure exists for almost every current self-hosted bitcoin node
  operator: hard drive or other hardware failure.
- **Dependency Tree:** Apart from this, it is also worth mentioning that
  Kubernetes itself can run in HA mode, meaning there are at least 3 master
  hosts (or master nodes in k8s terminology): 2 pis, and 1 NUC. As such, we have
  eliminated a key SPF in a dependency while introducing said dependency.
- **Implementation/Versioning Risk:** Lastly, we have eliminated bitcoin
  implementation and versioning choke points, which should be a key
  consideration for all pleb operators who are not core contributors.

Not featured, we have put this node behind a pre-existing UPS that was available
to us, as power in our area has a tendency to flicker. This gives the node
limited power redundancy for roughly 1 hour, which is far in excess of perceived
risk.

### Remaining

- **Geographic Location:** Because this node is designed with a Hydra Option in
  mind, it has the ability to be geographically dispersed. As pictured, this is
  obviously not employed. But it does make the pictures better! A first order
  roadmap item is to get a node host in the cloud, which would remove this SPF.
- **Router:** The router used for this node (a pfSense box) gives many options
  for removing SPFs in internet provider, VPNs, and micro-geo. However, only one
  router is serving this node, which itself is an SPF. Multiple routers would
  need to be introduced and networked together at different locations to fight
  this risk.
- **Internet Provider:** It is worth calling out again, that this node is only
  served by one internet provider. The option exists to add redundancy here,
  both with satellite (Bitcoin Satellite) and cell via the pfSense box.
  Additionally, RPis can employ cell hats.

## Uptime

As you can see, 169 days of uptime on the first build is great!
![Uptime](/img/uptime.png) However, shortly after this screenshot was taken, the
entire cluster [crashed](#cluster-crash).

:::note Note on Cluster Resource Allocations

As you have probably noticed, bitcoind was only running on 3 off 7 nodes. This
first build also included a bcoin instance, a non-clustered bitcoind instance, a
btcd instance, and 1 node reserved for N+1 (to see the full list and
configuration, check out the chart
[here](https://github.com/GildedPleb/helm-charts/blob/master/charts/hab/examples.md#poc-hab-node)).
Both btcd and bcoin ran into reliability issues over the same time frame, as
expected, and entered crash loop back-off regularly, and were eventually shut
down.

The standalone bitcoind instance ran on one of the NUCs and was used for
performance testing. Thus, it did not accurately track uptime at all.

:::

## Performance

Because of Raspberry Pi limitations, it became clear that the NUCs needed to
overcompensate, especially with regard to RAM. Both NUCs have max RAM at 64 GB,
allowing them to sync the bitcoin blockchain from scratch without dumping the
cache. This, increasingly, is the single most important factor for node sync.

The NUCs can sync bitcoin core in about 8 hours on ultra basic 200 Mbps
internet.

If you are reading this, you are probably already aware of Raspberry Pi Node
sync times (or really, any device with less than say, 30 GB of available RAM for
the db cache).![HAB Node vertical black and white](/img/poc_tower.png)

## Lessons Learned

### Cluster Crash

The cluster crashed shortly after reaching 6 months of uptime because the
Software Update Controller (SUC) updated k3s, and Longhorn, which releases on a
different schedule, became reliant on
[deprecated resources](https://github.com/longhorn/longhorn/issues/4003). The
SUC truly lived up to its abbreviated name! /s.

**Ways Forward:**

1. Remove the reliance on Longhorn - Workable, as it is only minimally needed,
   and removes a dependency, which is always good.
1. Remove the SUC - Workable. However, this means more manual maintenance.
1. Alter how aggressive the SUC is - Workable, and most amicable way forward.
   Presently, it targets `latest`.
1. Remove both - Workable. Both can be thought of as non-essential auxiliary
   features, but they do make life easier, for the most part. More discussion
   here is needed.
1. Update Longhorn to the patched but unreleased version, which fixes the bug.
   This was the action we took, as it was the simplest, had community support,
   and the node was fully functional again after only a few hours of downtime.

Thankfully, this was a nonpublic beta version for this very reason. And will not
have this issue when using
[Longhorn 1.4](https://github.com/longhorn/longhorn/milestone/33) (released
December 30, 2022). But it does bring to light the difficulty of introducing
dependencies at the Live K3s level. Baby steps.

### Hard Drives

Surprisingly for us, but perhaps unsurprisingly for others, hard drives were a
problematic focal point in this build. The original plan was to employ simple
USB stick hard drives as they are now very affordable and in the +1 TB range,
and plug them into pis. What we failed to account for was just how much power
these tiny hard drives need on Raspberry Pis, how much hard drive space was
actually needed in our block storage solution, Longhorn, and how performant they
needed to be. Once we realized the USB sticks were out because size,
performance, and power, we investigated NVMe USB adapters, but came to find out
that they were out because of power. After many purchases, tests, and returns,
we finally realized we needed to ride the minimums of acceptable performance
just to get the least power and most space. This, in turn, pushed us toward
adding NUCs to the cluster, which was not a part of the original design, but a
welcome addition.

**Ways Forward:**

The way forward here is simple: front load more research into hardware and
software specifications and requirements. At the end of the day, Raspberry Pis
are cool and all, but until Pi 5 is released, and we get to see the specs, we
would not recommend anyone to buy additional Raspberry Pis to incorporate into a
HAB Node, or to even use as a regular node. If you have pis, use then, but if
you are going to buy hardware, buy hardware which has better performance and
extensibility than Pi's.

### Host Diversification

We placed a high premium on aesthetics for this node too early in the build and
the pictures do look very pretty. However, as we have come to realize, no HAB
Node should have 5, or even 3, or maybe even 2 of the same computer host. The
problem here is that it can introduce perverse incentives for any single
manufacture, via economies of scale. Say, if someone realizes that the Raspberry
Pi Foundation is primarily manufacturing HAB Nodes, and those RPi hosts
constitute a majority of hosts in the Bitcoin Network. This introduces an attack
vector if one wishes to attack Bitcoin and was recently and briefly outlined by
[Sjors](https://twitter.com/provoost), a core contributor, on
[TFTC](https://podcasts.apple.com/us/podcast/383-bitcoin-a-work-in-progress-with-sjors-provoost/id1292381204?i=1000590398619).

**Ways Forward:**

Employ as many manufacturers as possible, where none can materially impact your
node's threat model. E.g. if you have N+1, you can afford to have 1 of each type
of host, if you have N+2, you can afford to have 2 of each type of host, but you
should never have a single type of host that constitutes a majority of hosts.
Obviously, moving above 2x one type of host, without letting that host become a
majority, while also maintaining N+X, can completely balloon the node cost.

Additionally, it might be worth exploring getting more unique nodes, and turning
the Pis into routers so that each Pi router can have one node behind it. Each of
the Pi routers then live at various dispersed locations and are networked
together via a VPN or TOR.

## Conclusion

The inimitable Ionico Base node, but in candy apple red:
![Node with red background](/img/feature_aesthetics_node.png) Undoubtedly, there
are _better_ self-hosted solutions out there, as this one does little except
scratch the surface of what is possible, and we look forward to seeing ones that
exceed this project!

### Summary

We have built a variously defined Highly Available Bitcoin Node. Though a few
single points of failure remain, we have eliminated a great deal of the most
pressing ones, and have retained an uptime of +169 days, while spinning up and
tearing down many other nodes running on the same cluster. In short, we met the
goals of creating a quiet, self-hosted HA Bitcoin node, under budget, that looks
great.

Many lessons where learned along the way, and this node took many rounds of
building and tearing down to get right: 6 months of active free-time/part-time
development, and 6 months of passive monitoring. To complete this project, it
was essential to have experience in networking, pfSense, Kubernetes, Helm,
Sprig, YAML, and Ansible. We hope that in the guide, the essential lessons have
been passed on while abstracting away as much as possible to make the process of
building more of these nodes palatable for more people.

### Looking Back

This Bitcoin node started as an idea in 2019 with one Raspberry Pi (now `pi5`,
the Pi closest to the NUCs in the photos on this page), an old hard drive, a
love for Bitcoin, and the knowledge that
[k8s could run on a Pi cluster](https://kubernetes.io/blog/2015/12/creating-raspberry-pi-cluster-running/).
But who knew how to combine the lot? When we started realizing in mid 2021 that
we could build a Highly Available node, from skills gleaned in professional full
stack development, the project became an itch that must be scratched. After a
few months of planning and research, we started building the Ionico Base node in
Oct '21 with the addition of 4 new Raspberry Pis, and 5 USB hard drives (which
did not make it into the final build for reasons we
[discuss elsewhere](/docs/l1-hosts/hardware)).

When we started, self-hosted Kubernetes clusters where still a fairly niche
hobby project, it was not easy finding resources to meet the particular needs of
K8s on Pi's, none-the-less clustering Bitcoin Nodes, but a survey of 2022 has
revealed that these types of guides and projects have _exploded_ in popularity.
This is an encouraging
sign.![HAB Node vertical black and white](/img/intro_power.png)

### Looking Forward

As you are probably well aware, the resources in this node have gone largely
unused, there is much work still to be done, and many verticals to explore. At
the end of the day, a k8s node can run, well, anything. With Bitcoin as the
economic impetus for keeping uptime high, this opens the door for all sorts of
HA services for self-hosted individuals. Indeed, a HAB node provides the path
for all such services to becoming reliably income producing without sacrifices
to privacy, autonomy, or sovereignty. HAB Nodes empower sovereign plebs at the
edge of the network with the most advanced datacenter tech which was formerly
only meaningful at the center of the cloud.

Hopefully no other HAB Nodes look like the Ionico Base Node (_or costs as
much_), indeed, this node is not without its problems, but a HAB Node, in all
its variations, is the only way forward we are aware of that has the ability to
meet HA uptime standards of the cloud, remove as many single-points-of-failure
as possible, and thus has the ability to deliver reliable _satoshi income
streams_ on Lighting and other higher layers, without sacrificing privacy,
autonomy, freedom, rights, or human flourishing. We fully believe that this
version of self-hosted is the future, and we hope that this PoC Node, this
guide, and the code we have written herein, helps make that reality.

> "We cannot expect governments, corporations, or other large, faceless
> organizations to grant us privacy out of their beneficence."
>
> \- Eric Hughes, A Cypherpunk's Manifesto, 1993

---

For a more in depth explanation on why this is important, see [Why?](/why)
