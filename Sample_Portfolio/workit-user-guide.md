# WorkIt User Guide

**Version:** 1.0
**Last updated:** May 2025
**Applies to:** WorkIt Web App and Mobile App

---

## Table of contents

1. [Introduction](#1-introduction)
   - [Who this guide is for](#11-who-this-guide-is-for)
   - [What you will learn](#12-what-you-will-learn)
   - [How to use this guide](#13-how-to-use-this-guide)
   - [Related documentation](#14-related-documentation)
2. [Overview](#2-overview)
   - [What is WorkIt](#21-what-is-workit)
   - [Key features](#22-key-features)
   - [How WorkIt works](#23-how-workit-works)
   - [Core concepts](#24-core-concepts)
   - [User roles and permissions](#25-user-roles-and-permissions)
   - [System requirements](#26-system-requirements)
3. [Getting started](#3-getting-started)
   - [Create your account](#31-create-your-account)
   - [Log in to WorkIt](#32-log-in-to-workit)
   - [Set up your profile](#33-set-up-your-profile)
   - [Navigate the dashboard](#34-navigate-the-dashboard)
   - [Install the mobile app](#35-install-the-mobile-app)
   - [Invite your team](#36-invite-your-team)

---

## 1. Introduction

### 1.1 Who this guide is for

This guide is written for **support agents** and **team leads** at customer support and SaaS companies who use WorkIt to manage cases and track team performance.

You do not need a technical background to use this guide. If you are a developer or system administrator looking to configure or integrate WorkIt, see the [WorkIt Developer's Guide](#) and [WorkIt API Documentation](#).

### 1.2 What you will learn

This guide covers:

- What WorkIt is and how it works
- How to set up your account and profile
- How to navigate the WorkIt web and mobile apps
- How to create, assign, and resolve cases
- How to organize work using projects and queues
- How to collaborate with your team
- How to track performance using reports and dashboards

### 1.3 How to use this guide

If you are new to WorkIt, read this guide from start to finish. If you are looking for something specific, use the table of contents to jump to the relevant section.

Throughout this guide, you will see the following callouts:

> **Note:** Additional context or information worth knowing.

> **Important:** Information you must read before proceeding.

> **Warning:** Actions that may have irreversible consequences.

> **Tip:** Suggestions to help you work more efficiently.

### 1.4 Related documentation

| Document | Description |
|---|---|
| [WorkIt Installation Guide](#) | How to set up and deploy WorkIt for your organization |
| [WorkIt Developer's Guide](#) | Technical guide for developers building on WorkIt |
| [WorkIt API Documentation](#) | Complete reference for the WorkIt API |
| [WorkIt Design Document](#) | Architecture and system design documentation |
| [WorkIt Release Notes](#) | Summary of changes in each WorkIt release |

---

## 2. Overview

### 2.1 What is WorkIt?

WorkIt is a cloud-based case management platform built for customer support and SaaS teams. It gives support agents a single place to receive, manage, and resolve customer cases, while giving team leads the visibility they need to monitor workload, track performance, and identify issues before they escalate.

WorkIt connects your support channels (email, chat, web forms, and phone) into one unified inbox. Every customer interaction becomes a case that can be tracked, assigned, prioritized, and resolved without switching between tools.

### 2.2 Key features

**Case management**
Create, assign, and resolve cases from a single interface. Set priorities, due dates, and custom fields to match your team's workflow. Track every update and communication in a full case history.

**Omnichannel inbox**
Receive cases from email, live chat, web forms, and phone in one place. WorkIt automatically deduplicates contacts and links related cases so agents always have full context.

**Smart assignment**
Automatically assign cases to the right agent based on skills, availability, workload, or round-robin rules. Set escalation paths so high-priority cases never fall through the cracks.

**Collaboration tools**
Add internal notes, mention teammates, and share cases across teams without the customer seeing internal discussions. Link related cases and merge duplicates in one click.

**SLA management**
Define service level agreements for different case types and customers. WorkIt tracks SLA compliance in real time and alerts agents and team leads before a breach occurs.

**Knowledge base**
Build and maintain an internal knowledge base that agents can search directly from a case. Suggest relevant articles automatically based on case content, and publish articles to a customer-facing help center.

**Reporting and analytics**
Track team performance, case volume, resolution times, customer satisfaction scores, and SLA compliance through pre-built dashboards and customizable reports. Schedule reports to be delivered to your inbox automatically.

**Automation and workflows**
Automate repetitive tasks using WorkIt's workflow builder. Trigger actions based on case properties, status changes, or time conditions, without writing code.

**Customer portal**
Give customers a self-service portal where they can submit cases, check status updates, and browse your knowledge base. Branded to match your company.

**Mobile app**
Manage cases, respond to customers, and monitor team performance from the WorkIt iOS and Android apps.

### 2.3 How WorkIt works

WorkIt organizes your support operation around three core activities:

1. **Receive:** Cases arrive in WorkIt from all your support channels and are automatically organized into queues based on your configuration.
2. **Resolve:** Agents pick up cases from their queue, communicate with customers, collaborate with teammates, and work toward resolution.
3. **Review:** Team leads monitor case volume, agent performance, and SLA compliance through dashboards and reports to keep the team on track.

Every action in WorkIt is logged. You always have a complete, auditable history of what happened, who did it, and when.

### 2.4 Core concepts

Understanding these concepts will help you use WorkIt effectively.

**Case**
A case is a single customer issue or request. Every case has a unique ID, a status, a priority, and a history of all communications and actions taken. Cases are the primary unit of work in WorkIt.

**Queue**
A queue is a filtered view of cases. Queues organize cases by team, channel, priority, or any combination of criteria you define. Agents work from queues rather than a shared inbox to avoid duplicate effort.

**Project**
A project is a collection of related cases. Use projects to group cases by customer, product, campaign, or initiative. Projects give team leads a high-level view of work across multiple cases.

**Contact**
A contact is a customer record in WorkIt. WorkIt automatically creates and updates contact records based on inbound case activity. Each contact has a full history of every case they have submitted.

**SLA policy**
A service level agreement (SLA) policy defines the response and resolution time targets that apply to a case. WorkIt tracks SLA compliance automatically and surfaces breach warnings to agents and team leads.

**Workflow**
A workflow is an automated sequence of actions that WorkIt performs when certain conditions are met. Workflows reduce manual work and ensure consistent handling of common case types.

**Knowledge base article**
A knowledge base article is a document that agents use to answer common questions. Articles can be internal (visible only to agents) or public (visible to customers through the self-service portal).

### 2.5 User roles and permissions

WorkIt has four built-in user roles. Your role determines what you can see and do in WorkIt.

| Role | Description | Key permissions |
|---|---|---|
| **Admin** | Full access to all WorkIt settings and features | Manage users, configure channels, set SLA policies, access all reports, manage billing |
| **Team Lead** | Access to team management and reporting features | View all team cases, assign cases, access reports, manage queues and workflows |
| **Agent** | Access to case management features | Create and resolve cases, communicate with customers, access the knowledge base |
| **Viewer** | Read-only access | View cases and reports. Cannot create or update cases. |

> **Note:** Admins can create custom roles with specific permission sets. Contact your WorkIt admin if you need access to features not available in your current role.

### 2.6 System requirements

#### Web app

| Requirement | Minimum |
|---|---|
| Browser | Google Chrome 110+, Mozilla Firefox 110+, Microsoft Edge 110+, Safari 16+ |
| Internet connection | 5 Mbps or faster |
| Screen resolution | 1280 x 720 or higher |

> **Note:** WorkIt does not support Internet Explorer.

#### Mobile app

| Requirement | iOS | Android |
|---|---|---|
| Operating system | iOS 16.0 or later | Android 11.0 or later |
| Storage | 200 MB free space | 200 MB free space |
| Internet connection | 4G LTE or Wi-Fi | 4G LTE or Wi-Fi |

---

## 3. Getting started

### 3.1 Create your account

How you create a WorkIt account depends on how your organization has set up WorkIt.

**If your organization uses single sign-on (SSO):**

1. Go to your organization's WorkIt login URL. This is typically `https://yourcompany.workit.io`.
2. Select **Sign in with SSO**.
3. Enter your work email address and select **Continue**.
4. Complete authentication through your organization's identity provider.

**If your organization uses email and password:**

1. Check your inbox for a WorkIt invitation email from your admin.
2. Select **Accept invitation** in the email.
3. On the WorkIt signup page, enter your full name and create a password.
   - Your password must be at least 12 characters and include one uppercase letter, one number, and one special character.
4. Select **Create account**.
5. Verify your email address by selecting the link in the confirmation email WorkIt sends you.

> **Note:** Invitation links expire after 72 hours. If your link has expired, ask your WorkIt admin to resend the invitation.

### 3.2 Log in to WorkIt

#### Web app

1. Go to `https://yourcompany.workit.io`.
2. Enter your email address and password.
3. Select **Sign in**.

If your organization has enabled multi-factor authentication (MFA), you will be prompted to enter a verification code after entering your password. Check your authenticator app or email for the code.

> **Tip:** Select **Remember this device for 30 days** to reduce how often you are prompted for MFA on trusted devices.

**Forgot your password?**

1. On the login page, select **Forgot password**.
2. Enter your email address and select **Send reset link**.
3. Check your inbox for a password reset email and select **Reset password**.
4. Enter and confirm your new password and select **Save**.

#### Mobile app

1. Open the WorkIt app on your device.
2. Tap **Sign in**.
3. Enter your organization's WorkIt URL, email address, and password.
4. Tap **Sign in**.

If MFA is enabled, enter the verification code when prompted.

### 3.3 Set up your profile

Setting up your profile helps your teammates identify you and ensures you receive the right notifications.

1. Select your avatar in the top-right corner of the screen.
2. Select **Profile settings**.
3. Update the following information:

| Field | Description |
|---|---|
| **Full name** | Your display name across WorkIt |
| **Profile photo** | Upload a photo in JPG or PNG format. Maximum size: 5 MB. |
| **Job title** | Your role in the organization |
| **Time zone** | Used to display timestamps and schedule reports correctly |
| **Language** | WorkIt interface language. Supported languages: English, French, German, Spanish, Portuguese, Japanese |
| **Notification preferences** | Choose how and when WorkIt notifies you about case activity |

4. Select **Save changes**.

#### Set your availability status

Your availability status tells your team whether you are available to take new cases.

1. Select your avatar in the top-right corner.
2. Select your current status (for example, **Online**).
3. Select a status from the list:

| Status | Description |
|---|---|
| **Online** | You are available and can receive new case assignments |
| **Busy** | You are available but at capacity. Smart assignment will deprioritize you for new cases. |
| **Away** | You are temporarily unavailable |
| **Offline** | You are not available. WorkIt will not assign new cases to you. |

> **Tip:** Set your status to **Away** or **Offline** when you go on break or leave for the day so cases are not assigned to you while you are unavailable.

### 3.4 Navigate the dashboard

When you log in to WorkIt, the dashboard is the first screen you see. It gives you a real-time overview of your work and your team's activity.

#### Dashboard layout

The WorkIt interface has four main areas:

**Left navigation panel**
The left panel contains links to all main sections of WorkIt:

| Section | Description |
|---|---|
| **Dashboard** | Your personal overview and team summary |
| **Cases** | All cases you have access to |
| **Inbox** | Cases assigned directly to you |
| **Queues** | Shared queues for your team |
| **Projects** | Cases organized by project |
| **Contacts** | Customer contact records |
| **Knowledge base** | Internal and public articles |
| **Reports** | Performance dashboards and analytics |
| **Automation** | Workflow rules and triggers |
| **Settings** | Account and team configuration |

**Top navigation bar**
The top bar contains the global search field, notification bell, help center link, and your account avatar.

**Main content area**
The main content area displays the content for the section you have selected in the left panel.

**Right detail panel**
When you open a case, the right panel displays case details, contact information, and related cases.

#### Your personal dashboard

Your personal dashboard shows:

- **My open cases:** cases assigned to you that are not yet resolved
- **Due today:** cases assigned to you with a due date of today
- **SLA at risk:** cases where the SLA deadline is approaching
- **Recently updated:** cases you have recently worked on
- **Team activity:** a real-time feed of your team's case activity

> **Tip:** Select **Customize dashboard** in the top-right corner of the dashboard to add, remove, or rearrange the widgets shown.

#### Use global search

Use the search bar at the top of the screen to find cases, contacts, articles, and teammates quickly.

1. Select the search bar or press **Ctrl+K** (Windows) or **Cmd+K** (Mac).
2. Type your search term.
3. WorkIt displays results grouped by type: Cases, Contacts, Articles, and Users.
4. Select a result to open it.

> **Tip:** Use search operators to narrow results. For example, type `status:open assignee:me` to find all open cases assigned to you.

### 3.5 Install the mobile app

The WorkIt mobile app is available for iOS and Android. Use it to manage cases, respond to customers, and check your dashboard when you are away from your desk.

#### iOS

1. Open the **App Store** on your iPhone or iPad.
2. Search for **WorkIt**.
3. Tap **Get** and complete installation.
4. Open WorkIt and sign in with your work email and password.

#### Android

1. Open **Google Play** on your Android device.
2. Search for **WorkIt**.
3. Tap **Install**.
4. Open WorkIt and sign in with your work email and password.

> **Note:** The WorkIt mobile app requires an active internet connection. Some features available in the web app may have limited functionality on mobile. See the [WorkIt Mobile App Guide](#) for a full list of supported features.

#### Enable push notifications

WorkIt sends push notifications for case assignments, mentions, SLA warnings, and customer replies.

**iOS:**
1. Open **Settings** on your device.
2. Scroll down and tap **WorkIt**.
3. Tap **Notifications** and turn on **Allow Notifications**.
4. Select the alert types you want to receive.

**Android:**
1. Open **Settings** on your device.
2. Tap **Apps** > **WorkIt** > **Notifications**.
3. Turn on notifications and select the alert types you want to receive.

> **Tip:** You can also manage notification preferences from within the WorkIt app under **Profile** > **Notification settings**.

### 3.6 Invite your team

> **Note:** You need the **Admin** or **Team Lead** role to invite new users to WorkIt.

To invite teammates to WorkIt:

1. Select **Settings** in the left navigation panel.
2. Select **Users and permissions**.
3. Select **Invite users**.
4. Enter the email addresses of the people you want to invite. Separate multiple addresses with a comma.
5. Select a role for each user: **Admin**, **Team Lead**, **Agent**, or **Viewer**.
6. Optionally, assign users to one or more teams.
7. Select **Send invitations**.

WorkIt sends each person an invitation email with a link to create their account. Invitation links expire after 72 hours.

#### Manage pending invitations

To view or resend pending invitations:

1. Go to **Settings** > **Users and permissions**.
2. Select the **Pending invitations** tab.
3. To resend an invitation, select **Resend** next to the user's email address.
4. To cancel an invitation, select **Revoke**.

---

