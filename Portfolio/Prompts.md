# Writing Prompts

These prompts help you build documentation samples for your portfolio using the [WorkIt API](./Fictional-product/README.md), a fictional task management API.

Each prompt follows prompt engineering best practices. Copy the prompt, replace every `[PLACEHOLDER]` with your details, and paste it into any AI platform to get a structured output. Then use that output as a starting point and rewrite it in your own words.

> **Note:** The goal is not to publish AI-generated content in your portfolio. Use these prompts to understand the structure, then write the documentation yourself.

---

## How to use these prompts

1. Read the [WorkIt API overview](./Fictional-product/README.md) before you start.
2. Choose a prompt that matches your experience level.
3. Copy the prompt block and replace all `[PLACEHOLDERS]` with WorkIt details.
4. Paste it into ChatGPT, Claude, Gemini, or Copilot.
5. Use the output as a reference and write your own version.
6. Compare your work with the [completed samples](./Sample.md).

---

## Beginner prompts

Start here if you are new to technical writing or API documentation. These prompts cover the most common documentation types you will encounter in a technical writing role.

---

### Prompt 1: Getting Started guide

A Getting Started guide is usually the first document a developer reads. It should get them from zero to their first successful API call as quickly as possible.

```
You are a technical writer specializing in developer documentation. Write a Getting Started guide for the WorkIt API.

API details:
- Product name: WorkIt
- What it does: A task management API that lets teams create, assign, and track tasks
- Base URL: https://api.workit.io/v1
- Authentication: API key passed in the Authorization header as a Bearer token
- First task for the user: Retrieve a list of all tasks using GET /tasks

Write a Getting Started guide that includes:
1. A one-paragraph introduction — what WorkIt is and what the user will achieve by the end of this guide
2. Prerequisites — what the user needs before they begin (an API key, a REST client, basic knowledge of HTTP)
3. Step 1: Get your API key — explain how to generate and store it
4. Step 2: Make your first request — provide a curl example for GET /tasks with the Authorization header
5. Step 3: Understand the response — show a sample JSON response and explain the key fields
6. Next steps — link to the full API reference

Guidelines:
- Use second person ("you") throughout
- Use active voice
- Keep sentences under 20 words where possible
- Use numbered steps for all procedures
- Add [SCREENSHOT: description] placeholders where a visual would help
- Do not include information beyond what is needed to complete the first task
```

**Pro tip:** After the AI generates this, rewrite the introduction and next steps in your own words. Those sections show your voice the most.

---

### Prompt 2: GET /tasks endpoint reference

An endpoint reference page is the most common document in API documentation. This prompt helps you write one for the GET /tasks endpoint, which retrieves a list of all tasks.

```
You are a technical writer documenting a REST API. Write a reference page for the following endpoint.

Endpoint details:
- Method: GET
- Endpoint URL: https://api.workit.io/v1/tasks
- Description: Retrieves a list of all tasks. Supports optional query parameters for filtering.
- Authentication: Bearer token in the Authorization header
- Query parameters:
  - status (string, optional): Filter tasks by status. Allowed values: to_do, in_progress, done
  - assignee (string, optional): Filter tasks by user ID
  - project (string, optional): Filter tasks by project ID
- Response: Returns an array of task objects
- Response codes: 200 (success), 401 (unauthorized), 500 (internal server error)
- Example response:
  {
    "tasks": [
      {
        "id": "task_01",
        "title": "Write getting started guide",
        "status": "in_progress",
        "assignee": "user_03",
        "project": "project_02",
        "due_date": "2025-06-30"
      }
    ],
    "total": 1
  }

Format the output with these clearly labeled sections:
1. Endpoint — method and URL
2. Description — one sentence explaining what this endpoint does
3. Authentication — how to pass the API key
4. Query parameters — table with columns: Parameter | Type | Required | Description | Allowed values
5. Request example — a curl command
6. Response — sample JSON
7. Response fields — table with columns: Field | Type | Description
8. Error responses — table with columns: Code | Message | Description

Guidelines:
- Use code blocks for all URLs, parameters, and JSON examples
- Use tables for parameters and error codes
- Do not use em dashes
- Use active voice and second person
```

**Pro tip:** Compare the field descriptions generated here against the WorkIt API overview. Make sure they are consistent.

---

### Prompt 3: Glossary

A glossary helps non-technical readers and new developers understand the terminology in your documentation. It also shows hiring managers that you understand the domain.

```
You are a technical writer creating a glossary for the WorkIt API documentation.

Context:
- Product: WorkIt, a fictional REST API for task management
- Audience: Technical writers and junior developers who are new to API documentation
- Purpose: Define key terms used across the WorkIt documentation so readers can refer to it when they encounter unfamiliar language

Write a glossary with exactly 12 terms. Include the following terms:
API key, endpoint, request body, response, HTTP status code, authentication, Bearer token, task, project, assignee, query parameter, JSON

For each term:
1. Term — use title case
2. Definition — write 1 to 2 plain-language sentences. Avoid defining a term using the term itself.
3. Example — one sentence showing how the term applies in the context of WorkIt. Where relevant, include a short code snippet.

Format as a definition list. Sort alphabetically.

Guidelines:
- Write for someone with no prior API experience
- Avoid jargon in the definitions
- Keep each definition under 40 words
- Do not use em dashes
```

**Pro tip:** After generating this, rewrite at least 5 definitions in your own words. Glossary writing is a skill — the simpler and more precise, the better.

---

### Prompt 4: GitHub README

A README is one of the most common documents a technical writer produces. It is also one of the first things a recruiter sees in your portfolio.

```
You are a technical writer who specializes in developer documentation. Write a README.md for the WorkIt API as if it were a real open-source project on GitHub.

Project details:
- Project name: WorkIt API
- Project type: REST API
- What it does: Enables teams to create, assign, and track tasks through a simple set of HTTP endpoints
- Primary audience: Developers integrating a task management system into their application
- Base URL: https://api.workit.io/v1
- Authentication: API key (Bearer token)
- Key endpoints: GET /tasks, POST /tasks, PUT /tasks/{id}, DELETE /tasks/{id}, GET /projects, GET /users
- License: MIT

Write the README.md in GitHub Flavored Markdown with the following sections:
1. Project name and one-line description
2. Badges row — include placeholders for build status, version, and license badges
3. Overview — 2 to 3 sentences on what WorkIt does and who it is for
4. Features — a bulleted list of 5 key capabilities
5. Prerequisites — what the developer needs before they start
6. Quick start — how to make the first API call in under 5 steps, with a curl example
7. Endpoints — a summary table with columns: Method | Endpoint | Description
8. Authentication — how to pass the API key
9. Contributing — one sentence pointing to a CONTRIBUTING.md placeholder
10. License

Guidelines:
- Use ATX-style headings (# H1, ## H2)
- Use code blocks with language identifiers for all code
- Use second person and active voice
- Keep the Quick Start section under 150 words
- Do not use em dashes
```

**Pro tip:** Once you have the AI output, try writing the Overview and Features sections yourself without looking at the generated version. Then compare. The difference will show you where to improve.

---

### Prompt 5: Error code reference

Error documentation is often overlooked but it is one of the most-read pages in any API doc set. Developers go straight to it when something breaks.

```
You are a technical writer creating an error reference page for the WorkIt API.

Context:
- Product: WorkIt API
- Base URL: https://api.workit.io/v1
- Audience: Developers integrating with the WorkIt API
- Purpose: Help developers understand what each error means and how to fix it

Write a complete error reference page that covers the following HTTP status codes:
- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 409 Conflict
- 422 Unprocessable Entity
- 429 Too Many Requests
- 500 Internal Server Error

For each status code, include:
1. Code and name — formatted as a heading (e.g., ### 400 Bad Request)
2. Description — one sentence explaining what this code means in the context of WorkIt
3. Common causes — a bulleted list of 2 to 3 reasons this error occurs in WorkIt
4. How to resolve — numbered steps the developer should take to fix it
5. Example error response — a JSON code block showing what WorkIt returns for this error

Use this JSON format for all error responses:
{
  "error": {
    "code": [STATUS CODE],
    "message": "[SHORT ERROR MESSAGE]",
    "details": "[SPECIFIC DESCRIPTION OF WHAT WENT WRONG]"
  }
}

Guidelines:
- Write for a developer who is actively debugging, not reading for fun
- Be specific — "Check that your API key is included in the Authorization header" is better than "Check your credentials"
- Use active voice
- Do not use em dashes
```

**Pro tip:** Error documentation is a great portfolio piece because it shows you can think from the user's perspective, not just document features.

---

### Prompt 6: FAQ

A FAQ page shows that you understand real user pain points. It is also a common deliverable in help centers and developer portals.

```
You are a technical writer creating a FAQ page for the WorkIt API.

Context:
- Product: WorkIt API
- Audience: Developers who have read the Getting Started guide and are now integrating WorkIt into their application
- Purpose: Answer the most common questions developers ask when working with the WorkIt API for the first time

Write a FAQ page with exactly 10 questions. Cover the following topics:
- Authentication (2 questions)
- Making requests (2 questions)
- Handling errors (2 questions)
- Tasks and projects (2 questions)
- Rate limits and data (2 questions)

For each question:
1. Question — write it the way a developer would actually ask it (e.g., "What do I do if my API key stops working?")
2. Answer — 2 to 4 sentences. Be direct. Lead with the answer, then explain.
3. Code example — include a curl snippet or JSON example where it adds clarity. Skip it where it does not.

Guidelines:
- Do not start answers with "Great question" or similar filler phrases
- Use second person and active voice
- Keep answers under 80 words each
- Use code blocks for all code
- Do not use em dashes
```

**Pro tip:** After generating, rewrite the 3 answers you find most useful. Pay attention to how you naturally explain things differently from the AI.

---

### Prompt 7: Conceptual overview

A conceptual overview explains how something works without telling the reader what to do. It is a distinct documentation type that many new writers overlook.

```
You are a technical writer creating a conceptual overview for the WorkIt API.

Context:
- Product: WorkIt, a REST API for task management
- Audience: Non-technical stakeholders such as product managers, business analysts, and team leads who need to understand how WorkIt works without reading code
- Purpose: Explain the relationship between the three core resources in WorkIt — users, projects, and tasks — in plain language

Write a conceptual overview titled "How WorkIt works" that includes:
1. Introduction — 2 sentences explaining what WorkIt does at a high level
2. Core concepts — explain each of the three resources (users, projects, tasks) in 2 to 3 sentences each. Use plain language. No code.
3. How the resources relate — explain how users, projects, and tasks connect to each other. Use an analogy if it helps.
4. A real-world example — describe a realistic scenario (e.g., a software team using WorkIt to manage a sprint) that shows how all three resources work together
5. Key terms — a short list of 5 terms the reader should know, with one-sentence definitions

Guidelines:
- No code blocks or technical syntax
- No jargon without explanation
- Use second person and active voice
- Write at a reading level suitable for a non-technical business audience
- Keep the total length under 400 words
- Do not use em dashes
```

**Pro tip:** This type of document is harder to write than a reference page because you cannot rely on technical structure to organize it. Pay attention to how the AI builds logical flow — then try to do it better.

---

### Prompt 8: POST /tasks endpoint reference

Building on Prompt 2, this prompt documents a write endpoint. POST endpoints are more complex because they require a request body with multiple fields.

```
You are a technical writer documenting a REST API. Write a reference page for the following endpoint.

Endpoint details:
- Method: POST
- Endpoint URL: https://api.workit.io/v1/tasks
- Description: Creates a new task in WorkIt
- Authentication: Bearer token in the Authorization header
- Request body fields:
  - title (string, required): Title of the task. Maximum 255 characters.
  - description (string, optional): Detailed description of the task
  - status (string, optional): Defaults to to_do. Allowed values: to_do, in_progress, done
  - priority (string, optional): Defaults to medium. Allowed values: low, medium, high
  - assignee (string, optional): ID of the user to assign the task to
  - project (string, optional): ID of the project to add the task to
  - due_date (string, optional): Due date in YYYY-MM-DD format
- Success response code: 201 Created
- Error response codes: 400 (bad request), 401 (unauthorized), 500 (internal server error)
- Example success response:
  {
    "id": "task_08",
    "title": "Write release notes for v2.0",
    "status": "to_do",
    "priority": "high",
    "assignee": "user_05",
    "project": "project_03",
    "due_date": "2025-07-15",
    "created_at": "2025-05-10T09:30:00Z",
    "updated_at": "2025-05-10T09:30:00Z"
  }

Format the output with these sections:
1. Endpoint — method and URL
2. Description — one sentence
3. Authentication — how to pass the API key
4. Request body — table with columns: Field | Type | Required | Default | Description | Constraints
5. Request example — a curl command with a sample request body
6. Response — 201 Created with sample JSON
7. Response fields — table with columns: Field | Type | Description
8. Error responses — table with columns: Code | Message | Description
9. Example error response — a 400 Bad Request JSON example

Guidelines:
- Use code blocks for all URLs, JSON, and curl examples
- Use tables for request body fields and error codes
- Clearly distinguish required fields from optional fields
- Do not use em dashes
- Use active voice and second person
```

**Pro tip:** Compare this reference page with the one you wrote for GET /tasks. Notice how the structure is the same but the content differs. Consistency across pages is a sign of a mature doc set.

---

### Prompt 9: Quickstart guide

A quickstart guide is shorter and more focused than a Getting Started guide. The goal is to get the developer to a working result in the shortest possible time.

```
You are a technical writer specializing in developer onboarding. Write a quickstart guide for the WorkIt API.

Context:
- Product: WorkIt API
- Task to complete: Create a new task using POST /tasks
- Time target: The developer should be able to complete this in under 5 minutes
- Audience: A developer who has their API key and knows how to use a REST client
- Base URL: https://api.workit.io/v1

Write a quickstart guide with the following structure:
1. Title: "Quickstart: Create your first task"
2. What you will do — one sentence
3. Before you begin — a 2-item checklist (API key, REST client)
4. Step 1: Set up your request — show the endpoint and required headers
5. Step 2: Write your request body — show the minimum required JSON (title field only)
6. Step 3: Send the request — show the full curl command
7. Step 4: Check the response — show the 201 Created response and point out the id field
8. What is next — 2 bullet points linking to next actions (e.g., assign the task, add it to a project)

Guidelines:
- Maximum 300 words total
- Every step must have a code block
- Use numbered steps, not paragraphs
- Do not explain concepts — link to them instead
- Use second person and active voice
- Do not use em dashes
```

**Pro tip:** Quickstart guides are one of the hardest docs to write well because every word has to earn its place. Try cutting 20% of the AI output without losing any information.

---

## Intermediate prompts

Try these once you are comfortable with the beginner prompts. They require more judgment about structure, audience, and documentation strategy.

---

### Prompt 10: Release notes

Release notes are a standard deliverable in most technical writing roles. This prompt covers a realistic v2.0 release with new features, a deprecation, and a bug fix.

```
You are a technical writer responsible for software release communications. Write release notes for WorkIt v2.0.

Release details:
- Product: WorkIt API
- Version: 2.0
- Release date: [DATE]
- Audience: Developers who are already using the WorkIt API

Changes to document:
- New feature: GET /projects/{id}/tasks — retrieves all tasks belonging to a specific project
- New feature: The status field now supports a new value: on_hold
- Bug fix: The due_date field now correctly rejects invalid date formats and returns a 400 error with a clear message
- Deprecation: The assignee field in POST /tasks is deprecated. Use assignee_id instead. The assignee field will be removed in v3.0.
- Breaking change: None

Format the release notes with these sections:
1. Overview — a 2-sentence summary of the most important changes in this release
2. New features — one entry per feature. For each: a heading, a one-sentence description, and a code example where relevant
3. Bug fixes — one entry per fix. For each: describe what was broken, what it does now, and what the developer needs to do (if anything)
4. Deprecations — clearly explain what is deprecated, what to use instead, and when the deprecated item will be removed. Include a migration example.
5. Upgrade notes — any action the developer needs to take before or after upgrading

Guidelines:
- Frame every change from the developer's perspective ("You can now..." not "We added...")
- Flag the deprecation with a warning callout
- Use code blocks for all endpoint and field references
- Use active voice
- Do not use em dashes
```

**Pro tip:** The deprecation notice is the most important section in this release. Pay attention to how it balances urgency with clear migration guidance.

---

### Prompt 11: Authentication guide

Authentication documentation is one of the first things a developer looks for. A good auth guide reduces support tickets and builds trust.

```
You are a technical writer creating an authentication guide for the WorkIt API.

Context:
- Product: WorkIt API
- Authentication method: API key passed as a Bearer token in the Authorization header
- Audience: Developers integrating with the WorkIt API for the first time
- Purpose: Explain how authentication works in WorkIt, how to use API keys correctly, and what to do when authentication fails

Write a complete authentication guide that includes:
1. Overview — 2 sentences explaining how WorkIt handles authentication and why it matters
2. How to get an API key — step-by-step (use placeholder steps since WorkIt is fictional: go to Settings, click API Keys, click Generate)
3. How to authenticate requests — show the required header format and a curl example
4. What happens when authentication fails — show the 401 error response and explain the 3 most common causes
5. API key security best practices — a list of 5 specific, actionable recommendations (not generic advice)
6. Revoking and regenerating API keys — explain when and how to do this

Guidelines:
- Use second person and active voice
- Use code blocks for all headers, curl examples, and JSON responses
- The security best practices should be specific to API keys, not generic cybersecurity advice
- Do not use em dashes
- Keep the total length under 500 words
```

**Pro tip:** The security best practices section is where many writers go vague. Push for specifics: "Store your API key in an environment variable, not in your source code" is better than "Keep your API key safe."

---

### Prompt 12: PUT /tasks/{id} endpoint reference

The PUT endpoint is more nuanced than GET or POST because you need to document partial updates, validation rules, and what happens when the task does not exist.

```
You are a technical writer documenting a REST API. Write a reference page for the following endpoint.

Endpoint details:
- Method: PUT
- Endpoint URL: https://api.workit.io/v1/tasks/{id}
- Description: Updates an existing task in WorkIt. Supports partial updates — only the fields included in the request body will be updated.
- Authentication: Bearer token in the Authorization header
- Path parameter: id (string, required) — the unique identifier of the task to update
- Updatable fields:
  - title (string, optional): Maximum 255 characters
  - description (string, optional): No length limit
  - status (string, optional): Allowed values: to_do, in_progress, done, on_hold
  - priority (string, optional): Allowed values: low, medium, high
  - assignee_id (string, optional): ID of the user to assign the task to
  - due_date (string, optional): Must be in YYYY-MM-DD format. Cannot be a date in the past.
- Success response: 200 OK — returns the full updated task object
- Error response codes: 400 (validation error), 401 (unauthorized), 404 (task not found), 500 (internal server error)

Format the output with these sections:
1. Endpoint — method and URL
2. Description — include a note that this endpoint supports partial updates
3. Authentication
4. Path parameters — table with columns: Parameter | Type | Required | Description
5. Request body — table with columns: Field | Type | Required | Description | Constraints
6. Request example — a curl command that updates only the status and due_date fields
7. Response — 200 OK with a full task object
8. Validation rules — a separate section listing all field-level validation rules
9. Error responses — table with columns: Code | Message | Description
10. Example error responses — show both a 400 and a 404 example

Guidelines:
- Make the partial update behavior clear and prominent
- Use code blocks for all examples
- Use tables for parameters and errors
- Do not use em dashes
```

**Pro tip:** The validation rules section is what separates a good API reference from a basic one. Developers depend on it when they are debugging 400 errors.

---

### Prompt 13: Pagination guide

Pagination is a concept that trips up many developers. A clear pagination guide reduces support queries and shows that you can explain non-obvious technical concepts.

```
You are a technical writer creating a pagination guide for the WorkIt API.

Context:
- Product: WorkIt API v2.0
- Feature: Pagination has been introduced for all list endpoints (GET /tasks, GET /projects, GET /users)
- Audience: Developers who are already using the WorkIt API and need to handle large data sets
- Purpose: Explain how pagination works, how to use it, and how to handle edge cases

Write a pagination guide that includes:
1. Overview — explain why pagination exists and what it prevents (e.g., returning thousands of records in one request)
2. How pagination works in WorkIt — explain the cursor-based approach using the page and limit query parameters
3. Query parameters — table with columns: Parameter | Type | Default | Maximum | Description
   - page (integer, optional): Page number. Defaults to 1.
   - limit (integer, optional): Number of results per page. Defaults to 20. Maximum is 100.
4. A paginated request example — show a curl command for page 2 with a limit of 50
5. Understanding the response — show a full paginated response example with this envelope:
   {
     "data": [...],
     "pagination": {
       "total": 143,
       "page": 2,
       "limit": 50,
       "total_pages": 3,
       "next_page": 3,
       "prev_page": 1
     }
   }
   Explain every field in the pagination object in a table.
6. How to retrieve all pages — show a pseudocode loop that iterates through all pages
7. Edge cases — what happens when you request a page that does not exist, or set limit above 100

Guidelines:
- Use code blocks for all examples
- Use tables for parameters and response fields
- Explain the pseudocode loop in plain language before showing the code
- Do not use em dashes
- Use second person and active voice
```

**Pro tip:** The edge cases section is what makes this guide genuinely useful. Developers always test the boundaries — document what they will find.

---

## Senior prompts

These prompts reflect the kind of work senior technical writers handle: critical thinking, documentation strategy, and information architecture.

---

### Prompt 14: Audit and rewrite a bad doc

Auditing and rewriting existing documentation is one of the most common tasks in a senior technical writing role. This prompt gives you a deliberately poor document to fix.

```
You are a senior technical writer and documentation reviewer. I am giving you a poorly written API reference page. Your task is to audit it, identify all issues, and produce a professional rewrite.

Document to review:

---
DELETE a task

This deletes a task. You need to send the ID. If the task doesn't exist it gives a 404. Auth is required. Response is empty if it works. Might get a 500 if server is down.
---

Endpoint details to use in your rewrite:
- Method: DELETE
- Endpoint URL: https://api.workit.io/v1/tasks/{id}
- Description: Permanently deletes a task. This action cannot be undone.
- Authentication: Bearer token in the Authorization header
- Path parameter: id (string, required) — the unique identifier of the task to delete
- Success response: 204 No Content — no response body is returned
- Error codes: 401 (unauthorized), 404 (task not found), 500 (internal server error)

Produce two outputs:

Output 1: Audit report
List every issue found in the original document. For each issue: quote the original text, name the problem (e.g., missing information, passive voice, no code example, inconsistent formatting), and explain the impact on the developer.

Output 2: Rewritten reference page
Rewrite the document to professional standards using the endpoint details above. Follow this structure:
1. Endpoint — method and URL
2. Description — include a warning that this action is permanent
3. Authentication
4. Path parameters — table
5. Request example — curl command
6. Response — explain the 204 No Content response
7. Error responses — table with Code | Message | Description
8. Example error responses — show a 404 example

Guidelines:
- Use code blocks for all examples
- Add a warning callout for the irreversible nature of DELETE
- Do not use em dashes
- Use active voice and second person
```

**Pro tip:** After generating both outputs, write your own audit report independently before reading the AI version. Compare them. The gaps show you what to look for in future reviews.

---

### Prompt 15: Information architecture for WorkIt docs

Designing a documentation site structure is a senior-level skill. It requires you to think about user journeys, not just individual documents.

```
You are a senior technical writer and documentation strategist. You have been asked to design the complete information architecture for the WorkIt API documentation site.

Context:
- Product: WorkIt API
- Audiences: New developers (onboarding), experienced developers (reference lookup), non-technical stakeholders (understanding the product)
- Documentation types needed: Conceptual overviews, how-to guides, API reference pages, quickstart guides, release notes, FAQ
- Publishing platform: A docs site (similar to Stripe Docs or Twilio Docs)

Produce a complete information architecture document that includes:

1. Site map
   Present the full navigation structure as an indented list. Include every page. Group pages under top-level sections.

2. Section descriptions
   For each top-level section: write 2 sentences explaining what it contains and who it is for.

3. Reading paths
   Define 3 recommended reading paths for different user types:
   - Path A: A developer integrating WorkIt for the first time
   - Path B: An experienced developer looking up a specific endpoint
   - Path C: A non-technical stakeholder evaluating WorkIt for their team

4. Page dependency map
   List 5 pages that must be written before others can reference them. Explain why each one is a dependency.

5. Content gaps
   Based on the WorkIt API overview, identify 3 documentation types that are not yet covered and explain why they would be valuable.

Guidelines:
- Think about the user's goal at each step, not just the document type
- The site map should reflect how a user navigates, not how the API is structured internally
- Use plain language in all section descriptions
- Do not use em dashes
```

**Pro tip:** This is the strongest portfolio piece you can include. A documented IA (Information Architecture) shows you think about documentation as a system, not a collection of individual files.

