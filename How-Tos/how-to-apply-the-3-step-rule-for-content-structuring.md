# The 3-Step Rule for Content Structuring

## Why Structure Matters

Documentation is a functional product, and its primary metric is **time-to-solution**. A user encountering a problem needs the answer efficiently, without cognitive load or frustration. The **3-Step Rule** is a foundational architectural pattern that guarantees this efficiency.

By consistently applying **Purpose, Prerequisites, and Procedure (P-P-P)**, you transform scattered information into a predictable, scannable, and highly reliable resource. This framework aligns documentation with the user's natural thought process when approaching a new task.

---

## The 3-Step Rule: P-P-P Framework

Every well-structured technical document must answer the user's questions in the order they encounter the task:

| Step | Section Name | User's Question | Content Focus |
| :--- | :--- | :--- | :--- |
| **Purpose** | **Introduction** | "Why am I here? What will I achieve?" | States the goal and the benefit in concise, user-focused language. |
| **Prerequisites** | **Before You Begin** | "What do I need to prepare?" | Lists necessary access, software, or preceding steps. |
| **Procedure** | **Steps** | "How do I do it?" | Provides the numbered, sequential, and action-oriented instructions. |

---

## Step 1: Defining the Purpose (The Why)

The Purpose section is the **contract** you establish with the user. It dictates the document's scope and immediately validates whether the user is in the correct place.

If a user reads the introduction and cannot immediately articulate the benefit, they will often navigate away. This section preemptively answers the user's unstated question: *"Is this worth my time?"*

* **Focus on the Outcome:** The first sentence must state the **value-driven outcome**, not the action itself. For example, instead of *"This guide shows you how to run the `cleanup-db` command,"* write: *"**Use this guide to securely free up server resources** by removing stale data from the database."*
* **Establish Scope:** Explicitly mention the primary subject and any relevant context (e.g., target platform, necessary permissions, or product version). This is the best place to use conditional phrases like *"If you are using the cloud version, refer to the [Cloud Version Documentation]($/link/to/cloud.md) instead."*
* **Adopt Active Voice and Direct Address:** Following Microsoft Style guidelines, always use the **active voice** (`you will achieve`) and address the reader directly (`you`). This fosters a conversational and empowering tone.

### Example

| Component | Example | Rationale |
| :--- | :--- | :--- |
| **Value Statement** | **This guide demonstrates how to configure SAML-based single sign-on (SSO) for your corporate users.** | Focuses on the security and management benefit for the administrator user. |
| **Scope & Context** | This implementation is specifically for users managing their identity providers through **Azure Active Directory**. | Immediately narrows the focus, ensuring users with Okta or Auth0 do not waste time on this article. |
| **Final Outcome** | Upon completion, your users will be able to log in to our application using their existing organizational credentials. | Clearly defines the successful state, giving the user a target. |

---

## Step 2: Listing the Prerequisites (The What)

The Prerequisites section acts as a mandatory checkpoint. The user should not have to leave the procedural steps to acquire a tool, permission, or prior knowledge. This is critical for improving the user's **first-time success rate**.

Failing on Step 5 because a dependency was missing is a source of high frustration and negative documentation feedback. Listing prerequisites moves this friction to the beginning, where it is manageable.

* **Categorization (Advanced Tip):** For complex procedures, consider categorizing your prerequisites:
    * **Access/Permissions:** *Admin role, specific security group membership, read/write permissions.*
    * **Software/Hardware:** *CLI version, specific operating system, minimum RAM.*
    * **Prior Steps:** *Completion of a linked tutorial, creation of a project folder.*
* **External Linking:** Every prerequisite that involves a separate multi-step task should be hyperlinked to the relevant guide. This keeps the current document focused on its single goal.
* **Precision in Detail:** Always state versions. If a tool needs `v3.0.1`, saying *"latest version"* is insufficient and risks deployment failures.

### Informative Example (Scannable List)

Before attempting the deployment, ensure the following are available and ready:

* **Access:** You must possess the **Deployment Administrator** role in the Azure portal.
* **Tooling:**
    * The **Terraform CLI**, version `1.4.0` or higher, must be installed.
    * **PowerShell 7** is required for executing the verification script.
* **Prior Steps:** You must have **[Generated your SSH Key Pair]($/link/to/ssh-guide.md)** and uploaded the public key to the server. *(Do not proceed without the private key file.)*
* **Configuration:** The project directory must contain the **`deployment-config.json`** file.

---

## Step 3: Detailing the Procedure (The How)

This is the core instructional segment. Procedures must be atomized, sequential, and unambiguous. Clarity here directly correlates with user confidence and task completion. 

By breaking complex tasks into numbered, atomic steps, you reduce the user's need to hold multiple pieces of information in their short-term memory. They only need to focus on one action at a time.

#### A. Step Construction and Verbs

* **Atomic Steps:** Each numbered step must contain **one action**.
    * *Example:* **Click** the **Profile** icon. (Action 1) **Select** **Account Settings**. (Action 2, New Step).
* **Imperative Verbs:** Start every step with a strong, capitalized command verb (**Run**, **Type**, **Click**, **Navigate**, **Select**). **Avoid** passive or descriptive verbs like *You should open...* or *We recommend you type...*
* **Contextual Cues:** If a step involves a specific location, state it first: *In the **Terminal** window, **Type**...*

#### B. Formatting Consistency (Adhering to Conventions)

* **UI Elements:** Use **bold** for buttons, tabs, menu items, window names, and field labels. This makes the text scannable for users interacting with a graphical interface.
* **Typed Input/Code:** Use `inline code blocks` for commands, paths, filenames, variables, and literal text the user must input. Use a dedicated fenced code block for multi-line scripts or configuration files.

#### C. Verification and Troubleshooting

* **Expected Results:** A professional procedure includes a verification step. After a critical action (like a script running or a file saving), tell the user what they should see to confirm success.
    * *Example:* **Select** **Save**. *(A green notification banner should briefly appear, stating: "Your preferences have been updated.")*
* **Troubleshooting:** Where common failures are known, include a small **Note** or **Troubleshooting** section immediately following the relevant step.

### Example: Detailed Procedure

Follow these steps to generate a new authentication token:

1.  **Navigate** to the **User Management** panel in the application's header menu.
2.  In the left navigation pane, **Select** **API Keys and Tokens**.
3.  **Click** the **+ Generate New Token** button.
4.  In the dialog box that appears, **Enter** `migration-service-2025` into the **Token Name** field.
5.  Under the **Permissions** section, **Ensure** only the **`read:inventory`** scope is selected. *(Granting unnecessary permissions is a security risk.)*
6.  **Click** **Create Token**.
    * *Expected Result: The new token string will display once. **Copy** and **Save** this token immediately, as it will not be displayed again.*
7.  **Run** the following command in your PowerShell window to test the connection:
    ```powershell
    Invoke-WebRequest -Uri "[https://api.yourdomain.com/status](https://api.yourdomain.com/status)" -Headers @{ "Authorization" = "Bearer YOUR_TOKEN_HERE" }
    ```

---

## Self-Review and Iteration

Once the document is drafted, use the P-P-P structure as a final review lens. This structured self-assessment is key to the continuous improvement of your documentation quality.

1.  **Did I answer the "Why" (Purpose)?** (Focus on value and scope.)
2.  **Did I answer the "What" (Prerequisites)?** (Focus on access, tools, and links.)
3.  **Did I answer the "How" (Procedure)?** (Focus on atomic steps, action verbs, and consistent formatting.)