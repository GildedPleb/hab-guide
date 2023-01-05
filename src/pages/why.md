---
title: In Defense Of HAB Nodes
---

# In Defense Of HAB Nodes

Bitcoin, in whole, is a fundamentally robust, antifragile or highly available
(HA) system. Although most nodes are not HA, meaning it is unreasonable to
expect persistent connections to any random Bitcoin node, the design and
incentives in Bitcoin as a whole ensure many nodes will always be available.
Stated differently, though individual nodes may crash, not all the nodes
worldwide crash all at the same time. Because downtime will generally be a
shorter interval than uninterrupted uptime for the average node, and because the
incentives and consensus mechanisms in Bitcoin cause node running to be of
importance, Bitcoin, at large, remains reachable:

> "Nodes can leave and rejoin the network at will" - Satoshi, Bitcoin White
> Paper

Bitcoin uptime, as a whole, [is outstanding](https://bitcoinuptime.org/), but
the low marks for the average node persist, for the average node does not have
the luxury of a distributed worldwide p2p incentive system optimized to keep it
alive every second. Or at least, it doesn't _yet_.

A HAB Node does not change or attempt to fix anything about Bitcoins security or
operational model network wide: Bitcoin does not need "fixing". However,
individual implementations of running a node could use improvement, and
eventually, as self-hosted higher layers begin to dominate, _more serious issues
could develop for node operators if downtime is not adequately addressed_.

Amazingly, the incentives in Bitcoin will _force this problem to be fixed_ as we
will soon see, and motivate this very guide.

## A Node Threat Model

In broad strokes, the node threat model can be characterized like so: With
regard to threats, there are both known threats, and unknown threats in node
operation. Known threats might include threats like hardware failure, or
internet disruption, things that are ordinary parts of computer operation, that
everyone should know about, have experience with, and can already plan for. We
already expect that these will happen, but we don't know when. However, there
are also unknown threats in node operation. Obscure threats such as a zero-day
in a kernel, or compromised dependencies. These threats happen both at unknown
times and may themselves go unnoticed for days weeks or months.

To even begin to address these threats, asymmetric feats of engineering,
planning, and flexibility must be employed. Though many of these threats might
be mitigated in the source code, those solutions could be days, weeks, or months
away. Considerable operational front loading at the edge is the only practical
way to make sure that any number of future probabilistic downtime events aren't
catastrophic for the non-developer node operator. And to complicate it all the
more, much, if not all of that front loaded engineering, may never be needed or
used.

Thankfully, we know these efforts are not a waste of time and that they work
because many systems exist which face similar kinds of threat models. Most
notably, the—let's call it—DNA model. Consider this, information systems and DNA
are fundamentally alike: DNA is code. If Bitcoin is the organism, then nodes are
the individual cells. Each individual cell is entirely expendable by the
organism, but only together do all the cells make the whole organism. Bitcoin
does not exist to defend each node, but each node exists to serve a purpose for
the whole. As such, cells must rely on their own internal threat mitigation
technology to continue to execute on their purpose.

That technology set is encoded in the cells DNA. For any one cell to accomplish
its purpose, it might only need to use a small fraction of the DNA available to
it for the majority of its existence. "Junk DNA" might even argue for less than
3%. But is the rest of the DNA really junk? By no means. Within the rest of the
DNA (among many other things) there reside instruction on how to deal with
untold count of long dormant threats, unknown threat mitigation strategies,
emergency protocols, communication and search mechanisms, and so much more.
Molecular biology assumes "better to have it and not need it than need it and
not have it".

Contrary to DNA's threat modeling, non-highly available node operators are
unaware of the need (or flatly reject the need) to have this expansive threat
mitigation in place. Highly available node operators embrace the DNA threat
model, they adapt a similar philosophy to DNA, and run their nodes with the
widest threat model they can muster in mind.

## What Matches The Threat Model?

As far as we are aware, only a Highly Available Node can address the most
threats posed in the threat model. High availability is exactly what it
suggests: a node which can not be taken down easily (unless its operator
intentionally designs a kill switch). The "traditional" Raspberry Pi bitcoin
node (or any single-computer, run-at-home node), though extremely important for
economic, privacy, and security reasons, is not highly available, and can not
be. These nodes are chalk-full of single points of failure—they do not have a
deep well of DNA playbooks ready to solve problems. If only one of those single
points fail, it could mean weeks of downtime for the individual node.

The stated purpose of a Highly Available Bitcoin Node is to remove, as much as
is reasonably feasible, all the single points of failure, both known and
unknown. As such, a HAB node is designed from the ground up with this end in
mind.

## Why Is this Important?

From this premise, we can begin to ask _why_ this is important, what specific
benefits it gains us, and what specific or unknown threats it curtails. Though
there are undoubtedly many more reasons, these stand out and are worth
elaborating on:

- Reduction to Lost Income / HALX Option
- Self-hosting / Sovereign Option ("Trusted Third Parties Are Security Holes")
- Obscure Threat Mitigation / Hydra Option
- Forecasted Obsolescence / Induction Option
- Node Operators are First Class Voting Citizens
- Bitcoin is. (And Will Always Be Under Attack)

## Reduction to Lost Income / HALX Option

It is becoming clear that higher layers of the stack will increasingly mean
income streams—routing fees, streamed sats from podcast listens, gaming apps,
etc. As those income streams mature into living wages, it will become paramount
for security, autonomy, and privacy that privately operated, independent,
[economic nodes](https://medium.com/shiftcrypto/we-need-bitcoin-full-nodes-economic-ones-fd17efcb61fb)
process those transactions. Those transactions can not be processed if the node
is down. As such, downtime will soon mean either lost or delayed living wages or
sacrifices to privacy, autonomy, security, independence, etc.

A highly available node alleviates this pressure. From the hardware layer and
up, it has the capacity to offer all services as highly available, and thus
reduce all possibilities of lost or delayed income.

For the purposes of this guide, we refer to this ability as "if and only if you
have a highly available bitcoin node, can you have a highly available layer X
node". H.A.B.N. ⇔ H.A.L.X, or Highly Available Layer X Option. Put differently,
if operators wish to have higher layers highly available (and they will to
preserve income) then they will need to start at the hardware layer, and work
through layer 1, Bitcoin.

The moment living wages are involved on higher layers combined with the moment a
node operator is able to build a HAB Node, the incentives then align. From that
moment forward, HAB Nodes become inevitable until yet more robust engineering
comes up with something better. Operators may not choose to employ HAB nodes
built from these pages, but rest assured, no other type of node will do once
available. It is, as they say elsewhere in Bitcoin, "once you see it, you do not
unsee it."

## Self-hosting / Sovereign Option

With the never ending stream of nefarious Big Tech / Gov involvement in or
enabling of high profile hacks, censorship, property confiscation, privacy
violation, data mining and too many other rights-infringing actions to count,
many people have rightly leaned into the idea of self-hosting all their data,
services and apps. HAB Nodes, by nature of their redundant and oversupplied
resources, greatly enable this functionality.

> Trusted Third Parties Are Security Holes
>
> — Nick Szabo

Arbitrary services can be added to the cluster, including hooks, repository
mirroring, and any other infrastructure. A HAB Node can thus operate as GitHub,
Docker Hub, and a build server, hardening it against middle man failures from
any of the above. All self-hosted and highly available.

Under such a setup, for instance, a node would be able to take full ownership of
the entire Bitcoin code pipeline, every dependency, and all code needed to do
this, build bitcoin from source code, from any branch or fork, automatically,
and be a hosting location for others to find bitcoin implementations.

But it doesn't stop there, HAB Nodes would be great candidates for TOR relay
nodes, and maybe even TOR exit nodes, but considerable research would be needed
here.

For the purposes of this guide, we refer to this as the Sovereign Option, as it
mitigates MITM attacks. True, this kind of attack can be mitigated without HA,
however, HA mitigates the attack far more robustly.

## Obscure Threat Mitigation / Hydra Option

A HAB node accounts for bizarre and/or unlikely attacks. Designed correctly, it
is decomposable into individual, self-sufficient nodes. Together, for the
purposes of this guide, we call this the Hydra Option, as in some cases, it
gives a node the seemingly mythical power of growing back and multiplying new
heads.

Potential scenarios for this usefulness include, but are not limited to:

1. Most basically, it allows the node operator to cheaply diversify location as
   a first order function of the node: run a cluster with a host at home, the
   office, and at a family members house. It is then trivial to change from one
   to many nodes, or to slice off one or many parts, without taking down the
   cluster.
1. It allows the node operator to front run supply chain collapse for his
   immediate meat-space network who may need to spin up their own nodes.
1. In the case of an unlikely kinetic attack on a cluster that does not have
   locational diversity, given enough warning, the HAB node can be fully split
   up and distributed, trivially changing from effectively one node to many,
   multiplying the difficulty of the attack.
1. It fights against a “Version” signalling Sybil Attack. An attack when bad
   actors spin up hundreds of AWS nodes to signal to the bitcoin network to push
   particular protocol changes such as soft or hard forks. It fights this by
   giving plebs control of more bitcoin instances.
1. Given a sufficiently distributed remote network of cloud hosts in a cluster,
   it allows the node operator to diversify himself out of physical node
   operation, while retaining high levels of security and independence. This
   undoubtedly, would be expensive month to month.
1. When each decomposable unit is accompanied by a sufficiently powerful router
   and network broadcasting capabilities, it becomes not inconceivable to
   bootstrap a basic local or mico-local internet decoupled from the legacy
   internet. Say, if the legacy internet gets co-opted. At time of writing, much
   research is still needed to make this a reality, however.
1. HAB Nodes can be expensive and normalizing expensive nodes is non-productive
   for decentralizing Bitcoin. However, clustering nodes which employ the Hydra
   Option actually serves to make individual, non-HA nodes cheaper by creating a
   bigger market for singular nodes, allowing single-node manufacturing to dip
   more into economies of scale. Furthermore, in a HAB denominated market,
   hardware products become more interesting to customers the more
   differentiated they are, as such, manufacturers no longer adversarially
   compete for customers, operating under the assumption they will only buy one
   node, but cooperatively compete for customers, operating under the assumption
   they will buy multiple different individual nodes from a variety of
   manufacturers. Naturally, this also invites new differentiated node
   manufacturers to enter the space, just like a Hydra multiplying heads. Though
   it may be possible that some are infiltrated, it fights the likelihood that
   they all are.

Truly, it is a Hydra Option on many verticals.

## Forecasted Obsolescence / Induction Option

The blockchain, as far as we are concerned, will _always_ grow. And it will
always grow at or below a known rate: every 10 minutes a new block is added
which does not exceed the block size maximum.

This means that all self-hosted blockchain storage options will eventually be
exceeded. At the time of writing, depending on which flags you have set, the
blockchain exceeds 500 GB, this means that all non-pooled 500 GB hard drives are
now obsolete if you wish to keep that set of flags.

Because these rates are known, we can easily plan ahead and determine, at the
earliest, when our node might run out of storage. Problematically, in the case
of a non-clustered node, this means a lot of work and planning to transition
over to a larger hard drive: do we spin up a brand-new node? How do we transfer
appropriate keys, accounts, channels, network connections, addresses, and end
points? How do we communicate about potential downtime? Etc. With a clustered
node, there is also some planning and difficulty involved, but it takes place
far in advance of need, and is far less difficult as entirely new computers can
be provisioned without downtime or interrupting auxiliary services. Once
provisioned, new containers can be spun up as expansions of existing clustered
nodes, meaning they are automatically networked, load balanced, and integrated
with auxiliary services—which could very will eventually include keys, accounts,
and wallets. For the purposes of this guide, we call this the Induction Option:
almost any hardware can be inducted into the node with zero-downtime.

Further, once the old hard drive limits are exceeded and the hard drive can no
longer be used to hold the blockchain, it can still be used to service the node,
giving additional space to other containers that run on higher layers with
smaller footprints than the full blockchain. Returning to the DNA parallel, this
process can be thought of as a type of autophagy.

## Node Operators are First Class Voting Citizens, Only If/When Their Node is Running

Many things were revealed in the block size wars of 2017. Not the least of which
was who is actually in control of Bitcoin. Up until 2017 a lot of doubt and
uncertainty existed around who actually had the ability to affect Bitcoin
policy: was it the core developers, the miners, the node operators, commercial
nodes, who?

### Core Developers

Through the events of 2017, and the User Activated Soft Fork (#UASF), it became
clear that though the core developers could define some choices about what
software options existed, node operators made choices about how the protocol was
defined because they were the ones who ultimately ran the software. This was
seen in how many core developers thought that #UASF was dangerous and did not
support it, create it, or even touch it, yet, how node operators saw a bigger
picture beyond technical reality, and became an intransigent minority, forcing
the #UASF policy through, despite developer protestations.

### Miners

#UASF also revealed that miners are not bitcoin policymakers, but paid employees
of the bitcoin network. When they saw that many nodes on the bitcoin network
were signaling for #UASF, they had to make a choice: risk mining blocks that
would be rejected by the network (aka, get fired), or support policies which
agreed with #UASF (aka do what the boss says). Although miners do have a bigger
voice than bitcoin users who do not run nodes, 2017 showed us that node
operators had authority over miners.

### Commercial Nodes

For our purposes, we will say that commercial nodes are nodes that are primarily
"large" "crypto" business interests able to deploy a lot of capital toward their
ends. This group of node operators indeed has a vote, but they do not have a
vote which has influence over individual operators which must make their
decisions from first principles, not deep pockets.

Further, commercial node opinions are mired in insider dealings, closed-source
development, Sybil attacking node version signalling by spinning up hundreds of
AWS nodes, getting hacked, defrauding users, and other goofball behavior one
would expect from legacy not-math-based entities. In short, though they may vote
on bitcoin protocol rules, it is pretty clear that their efforts would be better
spent trying to clean up their poor track records than publicly voicing any
opinion about Bitcoin; they have little to no sway over the informed Bitcoin
node-running community.

In fact, the informed and responsible node running community should fully not
trust this group of operators, as an operational imperative, and fully verify
all their claims. As was made evident by the
[SegWit2x](https://en.bitcoin.it/wiki/SegWit2x) attack on bitcoin, and the
off-by-one-error in the SegWit2x nodes which killed the fork. Had the members of
the [New York Agreement](https://en.bitcoin.it/wiki/New_York_Agreement)
convinced the greater bitcoin node running community to follow them into that
mess, bitcoin would have experienced a very serious downtime event.

### Node Operators At Large

From the above, it is clear that the individual node operator is the true
influencer, defender, voter, and validator of the bitcoin protocol as they must
make choices from first principles. As such, it is up to us node operators to
act as Senators for Bitcoin. Node operators are the operators of last resort.
When their node is running, they are actively voting, actively defending,
actively decentralizing, and actively influencing direction of the network. When
it is not running they are flatly not making those contributions, abdicating
responsibility, and silencing their own voices.

HAB Nodes ensure the node is _always_ running.

> "This is my node. There are many like it, but this one is mine. My node is my
> best friend. It is my life. I must master it as I must master my life. Without
> me, my node is useless. Without my node, I am useless. I must run my node
> true"

## Bitcoin Is. (And Will Always Be Under Attack)

At its simplest, a HAB Node is like a multi-sig wallet but for your node. If you
lose one computer in the cluster for any number of reasons, the node remains
operational, which is to say, a self-hosted Bitcoin instance remains operational
and accessible to you. Not only does a HAB Node make the network more robust, it
makes your interaction with it more robust. Based purely on speculation, it is
none-the-less reasonable to deduce, that perhaps one of the biggest adversaries
that bitcoin has is node hardware failure—thermodynamics itself—which pushes to
centralize Bitcoin around datacenter nodes.

In Bitcoin, whoever controls nodes, controls Bitcoin. And we should assume that
for years now, very moneyed interests have run replicated nodes in the cloud,
using the very same tech stack we are employing in this guide, for the purpose
of having large stakes in the bitcoin p2p network. Indeed, companies exist to
explicitly run nodes in the cloud, and
[boast about doing exactly this](https://blockdaemon.com) for various
blockchains. ![Nodes managed by blockdaemon](/img/nodes_managed.png)

This is great for shitcoins, as they all deserve to be attacked in this very
manner, but it is intolerable for Bitcoin to not be fully at the ready, and
equipped with a counterattack.

And this is only one of the persistent and known threats bitcoin faces. There
are undoubtedly others, and we should assume that some may be backed by
considerably more funding than a private or public company might control.

HAB Nodes give plebs the tools that the biggest, and most moneyed tech firms and
government institutions on earth use every day to defend trillions in value.
They ensure that plebs control as many nodes as possible at the edge of the
network by utilizing technology employed in datacenters at the center. And they
give plebs the power to ensure those nodes continue to function as intended by
the individual pleb.

HAB Nodes are an advance in the defense of the bitcoin network. For above all,
it is paramount that Bitcoin survives. Every second Bitcoin survives is a second
closer to winning. We must have _constant vigilance_.

## A Caught-In-The-Wild Case Study

To wit, this is a real log from [btcd](https://github.com/btcsuite/btcd) syncing
the bitcoin live net that we witnessed which demonstrates both the reason this
is important and the power of HAB Nodes:

```log
2022-04-02 19:16:05.338 [INF] SYNC: Processed 7 blocks in the last 11.34s (5235 transactions, height 681505, 2021-05-02 09:19:37 +0000 UTC)
2022-04-02 19:16:15.370 [INF] SYNC: Processed 6 blocks in the last 10.03s (7148 transactions, height 681511, 2021-05-02 10:08:49 +0000 UTC)
2022-04-02 19:16:25.801 [INF] SYNC: Processed 7 blocks in the last 10.43s (5342 transactions, height 681518, 2021-05-02 10:33:55 +0000 UTC)
2022-04-02 19:16:35.489 [INF] SYNC: Rejected block 0000000000000000000c0b575b54782ac1233b52167a4360b387a92aad6d5c36 from 106.70.152.247:8333 (outbound): output fb1e8da2c605b140af57988ebfd01337c48981b6bea574814471888644a87179:374 referenced from transaction 574ed80323af61a44fde23fdfa353d9fcfd4044e746e5d71bb677539873a4d69:81 either does not exist or has already been spent
2022-04-02 19:16:35.505 [INF] SYNC: Rejected block 00000000000000000000a62dbd00aac10221e14ee31e4ccf0f69b5992ef2dc09 from 106.70.152.247:8333 (outbound): previous block 0000000000000000000c0b575b54782ac1233b52167a4360b387a92aad6d5c36 is known to be invalid
2022-04-02 19:16:35.520 [INF] CHAN: Adding orphan block 0000000000000000000504f79236c4c8cbfee36d23250d3e4b741f0866578586 with parent 00000000000000000000a62dbd00aac10221e14ee31e4ccf0f69b5992ef2dc09
...
```

Depending on ones node setup, an event like this might terminate the node, as 1
minute later, this node was terminated:

```log
2022-04-02 19:17:31.986 [INF] CHAN: Adding orphan block 00000000000000000002fb1e3184747bf39b69a1d12d4fa0c27e333e916e10ad with parent 000000000000000000029b9cf49faf90b0a83041c399abf1cef921456132ef20
2022-04-02 19:17:33.965 [INF] CHAN: Adding orphan block 0000000000000000000314d2b93903aab6bc9f12401eeb2d98ac5e641352a355 with parent 00000000000000000002fb1e3184747bf39b69a1d12d4fa0c27e333e916e10ad
2022-04-02 19:17:34.270 [INF] BTCD: Received signal (terminated).  Shutting down...
2022-04-02 19:17:34.270 [INF] BTCD: Gracefully shutting down the server...
2022-04-02 19:17:34.270 [WRN] SRVR: Server shutting down
...
2022-04-02 19:17:34.278 [INF] SRVR: Server shutdown complete
2022-04-02 19:17:34.278 [INF] BTCD: Gracefully shutting down the database...
2022-04-02 19:17:34.279 [INF] BTCD: Shutdown complete
```

Even if this was an ephemeral or user error (btcd was not shut down by the
operator, but it may have been a setup error), btcd has encountered events like
this in [the past](https://github.com/btcsuite/btcd/issues/1024). It would be
optimistic, at best, to think that _any_ FOSS node implementation is immune from
such events, which moving forward, might manifest themselves as zero-days, for
zero-days are a problem inherent to all software.

### A Node Watchman

There is something to be said for sussing out root issues, submitting PRs, and
getting issues resolved at the source, but there is also something to be said
for end user plebs who can not code, having the power to diversify away this
kind of risk entirely.

Among other things, a HAB Cluster accomplishes this: it becomes the dedicated
watchman of all local nodes.

The above logs were from a Kubernetes pod in the [Proof Of Concept](/poc) HAB
node. Within 30 seconds of the node shutting down, Kubernetes saw the
degradation in service, rebooted the node, and it re-synced past the problematic
block, without any human intervention:

```log
2022-04-02 19:18:04.431 [INF] BTCD: Version 0.22.0-beta
2022-04-02 19:18:04.432 [INF] BTCD: Loading block database from '/root/.btcd/mainnet/blocks_ffldb'
2022-04-02 19:18:04.932 [INF] BCDB: Detected unclean shutdown - Repairing...
2022-04-02 19:18:04.938 [INF] BCDB: Database sync complete
2022-04-02 19:18:04.938 [INF] BTCD: Block database loaded
...
2022-04-02 19:21:20.284 [INF] SYNC: Processed 2 blocks in the last 12.31s (1834 transactions, height 681515, 2021-05-02 10:29:45 +0000 UTC)
2022-04-02 19:21:35.062 [INF] SYNC: Processed 3 blocks in the last 14.77s (1878 transactions, height 681518, 2021-05-02 10:33:55 +0000 UTC)
2022-04-02 19:21:49.979 [INF] SYNC: Processed 2 blocks in the last 14.91s (2319 transactions, height 681520, 2021-05-02 10:37:27 +0000 UTC)
```

But more importantly than that, the HAB node itself, which was simultaneously
running bitcoind, experienced no downtime from the perspective of the bitcoin
network or any higher layers running locally, were there any at the time of
running this sync.

## Conclusion

In 2008,
[Satoshi himself](https://satoshi.nakamotoinstitute.org/emails/cryptography/2/#selection-81.0-81.620)
opined on issues of availability and node management:

> At first, most users would run network nodes, but as the network grows beyond
> a certain point, it would be left more and more to specialists with server
> farms of specialized hardware. A server farm would only need to have one node
> on the network and the rest of the LAN connects with that one node.

But this was 4 years before the launch of Raspberry Pi, 5 years before Docker
really made sense of containers, and 7 years before the robust FOSS
orchestration technology of Kubernetes arrived. Most of the technologies which
enable HAB Nodes, came after Satoshi's time in their individual niche settings.

Even if the need to solve the problem of delivering highly available node
infrastructure was deeply felt by Satoshi—for instance, if he meant LAN
connections to server farms to mean the LAN network of self-hosted households
running HA Nodes—there wasn't an actionable or accessible way forward when he
wrote those lines. The prevailing way forward was not through container
orchestration, but was as Satoshi said: primarily through specialized hardware.

Now, thanks to Satoshi's efforts to design Bitcoin so robustly, to Core's
efforts to expand on this premise, the efforts of #UASF to keep the cost of a
minimally viable node as small as possible while scaling, the fantastic work
being done in the microcomputer / SBC industry, and the unparalleled work done
in containers and container orchestration, we can now solve these issues, and
should, for the health, preservation, decentralization, permanence, cost, and
robustness of Bitcoin. The more we push on clustered edge nodes, the more the
entire bitcoin ecosystem improves.

Contrary to what Satoshi seems to have meant, a home-server HAB Node should run
many Bitcoin nodes, it should run on a diversity of easily acquirable consumer
hardware, and node operators need not be server specialist for this robust
version of node operation to be reality. As you'll see in the guide, setting up
a HAB node is [well within](/docs/Introduction/what#the-content-vs-the-commands)
the range of what a simple GUI might need, _already_.

### "OK, but isn't container orchestration _complete overkill_?"

**Yes. And that's the entire point.**

Let us not forget that this is Bitcoin we are defending, the first money in
human history which does not commit time theft. The first honest money. The
first money to empower all people equally and the first money to tell the truth.

Let's put it to scale: using container orchestration to defend Bitcoin is akin
to deploying an aircraft carrier to make a routine arrest of what appears to be
a petty criminal. Be it unlikely, we'd rather have the Seal Team on the Aircraft
Carrier be able to extract and safely dispose of a dirty nuke, with every
possible resource available to them, and do so within minutes, should a nuke be
concealed by he who we at first thought was a petty criminal. It may not seem
obvious at first blush, but the choice to use k8s becomes more and more
appealing as a solution to the problem at hand the deeper you understand the
asymmetric difficulty of running highly available infrastructure, and what is
needed to meet a truly unknown-depth threat model. Again, looking to DNA as a
guide, we see there is no better way forward, for it is how we as the human
species, and all life which uses DNA, function at the cellular level.

Indeed, there are other ways to solve the problems that a HAB Node solves, and
solve them cleanly without container orchestration (`systemd`, running multiple
un-clustered nodes, for instance). But pursuing all of those options, to their
ultimate ends, eventually means creating a new form of highly available
infrastructure which solves all the exact same problems that k8s already solves
and has been solving for decades in defense of trillions more in value than
Bitcoin.

Strangely, the analogy above may not even cut deep enough. An aircraft carrier
costs somewhere north of $10 Billion to make, whereas $56.5 Billion has been
invested in the
[landscape and infrastructure](https://landscape.cncf.io/?grouping=no&sort=amount)
in and around Kubernetes—the CNCF _exists_ because of Kubernetes. We should be
running HAB nodes to incorporate as much of that incredible work, deep wisdom,
and experience as possible. If the legacy internet is dying, and the peer web is
the future, who knows whether Kubernetes came to be for such a time as this?

There is no need to reinvent this wheel, we merely need to _use it_.

## Do We Need This Solution?

Yes. Resoundingly so. To step back, the problem we face is small at the moment,
but it carries all the characteristics of a problem that will only increasingly
become more evident as the self-hosted Bitcoin node ecosystem continues to
mature into the _very source_ of wages, circular economy, and human flourishing
the world over.

---

For a more in depth explanation on how this is accomplished, see [How?](/how)
