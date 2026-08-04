# WorkIt Developer & REST API Guide

**Version:** 1.0  
**Last updated:** August 2025  
**Applies to:** WorkIt Cloud API v1  

---

## Table of contents

1. [Overview](#1-overview)
   - [API Architecture](#11-api-architecture)
   - [Base URLs](#12-base-urls)
2. [Authentication](#2-authentication)
   - [API Keys](#21-api-keys)
   - [OAuth 2.0 Bearer Tokens](#22-oauth-20-bearer-tokens)
   - [Authentication Headers](#23-authentication-headers)
3. [Rate limiting & Error handling](#3-rate-limiting--error-handling)
   - [Rate limits](#31-rate-limits)
   - [HTTP status codes](#32-http-status-codes)
   - [Error payload format](#33-error-payload-format)
4. [API Endpoints](#4-api-endpoints)
   - [List all cases (`GET /v1/cases`)](#41-list-all-cases-get-v1cases)
   - [Create a case (`POST /v1/cases`)](#42-create-a-case-post-v1cases)
   - [Retrieve a case (`GET /v1/cases/{id}`)](#43-retrieve-a-case-get-v1casesid)
   - [Update a case (`PATCH /v1/cases/{id}`)](#44-update-a-case-patch-v1casesid)
5. [Webhooks](#5-webhooks)
   - [Supported events](#51-supported-events)
   - [Webhook payload format](#52-webhook-payload-format)
   - [Verifying HMAC signatures](#53-verifying-hmac-signatures)
6. [SDK Quickstart](#6-sdk-quickstart)
   - [JavaScript / Node.js](#61-javascript--nodejs)
   - [Python](#62-python)

---

## 1. Overview

The **WorkIt REST API** enables developers to programmatically manage support cases, projects, and users. All API requests use standard HTTPS methods, accept JSON-encoded request bodies, and return JSON-encoded responses.

### 1.1 API Architecture

* **Format:** RESTful JSON
* **Protocol:** HTTPS (TLS 1.2 or higher required)
* **Default Data Format:** UTF-8 encoded JSON

### 1.2 Base URLs

| Environment | Base URL |
| :--- | :--- |
| **Production** | `https://api.workit.io/v1` |
| **Sandbox / Staging** | `https://sandbox-api.workit.io/v1` |

---

## 2. Authentication

All requests to the WorkIt API require authentication. Unauthenticated requests will return a `401 Unauthorized` response.

### 2.1 API Keys

For server-to-server integrations, you can generate API keys from the **WorkIt Admin Dashboard > Settings > Developer Keys**.

### 2.2 OAuth 2.0 Bearer Tokens

For client-facing apps or third-party integrations, use OAuth 2.0 authorization flows to request user-scoped tokens.

### 2.3 Authentication Headers

Pass your key in the `Authorization` header prefixed with `Bearer`:

```http
Authorization: Bearer wk_live_9a8b7c6d5e4f3a2b1c0d
Content-Type: application/json
```

#### Example Authentication Request (`curl`)

```bash
curl -X GET "https://api.workit.io/v1/cases" \
  -H "Authorization: Bearer wk_live_9a8b7c6d5e4f3a2b1c0d" \
  -H "Content-Type: application/json"
```

---

## 3. Rate limiting & Error handling

### 3.1 Rate limits

The API enforces rate limits per workspace:

* **Production:** 1,000 requests per minute
* **Sandbox:** 100 requests per minute

Every response includes rate limit headers:

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 985
X-RateLimit-Reset: 1722800000
```

If you exceed the rate limit, the API returns a `429 Too Many Requests` status.

### 3.2 HTTP status codes

WorkIt uses standard HTTP response status codes:

| Code | Status | Meaning |
| :--- | :--- | :--- |
| `200` | OK | Request succeeded. |
| `201` | Created | Resource successfully created. |
| `400` | Bad Request | Invalid parameters or missing required fields. |
| `401` | Unauthorized | Missing or invalid API key. |
| `403` | Forbidden | Insufficient permissions for resource. |
| `404` | Not Found | Resource ID does not exist. |
| `429` | Too Many Requests | Rate limit exceeded. |
| `500` | Internal Server Error | WorkIt server error. Retry with backoff. |

### 3.3 Error payload format

Errors return a consistent JSON structure:

```json
{
  "error": {
    "code": "invalid_parameter",
    "message": "The field 'priority' must be one of: low, medium, high, urgent.",
    "details": [
      {
        "field": "priority",
        "issue": "value_out_of_range"
      }
    ],
    "request_id": "req_8f7e6d5c4b3a"
  }
}
```

---

## 4. API Endpoints

### 4.1 List all cases (`GET /v1/cases`)

Retrieves a paginated list of cases in your workspace.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `status` | string | No | `open` | Filter by status (`open`, `in_progress`, `resolved`, `closed`). |
| `assigned_to` | string | No | null | User ID of assignee. |
| `limit` | integer | No | `20` | Results per page (Max: 100). |
| `page` | integer | No | `1` | Page number. |

#### Request Example

```bash
curl -X GET "https://api.workit.io/v1/cases?status=open&limit=2" \
  -H "Authorization: Bearer wk_live_9a8b7c6d5e4f3a2b1c0d"
```

#### Response Example (`200 OK`)

```json
{
  "object": "list",
  "data": [
    {
      "id": "case_101",
      "title": "SSL Certificate Expiration Alert",
      "status": "open",
      "priority": "high",
      "assigned_to": "user_402",
      "created_at": "2025-08-01T10:15:30Z"
    },
    {
      "id": "case_102",
      "title": "Database Connection Timeout in EU Region",
      "status": "open",
      "priority": "urgent",
      "assigned_to": "user_109",
      "created_at": "2025-08-01T11:00:12Z"
    }
  ],
  "has_more": true,
  "total_count": 48
}
```

---

### 4.2 Create a case (`POST /v1/cases`)

Creates a new support case.

#### Request Body Schema

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | string | **Yes** | Brief title of the case (Max 150 chars). |
| `description` | string | **Yes** | Detailed case description. |
| `priority` | string | No | Priority (`low`, `medium`, `high`, `urgent`). Default: `medium`. |
| `assigned_to` | string | No | User ID to assign immediately. |
| `tags` | array | No | Array of category tags (e.g. `["infrastructure", "ssl"]`). |

#### Request Example

```bash
curl -X POST "https://api.workit.io/v1/cases" \
  -H "Authorization: Bearer wk_live_9a8b7c6d5e4f3a2b1c0d" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Payment Gateway Timeout Error",
    "description": "Checkout API returned HTTP 504 gateway timeout for EU customers.",
    "priority": "high",
    "tags": ["billing", "api-error"]
  }'
```

#### Response Example (`201 Created`)

```json
{
  "id": "case_204",
  "title": "Payment Gateway Timeout Error",
  "description": "Checkout API returned HTTP 504 gateway timeout for EU customers.",
  "status": "open",
  "priority": "high",
  "assigned_to": null,
  "tags": ["billing", "api-error"],
  "created_at": "2025-08-04T14:20:00Z",
  "updated_at": "2025-08-04T14:20:00Z"
}
```

---

### 4.3 Retrieve a case (`GET /v1/cases/{id}`)

Fetches a specific case by its ID.

#### Request Example

```bash
curl -X GET "https://api.workit.io/v1/cases/case_204" \
  -H "Authorization: Bearer wk_live_9a8b7c6d5e4f3a2b1c0d"
```

---

### 4.4 Update a case (`PATCH /v1/cases/{id}`)

Updates fields on an existing case.

#### Request Example

```bash
curl -X PATCH "https://api.workit.io/v1/cases/case_204" \
  -H "Authorization: Bearer wk_live_9a8b7c6d5e4f3a2b1c0d" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "in_progress",
    "assigned_to": "user_402"
  }'
```

---

## 5. Webhooks

Webhooks notify your application in real time when events happen inside WorkIt.

### 5.1 Supported events

* `case.created` — Triggered when a new case is logged.
* `case.updated` — Triggered when a case status or assignee changes.
* `case.resolved` — Triggered when a case is marked resolved.

### 5.2 Webhook payload format

```json
{
  "id": "evt_998877",
  "event": "case.updated",
  "timestamp": "2025-08-04T14:25:00Z",
  "data": {
    "case_id": "case_204",
    "previous_status": "open",
    "new_status": "in_progress",
    "updated_by": "user_402"
  }
}
```

### 5.3 Verifying HMAC signatures

Every webhook request contains an `X-WorkIt-Signature` header. Verify the signature using HMAC-SHA256 and your Webhook Secret:

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}
```

---

## 6. SDK Quickstart

### 6.1 JavaScript / Node.js

```javascript
// Fetch open cases using native fetch
async function fetchOpenCases(apiKey) {
  const response = await fetch('https://api.workit.io/v1/cases?status=open', {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`WorkIt API Error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Open Cases:', data.data);
}

fetchOpenCases('wk_live_9a8b7c6d5e4f3a2b1c0d');
```

### 6.2 Python

```python
import requests

API_KEY = "wk_live_9a8b7c6d5e4f3a2b1c0d"
BASE_URL = "https://api.workit.io/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.get(f"{BASE_URL}/cases", headers=headers, params={"status": "open"})

if response.status_code == 200:
    cases = response.json()["data"]
    for case in cases:
        print(f"[{case['id']}] {case['title']} ({case['priority']})")
else:
    print(f"Error: {response.status_code} - {response.text}")
```
