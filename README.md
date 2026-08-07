# RL Trainer

A personal training companion for Rocket League. The core idea: earn in-app currency by logging mechanic practice, and spend that currency to unlock ranked play — a small forcing function to make sure deliberate practice happens before queueing up.

Built as a hands-on learning project, focused on getting real practice with a decoupled frontend/backend architecture, relational database design, and modern auth patterns.

## Architecture

Monorepo with two independently run services that communicate over HTTP:

- **Frontend** — Next.js (React, TypeScript)
- **Backend** — Spring Boot REST API (Java, Maven)
- **Database** — PostgreSQL

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Backend | Spring Boot, Java, Maven |
| Database | PostgreSQL |
| Auth | Spring Security + OAuth2 (Google login — no locally stored passwords) |
| API testing | Postman |

## Status

This is an active work-in-progress, developed as a personal project 

### Roadmap

- [x] Core data model and relational schema
- [x] Backend/frontend split (Spring Boot + Next.js)
- [ ] Google OAuth2 login via Spring Security
- [ ] HTTPS setup (frontend/backend communication)
- [ ] Practice session logging and currency rewards
- [ ] Currency-gated ranked queue flow
- [ ] Automated tests (JUnit/Mockito)
- [ ] CI pipeline (GitHub Actions)
- [ ] Containerization and Kubernetes deployment