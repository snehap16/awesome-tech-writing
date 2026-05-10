# WorkIt API

WorkIt is a fictional REST API for a task management application. It is part of the [Awesome Tech Writing](../../README.md) portfolio section and is designed for documentation practice.

---

## Overview

WorkIt enables teams to create, assign, and track tasks through a simple set of API endpoints. It has three core resources: users, projects, and tasks.

WorkIt is not a real product. Use it to write documentation samples for your portfolio without needing access to a live system.

---

## Who should use this

This product is intended for technical writers who want to:

- Practice writing API documentation
- Build portfolio samples without access to a real product
- Learn how to document REST APIs

---

## Base URL

```
https://api.workit.io/v1
```

> **Note:** WorkIt is a fictional product. The base URL is not functional. Use it as a placeholder in your documentation samples.

---

## Core resources

| Resource | Description |
|---|---|
| `users` | Individuals who use WorkIt to manage tasks |
| `projects` | Groups of related tasks |
| `tasks` | Individual action items assigned to users |

---

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/tasks` | Retrieves a list of all tasks |
| `GET` | `/tasks/{id}` | Retrieves a single task by ID |
| `POST` | `/tasks` | Creates a new task |
| `PUT` | `/tasks/{id}` | Updates an existing task |
| `DELETE` | `/tasks/{id}` | Deletes a task |
| `GET` | `/projects` | Retrieves a list of all projects |
| `POST` | `/projects` | Creates a new project |
| `GET` | `/users` | Retrieves a list of all users |
| `GET` | `/users/{id}` | Retrieves a single user by ID |

---

## Authentication

WorkIt uses API key authentication. Include your API key in the request header:

```
Authorization: Bearer YOUR_API_KEY
```

---

## Response format

All responses return JSON. A successful response looks like this:

```json
{
  "id": "task_01",
  "title": "Write getting started guide",
  "status": "in_progress",
  "assignee": "user_03",
  "project": "project_02",
  "due_date": "2025-06-30"
}
```

---

## HTTP status codes

| Code | Meaning |
|---|---|
| `200` | Request succeeded |
| `201` | Resource created successfully |
| `400` | Bad request. Verify your request body or parameters |
| `401` | Unauthorized. Verify your API key |
| `404` | Resource not found |
| `500` | Internal server error |

---


*WorkIt is a fictional product created for the [Awesome Tech Writing](../../README.md) repository.*