---
sidebar_position: 4
---

# Host Naming

Names don't need to be entered anywhere just yet, they only need to be assigned
in physical meat-space.

:::info Naming conventions

All host names must be unique, valid
[dns subdomain names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names)
as per RFC 1123 to comply with the Kubernetes spec. That means they must:

- Contain no more than 253 characters
- Contain only lowercase alphanumeric characters, '-' or '.'
- Start with an alphanumeric character and end with an alphanumeric character

:::

For example, our host names for our 7 machines in the Proof of Concept are as
follows:

- `nuc1`
- `nuc2`
- `pi1`
- `pi2`
- `pi3`
- `pi4`
- `pi5`

This is a pretty straightforward WYSIWUG naming convention, but you are welcome
to get creative with naming as long as you stay within the naming spec. However,
it is advisable to _not_ name hosts by roles like `leader`, `master`, `slave` or
`work-horse`, etc. This guide is architecturally predicated on hosts being role
agnostic. Highly available services assume failure and replacement of resources,
or having interchangeable and expendable parts. Naming by role might add
confusion here... for instance, if "Slave" became a control plain node, the very
leader of the group.

Importantly, a host name will also be used as a fully qualified domain name
(FQDN). So, if you have hosts that are off site, and you do not have access to
your router to create custom DNS mappings (which don't need to be fully
qualified, like 'pi1'), you will need to name them according to how they can be
reached: e.g. `134.34.2.134`, or `s8dj1-us-west.hostingservice.io`. Most people
will not have to deal with this just yet, and this guide will not be working
with remote hosts at the present moment.

:::tip Physically name the devices

It is advisable to keep track of these names by actually attaching them to the
exterior of the physical device somehow, no need to be permanent, but this may
help with troubleshooting should it arise.

:::

When you attempt to `standup` a vanilla host, checks will be run to ensure that
host names meet the RFC 1123 standard. In fact, running these checks is the
perfect opportunity to introduce Ansible. So, let's do that now.
