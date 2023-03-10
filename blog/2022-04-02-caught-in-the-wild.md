---
title: A Caught in the Wild Case Study on HAB Node Importance
description: Actual fail logs from a failed node, and the k8s responce
slug: Case-study-1
authors: endi
tags: [Case-Study, Failure-Recovery]
hide_table_of_contents: false
---

To provide some context around why HAB Nodes are practically important, this is
a real log from [btcd](https://github.com/btcsuite/btcd) syncing the bitcoin
live net that we witnessed which demonstrates the power of HAB Nodes:

<!--truncate-->

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
operator, but it may have been miss-configured), btcd has encountered events
like this in [the past](https://github.com/btcsuite/btcd/issues/1024). It would
be optimistic, at best, to think that _any_ FOSS node implementation is immune
from such events, which moving forward, might manifest themselves as zero-days,
for zero-days are a problem inherent to all software.

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
