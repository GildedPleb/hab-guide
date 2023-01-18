---
sidebar_position: 2
---

# Target Audience

This guide should be of keen interest to everyone who cares about
self-sovereignty, freedom, privacy, the peer-to-peer web, and human flourishing.

It should be of interest to every Bitcoiner.

## Who Is This For?

However, not all those people will find that actually doing this guide is for
them, or for them _yet_. This is for seasoned node operators who would like to
level up their node, or who are beginning to feel they _should_ level up their
node. What is more, it will be deeply helpful to have experience in software
engineering and Linux.

That said, this guide assumes:

- You do not know how to code
- But you are comfortable reading and reasoning through code
- And you are comfortable at the command line

If you have completed the excellent [RaspiBolt](https://raspibolt.org/) guide
you will be well positioned to approach this guide. In fact, that guide should
be considered a _required_ prerequisite to this guide.

However, we must stipulate that philosophically the guides do differ a bit. It
is prudent and reasonable, when provisioning one node, to embrace ideas like "do
everything ourselves", but this becomes an impasse when its "do everything
ourselves 7 times, for each computer". We will still strive to "give foolproof
instructions", explain things, and will strive to never ask you to run code
which we also do not provide a source and explanation for.

To give you a taste of what you are about to embark on, the RaspiBolt guide
provisions _one computer_ by using the terminal to run _dozens of commands_.
This guide uses concepts like Infrastructure As Code that can use _one command_
in the terminal to provision _dozens of computers_.

:::caution Caution: HAB Nodes can be expensive

Unless you already have a budget set aside, or already have spare computers
ready to go, HAB Nodes multiply expenses by multiplying hosts. The power and
engineering that goes into a HAB Node is no joke, and at the end of the day you
will have spent money well, but do set a budget before continuing on this
project, for it very easily could spiral out of hand.

At a minimum, 3 sufficient computers will need to be networked together with a
router that has internet access, and a control computer will be needed to
facilitate the project.

:::

## Who Is This Not For?

If you are not running a singular (or multiple, non-clustered), self-hosted
bitcoin node(s), this guide may not be for you. You should do that first (again,
[use the RaspiBolt guide](https://raspibolt.org)), get the lay of the land, and
after some time, come back.

It is far more important for Bitcoin and your own understanding in the space to
run a simple and cheap full node first. Running a simple and cheap full node is
a deep and fundamental part of the bitcoin ecosystem that ALL participants
should participate in, an excellent learning experience, and one you should
approach in a way that you know will not overwhelm you.

A HAB node **DOES NOT** help entry level node operators get closer to that
goal—it would be like learning to fly an airplane before learning to ride a
bike. Well, at least this is true presently. We believe that, eventually, we
should be able to get HAB Nodes from friendly GUIs, where indeed, it might be as
easy as ridding a bike.

But for now, let us reiterate this point, but in a friendly red color:

:::warning THIS SHOULDN'T BE YOUR FIRST NODE

This should not be anyone's _first_ node unless they are already a Site
Reliability Engineer, or have other real operational experience with servers
and/or container orchestration.

:::

## Is This For You?

Given all the above, we dearly hope that this guide is for you.

Before we get into the nitty-gritty of hardware and code we must first survey
**what** we are going to do.
