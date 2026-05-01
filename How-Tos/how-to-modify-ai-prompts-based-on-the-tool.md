# AI prompting guide for technical writers

> A reference guide for technical writers who use AI tools in their daily workflow.
> Each section explains how a specific tool works, what it is best suited for, and includes
> detailed, copy-ready prompt templates built on prompt engineering principles.

---

## Table of contents

- [How to use this guide](#how-to-use-this-guide)
- [The 8-part prompt structure](#the-8-part-prompt-structure)
- [Tools covered](#tools-covered)
- [ChatGPT](#1-chatgpt)
- [Claude](#2-claude)
- [Gemini](#3-gemini)
- [GitHub Copilot](#4-github-copilot)
- [Grammarly](#5-grammarly)
- [NotebookLM](#6-notebooklm)
- [Notion AI](#7-notion-ai)
- [The one principle that connects all tools](#the-one-principle-that-connects-all-tools)
- [Contributing](#contributing)

---

## How to use this guide

This guide is a bookmark-and-return reference. Each tool section covers three things:

1. **What the tool is best suited for** in a technical writing context
2. **How to prompt it effectively** and what makes it different from other tools
3. **Ready-to-use prompt templates** you can copy, paste, and adapt

The prompts are detailed by design. A prompt that takes two minutes to write well can save 30 minutes of editing. Every template in this guide applies the 8-part prompt structure described below.

> **Note on style:** All prose in this guide follows the Microsoft Writing Style Guide. Prompts use active voice, plain language, and sentences under 20 words where possible.

---

## The 8-part prompt structure

Every prompt template in this guide is built on these eight elements. You do not always need all eight, but the more you include, the less the tool has to guess.

| Element | What it does | Example |
|---|---|---|
| **Role** | Defines who the AI is in this task | `You are a senior technical writer with eight years of experience writing API documentation for SaaS products.` |
| **Task** | One specific, unambiguous instruction | `Write the introduction section for a user manual chapter called "Setting Up Two-Factor Authentication."` |
| **Context** | Product, audience, use case | `The audience is a small business owner with no IT background. The document will be published in the in-app help center.` |
| **Format** | Structure, length, headings, lists | `Write in three paragraphs of no more than four sentences each. Total word count: 120 to 150 words.` |
| **Tone** | Style guide, voice, formality | `Use active voice. Follow the Microsoft Writing Style Guide. Do not use jargon without a plain-English explanation.` |
| **Constraints** | What not to do or change | `Do not use the words "utilize," "leverage," or "seamlessly." Do not change parameter names or code samples.` |
| **Example** | A concrete sample of the target output | `Here is an example of the tone I want: "Your account holds information that only you should see."` |
| **Verify** | Flag uncertainty instead of assuming | `If any detail is unclear, write [CONFIRM WITH ENGINEER] rather than making an assumption.` |

---

## Tools covered

| Tool | Best For |
|---|---|
| [ChatGPT](#1-chatgpt) | Long-form drafts, outlines, document restructuring |
| [Claude](#2-claude) | Tone consistency, style guide rewrites, large document editing |
| [Gemini](#3-gemini) | Research-grounded content, Google Workspace integration |
| [GitHub Copilot](#4-github-copilot) | Code explanations, inline docs, code samples for documentation |
| [Grammarly](#5-grammarly) | Real-time editing, error message rewrites, tone checking |
| [NotebookLM](#6-notebooklm) | Multi-source synthesis, documentation gap analysis |
| [Notion AI](#7-notion-ai) | Internal docs, SOPs, team wikis, structured content from notes |

---

## 1. ChatGPT

### What it is best suited for

ChatGPT is strong at generating structured, long-form content when you give it a clear role, a concrete task, and enough background to work with. It responds well to detailed prompts. Vague prompts produce generic output.

ChatGPT supports persistent memory. If you use it regularly, you can save your persona, style preferences, and product context so you do not need to repeat them in every session.

**The most common mistake:** Using a vague role such as "You are a technical writer." Define the domain, experience level, and task context specifically. This changes how the model structures its output.

---

### Prompt Template: User Manual Introduction Section

```
You are a senior technical writer with eight years of experience writing
end-user documentation for cloud-based SaaS products. You write for
non-technical audiences and follow the Microsoft Writing Style Guide.

TASK
Write the introduction section for a user manual chapter called
"Setting Up Two-Factor Authentication."

CONTEXT
- Product: A project management platform used by small business owners
- Audience: Business owners and office managers with no IT background
- Reader goal: Understand what two-factor authentication is, why it
  matters, and what they need before they begin setup
- Publication: In-app help center

FORMAT
- Three short paragraphs
- Maximum four sentences per paragraph
- Total word count: 120 to 150 words
- No bullet points, numbered lists, or subheadings within this section

TONE AND STYLE
- Active voice throughout
- Microsoft Writing Style Guide
- Plain language: explain any technical term immediately after using it
- Do not assume the reader knows what an authentication app is

CONSTRAINTS
- Do not use the words "utilize," "leverage," or "seamlessly."
- Do not use passive voice
- Do not start sentences with "To"

EXAMPLE
Here is the tone and sentence style I want:
"Your account holds information that only you should be able to see.
Two-factor authentication adds a second step to your login process so
that even if someone gets your password, they still cannot get in
without a second piece of verification that only you have."

VERIFY
If any product-specific detail is not covered in this prompt, flag it
with [NEEDS VERIFICATION] rather than making an assumption.
```

**Why this works:**
The role defines the domain and style guide in one sentence. The context block tells ChatGPT exactly who the reader is and what they need to walk away knowing. The example gives the model a tone reference it can match rather than interpret. The verify instruction prevents confident-sounding output about product details that the prompt does not cover.

---

### Prompt Template: Document Outline for a Developer Guide

```
You are a senior technical writer specializing in developer documentation
for REST APIs. You have experience creating documentation for developer
portals at SaaS companies. You follow the Microsoft Writing Style Guide
and are familiar with the Google Developer Documentation Style Guide.

TASK
Create a detailed outline for a Getting Started guide for a REST API
used by backend developers who are new to this product.

CONTEXT
- Product: A payment processing REST API for e-commerce platforms
- Audience: Backend developers with two or more years of experience,
  familiar with REST APIs, JSON, and HTTP methods
- Reader goal: Make their first successful API call within 15 minutes
  of reading the guide
- Publication: Public developer portal

FORMAT
- Use H2 headings for main sections
- Use H3 headings for subsections
- List the key content points under each section as brief bullet points
- Include an estimated reading time for each section
- Maximum five main sections

TONE AND STYLE
- Direct and practical
- No marketing language
- Each section heading should tell the reader what they will be able
  to DO after reading it, not just what it is about

CONSTRAINTS
- Do not include a section on pricing or account management
- Do not use the phrase "best practices" as a standalone heading
- Every section must move the reader closer to making their first API call

EXAMPLE
Here is an example of the heading style I want:
Instead of: "Authentication"
Use: "Authenticate your first API request"

VERIFY
Flag any section where the content would require product-specific
information not provided in this prompt with [PRODUCT DETAIL NEEDED].
```

[↑ Back to top](#table-of-contents)

---

## 2. Claude

### What it is best suited for

Claude handles large volumes of text reliably and is particularly good at applying a consistent editing standard across a long document. It responds well to structured prompts that separate instructions, context, and examples into clearly labeled sections.

When you mix instructions and content together in a single block of text, the output quality drops. Keep them separate.

Claude also responds well to few-shot examples. Giving it one strong example of the target output style before asking it to write is one of the most reliable ways to match a house voice or style guide standard.

**Key difference from ChatGPT:** Claude is better suited for editing and rewriting existing text to a standard. ChatGPT is better suited for generating new content from a brief. Use Claude when you have a draft and a standard to apply to it.

---

### Prompt Template: API Reference Rewrite to Match Style Guide

```
You are a technical editor with deep experience editing API reference
documentation for software developer audiences. You apply the Microsoft
Writing Style Guide and are familiar with REST API documentation
conventions.

TASK
Rewrite the API reference text provided in the SOURCE section below
to meet the Microsoft Writing Style Guide standard.

CONTEXT
- Document type: REST API reference
- Audience: Mid-level backend developers
- Current state: Written by an engineer; uses passive voice, noun-heavy
  phrasing, and inconsistent terminology
- Publication: Public developer portal

FORMAT
- Return the rewritten text only
- Do not include a preamble, explanation, or commentary before or after
- Preserve all parameter names, endpoint paths, HTTP methods, status
  codes, and code samples exactly as written
- Do not reformat code blocks
- Use sentence case for all headings

CONSTRAINTS
- Do not use passive voice
- Keep sentences under 20 words where possible
- Do not use the phrases "please note," "it should be noted," or
  "in order to"
- Do not change technical terms or introduce new ones
- Do not add information that is not in the original text

EXAMPLE
Here is a before and after to show the target style:

Before:
"Authentication is required to be performed by the client prior to
any API request being made."

After:
"Authenticate before you make any API request."

Before:
"The response object will be returned in JSON format and will contain
the status of the request."

After:
"The response returns a JSON object with the request status."

VERIFY
If the original text contains a term or instruction that is ambiguous
or contradictory, flag it with [REVIEW NEEDED: reason] and leave the
original text in place rather than rewriting it.

SOURCE
[Paste the original API reference text here]
```

**Why this works:**
Two before-and-after examples do more work than any written description of good style. The instruction to leave original text in place when something is ambiguous is critical for API documentation: rewriting an ambiguous technical instruction confidently is one of the most common ways documentation errors reach production.

---

### Prompt Template: Changelog Entry from Engineering Notes

```
You are a technical writer who specializes in writing developer-facing
changelogs and release notes. You follow the Microsoft Writing Style
Guide and understand that a changelog entry must be scannable,
specific, and immediately useful to a developer.

TASK
Write three changelog entries based on the engineering notes provided
in the SOURCE section below.

CONTEXT
- Product: A developer API platform
- Audience: Developers who use this API in production and read the
  changelog to understand what changed and whether it affects them
- Reader question: "Does this change require me to update my code?"

FORMAT
Use this structure for each entry:

[TYPE] Short title in sentence case (maximum 10 words)
What changed: One sentence describing the specific change.
Impact: One sentence describing who is affected and how.
Action required: One sentence stating what the developer must do,
or "No action required" if nothing needs to change.

Types: Added / Changed / Fixed / Deprecated / Removed / Security

CONSTRAINTS
- Do not write vague entries such as "Improved performance" without
  specifying what improved and by how much
- Do not use internal ticket numbers or project names
- Do not use passive voice
- If a change is breaking, mark the title with [BREAKING] after the type

EXAMPLE
[Changed] Default timeout increased from 30 to 60 seconds
What changed: The default request timeout for all API calls increased
from 30 seconds to 60 seconds.
Impact: Affects developers who rely on the default timeout value in
time-sensitive workflows.
Action required: If your application requires a timeout shorter than
60 seconds, set the timeout value explicitly in your request configuration.

VERIFY
If the engineering notes do not contain enough detail to write the
Impact or Action required line for any entry, write
[INFORMATION MISSING: state what is needed] for that line.

SOURCE
[Paste engineering notes here]
```

[↑ Back to top](#table-of-contents)

---

## 3. Gemini

### What it is best suited for

Gemini's biggest advantage over other tools is its real-time access to Google Search and its deep integration with Google Workspace. When you use the Gemini app or Gemini inside Google Docs, you can reference your own Drive files, Gmail threads, and Google Slides directly in a prompt using the `@` symbol.

This means you can draft a release note from an actual meeting summary file, or write a status update that pulls from three different project documents, without copying and pasting a single line.

**Key technique:** Combine research and creation in a single prompt. Gemini is designed to search for current information and then immediately structure it into a document. Splitting these into two separate prompts wastes the tool's main strength.

---

### Prompt Template: Release Note from a Live Meeting Notes File

```
You are a technical writer creating customer-facing product release
notes for a SaaS company. You write in plain, factual language and
follow the Microsoft Writing Style Guide.

TASK
Write a release note for the new feature described in the meeting
notes file linked below.

SOURCE FILE
@[YourMeetingNotesFileName]

CONTEXT
- Product: A project management platform
- Audience: Existing customers; small business owners and office
  managers with no technical background
- Publication: In-app notification and public release notes page
- Release date: [Insert date written as DD Month YYYY, e.g. 15 May 2026]

FORMAT
Use exactly three sections with these plain-text labels:

What changed
[Two to three sentences describing the feature in plain language]

Why this matters
[Two sentences explaining the benefit to the user]

What you need to do
[One to two sentences describing any action the user must take,
or "No action is required. This update is applied automatically."
if nothing needs to change]

Total word count: 100 to 130 words.
Do not use bullet points.
Do not use subheadings beyond the three section labels above.

CONSTRAINTS
- Do not mention internal project names or engineering ticket numbers
- Do not use the words "robust," "seamlessly," "exciting," or "pleased
  to announce"
- Do not write the release date in numeric format
- Write all numbers below 10 as words

EXAMPLE
What changed
We have added a new option to export your project data as a CSV file
directly from the dashboard.

Why this matters
You can now back up your data or import it into other tools without
contacting support. The export is available immediately with no
additional setup.

What you need to do
Go to Settings, select Data Export, and choose CSV. The file will
download to your device within a few seconds.

VERIFY
If the meeting notes do not include enough detail to complete any of
the three sections, write [INFORMATION MISSING: state the specific
question that needs to be answered] in that section.
```

**Why this works:**
The full section example gives Gemini a structural template to follow, not just a description of one. The `@` file reference grounds the output in real product context. The verify instruction catches the most common problem with release notes written from incomplete meeting notes: the model fills in missing product decisions with assumptions.

---

### Prompt Template: Research-Grounded Explainer Article

```
You are a technical writer creating educational content for a
developer blog. You write clearly for readers who are technically
literate but may not be specialists in the topic you are covering.
You follow the Microsoft Writing Style Guide.

TASK
Research the topic below and write a 600-word explainer article
based on current, verified information. Do not split the research
and writing into two steps. Research and write in one pass.

TOPIC
[Insert your topic here, e.g. "How OAuth 2.0 authorization works
for API authentication"]

CONTEXT
- Audience: Backend developers with general REST API knowledge who
  want a clear, practical explanation of the topic
- Publication: Company developer blog
- Reader goal: Understand the concept well enough to decide whether
  to implement it and know where to start

FORMAT
- H2 heading for the article title (plain, descriptive, no clickbait)
- Three to four H3 subheadings for main sections
- Short paragraphs of two to three sentences
- One code example in a fenced code block if relevant
- No bullet point lists in the main body

TONE AND STYLE
- Direct and practical
- No marketing language
- Define technical terms in plain English the first time you use them
- Active voice throughout

CONSTRAINTS
- Do not use the phrases "dive into," "unpack," or "in today's world"
- Do not start the article with a question
- For every statistic or claim you include, note the source
  in parentheses immediately after the claim
- Do not include information you cannot verify

EXAMPLE
Here is the tone and section style I want:
## How OAuth 2.0 Works
OAuth 2.0 provides an access token instead of sharing a user's credentials directly. When a user approves access, the authorization server issues a short-lived token to your application. This limits what your application can do and for how long.

VERIFY
If a specific claim requires information that is not available or
verifiable, omit it and note [UNVERIFIED: describe what was omitted]
at the end of the article.
```

[↑ Back to top](#table-of-contents)

---

## 4. GitHub Copilot

### What it is best suited for

GitHub Copilot is built for developers, but it is one of the most useful tools a technical writer can have when the documentation involves code. You do not need to be a developer to use Copilot Chat effectively.

**Before you prompt:** Open the relevant file in your IDE. Copilot uses the open files as context. The more relevant code it can see, the more accurate its explanation will be. Highlight the specific function or block you want to document before submitting the prompt.

**Key difference from other tools:** Copilot generates output based on the code it can see in your editor, not just the text in your prompt. Your open files are part of every prompt whether you reference them or not.

---

### Prompt Template: Plain-English Explanation of a Code Function

```
You are assisting a technical writer, not a developer. The technical
writer needs to document this function accurately for a developer
audience but does not need to understand every implementation detail.

TASK
Explain what the highlighted function does in plain English so it
can be used as the basis for API reference documentation.

CONTEXT
- Document type: API reference
- Audience: Backend developers who are new to this API but experienced
  with REST APIs generally
- Reader needs: Understand what the function does, what inputs it
  accepts, what it returns, and when they would use it
- Reader does not need: Internal implementation details

FORMAT
Return your explanation in exactly four labeled sections:

Purpose
[One sentence describing what the function does]

Parameters
[One line per parameter in this format:
`name` (type, required/optional, default if applicable) — plain-English
description of what this parameter does]

Return value
[One to two sentences describing what the function returns and in
what format. Use plain English, not code syntax.]

When to use it
[One to two sentences describing the use case or scenario in which
a developer would call this function]

CONSTRAINTS
- Do not use internal variable names that are not part of the public API
- Do not explain the internal logic or implementation of the function
- Do not use jargon specific to this codebase without explanation
- Write the Parameters, Return value, and When to use it sections in
  plain English only, no code syntax

EXAMPLE
Here is the output format I want:

Purpose
Sends a password reset email to a registered user account.

Parameters
`email` (string, required) — the email address of the account to reset.
`timeout` (integer, optional, default: 30) — the number of seconds
before the reset link expires.

Return value
Returns a JSON object with a `status` field set to either "sent" or
"failed", and a `message` field with a human-readable description
of the result.

When to use it
Use this function when a user requests a password reset from the
login screen or account settings page.

VERIFY
If any parameter's purpose, type, or behavior is ambiguous from the
code, flag it with [CONFIRM WITH ENGINEER: state the specific question]
rather than making an assumption.
```

---

### Prompt Template: Code Sample for a How-To Guide

````
You are assisting a technical writer who needs a working code sample
to include in a how-to guide for developers. The code sample must be
accurate, minimal, and easy to follow for a developer who is new to
this API.

TASK
Write a short [LANGUAGE] code sample that demonstrates
[SPECIFIC ACTION, e.g. "how to authenticate using the /auth endpoint"].

CONTEXT
- Guide type: How-to guide for developers new to this API
- Audience: Backend developers familiar with [LANGUAGE] but new to
  this specific API
- Purpose of the sample: Show the developer the minimum code needed
  to complete this one task successfully

FORMAT
- Maximum 20 lines of code
- Use placeholder values for all credentials and environment-specific
  values, formatted as ALL_CAPS_WITH_UNDERSCORES
  (e.g. YOUR_CLIENT_ID, YOUR_API_KEY)
- Add a single-line comment above each logical step explaining what
  that step does in plain English
- Wrap the sample in a fenced code block with the language specified

CONSTRAINTS
- Do not include error handling unless the task specifically requires it
- Do not include imports or dependencies that are not needed for this
  specific task
- Do not use deprecated methods or libraries
- Every placeholder must be clearly named so the developer knows
  exactly what value to substitute

EXAMPLE
Here is the style and comment format I want:

```python
# Set your API credentials as environment variables
client_id = "YOUR_CLIENT_ID"
client_secret = "YOUR_CLIENT_SECRET"

# Send the authentication request to the /auth endpoint
response = requests.post(
    "https://api.example.com/auth",
    json={"client_id": client_id, "client_secret": client_secret}
)

# Extract the access token from the response
access_token = response.json()["access_token"]
```

VERIFY
If any step in the sample requires a product-specific value or
behavior that is not confirmed in this prompt, flag it with
[CONFIRM WITH ENGINEER] as a comment in the code.
````

[↑ Back to top](#table-of-contents)

---

## 5. Grammarly

### What it is best suited for

Grammarly works differently from the other tools in this guide. It does not generate documents from scratch. It works on existing text and improves it in real time. Through GrammarlyGO, it also supports prompt-based rewrites and generation for specific content types.

Grammarly runs inside your browser, Google Docs, and most writing platforms, so it works wherever the content already lives. The most effective use for technical writers is rewriting tightly constrained content types such as error messages, warning notices, UI labels, and tooltip text.

**Key difference from other tools:** Grammarly is a final-pass and in-context tool. Use it after you have a draft, not to create one. Its real-time grammar and tone suggestions work automatically. Use GrammarlyGO prompts for targeted rewrites of specific content types.

---

### Prompt Template: Error Message Rewrite for a Non-Technical Audience

```
You are a UX writer and technical editor specializing in user-facing
error messages for SaaS products. You write for non-technical users
and follow the Microsoft Writing Style Guide.

TASK
Rewrite the error message in the SOURCE section so it is clear,
calm, and actionable for a non-technical user.

CONTEXT
- Product: A project management platform
- Where it appears: Inline notification (not a modal or full-page error)
- Audience: Small business owner with no technical background
- Reader need: Understand what went wrong and exactly what to do next

FORMAT
- Two sentences maximum
- Sentence 1: What happened, in plain language
- Sentence 2: Exactly what the user should do next
- Maximum 120 characters including spaces
- No bullet points or line breaks

CONSTRAINTS
- Do not use the words: token, session, expired, authentication,
  credentials, parameter, or configuration
- Do not use passive voice
- Do not apologize
- Do not start the message with "Error," "Warning," or a numeric code
- Do not use technical jargon of any kind

EXAMPLE
Before:
"HTTP 403: Authorization header missing or invalid. Ensure Bearer
token is present in request."

After:
"You do not have permission to access this page. Contact your account
administrator to check your access settings."

SOURCE
[Paste the original error message here]

VERIFY
If the rewrite requires a specific product detail such as a settings
page name or a support link URL, flag it with [PRODUCT DETAIL NEEDED]
rather than inventing a placeholder.
```

---

### Prompt Template: Tooltip Text Rewrite

```
You are a UX writer specializing in in-product microcopy for SaaS
platforms. You write tooltip text that is short, plain, and immediately
useful for non-technical users. You follow the Microsoft Writing Style Guide.

TASK
Rewrite the tooltip text in the SOURCE section to be clearer and
more useful for the user at the moment they see it.

CONTEXT
- Product: A project management platform
- Where it appears: A hover tooltip on a settings field
- Audience: Non-technical business users seeing this field for the
  first time
- Reader need: Understand what the field does and what value to enter

FORMAT
- One sentence only
- Maximum 80 characters including spaces
- Use plain English
- Write in second person: address the user as "you"

CONSTRAINTS
- Do not use technical terms without plain-English explanation
- Do not repeat the field label in the tooltip
- Do not use passive voice
- Do not start with "This field" or "This setting"
- Do not use the words "allows," "enables," or "provides"

EXAMPLE
Field label: Session timeout
Before tooltip: "Configure the duration after which inactive sessions
will be terminated by the system."
After tooltip: "Set how long your team stays signed in when inactive."

SOURCE
Field label: [Insert field label]
Current tooltip: [Insert current tooltip text]

VERIFY
If the purpose of the field is unclear from the current tooltip, write [CLARIFICATION NEEDED: describe what is unclear] rather than making an assumption.
```

[↑ Back to top](#table-of-contents)

---

## 6. NotebookLM

### What it is best suited for

NotebookLM is fundamentally different from every other tool in this guide. When you ask it a question, it does not draw on public training data or the open internet. It only works from the sources you upload to the notebook.

This makes it the most reliable tool for technical writing that requires accuracy. Every statement it makes can be traced back to a source document with a citation you can verify.

**What to upload:** Product specifications, design documents, engineering meeting notes, past documentation drafts, and customer support transcripts. NotebookLM synthesizes across all of them at once.

> **Pro tip:** Add Google Docs as sources rather than PDFs where possible. Google Docs are treated as living documents and reflect the latest version. PDFs are static uploads and will not reflect updates made after you uploaded them.

---

### Prompt Template: Step-by-Step How-To Guide from Multiple Source Documents

```
You are acting as a technical writer reviewing uploaded product
documentation to produce a structured how-to guide. Your job is to
extract and organize only the information that is directly relevant
to the task. Do not summarize everything in the sources.

TASK
Using the uploaded documents, write a step-by-step how-to guide for
[INSERT TASK, e.g. "configuring single sign-on (SSO) for the first time"].

CONTEXT
- Audience: [INSERT AUDIENCE, e.g. "An IT administrator at a mid-size
  company with general technical knowledge, familiar with identity
  provider platforms such as Okta or Azure AD"]
- Reader goal: Complete the task successfully without needing to
  contact support or read additional documentation
- Publication: [INSERT LOCATION, e.g. "Product help center"]

FORMAT
Use this exact structure:

## Overview
[Two sentences: what this guide covers and what the reader will be
able to do when finished]

## Prerequisites
[Numbered list of what must be in place before starting]

## Steps
[Numbered steps in imperative form, one action per step, maximum
15 words per step]

## Notes
[Short section for warnings, exceptions, or clarifications that do
not fit in the steps. Leave this section out if there are none.]

CONSTRAINTS
- Include only information present in the uploaded source documents
- Do not add background information that is not part of the task
- Do not reference internal project names, ticket numbers, or
  draft version labels
- Write each step as a single action in the imperative form
  (e.g. "Select Save to apply the settings")
- Do not combine two actions in one step

EXAMPLE
Here is the step format I want:

Step 3: In the Identity Provider field, enter the entity ID provided
by your SSO provider.
Step 4: Select Save to apply the configuration.
Step 5: Copy the Assertion Consumer Service URL displayed on screen.

VERIFY
For every step that involves a specific field name, configuration
value, or setting path, cite the source document it came from in
parentheses after the step.

If the uploaded sources do not contain enough detail to write a
complete step, write [SOURCE GAP: describe what information is
missing] in place of that step. Do not invent or estimate any step.
```

---

### Prompt Template: Documentation Gap Analysis

```
You are a technical writer reviewing existing documentation to
identify what is missing, incomplete, or unclear for the target
reader.

TASK
Review all uploaded documents together and identify gaps in the
documentation from the perspective of the reader described below.

CONTEXT
- Reader: [INSERT AUDIENCE, e.g. "A new developer using this API
  for the first time"]
- Reader goal: [INSERT GOAL, e.g. "Make their first successful
  authenticated API call"]
- Documents uploaded: [List the document names]

FORMAT
Return your analysis as a numbered list. For each gap, write:

Gap [number]: [One sentence describing what is missing]
Reader impact: [One sentence describing what the reader cannot do
or understand because this information is missing]
Suggested action: [One sentence describing what documentation
needs to be created or updated to close this gap]

CONSTRAINTS
- Do not summarize what is already covered in the documents
- Focus only on what is missing, incomplete, or contradictory
- Do not raise issues that are out of scope for the reader goal
  defined above
- Be specific: "The /auth endpoint response format is not documented"
  is useful. "More detail is needed" is not.

EXAMPLE
Here is the level of detail I want:

Gap 1: The expiration time for the session token is not stated.
Reader impact: A developer cannot implement proper token refresh logic because they do not know when the token will expire.
Suggested action: Update the Authentication guide to specify the exact token lifespan in seconds.

VERIFY
If two uploaded documents contradict each other on the same point,
flag it as: [CONTRADICTION: document A says X, document B says Y,
clarification needed from engineering].
```

[↑ Back to top](#table-of-contents)

---

## 7. Notion AI

### What it is best suited for

Notion AI is most useful for documentation teams that already live in Notion. It works directly within the platform where the content is managed, eliminating the copy-paste step between a generation tool and a documentation system.

As of early 2026, Notion AI can reference content across linked pages, and its context window has expanded to 50 pages, which makes it useful for full project documentation sets rather than individual pages.

**Most underused feature:** Workspace admins can create reusable prompt templates that all team members can access. If your documentation always follows the same structure, set up a shared template so the AI always starts from the same baseline.

---

### Prompt Template: Standard Operating Procedure from Bullet Notes

```
You are a technical writer creating internal standard operating
procedures (SOPs) for a documentation team at a software company.
You write in plain, direct language and follow the Microsoft
Writing Style Guide.

TASK
Turn the bullet notes in the SOURCE section into a complete standard
operating procedure for [INSERT PROCESS NAME].

CONTEXT
- Who will use this SOP: [INSERT USER, e.g., "The documentation team
  lead when onboarding a new technical writer"]
- Who the SOP is about: [INSERT SUBJECT, e.g., "The new technical
  writer joining the team"]
- Where it will be stored: Internal Notion wiki
- Requirement: Specific enough that anyone in the role can follow it
  without asking for clarification

FORMAT
Use this exact section structure:

## Purpose
[One sentence stating what this SOP covers]

## Scope
[One sentence stating who this SOP applies to]

## Prerequisites
[Numbered list of what must be ready before the process begins]

## Week 1 Steps
[Numbered steps, one action per step, maximum 20 words per step]

## Week 2 Steps
[Numbered steps, one action per step, maximum 20 words per step]

## Notes
[Exceptions, reminders, or links to related documents.
Leave this section out if there are none.]

CONSTRAINTS
- Write all steps in the imperative form
  (e.g., "Send the welcome email," not "The team lead should send")
- Each step must be a single action
- Do not add tasks that are not in the source notes below
- Do not use the words "ensure," "make sure," or "please."
- If a step involves a tool or system, name it specifically
- Do not write vague steps such as "complete the setup process."
  or "handle the relevant tasks."

EXAMPLE
Here is the step format and level of detail I want:

Step 1: Send the new writer a welcome email using the template in the
Shared Templates folder in Google Drive.
Step 2: Add the new writer to the #documentation Slack channel and
the Documentation Team Notion workspace.
Step 3: Schedule a 30-minute intro call with the new writer for their
first morning.

SOURCE
[Paste your bullet notes here]

VERIFY
If any bullet note is too vague to write as a specific, actionable
step, flag it with [CLARIFICATION NEEDED: state the question] and
leave a placeholder rather than guessing the intended action.
```

---

### Prompt Template: Long Page Summary for a Non-Technical Team Member

```
You are a technical writer summarizing internal documentation for
a non-technical reader. You write in plain language and follow the
Microsoft Writing Style Guide.

TASK
Summarize the content of this Notion page for a team member who
does not have a technical background.

CONTEXT
- Reader: [INSERT READER, e.g., "A customer success manager who
  needs to understand this feature well enough to answer basic
  customer questions about it"]
- Reader needs: Understand what the feature or process is, who it
  affects, and what action (if any) they need to take
- How this summary will be used: [INSERT USE, e.g., "Shared in the
  #customer-success Slack channel as a briefing note"]

FORMAT
- Three sentences maximum
- Sentence 1: What this page covers in plain language
- Sentence 2: Who it affects and how
- Sentence 3: What the reader needs to know or do, or "No action
  is required from your team at this time," if nothing needs to change

CONSTRAINTS
- Do not use technical terms without a plain-English explanation
- Do not copy headings or phrasing directly from the source page
- Do not exceed three sentences

EXAMPLE
Here is an example summary:
This page covers the upcoming transition to the new Stripe billing integration. It affects all active subscriptions, but the migration will be handled entirely by the engineering team. No action is required from your team at this time.

VERIFY
If the page content is too technical to summarize accurately without
making assumptions about the product, flag the specific term or
concept with [TECHNICAL CLARIFICATION NEEDED] rather than guessing.
```

[↑ Back to top](#table-of-contents)

---

## The one principle that connects all tools

Every tool in this guide produces better output when you give it more of the information it cannot supply on its own. It does not know your audience, your product, your style guide, or your constraints unless you tell it. Context is not optional. It is the work.

The difference between a usable first draft and a generic response almost always comes down to how much relevant information the prompt provides. Not how clever the prompt was. Not how long it was. How specific it was.

The prompts in this guide are long by design. A prompt that takes two minutes to write well can save 30 minutes of editing. That trade is almost always worth making.

Writers who prompt well are doing exactly what good technical writers have always done: *taking complex requirements and making them clear enough for someone else to act on*. The only difference is that someone else is now a machine.

[↑ Back to top](#table-of-contents)

---

## Contributing

If you have a prompt template that works well for a technical writing task not covered here, contributions are welcome.

Follow the 8-part structure described at the top of this guide. Each contributed prompt should include a role, task, context, format, constraints, at least one example, and a verification instruction.

> **Note:** The "Tone" element is optional and can be embedded within formatting constraints if preferred.

Send me an email at: snehapandey846@gmail.com
