# CaseFlow — Case Management & Approval Workflow

A full-stack service case management application for tracking cases, assigning employees, and reviewing approvals. Built with Vue 3, Node.js/Express, and PostgreSQL.

## Getting started (Windows)

Prerequisites: Node.js LTS, npm, Git, Docker Desktop.

1. Open Docker Desktop, then from the repository root run: `docker compose up -d`.
2. Open a terminal in `backend/`: run `npm install`, `Copy-Item .env.example .env`, then `npm run dev`.
3. Open a second terminal in `frontend/`: run `npm install`, then `npm run dev`.
4. Visit http://localhost:6124 and http://localhost:3000/health.

PostgreSQL is exposed at localhost:5433 (database `caseflow`, user `caseflow`, password `caseflow_dev_password`). Credentials are for LOCAL DEVELOPMENT ONLY. The database initializes on first creation of its Docker volume.

## Working features
- List and retrieve cases with assigned employee names
- Update case status through a REST API
- Vue table to view and approve cases
- PostgreSQL demo records and Docker Compose database

## Training ticket BE-101
**Prevent approval of an unassigned case.** The starter intentionally contains a business-rule defect: Case `106` (unassigned) can be approved. Trace the API path through route, controller, service, repository and SQL; change the service so approval without an assigned employee returns HTTP 409, and the database status remains unchanged.

Further planned features include role-based access, audit history, case reassignment, transactions, row locks and automated tests. This demo is not production-ready.

Track progress in [LEARNING_PROGRESS.md](LEARNING_PROGRESS.md).
