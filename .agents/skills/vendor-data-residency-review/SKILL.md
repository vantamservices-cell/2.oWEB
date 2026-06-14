---
name: vendor-data-residency-review
description: Audits current and proposed VANTAM vendors for privacy role, data categories, processing locations, storage, subprocessors, international transfers, DPA applicability, retention, deletion, security, account settings, EU-region availability, migration difficulty, and EU-first alternatives. Use for Vercel, Resend, Gmail, WhatsApp, Supabase, analytics, monitoring, storage, email, and other service providers.
---

# Vendor and Data Residency Review

Use this skill whenever a current or proposed external service may process VANTAM data.

Do not recommend automatic removal solely because a provider is headquartered outside the EEA.

Assess the actual service, legal entity, data flow, contractual structure, processing locations, technical settings, alternatives, and migration risk.

## Vendor record

For every vendor record:

- service name;
- legal entity;
- jurisdiction;
- role in the VANTAM flow;
- controller, processor, independent controller, or recipient status;
- exact data categories;
- purpose;
- collection method;
- processing location;
- storage location;
- available EU or EEA region;
- fixed-region commitment or lack of commitment;
- subprocessors;
- international transfers;
- transfer mechanism;
- DPA availability;
- DPA applicability to the actual plan;
- retention;
- deletion;
- backups;
- logs;
- encryption claims;
- account-level settings;
- tracking settings;
- plan dependency;
- access controls;
- MFA options;
- incident and breach commitments;
- account termination behaviour;
- export capability;
- cost;
- technical dependency;
- migration difficulty;
- EU-first alternatives;
- recommendation;
- unresolved owner actions;
- last verification date.

## Recommendation categories

Use only:

- retain;
- retain with configuration changes;
- retain temporarily;
- replace;
- avoid for new processing;
- unresolved pending account evidence.

## Evidence rule

Use official vendor sources first:

- privacy notice;
- DPA;
- security documentation;
- subprocessor list;
- data-region documentation;
- retention documentation;
- deletion documentation;
- product documentation;
- account-plan documentation;
- status and incident documentation.

Marketing language alone is insufficient for material privacy or security conclusions.

## Account applicability

Distinguish between:

- publicly advertised capability;
- capability available only on a paid plan;
- setting actually confirmed in VANTAM's account;
- unresolved setting requiring owner verification.

Do not claim a DPA, EU region, retention setting, or security control applies to VANTAM without evidence.

## Replacement rule

Before recommending removal, document:

1. current dependency;
2. data handled;
3. replacement requirements;
4. candidate alternatives;
5. migration sequence;
6. testing;
7. rollback;
8. data export;
9. data deletion;
10. secret removal;
11. documentation updates.

Do not break a working enquiry flow during an audit.

## EU-first principle

For new systems processing personal data, prefer an appropriate EEA-region option where it is operationally suitable.

A non-EEA provider requires a documented assessment, not an automatic acceptance or rejection.
