# The Ultimate Technical Writer's Cheat Sheet 
#### Editor's Checklist

This document is designed to be your quick-reference quality assurance tool before committing documentation changes. It ensures content is accurate, clear, accessible, and compliant with **Microsoft Style Guide** standards.

---

## I. Technical Accuracy & Structure Checks

| Checkpoint | Actionable Rule | Why It Matters |
| :--- | :--- | :--- |
| **Verification Run** | **Execute** every step and **run** every code snippet on the current software build/version. | Prevents errors and confirms technical validity for the end-user. |
| **UI Matching** | Verify all screenshots and text descriptions match the **current User Interface (UI)** exactly. | Documentation must accurately reflect the user's experience. |
| **Topic Focus** | Each topic addresses **only one primary user goal** or concept. Break down complex subjects into separate, sequential files. | Improves information retrieval and modularity. |
| **Prerequisites** | Clearly list all required prerequisites, permissions, or system requirements **before** the main steps begin. | Sets user expectations and prevents early frustration. |
| **Cross-References** | All internal and external links are **active** and use **meaningful link text** (e.g., "See the setup guide"). | Essential for navigation and avoiding broken links. |
| **File Naming** | File/asset names are lowercase, use hyphens for spaces (kebab-case), and follow the architecture standard. | Maintains clean repository structure and consistent linking. |

---

## II. Microsoft Style: Procedures & Formatting

These rules ensure a consistent, professional, and usable voice across all documentation.

| Checkpoint | Actionable Rule | Example (Microsoft Style) |
| :--- | :--- | :--- |
| **Step Verbs** | Start every numbered step with a **strong imperative verb** (e.g., **Select**, **Enter**, **Navigate**, **Click**, **Type**). | *1. **Select** the Settings gear icon.* |
| **UI Formatting** | Use **bold** text for all interactive UI elements (buttons, menu commands, field names). | *Click **Save Changes** in the **File** menu.* |
| **UI Capitalization** | Use **Title Case** for UI element names exactly as they appear in the product. | *The **New Project** button appears.* |
| **Code/Paths** | Use **monospaced font/code formatting** (`code blocks`) for file paths, code snippets, user input, and registry keys. | *Navigate to `C:\Program Files\App\`* |
| **Voice** | Address the user directly using the pronoun **"you"**. Use active voice. | *You can install the app.* (Active Voice) |
| **Headings** | Headings are clear and descriptive, use minimal punctuation, and **do not** end with a period. | *Configure the Deployment Settings* |
| **Serial Comma** | Always use the **Oxford/Serial comma** in lists of three or more items. | *The required parameters are A, B, and C.* |
| **Numbers** | Use numerals for all measurable quantities (e.g., *5 MB, 2 hours, 10 steps*). Unit symbols are not pluralized (*5 MB*, not *5 MBs*). | Maintains technical precision and standard usage. |

---

## III. Clarity & Accessibility

Focus on making the content easily understood and accessible to the broadest possible audience.

| Checkpoint | Actionable Rule | Why It Matters |
| :--- | :--- | :--- |
| **Alt Text** | All informative images have concise, descriptive **Alt Text** that conveys the purpose of the image. | Essential for screen reader users and SEO. |
| **Link Text** | Link text clearly describes the destination, avoiding vague phrases like "click here" or "read more." | Improves usability and accessibility. |
| **Sentence Length** | Keep sentences to **one focused idea** and avoid complex, run-on constructions. | Improves scannability and comprehension speed. |
| **Jargon/Acronyms** | Define all acronyms on **first use**. Replace unnecessary technical jargon with simple language. | Ensures all audience levels can understand the content. |
| **Terminology** | Use the same term for the same concept/feature **every time**. Do not introduce variation for stylistic flair. | Consistency is the core of technical communication. |
| **Inclusive Language** | Use **inclusive and gender-neutral language** (e.g., "they/them," "person," "users"). | Follows modern, respectful documentation standards. |
| **Passive Voice** | Scan for opportunities to convert weak passive voice constructions into stronger **active voice**. | Improves directness and clarity of action. |

---

## IV. Legal, Policy, & Metadata Checks (System Integration)

These checks are crucial for platform compliance and documentation system health.

| Checkpoint | Actionable Rule | Why It Matters |
| :--- | :--- | :--- |
| **Warning Consistency** | Ensure warnings, cautions, and notes use the **correct standardized formatting** (e.g., `> [!NOTE]`, `> [!CAUTION]`). | Critical for user safety and consistent rendering across platforms. |
| **Legal Review** | All content touching on warranties, disclaimers, or beta features uses **pre-approved legal text** (if required). | Protects the company from potential liability. |
| **Metadata** | Confirm that the necessary **YAML front matter** is complete and accurate: `title`, `description` (for SEO/search), and version/date info. | Vital for platform indexing and content discoverability. |
| **Deprecation** | If the feature is being retired, include a clear **deprecation notice** and links to the replacement process. | Communicates changes clearly and reduces support load. |

---

## Why This Cheat Sheet Is Essential

This checklist is not just a reminder; it's a **quality assurance framework**. It transforms complex style guide requirements into a fast, repeatable workflow, allowing you to focus on the technical depth of your content while ensuring every user receives a high-quality, trustworthy, and consistent documentation experience.

*Note: In technical documentation, the **Microsoft Style Guide** usually takes precedence over Chicago manual of style rules for UI elements, formatting, and imperative instructions. Many organisation, have their own style guide created to help writers document accurately*

## Reference

Microsoft Style Guide - https://learn.microsoft.com/en-us/style-guide/welcome/

Chicago Manual of Style - https://www.chicagomanualofstyle.org/home.html