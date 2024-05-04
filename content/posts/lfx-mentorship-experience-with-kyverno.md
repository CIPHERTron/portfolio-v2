---
title: LFX Mentorship Experience with Kyverno
date: "2022-01-26"
legacyID: "lfx-mentorship-experience-with-kyverno"
thumbnail: "📘"
description: "The Kyverno Command Line Interface (CLI) is designed to validate and test policy behavior to resources prior to adding them to a cluster..."
published: true
latest: false
cover: "https://res.cloudinary.com/pritish007/image/upload/v1655938745/LFX/LFX_-_Kyverno_uqws4a.png"
articleLink: "https://pritishsamal.xyz/blog/lfx-mentorship-experience-with-kyverno"
tags:
  - LFX
  - Cloud
  - Kubernetes
  - Go
---

## Table of contents:

- What is LFX Mentorship program?
- Getting into LFX Mentorship
- My LFX journey with **Kyverno**
  - Acceptance mail
  - What is Kyverno?
  - Project Abstract
  - Getting Started
  - What is Generate rule?
  - How generate policy works?
  - Test command for generate policy
  - Structure of `test.yaml`
  - Graduation
- Conclusion

---

## What is LFX Mentorship Program?

The [LFX Mentorship Program](https://lfx.linuxfoundation.org/tools/mentorship/) previously known as **Community Bridge** is a 12 week remote learning opportunity for folks enthusiastic about open-source software development in the field of Cloud Native ecosystem. This program is organised by the [Linux Foundation](https://linuxfoundation.org/) and happens in three batches per year i.e. _spring_, _summer_, & _fall_. Many famous projects take part in this mentorship program including **Kubernetes**, **Prometheus**, **Kyverno**, **OpenEBS** and many more. Till date, around 11k mentees have applied for the mentorship program and around 500 of them have been accepted into it.

---

## Getting into LFX Mentorship

I got to know about this program from one of my college senior Debabrata Panigrahi who was the first one in our college to get accepted as an LFX mentee. At that time, I had absolutely zero knowledge regarding cloud native technologies & the CNCF ecosystem. As a complete newbie would do, I applied for the summer batch of 2021 just to familiarize myself with the application process. As expected, I got a rejection mail after a couple of days.

Then I started doing some research on my own and planned to apply again during the fall. Meanwhile, I started learning Go, docker, & kubernetes and tools like prometheus and grafana because these were the tech stack used in a lot of projects. I also started to explore the CNCF ecosystem and various projects under it. That is when I came across some great communities like **Kyverno**, **Kubernetes**, **Chaos Mesh**, and **Meshery**. I joined the Kubernetes & Kyverno community because it would be too difficult for a single person to get involved in two communities with active participation given the bandwidth is pretty limited. By being active in both the communities, what I mean is:

- Joining their communication channels (slack, mailing lists, etc)
- setting up the project locally in your system
- taking up some `good-first-issues`
- attending the weekly & biweekly community meetings

The above steps would help you to understand the giant codebases better. To be honest, I wwas not able to understand even a thing or two in the community meetings. Folks often feel overwhelmed when they see a huge codebase and it's pretty normal and happens with everyone. Consistency is the key.

The applications for the fall batch of 2021 opened somewhat around the 3rd week of August. I shortlisted two project ideas under Kyverno & Chaos Mesh since the project ideas seemed like they can be accomplished by me. The application process included submitting a cover letter and resume. Although Chaos Mesh had an extra process i.e. the mentors will give an assignment and the one who completes the assignment within the given deadline and with a better architecture will be selected as a mentee. The assignment was to make a `mini-node-exporter` which can scrape the metrics from a running server using prometheus and plot them into the grafana dashboard. You can take a look at my assignment here [[click here](https://github.com/CIPHERTron/mini-node-exporter)]. Below is the feedback that I received from the project mentor. Hardluck! It was disheartening, nevertheless I got to learn and implement something new.

![feedback on chaos mesh assignment](https://res.cloudinary.com/pritish007/image/upload/v1655921398/LFX/Screenshot_2022-06-22_at_11.38.35_PM_v4hukw.png)

Thus, I got a rejection mail from LFX for the project idea under Chaos Mesh. But after a couple of days, I also got another mail from LFX stating that I have been accepted as an LFX Mentee at [Kyverno](https://kyverno.io). I was at cloud nine and my happiness was immeasurable. After that, the project mentors contacted me for the next steps and thus my LFX journey began.

![LFX Acceptance Mail](https://res.cloudinary.com/pritish007/image/upload/v1655917681/LFX/lfx-acceptance_cx0ood.jpg)

---

## My LFX journey with Kyverno

- <u>**Acceptance mail**</u> <br>
  After getting the acceptance mail, my mentors contacted me on slack and added me to a private group comprising of the mentee, mentors and co-mentors. My primary mentors were [Shuting Zhao](https://github.com/realshuting) & [Jim Bugwadia](https://github.com/JimBugwadia) and my co-mentor was [Vyankatesh Kudtarkar](https://github.com/vyankyGH).
  ![Kyverno introductions](https://res.cloudinary.com/pritish007/image/upload/v1655929944/LFX/Screenshot_2022-06-23_at_2.00.26_AM_surq70.png)

- So, my project was, "**To extend `kyverno test` command to cover generate policies & improve test coverage**".

- <u>**What is Kyverno?**</u> <br>
  **Kyverno** is a **Kubernetes native policy engine** where the policies are basically managed as Kubernetes resources. The kyverno policies can Generate, Mutate, Validate kubernetes resources, & verify image policies.

- <u>**Project Abstract**</u> <br>

  - Currently the kyverno test command covers only the validate and mutate policies but not the generate policy. So, my task will be to extend the Kyverno CLI or the kyverno test command to cover generate policies as well.
  - Secondly, I've to work on improving the test coverage of Kyverno by adding more tests so that it covers maximum part of the codebase.
  - To generate a test report for each PR

- <u>**Getting Started**</u> <br>
  In the initial days, I tried to learn more about Kyverno by using it as an end-user. Then I played around with the kyverno engine by applying policies from the [kyverno/policies](https://github.com/kyverno/policies) repo. Then I contributed to the Kyverno wiki on guide to [develop Kyverno CLI locally](https://github.com/kyverno/kyverno/wiki/Running-in-development-mode#develop-kyverno-cli-locally). We used to have weekly sync meetings for status updates and my mentors were very supportive.

- <u>**What is Generate rule?**</u> <br>
  A **generate rule** can be used to create additional resources when a new resource is created or when the source is updated. This is useful to create supporting resources, such as new RoleBindings or NetworkPolicies for a Namespace.

- <u>**How generate policy works?**</u> <br>
  Let us first see how the generate policy works by the help of an example.
  Let's take [Add Quota](https://kyverno.io/policies/best-practices/add_ns_quota/) policy for instance:

  - Set-up and run kyverno in a local cluster since the `generate policy` can only be applied to a live cluster.
  - You can find instructions on how to run kyverno in development mode [here](https://github.com/kyverno/kyverno/wiki/Running-in-development-mode)
  - Suppose we have the policy definition in `addQuota.yaml` file. Let's apply it to the cluster:

  ```bash
  kubectl apply -f addQuota.yaml
  ```

  - Now, let's create a demo namespace

  ```bash
  kubectl create ns demo
  ```

  - Now, search for the resources listed in `addQuota.yaml` that are meant to be generated (here, `limitranges` and `resourcequotas`)

  ```bash
  kubectl get limitranges --all-namespaces

  kubectl get resourcequotas --all-namespaces
  ```

  - You'll get the resources being listed on your terminal.

- <u>**Test command for generate policy**</u> <br>
  _Now, coming to the test command for **Generate Policy**. We can go about it in two ways:_

  1. If the user doesn't provide the **desired resource**, then we can just display if kyverno can generate the resource or not

  2. If the user provides the **resource manifests** then we can compare it with the kyverno created resource is a subset of the user provided resource(in terms of tags). If that pass, test success else failure.

  _The next part is how should we log the result?_

  So if both the resources match, we can update the test results to `pass` or else `fail`.

- <u>**Structure of `test.yaml`**</u> <br>
  _To demonstrate this, let us take [Add Network Policy](https://kyverno.io/policies/best-practices/add_network_policy/) \& [Add Quota](https://kyverno.io/policies/best-practices/add_ns_quota/) policy for example._

  1. When the user doesn't provide the desired resource

  ```yaml
  name: add-networkpolicy
  policies:
    - add_network_policy.yaml
  resources:
    - resource.yaml
  results:
    - policy: add-networkpolicy
      rule: default-deny
      kind: Namespace
      resource: demo
      result: pass
  ```

  ```yaml
  # What if the NetworkPolicy was only applicable to Pods
  name: add-networkpolicy
  policies:
    - add_network_policy.yaml
  resources:
    - resource.yaml
  results:
    - policy: add-networkpolicy
      rule: default-deny
      kind: Pod
      resource: demo # name of resource(Namespace, Pod, etc)
      namespace: testing # namespace where the target resource is being created
      result: pass
  ```

  ```yaml
  name: add-ns-quota
  policies:
    - add_ns_quota.yaml
  resources:
    - resource.yaml
  results:
    - policy: add-ns-quota
      rule: generate-resourcequota
      kind: Namespace # source
      resource: demo # target
      result: pass
    - policy: add-ns-quota
      rule: generate-limitrange
      kind: Namespace
      resource: demo
      result: pass
  ```

  2. When the user provides the desired resource

  ```yaml
  name: add-networkpolicy
  policies:
    - add_network_policy.yaml
  resources:
    - resource.yaml
  results:
    - policy: add-networkpolicy
      generatedResource: generatedResource.yaml
      rule: default-deny
      kind: Namespace
      resource: demo
      result: pass
  ```

  ```yaml
  name: add-ns-quota
  policies:
    - add_ns_quota.yaml
  resources:
    - resource.yaml
  results:
    - policy: add-ns-quota
      rule: generate-resourcequota
      generatedResource: generatedResource1.yaml
      kind: Namespace
      resource: demo
      result: pass
    - policy: add-ns-quota
      rule: generate-limitrange
      generatedResource: generatedResource2.yaml
      kind: Namespace
      resource: demo
      result: pass
  ```

- <u>**Graduation**</u> <br>
  The most important step in this project was finalising the structure of `test.yaml` such that the existing test command could handle it. Once this was done, I had to implement the same in-order to extend the existing test command. In January, 2021 I received a mail from LFX stating that I have graduated from CNCF - Kyverno mentorship. I am highly grateful to my mentors for providing a great experience throughout the program.

![Graduation mail](https://res.cloudinary.com/pritish007/image/upload/v1655918191/LFX/Screenshot_2022-06-22_at_10.46.24_PM_r39zb9.png)

---

## Conclusion

LFX Mentorship is a really great way to kickstart your journey in the field of cloud computing and security. This program opened up a new world of open source and cloud native tools for me. For the newly accepted mentees, my advice would be to ask as many questions as possible to your mentors, however silly your question might be. I would definitely recommend folks to apply to this program. In the beginning you must be feeling intimidated by the tools and terminologies used here and it is the same for everyone. If you are consistent enough, things will eventually fall into place. _Just take that first step_.

> PS: I really love this mentee profile <3

![lfx mentee profile](https://res.cloudinary.com/pritish007/image/upload/v1655918097/LFX/Screenshot_2022-06-22_at_10.44.40_PM_m1es1d.png)

## Relevant links

- My project - [Kyverno - Extend test command to cover generate policies](https://mentorship.lfx.linuxfoundation.org/project/0e34db3f-99c3-471d-a114-e3c89f57eab5)
- LFX Mentorship Site - [lfx.linuxfoundation.org/tools/mentorship](https://lfx.linuxfoundation.org/tools/mentorship/)
- Available Mentorships - [mentorship.lfx.linuxfoundation.org](https://mentorship.lfx.linuxfoundation.org)
- CNCF Mentoring Repo - [github.com/cncf/mentoring](https://github.com/cncf/mentoring)
- All about LFX Mentorship Program - [youtu.be/YhivM-V_Pgk](https://youtu.be/YhivM-V_Pgk)
