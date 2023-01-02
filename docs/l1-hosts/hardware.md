---
sidebar_position: 1
---

# Hardware Requirements

This is the technical hardware specification for this guide. You will need:

1. At least 3 computers that
   [exceed minimum requirements for k3s](https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/),
   be they pis, NUCs, old computers, etc. They all need basic power and
   networking capabilities.

1. At least 6 TB of hard drive space, in three, 2 TB disks (as of Dec 2022),
   preferably in SSD form. In fact, Longhorn recommends
   [_against_](https://longhorn.io/docs/1.2.3/best-practices/#minimum-recommended-hardware)
   spinning disks. One 2 TB drive per host. Yes, if you want to sync the entire
   blockchain, 2 TB drives are required to use Longhorn because of the way
   snapshots work, reducing volume size is under
   [active discussion](https://github.com/longhorn/longhorn/issues/836).
   **Exception:** We don't necessarily need to keep the full blockchain on every
   node, we can, after all, use pruned nodes. We can not recommend using no full
   blockchain on _all_ nodes, so if you want to use pruned nodes (or if
   circumstances dictate it) you will have to design Layer 3 accordingly. More
   on this in [Layer 3](/docs/l3-bitcoin/standup-live).

   1. **Raspberry Pis** This took us months of testing and returning hard drives
      till we found one. The only 2 TB drive that reliably fit the requirements
      was Samsung T5 2 TB portable SSD. In fact, it may be the only non-powered
      2 TB SSD drive that works with RPis. Some considerations when choosing an
      SSD that went into finding the Samsung SSD:

      1. The RPi 4b 8gb can only deliver about 1.2A of power over ALL USB ports.
         Many SSDs require 1A or more. And some will accelerate performance
         periodically and consume 2-3A (like NVMe). Under such conditions, the
         SSD will simply stop working briefly, fail, or restart the Pi, and this
         is obviously problematic.
      1. For most drives, the more TBs the more amps needed. As such, before
         choosing an SSD drive, you will need to decide if you want to power the
         drive via a USB hub or not. If not, the options for a 2 TB SSD drive
         dramatically decrease. As of Feb 2022, the Samsung T5 2 TB portable SSD
         consumes .5A, is slow (as far as SSDs go), but fits the bill and has
         been confirmed by multiple sources to work seamlessly with RPis, to
         which we will add our name.
      1. If you are using a USB hub, make sure that the hub does not also supply
         power to the pi as this will absolutely cause problems.

   1. **NUCs** If you are purchasing for the first time, we recommend buying
      "bare-bones" versions and then purchasing an additional 2 TB NVMe drive
      (if the NUC supports M.2, of course). Many NUCs will also support 2 TB
      SATA and there is always external options as well which many newer NUCs
      can support with thunderbolt / USB-C ports, choose according to your own
      budget and needs, much more things work than not in comparison to pi
      peripherals as NUCs are far more extensible.

1. Control/local computer to operate on the node (if you have a cluster of 3
   computers, this is your 4th computer). It does not need any high performance
   stats or space, it merely needs to be able to run the software in
   [Software Requirements](/docs/l1-hosts/software).

1. Network router with internet access. Preferably, you will use a dedicated
   pfSense box. The security model for this HAB node is largely predicated on a
   lot of pfSense features. For instance, keeping the node behind a dedicated
   firewall.

1. An SD card > 8 GB and/or a USB flash drive > 8 GB for flashing images. And if
   you have one for each host, all the better.

1. If you are not exclusively setting up raspberry pis you will need a keyboard
   & external monitor (and you [shouldn't](/poc#host-diversification)
   exclusively set up Raspberry Pis).
