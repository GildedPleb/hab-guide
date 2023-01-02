---
sidebar_position: 2
---

# Tear-down Live

Tearing down the live Bitcoin instance is very simple:

```bash
helm uninstall hab
```

And if you do not change your naming for bitcoin instances in your
`values.hab.yml` and also do not delete the persistent volumes, you will find in
Longhorn that they are retained in the cluster and can be re-used if you run
`helm install` again.
