---
name: vantam-audit-orchestrator
description: Orchestrates a complete evidence-based, read-only audit of the VANTAM website and repository. Use for full-site audits covering business positioning, content, UX, design, accessibility, architecture, security, privacy, vendors, data handling, legal readiness, SEO, AI-search visibility, performance, analytics, monitoring, deployment, and launch readiness.
---

# VANTAM Audit Orchestrator

Use this skill when performing a broad audit of the VANTAM website, repository, infrastructure, content, legal readiness, privacy readiness, or launch readiness.

## Core operating rule

Audit before implementation.

Do not modify application code, production settings, DNS, databases, vendor accounts, legal pages, analytics, or deployment configuration unless the user explicitly starts a later implementation phase.

During the audit, write only to:

`docs/audit/`

## Required evidence hierarchy

Use evidence in this order:

1. Current repository code and configuration.
2. Current production behaviour.
3. Connected account evidence where available.
4. Official legal and regulatory sources.
5. Official vendor documentation.
6. Primary technical standards and framework documentation.
7. Reputable secondary sources only when primary evidence is unavailable.

Do not convert assumptions into facts.

## Finding classifications

Every material statement must be classified as one of:

- Verified repository fact
- Verified production fact
- Verified external fact
- Owner-confirmed decision
- Reasonable inference
- Recommendation
- Unresolved owner action
- Professional review item
- Launch blocker

## Finding structure

Every finding must include:

- ID
- Domain
- Title
- Severity: P0, P1, P2, or P3
- Launch blocker: yes or no
- Evidence
- Verified fact
- Interpretation
- Impact
- Affected users
- Confidence
- Recommended correction
- Dependencies
- Owner action
- Professional-review requirement
- Acceptance criteria

## Severity definitions

- P0: immediate security, data-loss, or severe legal risk
- P1: launch blocker or major trust, architecture, privacy, or conversion risk
- P2: important correction that can follow shortly after launch
- P3: polish, optimisation, or future enhancement

Do not inflate severity.

## Required audit domains

Coordinate separate reviews for:

1. Repository and production state
2. Business positioning and audience
3. Content and localisation
4. UX, design, accessibility, and likability
5. Customer journey and conversion
6. Frontend and application architecture
7. Contact form and API
8. Security and threat modelling
9. Privacy and data governance
10. Vendors and data residency
11. Supabase readiness
12. Terms and contracting readiness
13. Technical SEO
14. Schema
15. AI-search visibility
16. Performance
17. Analytics and monitoring
18. Deployment and operations
19. Launch readiness

## Subagent rule

When subagents are available, assign each subagent a narrow audit domain.

Each subagent must:

- inspect the relevant code and production behaviour;
- cite evidence;
- state uncertainty;
- avoid unrelated implementation;
- return structured findings;
- identify checks it could not perform.

The lead auditor must deduplicate findings and resolve contradictions.

## Red-team rule

After the first audit draft, use an independent reviewer to challenge:

- unsupported legal claims;
- unsupported vendor claims;
- assumed account plans;
- assumed data locations;
- incomplete data-flow maps;
- missing data copies;
- weak deletion procedures;
- security theatre;
- unnecessary complexity;
- false accessibility claims;
- generic AI recommendations;
- inflated severity;
- missing business decisions;
- recommendations that could break the working site.

Document unresolved objections.

## Final restriction

Do not claim a check passed unless it was actually performed.

Do not claim legal compliance or legal approval.

Do not expose secrets, credentials, private account data, or raw personal data.
