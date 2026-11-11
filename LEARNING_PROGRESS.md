# CaseFlow — Full-Stack Learning Progress

> **Last reviewed:** 2026-11-11 · **Current focus:** Day 1, controller walkthrough and BE-101

## Progress dashboard

| Metric | Completed | Progress |
|---|---:|---:|
| **All lessons** | **2 / 42** | **4.8%** |
| **Day 1 lessons** | **2 / 6** | **33.3%** |
| **Practical tickets** | **0 / 7** | **0%** |
| **Days fully completed** | **0 / 7** | **0%** |

**Status key:** ✅ Complete · 🔄 In progress · ⬜ Not started. A lesson is marked complete only after its main explanation and expected exercise/practical check are finished. Concept introductions alone do not count as full completion.

### Day-by-day progress

| Day | Focus | Lessons complete | Percentage | Status |
|---|---|---:|---:|---|
| Day 1 | Backend architecture | 2/6 | 33.3% | 🔄 In progress |
| Day 2 | Node.js and REST API development | 0/6 | 0% | ⬜ Not started |
| Day 3 | PostgreSQL and SQL | 0/6 | 0% | ⬜ Not started |
| Day 4 | Logging and debugging | 0/6 | 0% | ⬜ Not started |
| Day 5 | Locks, concurrency and security | 0/6 | 0% | ⬜ Not started |
| Day 6 | Feature implementation and testing | 0/6 | 0% | ⬜ Not started |
| Day 7 | Mock interview and real-world scenarios | 0/6 | 0% | ⬜ Not started |

## Current session: what's left for Day 1

- [x] Explain Vue → Node → database request flow
- [x] Explain controller/service/repository responsibilities
- [x] Read `server.js` and identify the route mount
- [x] Read `caseRoutes.js` and explain `/:id`
- [ ] Complete route-parameter exercise and inspect `caseController.js`
- [ ] Follow controller → service → repository for GET case 105
- [ ] Inspect request and response in browser or Postman
- [ ] Reproduce BE-101: approval succeeds for unassigned case 106
- [ ] Fix validation in service and return HTTP 409
- [ ] Verify assigned case approval still succeeds
- [ ] Mark Day 1 lessons complete after remaining middleware/debugging exercises

**Next teaching step:** Review the answer for `GET /api/cases/105/history` (`req.params.id`) and walk through `backend/src/controllers/caseController.js`.

## Day 1 — Backend architecture

- [x] **L1:** Vue → Node request flow — Complete; Understand frontend Axios → Express → database → response
- [x] **L2:** Controller → Service → Repository — Complete; Explain responsibility of each layer
- [ ] **L3:** Modify an existing PATCH API — In progress; BE-101 validation explained; must implement and verify in running app
- [ ] **L4:** Express middleware and request lifecycle — In progress; server.js and caseRoutes.js introduced; controller and middleware walkthrough remain
- [ ] **L5:** req.params, req.query, req.body, res, next — Not started; Route parameter example introduced, but detailed walkthrough remains
- [ ] **L6:** Run app, trace API and debug in VS Code — Not started; User reports app running; endpoints and debugging not yet independently verified

## Day 2 — Node.js and REST APIs

- [ ] **L7:** Node runtime, event loop and nonblocking I/O
- [ ] **L8:** Promises, async/await and error propagation
- [ ] **L9:** REST design, HTTP methods and status codes
- [ ] **L10:** Request validation and centralized error handling
- [ ] **L11:** Middleware, authentication and authorization fundamentals
- [ ] **L12:** Modify GET, POST, PUT, PATCH and DELETE APIs

## Day 3 — PostgreSQL and SQL

- [ ] **L13:** Tables, primary keys and foreign keys
- [ ] **L14:** SELECT, WHERE, ORDER BY, LIMIT and OFFSET
- [ ] **L15:** JOINs and aggregate functions
- [ ] **L16:** INSERT, UPDATE, DELETE and RETURNING
- [ ] **L17:** Constraints, indexes, query plans and SQL injection
- [ ] **L18:** Connection pools, transactions and migrations

## Day 4 — Logging and debugging

- [ ] **L19:** VS Code breakpoints and call stacks
- [ ] **L20:** Application, access, database and audit logs
- [ ] **L21:** Log levels: DEBUG, INFO, WARN and ERROR
- [ ] **L22:** Winston, structured logging and correlation IDs
- [ ] **L23:** HTTP errors and stack traces
- [ ] **L24:** Docker logs and incident troubleshooting

## Day 5 — Locks, concurrency and security

- [ ] **L25:** Race conditions and lost updates
- [ ] **L26:** Row-level and table locks; SELECT FOR UPDATE
- [ ] **L27:** Optimistic vs pessimistic locking
- [ ] **L28:** Deadlocks, isolation and rollback
- [ ] **L29:** JWT, RBAC and API security
- [ ] **L30:** Performance, indexes and concurrent requests

## Day 6 — Feature implementation and testing

- [ ] **L31:** Translate requirements into API designs
- [ ] **L32:** Build routes, controllers, services and repositories
- [ ] **L33:** Database migrations
- [ ] **L34:** Validation, transactions and audit history
- [ ] **L35:** Unit and integration tests with Jest and Supertest
- [ ] **L36:** Vue and Axios integration

## Day 7 — Mock interview and scenarios

- [ ] **L37:** Node.js and JavaScript coding
- [ ] **L38:** SQL coding and debugging
- [ ] **L39:** API architecture and tradeoffs
- [ ] **L40:** Production incident and concurrency scenarios
- [ ] **L41:** Vue integration and performance
- [ ] **L42:** Mock interview and experience storytelling

## Practical development tickets

| Ticket | Task | State |
|---|---|---|
| BE-101 | Prevent approval of unassigned cases | 🔄 Started; code fix pending |
| BE-102 | Filtering, pagination and validation | ⬜ Not started |
| DB-103 | Fix assignment and write JOIN queries | ⬜ Not started |
| BUG-104 | Debug incorrect success notification | ⬜ Not started |
| BE-105 | Prevent conflicting approvals | ⬜ Not started |
| FEAT-106 | Build reassignment and approval history | ⬜ Not started |
| FINAL-107 | Diagnose, fix, test and explain a defect | ⬜ Not started |

## Session notes

- **2026-11-11:** Installed and verified development tools (user-confirmed). Starter application uploaded to GitHub; user reports opening/running it locally. Concepts covered: HTTP routing, `server.js`, `caseRoutes.js`, basic URL parameters, controller/service/repository responsibilities. API behavior and actual BE-101 fix still to verify.

## Updating progress

1. After a lesson, check off its checkbox **only once the lesson and exercise/practical check are complete**.
2. Update the completed count and percentages in the dashboard and day table. Percentages = completed lessons / total lessons × 100, rounded to one decimal.
3. Record work done and next task in session notes.
4. Update the ticket status after its behavior is tested, not merely after code is edited.
5. Commit changes to `LEARNING_PROGRESS.md` on GitHub. This is a manual tracker; percentages do not automatically recalculate when a checkbox is clicked.

**Schedule:** 7-day intensive curriculum; each day represents a training stage rather than a guaranteed calendar date.
