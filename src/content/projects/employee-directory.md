---
title: Multi-Tenant Employee Directory Platform
period: "2025 – 2026"
summary: Cloud-ready enterprise employee directory with SCD Type 2 history, append-only event sourcing, and high-throughput Go + Fiber API and Astro + React islands frontend.
stack:
  - Go
  - Fiber v2
  - PostgreSQL
  - Astro
  - React
  - Tailwind CSS
  - Docker
links:
  - label: GitHub Repository
    href: https://github.com/tinlevn/employee_directory
order: 1
---

A cloud-ready, multi-tenant employee directory platform designed for enterprise workforce management. The system is engineered around a high-throughput Go + Fiber REST API, a resilient PostgreSQL 16 data layer, and an Astro 7 static shell with React 19 interactive islands.

## Highlights

- **SCD Type 2 Employment History**: Temporal versioning for job titles, compensation, departments, and reporting lines over time with valid-time ranges (`valid_from` / `valid_to`), preserving historical records for point-in-time organizational reporting.
- **Append-Only Event Sourcing**: Immutable lifecycle audit log recording hires, promotions, lateral transfers, compensation updates, and terminations. Database triggers strictly enforce immutability against updates or deletions.
- **Multi-Tenant Isolation & IDOR Defense**: Strict tenant boundary enforcement via compound foreign keys (`person_id`, `org_id`) in PostgreSQL and authenticated context extraction at the API gateway layer.
- **Dynamic Field-Level Redaction**: Built-in RBAC gates with automated data redaction that masks sensitive compensation figures (`salary_amount`, `hourly_rate`) based on caller role and identity.
- **High-Performance Search & Analytics**: Server-side filtering, multi-column sorting, and pagination across 1,000+ seeded employee records, paired with real-time headcount distribution metrics.
- **Islands Frontend Architecture**: Zero-bundle static shell generated with Astro, utilizing React 19 islands with client-side LRU hover caching for instant transitions and sub-second load times.

## Stack

| Layer       | Technology                     |
| ----------- | ------------------------------ |
| Frontend    | Astro 7, React 19, Tailwind 4  |
| Backend API | Go 1.27, Fiber v2              |
| Database    | PostgreSQL 16 (pgxpool)        |
| Security    | JWT, RBAC, Compound FKs        |
| DevOps      | Docker Compose, GitHub Actions |

