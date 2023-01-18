---
sidebar_position: 5
---

# Practical Considerations

Design considerations can be very circumstance dependent. These practical
considerations are more universal goals which this guide will aim for. We will
start with hardware, move to networking, and then approach software. This is not
a technical requirements list, it is a high level overview of what we will need.
If you want to see the specific technical requirements, start with
[Hardware Requirements](/docs/l1-hosts/hardware).

## Hardware

Hardware is expensive, and the node expense will balloon unless managed
appropriately. You probably are already running a single computer node. As a
first measure, we will re-purpose and expand on top of it, counting it as one of
your hosts.

### Multi-Compute

The node needs to be composed of multiple computers, which is the single most
important step for removing single points of failure. A composable node can grow
and shrink accordingly. An example priority resource list to meet multi-compute
might be:

- Raspberry Pis, bare-metal, ARM
- NUCs, bare-metal, AMD
- Random old computer, bare-metal, most like AMD
- VPS, cloud, AMD (usually)

Each computer (also referred to as "host" in this guide) should have adequate
resources to run a full node itself, if disconnected from the cluster. To this
end VPS will probably be the most expensive long term and will not be considered
for this guide at the moment.

### Storage

Bitcoin consumes low compute resources (outside syncing), but high storage
resources and network resources. We will soon see why in software, but we should
assume HDD (aka "spinning rust") should not be used for mission critical storage
(like the blockchain). All said storage should be SSD. What is more, SSD should
be minimally 2 TB, as the blockchain is now >500 GB (depending on set flags) and
Longhorn can inefficiently allocate space as well as move volumes between hosts,
meaning 1 host may have two copies of the blockchain from time to time (see
below).

### Power

We will assume utility power is used and also that it is unreliable.

- One (or many) Uninterruptible Power Supply(s) (UPS) should be integrated into
  the node/router as a minimum backstop for power inconsistencies.
- Solar or other power sources should be pursued, but will not, at this time,
  factor into this guide.

### Networking

With a multi-node cluster we will need a network (each node must connect to each
other), and a gateway (each node must have internet access).

**[pfSense](https://www.pfsense.org/)** is an industry-leading FOSS firewall and
router. We will be able to use it to secure and design our network and provide
all kinds of additional services to our node. Some features include:

- The ability to put our node behind a different IP address than our ISP
  assigned IP address via a VPN.
- The ability to add remote nodes, or virtual private servers (VPS), to our
  cluster.
- The ability to silo our node from our local network.
- The ability to provide remote and private access to our node.
- The ability to provide multiple internet access points, via cellular hot-spot
  or satellite.
- The ability to diversify the node into multiple physical locations

## Software

It should go without saying, but all software must be Free and Open Source
Software (FOSS).

### Orchestration

With a multiple computer bitcoin cluster, orchestration software will be
required to get them to talk effectively and "share" or "optimize" resources.
**[Kubernetes](https://kubernetes.io/)** (k8s) is the industry-leading FOSS tool
to orchestrate all kinds of multi-computer architecture, and we should start by
using it and designing around it.

We will use the **[k3s](https://k3s.io/)** distribution for its light wight,
edge-computer focus and robust community support (it works great on Raspberry
Pis, for instance)

### Resource Management

Bitcoin consumes high storage resources. As such, we will consider a custom
storage solution for managing blockchain data in the cluster.
**[Longhorn](https://longhorn.io/)** is a FOSS, lightweight, reliable and
easy-to-use distributed block storage system for Kubernetes.

- Features include:
  - Replicate the Blockchain
  - Snapshot, backup, and restore the blockchain
  - Move the blockchain between hosts
- Drawbacks include:
  - Slow dev cycle means it can be out of sync with the Kubernetes master
    branch. Combined with automated updating this is the only thing that has
    killed the PoC node so far.
  - Not strictly needed
  - _Requires_ SSD drives
