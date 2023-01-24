---
title: What is a HAB Node
---

# A 30,000-Foot View of a HAB Node

What is a Highly Available Bitcoin Node all about?
![top view](/img/intro_reveal.png)

## Background

A basic premise for Bitcoin node architecture is “It is paramount to keep nodes
as cheap as possible for as long as possible while scaling Bitcoin to ensure
decentralization”. This architecture was fought for and was won in the block
size wars by
[#UASF](https://twitter.com/search?q=%23UASF&src=typed_query&f=live). And it is
first-principle important: aggressively expanding needed L1 resources precludes
Layer X availability/privacy/sovereignty for those priced out of L1.

Now, it is becoming abundantly clear: higher layers will be liquidity streams.
Not promises of a check once a month… actual, by-the-second, 24/365,
bidirectional
[streams](https://twitter.com/BTCsessions/status/1394875845324328960) of sats.

For the pleb, this will be wages; how we put food on the table.

## Problem

So we will soon have a new problem for the base layer node: L1 downtime for an
ever expanding income generating app ecosystem will begin to mean either
sacrifices to liquidity (aka, food on the table) or sacrifices to
privacy/sovereignty.

**Both are intolerable.**

Not to mention that downtime for any one node, say a raspberry pi + hard drive,
might mean re-syncing the entire blockchain after replacing a hard drive,
potentially weeks of lost income. But it gets worse still: What if downtime is
not from hard drive failure, but from
[zero-days in Bitcoin Core](https://twitter.com/BitcoinErrorLog/status/1590084782196944896?s=20&t=aRMlukKrzwBbPG6o2GCYAg)
itself? Then what do all the single node operating, non-technical plebs do?

Well, then we could really be in trouble.

## Legacy Solution

What is needed is the ability to diversify away Bitcoin version/implementation
risk, hardware failure risk, networking risk, power risk, and a slew of other
choke-points also putting our nodes at risk—because that is the root issue:
single points of failure in the node itself. The good news is that this is
[not a new problem](https://www.flickr.com/photos/jurvetson/157722937/). This is
a perennial problem for all server architecture. All servers have to eliminate
single points of failure to keep uptime as high as possible. And many lessons
have been learned over the years.

Today, there is a robust and battle tested solution: Clustering +
Containerization + Orchestration. Use light VMs on a cluster of distributed
computers, and software orchestration to ‘move’ those VMs around the cluster
according to availability. Let’s state that cleanly for the uninitialized:
Clustering + Containerization + Orchestration allows a software abstraction
layer for hardware and software, alike. It effectively divorces software from
hardware and software.

Bye bye, single points of failure.

The industry-leading project built explicitly to do this is
[Kubernetes](https://www.flickr.com/photos/jurvetson/157722937/) (aka k8s) which
has 100,000+ commits, 3000+ contributors, 10+ years of experience to draw from,
and yes, it's FOSS. K8s doesn’t get a lot of rep outside of niche DevOps/SRE
discussions, so, let us put it in terms digestible for all Bitcoiners: K8s
presently defends more in legacy value than Bitcoin does in new value…
[Trillions (with a “T”) more](https://landscape.cncf.io/card-mode?grouping=no&sort=amount).

Practically speaking, it’s likely that you are reading this because of k8s
somewhere in the stack of infrastructure delivering you this information.

**The Cloud _is_ Kubernetes.**

## Our Solution

Let’s bring it back to Bitcoin nodes:

1. Because cheap nodes won in the block wars,
1. It’s inexpensive to run one full node ($200 SBC + $100 SSD), and
1. It’s still cheaper to run many nodes than to buy an Apple MacBook ($300 \* 3
   < ~$1k). ![MacBook Air vs Clustered SBC](/img/apple_vs_amazon.png)
1. Which means, pleb-run Bitcoin Node architecture is eligible to implement
   nodes with battle tested, clustered, industry leading k8s to make said pleb
   nodes highly fault-tolerant micro clouds. Solving the issue of higher layer
   liquidity events far in advance of the coming need to do so.

**Caveats**: k8s is not easy. Computers pushing computers around computer
networks while themselves also being pushed around said networks is
mind-boggling; attack surface multiplication is real. Lose of funds may happen.
Caveat Emptor.

But, trillions in legacy value makes this trade every day; k8s problems have
repeatable, best-practice solutions. The upside for us is that we get
industrially defended pleb nodes, impervious to downtime, and resistant to
liquidity events.

## Economic Node Maximalism

To be explicitly clear: using k8s, a Bitcoin node could run on an RPi, a NUC,
and any other Linux capable device, all orchestrated together, in different
locations, and controlled by one pleb. If one host is compromised, the Bitcoin
node continues on unabated for the pleb.

That last sentence should be very familiar to anyone who has been around Bitcoin
for a minute, for it is fundamental to robust _key_ management:

> Single Sig Tx : Multisig :: Single Bitcoin Node : HAB Node

Rubber hits the road time, is this doable?

Yes. It’s done.

And this project is proof positive that it [works](/poc), explains [why](/why)
you should do it to, and shows you [how](/how).
