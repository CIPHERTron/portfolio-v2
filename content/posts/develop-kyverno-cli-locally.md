---
title: Develop Kyverno CLI locally
date: "2022-06-23"
legacyID: "develop-kyverno-cli-locally"
thumbnail: "📘"
description: "The Kyverno Command Line Interface (CLI) is designed to validate and test policy behavior to resources prior to adding them to a cluster..."
published: true
latest: false
cover: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ff2p50e2f7h1f2rdhz73.png"
articleLink: "https://github.com/kyverno/kyverno/wiki/Running-in-development-mode#develop-kyverno-cli-locally"
tags:
  - Kyverno
  - Cloud
  - Kubernetes
  - Go
---

"_The Kyverno Command Line Interface (CLI) is designed to validate and test policy behavior to resources prior to adding them to a cluster. The CLI can be used in CI/CD pipelines to assist with the resource authoring process to ensure they conform to standards prior to them being deployed._"

You can install and use the kyverno cli using [`krew`](https://kyverno.io/docs/kyverno-cli/#install-via-krew), [`yay`](https://kyverno.io/docs/kyverno-cli/#install-via-aur-archlinux) or by directly [building it from source](https://kyverno.io/docs/kyverno-cli/#building-the-cli-from-source). But here, we will see how to use kyverno CLI in development mode. Basically the usage remains the same except that here, you've to execute the Go package i.e. `cmd/cli/kubectl-kyverno/main.go` which essentially calls the kyverno CLI.

### Prerequisite

The only pre-requisite is that you need to have [Go](https://golang.org/) installed and set-up correctly in your local development workspace. Also, your Go version must be greater than `1.16` thus it is recommended to install the latest release. Here's a great set of resources that can help you set-up Go development in your local environment.

- You can download the latest binary release of [Go](https://golang.org/) from [here](https://golang.org/dl/)
- https://learn.gopherguides.com/courses/preparing-your-environment-for-go-development
- If you're on a Windows machine, follow [this](https://learn.gopherguides.com/courses/preparing-your-environment-for-go-development/modules/setting-up-windows/)
- If you're on a Mac or Linux machine, follow [this](https://learn.gopherguides.com/courses/preparing-your-environment-for-go-development/modules/setting-up-mac-linux/)

## Example

Let's say you've to run the `test` command to `validate` the [Disallow Latest Tag](https://kyverno.io/policies/best-practices/disallow_latest_tag/disallow_latest_tag/) policy.
To do this using the kyverno CLI, you run: <br>

```bash
kyverno test ../policies/best-practices/disallow_latest_tag
```

But to use the kyverno CLI in the development mode, follow these steps:

1. Make sure you've cloned the fork of [`kyverno/kyverno`](https://github.com/kyverno/kyverno) and [`kyverno/policies`](https://github.com/kyverno/policies) in the same directory. Your workspace should be looking something like this:

```bash
/kyverno
    api
    charts
    cmd
    definitions
    docs...

/policies
    best-practices
    cert-manager
    other
    pod-security...
```

2. `cd` into `kyverno` directory _(which is your local fork of [`kyverno/kyverno`](https://github.com/kyverno/kyverno))_
3. Run the below mentioned command:

```bash
go run ./cmd/cli/kubectl-kyverno/main.go test ../policies/best-practices/disallow_latest_tag
```

4. On executing the above command, you'll get an output as follows:

```bash
Executing disallow_latest_tag...
applying 1 policy to 1 resource...
│───│─────────────────────│────────────────────│───────────│────────│
│ # │ POLICY              │ RULE               │ RESOURCE  │ RESULT │
│───│─────────────────────│────────────────────│───────────│────────│
│ 1 │ disallow-latest-tag │ require-image-tag  │ myapp-pod │ Pass   │
│ 2 │ disallow-latest-tag │ validate-image-tag │ myapp-pod │ Pass   │
│───│─────────────────────│────────────────────│───────────│────────│
```
