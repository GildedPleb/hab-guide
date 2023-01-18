---
title: In Defense Of HAB Nodes
---

# In Defense Of HAB Nodes

Bitcoin, in whole, is a fundamentally robust, antifragile or highly available
(HA) system. Although most nodes are not HA, meaning it is unreasonable to
expect persistent connections to any randomly selected Bitcoin node, the design
and incentives in Bitcoin as a whole ensure many nodes will always be available.
Stated differently, though individual nodes may crash, it is increasingly
difficult to get all the nodes worldwide to crash all at the same time. Because
the average node downtime will generally be a shorter interval than
uninterrupted uptime for the same node, and because the incentives and consensus
mechanisms in Bitcoin cause node running to be of importance, Bitcoin, at large,
remains reachable:

> "Nodes can leave and rejoin the network at will"
>
> — Satoshi, Bitcoin White Paper

Bitcoin uptime, as a whole, [is outstanding](https://bitcoinuptime.org/), but
the low marks for the average node persist, for the average node does not have
the luxury of a distributed worldwide p2p incentive system optimized to keep it
alive every second. Or at least, it doesn't _yet_.

A HAB Node does not change or attempt to fix anything about Bitcoins security or
operational model network wide: Bitcoin does not need "fixing", which is why
this is being presented as an independent project and not a BIP. However,
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
in a kernel, or compromised dependencies. These threats are both unknown, occur
at unknown times, and may themselves go unnoticed for days, weeks, months, or
even years.

To even begin to address these threats, asymmetric feats of engineering,
planning, and flexibility must be employed. Though many of these threats might
be mitigated in the source code, those solutions could be days, weeks, or months
away. Considerable operational front loading at the edge, away from root cause,
is the only practical way to make sure that any number of future probabilistic
downtime events aren't catastrophic for the non-developer (or even
non-technical) node operator, while root issues are addressed and fixed by those
able. And to complicate it all the more, much, if not all of that front loaded
engineering, may never be needed or used.

Thankfully, we know these efforts are not a waste of time and that they work
because many systems exist which face similar kinds of threat models. Most
notably, the—let's call it—DNA model. Consider this, information systems and DNA
are fundamentally alike: DNA is code. If Bitcoin is the organism, then nodes are
the individual cells. Each individual cell, alone, is entirely expendable by the
organism, but only together do all the cells make the whole organism. Bitcoin
does not exist to defend each node, but each node exists to serve a purpose for
the whole. As such, cells can only rely on minimal help from the larger organism
and must chiefly rely on their own internal threat mitigation technology to
continue to allow them to execute on their purpose.

That technology set is encoded in the cells DNA. For any one cell to accomplish
its purpose, it might only need to use a small fraction of the DNA available to
it for the majority of its existence. "Junk DNA" might even argue for less than
3%. But is the rest of the DNA really junk? By no means. Within the rest of the
DNA (among many other things) there reside instruction on how to deal with
untold count of long dormant threats, unknown threat mitigation strategies,
emergency protocols, communication and search mechanisms, and so much more.
Molecular biology assumes "better to have it and not need it than need it and
not have it".

Contrary to DNA's threat modeling and strategy, non-highly available node
operators are unaware of the need (or flatly reject the need) to have this
expansive threat mitigation in place. Highly available node operators embrace
the DNA threat model, they adapt a similar philosophy to DNA, and run their
nodes with the widest threat model they can muster in mind.

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
is reasonably feasible for the context which the node is operating in, all the
single points of failure, both known and unknown. As such, a HAB node is
designed from the ground up with this end in mind.

## Why Is this Important?

From this premise, we can begin to ask _why_ this is important, what specific
benefits it gains us, and what specific or unknown threats it curtails. Though
there are undoubtedly many more answers and points of discussion, these stand
out and are worth elaborating on here:

- Reduction to Lost Income / HALX Option
- Self-hosting / Sovereign Option ("Trusted Third Parties Are Security Holes")
- Obscure Threat Mitigation / Hydra Option
- Forecasted Obsolescence / Induction Option
- Node Operators are First Class Voting Citizens
- Bitcoin is. (And Will Always Be Under Attack)
- Dissenting Opinion Refutation

## Reduction to Lost Income / HALX Option

It is becoming clear that higher layers of the stack will increasingly mean
income streams—routing fees, streamed sats from podcast listens, gaming apps,
etc. As those income streams mature into living wages, it will become paramount
for security, autonomy, and privacy that privately operated, independent,
[economic nodes](https://medium.com/shiftcrypto/we-need-bitcoin-full-nodes-economic-ones-fd17efcb61fb)
process those transactions. Though transactions may only be delayed by downtime,
they can not be ultimately processed without compute, power, an internet
connection, and memory. As such, node downtime will soon mean either lost or
delayed living wages, bidirectional income flow imbalances, or sacrifices to
privacy, autonomy, security, independence, etc.

A highly available node alleviates this pressure. From the physical and data
inputs, hardware layer, and up, it has the capacity to offer all services as
highly available, and thus reduce all possibilities of liquidity interruption.

For the purposes of this guide, we refer to this ability as "if and only if you
have a highly available bitcoin node, can you have a highly available layer X
node". H.A.B.N. ⇔ H.A.L.X, or Highly Available Layer X Option. Put differently,
if operators wish to have higher layers highly available (and they will for
liquidity) then they will need to start at the physical and data inputs layer,
the hardware layer, and work through layer 1, Bitcoin. When higher layers become
economically viable, this is how the incentives in Bitcoin will _force the low
marks in average node operation to be remedied_.

The moment meaningful capital is involved on higher layers, where that capital
is in competition to be earned or adversarially won (say, in the case of
avoiding financial censorship), combined with the moment a node operator is able
to build a HAB Node, the incentives then align. From that moment forward, HAB
Nodes become the de facto basic utility to protect capital flows until yet more
robust engineering comes up with something better. Operators may not choose to
employ HAB nodes built from these pages, or with the technology therein, but at
the time of writing, no other class of node exists which addresses the concern.

## Self-hosting / Sovereign Option

With the never ending stream of nefarious Big Tech / Gov involvement in or
enabling of high profile hacks, censorship, property confiscation, privacy
violation, data mining and too many other rights and privacy infringing actions
to count, many people have rightly leaned into the idea of self-hosting all
their data, services and apps. HAB Nodes, by nature of their redundant and
oversupplied resources, greatly enable this functionality.

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
targeted to any architecture, and be a hosting location for others to find
bitcoin implementations.

But it doesn't stop there, HAB Nodes would be great candidates for TOR relay
nodes, and maybe even TOR exit nodes, but considerable research would be needed
here.

For the purposes of this guide, we refer to this as the Sovereign Option, as it
mitigates MITM attacks. True, this kind of attack can be mitigated without HA,
however, HA mitigates the attack far more robustly by providing the service the
attack seeks to shut down in a highly available capacity.

## Obscure Threat Mitigation / Hydra Option

MITM attacks are fairly well understood. However, a HAB node accounts for
bizarre, unknown, and/or unlikely attacks as well. Designed correctly, it is
decomposable into individual, self-sufficient nodes. Together, for the purposes
of this guide, we call this the Hydra Option, as in some cases, it gives a node
the seemingly mythical power of growing back and multiplying new heads.

Potential scenarios for this optionality include, but are not limited to:

1. Most basically, it allows the node operator to cheaply diversify location as
   a first order function of the node: run a cluster with a host at home, the
   office, and at a family members house. It is then trivial to change from one
   to many nodes, or to slice off one or many parts, without taking down the
   cluster.
1. It allows the node operator to front run supply chain collapse for his
   immediate meat-space network who may need to all-of-a-sudden place a bid on
   spinning up their own nodes.
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
   operation, while retaining high levels of security and independence. This,
   undoubtedly, would be expensive month to month, but might be able to be
   independent of "Bitcoin" services entirely: anywhere a VPS can run might now
   also have the ability to be a host in a HAB Node.
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
far in advance of need, happens once, and is far less difficult as entirely new
computers can be provisioned without downtime or interrupting auxiliary
services. Once provisioned, new containers can be spun up as expansions of
existing clustered nodes, meaning they are automatically networked, load
balanced, and integrated with auxiliary services—which could very will
eventually include keys, accounts, and wallets. For the purposes of this guide,
we call this the Induction Option: almost any hardware can be inducted into the
node with zero-downtime, and maintenance can also happen without downtime.

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
voice which has influence over individual operators which must make their
decisions from first principles, not deep pockets.

Further, commercial node opinions are mired in insider dealings, closed-source
development, Sybil attacking node version signalling by spinning up hundreds of
AWS nodes, getting hacked, defrauding users, and other shenanigans. In short,
though they may vote on bitcoin protocol rules, it is clear that their efforts
would be better spent trying to clean up their poor track records than publicly
voicing any opinion about Bitcoin.

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
actively decentralizing, and actively influencing the direction of the network.
When it is not running they are flatly not making those contributions,
abdicating responsibility, and silencing their own voices.

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
centralize Bitcoin around nodes which are highly available. Formerly, this has
meant datacenter nodes.

In Bitcoin, whoever controls nodes, controls Bitcoin. And we should assume that
for years now, very moneyed interests have run replicated nodes in the cloud,
using the very same tech stack we are employing in this guide, for the purpose
of having large stakes in the bitcoin p2p network. Indeed, companies exist to
explicitly run nodes in the cloud, and
[boast about doing exactly this](https://blockdaemon.com) for various
blockchains. ![Nodes managed by blockdaemon](/img/nodes_managed.png)

This is great for shitcoins, as they are all designed to be attacked in this
very manner, but it is not for Bitcoin. Bitcoin is designed to be decentralized.
It is intolerable for Bitcoin to not be fully at the ready, and equipped with a
counterattack at the edge: the very technology and resources which give the
attack any bite at all.

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

## Dissenting Opinion

Is a HAB node a panacea? Far from it. Here are some oppositional arguments worth
addressing and potential refutations:

### Security

Though user error and environmental factors will also most likely be heightened
security problems under a HAB Node paradigm, those factors are also the case
with single node operation. Here are some security concerns that pertain
specifically to HAB Nodes:

1. **Kubernetes Complexity.** The security around Kubernetes is an
   [ongoing discussion](https://cloud.redhat.com/blog/most-common-kubernetes-security-issues-and-concerns-to-address)
   seriously worth addressing. Because Kubernetes is a complex ecosystem on top
   of a complex paradigm, it is very easily prone to miss-configuration, blind
   spots, and a host of niche problems which can open up security concerns for
   all involved.
1. **Attack Surface Multiplication.** What is more, moving from one hardware
   device to many will mean multiplying attack surfaces for the node. This is
   also true with the introduction of new dependencies that the node will need
   to function and thus Bitcoin will need to rely on. Each of these dependencies
   will also bring a new attack surface. The same can be said for multiplying
   location and other forms of node diversification.

**Potential Refutation**

We can not claim to, in this guide, presently offer a robust security solution.
It should be noted here, as it is in the guide, _under no circumstances should
private keys presently live on a HAB Node built from these pages_. However, we
do have a few important frameworks in our favor that will allow us to start
flushing out a robust solution both from first principles and practical reality:

1. **Completely FOSS.** From OS to Bitcoin, there are no parts of the stack
   which can not be fully understood and audited by anyone. As such, we adopt
   the security model therein: public and open discussion, full accessibility to
   the code, full community accountability, serious difficulty in injecting
   vulnerabilities, and so on.
1. **Complexity/Uniform Use Case.** Unlike broad usage of K8s, everyone who runs
   a HAB Node will more or less use similar plugins and apps, arrange the
   cluster in similar ways, and have the same security concerns. As such, we can
   begin to find and build best practices and sensible defaults around HAB Nodes
   and HAB Node security. With proper Infrastructure As Code techniques, setup
   can be very repeatable and testable, and it can responsibly account for
   fringe cases and minimize or remove setup/user errors. From here, because we
   are already relying on automation in the stack, we can implement and make use
   of practices like
   [Security as Code](https://www.bmc.com/blogs/security-as-code/).
1. **Magnitude of Problem.** Yes, building nodes on k8s is increasing dependency
   attack surface and can be viewed as inserting weakness. However, Kubernetes
   defends trillions in value. It's not hard to extrapolate, that at all moments
   of Bitcoins history, k8s has defended more value than Bitcoin has. Far from
   inserting a weakness into the Bitcoin stack, strictly in terms of value
   defended, building nodes on k8s may actually be inserting strength, whereas
   building k8s on bitcoin might be inserting weakness. Yes, Bitcoin's value
   lies behind _one_ protocol, while the value defended by k8s is behind
   thousands of companies, code implementations, and custom k8s configurations,
   but at some level, value is value.
1. **Multi-Sig Wallet Wisdom** What is more, multi-sig wallet implementations
   and multi-sig wallet providers have given considerable thought to how to
   secure multi-point systems and how to think about these systems adversarially
   and tactically. There is of course no direct mapping here, but there is
   considerable wisdom to be gleaned from the solutions and best practices
   produced in multi-sig wallet management.
1. **Multiplying Attack Surface**: Yes, we are multiplying attack surface, but
   we are also multiplying the options for healthy node operation. We are not
   meaninglessly opening up ports on our computer, these are real security
   advancements, in a real security trade-off. A trade-off trillions of dollars
   in legacy tech value makes every day.

### Cost

Apart from the reality that HAB Nodes can potentially cost unlimited amounts, it
will remain true that it is sufficient and necessary for a HAB Node to be at
minimum two or preferably three hosts (depending on k8s availability mode) and a
router. This will always be more expensive than a single node on the most
expensive host of the same group, without a dedicated router. This has these
knock on effects:

1. Multiplying hosts may be non-productive for keeping Bitcoin decentralized.
1. HAB Nodes present messaging problems that may confuse people out of running a
   single node at all.
1. Strictly on cost alone, they may price out participation.

**Potential Refutation**

1. **Anti-decentralization.** We believe that this argument only has merit if
   HAB Nodes are designed in such a way that the
   [Hydra Option](#obscure-threat-mitigation--hydra-option) is not employed. For
   instance, if instead of diversifying hosts, a consumer pooled the entire
   budget into one host and then ran a k8s cluster on VMs on that host to create
   a "HAB Node". In such a case, all those resources can only function together,
   they have at least one practical similarity with a cloud based node: they are
   not as friendly with decentralization as they could be. With a Hydra Option,
   decentralization is at worst a forever potentiality, at best it is a fully
   operational part of the HAB Node. What is more, some long term effects of
   enabling a Hydra Option might actually create more diversity, and thus
   decentralization, in node hardware.
1. **Messaging Problem.** Indeed,
   [care should be taken](/docs/Introduction/who#who-is-this-not-for) to not mix
   messaging: running a HAB Node _should not_ be anyone's first node. If a
   potential node running pleb is asking "Should I get a HAB node or a regular
   node?" and that question is preventing them from running any node at all, we
   think that it is fair to conclude that person has way too big a budget, which
   will be a vast minority of potential node operators. For such a person, they
   should re-evaluate the budget for the purpose of running a single node, buy
   Bitcoin with the surplus, and once it has sufficiently appreciated, expand
   their node. It should be obvious to all economically constrained participants
   that running a single node is cheaper, faster, and easier to understand. What
   is more, running a single node, in many cases, will be the first hardware
   acquisition for a future HAB Node,
   [as was the case for the PoC](/poc#looking-back).
1. **Priced Out Of Participation.** Again, HAB Nodes should not be anyone's
   first node. However, they can very easily be someone second node. And they
   should be a second node over the current alternative of Lightning Service
   Provider for the sufficiently sophisticated Bitcoiner, and once ligntning
   functionality makes its way to the HA universe. To be clear, we think it is a
   net benefit that someone might first choose an LSP before ever running their
   own node, but once they run their own node, then the next node should be a
   HAB Node, for a HAB Node, in the long run (but not presently), eliminates the
   need of an LSP. As for cost, or being priced out of participation, this
   pathing is key. At it's simplest, a HAB node is no less than two nodes and a
   router. Almost everyone already has a wifi router, so, after they purchase
   their first single-node, which every Bitcoiner should have done already (or
   is about to do), they are then only one purchase away from a HAB Node. In all
   likelihood, their first node would at some point be dated hardware that could
   use replacing, or be out of storage. But it would also most likely be able to
   enter a new cluster because of the
   [Induction Option](#forecasted-obsolescence--induction-option), and as such,
   this relieves the pressure of planning far ahead and purchasing high-end,
   longer lasting hardware for more money and replaces it with affordable and
   incremental purchases as need or want arises because hardware in a HAB Node
   is infinitely replaceable. Far from pricing people out of participation, it
   might actually, in the long run, price in more participation.

Undoubtedly there are more dissenting opinions than these. If you have one,
please don't hesitate to open a PR. If it is well argued it will be added to the
list, and hopefully there will be a decent refutation as well.

## Conclusion

In 2008,
[Satoshi himself](https://satoshi.nakamotoinstitute.org/emails/cryptography/2/#selection-81.0-81.620)
opined on issues of availability and node management:

> At first, most users would run network nodes, but as the network grows beyond
> a certain point, it would be left more and more to specialists with server
> farms of specialized hardware. A server farm would only need to have one node
> on the network and the rest of the LAN connects with that one node.

BCH and BSV adherents often quote this email in defense of large blocks. But
this was written 4 years before the launch of Raspberry Pi (and the explosion of
cheap consumer SBCs), 5 years before Docker really made sense of containers, 4
years before Ansible made provisioning and automation intuitive, and 7 years
before the robust FOSS orchestration technology of Kubernetes arrived. As such,
the key technologies which make HAB Nodes possible came after Satoshi's time in
their individual niche settings.

Even if the need to solve the problem of delivering highly available node
infrastructure was deeply felt by Satoshi—for instance, if he meant LAN
connections to server farms to mean the LAN network of self-hosted households
running HA Nodes—there wasn't an actionable or accessible way forward when he
wrote those lines. The prevailing way forward was not through container
orchestration, but was as Satoshi said: primarily through specialized hardware
run by specialists.

Now, thanks to Satoshi's efforts to design Bitcoin so robustly, to Core's
efforts to expand on this premise, the efforts of #UASF to keep the cost of a
minimally viable node as small as possible while scaling, the fantastic work
being done in the microcomputer / SBC industry, the ingeniousness of DevOps
engineers to automate provisioning, and the unparalleled work done in containers
and container orchestration, we now no longer face these issues. And we should
pursue those advancements for the health, preservation, decentralization,
permanence, and robustness of Bitcoin. The more we push on clustered edge nodes,
the more the entire bitcoin ecosystem improves.

Contrary to what Satoshi seems to have meant, a home-server HAB Node should run.
It should run many Bitcoin instances, it should run on a diversity of easily
acquirable consumer hardware, it should be provisioned via simple processes, and
node operators need not be server specialist for this robust version of node
operation to be reality. As you'll see in the guide, setting up a HAB node is
[well within](/docs/Introduction/what#the-content-vs-the-commands) the range of
what a simple GUI might need, _already_.

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

Interestingly, the analogy above may not even cut deep enough. An aircraft
carrier costs somewhere north of $10 Billion to make, whereas $56.5 Billion has
been invested in the
[landscape and infrastructure](https://landscape.cncf.io/?grouping=no&sort=amount)
in and around Kubernetes—the CNCF _exists_ because of Kubernetes. We should be
running HAB nodes to incorporate as much of that incredible work, deep wisdom,
and experience as possible.

Indeed, there are other ways to solve the problems that a HAB Node solves, and
solve them cleanly without the dependencies we introduce to do it (`systemd`,
running multiple un-clustered nodes, for instance). But pursuing all of those
options, to their ultimate ends, eventually means creating a new form of highly
available infrastructure which solves all the exact same problems that k8s
already solves and has been solving for a decade in defense of trillions more in
value than Bitcoin. If the legacy internet is increasingly becoming a walled
garden, and the peer web is the future, who knows whether Kubernetes came to be
for such a time as this?

There is no need to reinvent this wheel, we simply need to _use it_, and we
already can, as the PoC demonstrates.

## Do We Need This Solution?

Yes. Resoundingly so. To step back, the problem we face is small at the moment,
and not without its difficulties, but it carries all the characteristics of a
problem that will only increasingly become more evident as the self-hosted
Bitcoin node ecosystem continues to mature into the _very source_ of wages,
circular economy, capital flows, and human flourishing the world over.

---

For a more in depth explanation on how this is accomplished, see [How?](/how)
