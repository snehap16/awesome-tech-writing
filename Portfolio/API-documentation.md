# WorkIt API Reference

This document is a sample API reference for the WorkIt API. It covers two endpoints: retrieving a single task and creating a new task.

Use this as a reference when writing your own API documentation samples.

---

## Endpoints covered

- [GET /tasks/{id}](#get-tasksid) — Retrieve a single task
- [POST /tasks](#post-tasks) — Create a new task

---

## GET /tasks/{id}

Retrieves a single task by its unique ID.

### Request

```
GET https://api.workit.io/v1/tasks/{id}
```

#### Path parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The unique identifier of the task |

#### Headers

| Header | Value | Required |
|---|---|---|
| `Authorization` | `Bearer YOUR_API_KEY` | Yes |
| `Content-Type` | `application/json` | Yes |

#### Example request

```bash
curl -X GET https://api.workit.io/v1/tasks/task_01 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

---

### Response

#### Success response — 200 OK

Returns a task object.

```json
{
  "id": "task_01",
  "title": "Write getting started guide",
  "description": "Document the onboarding flow for new users.",
  "status": "in_progress",
  "priority": "high",
  "assignee": "user_03",
  "project": "project_02",
  "due_date": "2025-06-30",
  "created_at": "2025-05-01T08:00:00Z",
  "updated_at": "2025-05-10T12:00:00Z"
}
```

#### Response fields

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique identifier of the task |
| `title` | string | Title of the task |
| `description` | string | Detailed description of the task |
| `status` | string | Current status of the task. Possible values: `to_do`, `in_progress`, `done` |
| `priority` | string | Priority level of the task. Possible values: `low`, `medium`, `high` |
| `assignee` | string | ID of the user assigned to the task |
| `project` | string | ID of the project the task belongs to |
| `due_date` | string | Due date of the task in `YYYY-MM-DD` format |
| `created_at` | string | Timestamp of when the task was created, in ISO 8601 format |
| `updated_at` | string | Timestamp of the last update, in ISO 8601 format |

---

### Error responses

| Code | Message | Description |
|---|---|---|
| `401` | `Unauthorized` | The API key is missing or invalid |
| `404` | `Task not found` | No task exists with the specified ID |
| `500` | `Internal server error` | An unexpected error occurred on the server |

#### Example error response — 404

```json
{
  "error": {
    "code": 404,
    "message": "Task not found",
    "details": "No task exists with the ID task_99."
  }
}
```

---

## POST /tasks

Creates a new task in WorkIt.

### Request

```
POST https://api.workit.io/v1/tasks
```

#### Headers

| Header | Value | Required |
|---|---|---|
| `Authorization` | `Bearer YOUR_API_KEY` | Yes |
| `Content-Type` | `application/json` | Yes |

#### Request body

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Title of the task. Maximum 255 characters |
| `description` | string | No | Detailed description of the task |
| `status` | string | No | Status of the task. Possible values: `to_do`, `in_progress`, `done`. Defaults to `to_do` |
| `priority` | string | No | Priority level. Possible values: `low`, `medium`, `high`. Defaults to `medium` |
| `assignee` | string | No | ID of the user to assign the task to |
| `project` | string | No | ID of the project to add the task to |
| `due_date` | string | No | Due date in `YYYY-MM-DD` format |

#### Example request

```bash
curl -X POST https://api.workit.io/v1/tasks \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Write release notes for v2.0",
    "description": "Cover all changes introduced in the v2.0 release.",
    "status": "to_do",
    "priority": "high",
    "assignee": "user_05",
    "project": "project_03",
    "due_date": "2025-07-15"
  }'
```

---

### Response

#### Success response — 201 Created

Returns the newly created task object.

```json
{
  "id": "task_08",
  "title": "Write release notes for v2.0",
  "description": "Cover all changes introduced in the v2.0 release.",
  "status": "to_do",
  "priority": "high",
  "assignee": "user_05",
  "project": "project_03",
  "due_date": "2025-07-15",
  "created_at": "2025-05-10T09:30:00Z",
  "updated_at": "2025-05-10T09:30:00Z"
}
```

---

### Error responses

| Code | Message | Description |
|---|---|---|
| `400` | `Bad request` | The request body is missing required fields or contains invalid values |
| `401` | `Unauthorized` | The API key is missing or invalid |
| `500` | `Internal server error` | An unexpected error occurred on the server |

#### Example error response — 400

```json
{
  "error": {
    "code": 400,
    "message": "Bad request",
    "details": "The 'title' field is required."
  }
}
```

---

## Related resources

- [WorkIt API overview](./Fictional-product/README.md)
- [Writing prompts](./Prompts.md)
- [Portfolio guide](./Workit-Guide.md)

---

*This is a sample document created for the [Awesome Tech Writing](../README.md) portfolio section. WorkIt is a fictional product.*