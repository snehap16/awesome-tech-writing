# WorkIt Installation Guide

**Version:** 1.0
**Last updated:** May 2025
**Applies to:** WorkIt Cloud and WorkIt Self-Hosted

---

## Table of contents

1. [Introduction](#1-introduction)
   - [Who this guide is for](#11-who-this-guide-is-for)
   - [Deployment options](#12-deployment-options)
   - [How to use this guide](#13-how-to-use-this-guide)
   - [Related documentation](#14-related-documentation)
2. [System requirements](#2-system-requirements)
   - [Cloud deployment](#21-cloud-deployment)
   - [Self-hosted deployment](#22-self-hosted-deployment)
3. [Cloud deployment](#3-cloud-deployment)
   - [Create your WorkIt account](#31-create-your-workit-account)
   - [Configure your workspace](#32-configure-your-workspace)
   - [Set up your domain](#33-set-up-your-domain)
   - [Connect your support channels](#34-connect-your-support-channels)
   - [Invite your team](#35-invite-your-team)
4. [Self-hosted deployment](#4-self-hosted-deployment)
   - [Before you begin](#41-before-you-begin)
   - [Install on Linux](#42-install-on-linux)
   - [Install on Windows Server](#43-install-on-windows-server)
   - [Configure the database](#44-configure-the-database)
   - [Configure environment variables](#45-configure-environment-variables)
   - [Start WorkIt services](#46-start-workit-services)
   - [Verify the installation](#47-verify-the-installation)
5. [Post-installation setup](#5-post-installation-setup)
   - [Configure SSL](#51-configure-ssl)
   - [Set up email](#52-set-up-email)
   - [Configure single sign-on](#53-configure-single-sign-on)
   - [Set up backups](#54-set-up-backups)
6. [Upgrade WorkIt](#6-upgrade-workit)
   - [Upgrade cloud](#61-upgrade-cloud)
   - [Upgrade self-hosted](#62-upgrade-self-hosted)
7. [Uninstall WorkIt](#7-uninstall-workit)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Introduction

### 1.1 Who this guide is for

This guide is written for **system administrators** and **developers** responsible for deploying, configuring, and maintaining WorkIt for their organization.

You should be familiar with:

- Basic server administration (Linux or Windows Server)
- Command-line interfaces
- Database management (PostgreSQL)
- Network configuration and DNS management

If you are an end user looking to set up your WorkIt account after your admin has deployed WorkIt, see the [WorkIt User Guide](#).

### 1.2 Deployment options

WorkIt supports two deployment models:

| Deployment | Description | Best for |
|---|---|---|
| **Cloud** | WorkIt hosts and manages the infrastructure. You access WorkIt through a browser or mobile app. | Teams that want a fast setup with no infrastructure overhead |
| **Self-hosted** | You deploy WorkIt on your own servers. You control the infrastructure, data, and configuration. | Organizations with data residency requirements, security policies, or custom infrastructure needs |

Both deployment models provide the same WorkIt features. The difference is who manages the infrastructure.

### 1.3 How to use this guide

- If you are setting up **WorkIt Cloud**, follow [Section 3: Cloud deployment](#3-cloud-deployment).
- If you are setting up **WorkIt Self-Hosted**, follow [Section 2: System requirements](#2-system-requirements) and then [Section 4: Self-hosted deployment](#4-self-hosted-deployment).
- All deployments should complete [Section 5: Post-installation setup](#5-post-installation-setup).

### 1.4 Related documentation

| Document | Description |
|---|---|
| [WorkIt User Guide](#) | End-to-end guide for support agents and team leads |
| [WorkIt Developer's Guide](#) | Technical guide for developers building on WorkIt |
| [WorkIt API Documentation](#) | Complete reference for the WorkIt API |
| [WorkIt Release Notes](#) | Summary of changes in each WorkIt release |

---

## 2. System requirements

### 2.1 Cloud deployment

For WorkIt Cloud, you do not need any server infrastructure. You need the following on the devices that will access WorkIt:

#### Web app

| Requirement | Minimum |
|---|---|
| Browser | Google Chrome 110+, Mozilla Firefox 110+, Microsoft Edge 110+, Safari 16+ |
| Internet connection | 5 Mbps or faster |
| Screen resolution | 1280 x 720 or higher |

#### Mobile app

| Requirement | iOS | Android |
|---|---|---|
| Operating system | iOS 16.0 or later | Android 11.0 or later |
| Storage | 200 MB free space | 200 MB free space |
| Internet connection | 4G LTE or Wi-Fi | 4G LTE or Wi-Fi |

### 2.2 Self-hosted deployment

#### Server requirements

| Component | Minimum | Recommended |
|---|---|---|
| CPU | 4 cores | 8 cores |
| RAM | 8 GB | 16 GB |
| Storage | 50 GB SSD | 200 GB SSD |
| Operating system | Ubuntu 20.04 LTS / Windows Server 2019 | Ubuntu 22.04 LTS / Windows Server 2022 |

#### Software dependencies

| Dependency | Version |
|---|---|
| Node.js | 18.x or later |
| PostgreSQL | 14.x or later |
| Redis | 7.x or later |
| Nginx | 1.22 or later |
| Docker (optional) | 24.x or later |

#### Network requirements

| Requirement | Details |
|---|---|
| Inbound ports | 80 (HTTP), 443 (HTTPS) |
| Outbound ports | 25, 465, 587 (email), 443 (HTTPS for external services) |
| DNS | A valid domain name pointing to your server |

> **Important:** WorkIt requires a publicly accessible domain name and a valid SSL certificate for production deployments. Do not deploy WorkIt in production without SSL configured.

---

## 3. Cloud deployment

### 3.1 Create your WorkIt account

1. Go to [https://workit.io/signup](https://workit.io/signup).
2. Enter your work email address and select **Get started**.
3. Check your inbox for a verification email from WorkIt and select **Verify email**.
4. On the account setup page, enter:
   - Your full name
   - Your company name
   - Your password (minimum 12 characters, including one uppercase letter, one number, and one special character)
5. Select **Create account**.

### 3.2 Configure your workspace

After you create your account, WorkIt launches the setup wizard.

1. **Name your workspace.** Enter a workspace name. This is the internal name your team will see.
2. **Choose your workspace URL.** Enter a subdomain for your WorkIt instance (for example, `acmesupport.workit.io`). You can change this later.
3. **Select your time zone.** WorkIt uses this for SLA calculations, report scheduling, and timestamps.
4. **Choose your plan.** Select a subscription plan. You can start with a 14-day free trial.
5. Select **Finish setup**.

WorkIt creates your workspace and takes you to the admin dashboard.

### 3.3 Set up your domain

By default, your WorkIt instance is accessible at `yourworkspace.workit.io`. To use a custom domain (for example, `support.yourcompany.com`):

1. Go to **Settings** > **Workspace** > **Custom domain**.
2. Enter your custom domain and select **Save**.
3. WorkIt displays two DNS records: a CNAME record and a TXT record for domain verification.
4. Log in to your DNS provider and add both records.
5. Return to WorkIt and select **Verify domain**.

> **Note:** DNS changes can take up to 48 hours to propagate. WorkIt will notify you by email when verification is complete.

### 3.4 Connect your support channels

WorkIt receives cases from email, live chat, web forms, and phone. Connect at least one channel before inviting your team.

#### Email

1. Go to **Settings** > **Channels** > **Email**.
2. Select **Add email channel**.
3. Enter a name for the channel (for example, `Support`) and the email address you want to use (for example, `support@yourcompany.com`).
4. Follow the on-screen instructions to configure email forwarding from your email provider to WorkIt.
5. Select **Verify and save**.

#### Live chat

1. Go to **Settings** > **Channels** > **Live chat**.
2. Select **Add live chat**.
3. Configure the chat widget appearance, operating hours, and greeting message.
4. Select **Save**.
5. Copy the embed code and add it to the `<head>` section of your website.

#### Web form

1. Go to **Settings** > **Channels** > **Web form**.
2. Select **Create form**.
3. Configure the form fields, subject, and default assignee.
4. Select **Save**.
5. Copy the form URL or embed code to add the form to your website.

### 3.5 Invite your team

1. Go to **Settings** > **Users and permissions**.
2. Select **Invite users**.
3. Enter the email addresses of the team members you want to invite.
4. Assign a role to each user: **Admin**, **Team Lead**, **Agent**, or **Viewer**.
5. Select **Send invitations**.

WorkIt sends each person an invitation email. Invitation links expire after 72 hours.

---

## 4. Self-hosted deployment

### 4.1 Before you begin

Before you install WorkIt, confirm that:

- Your server meets the [system requirements](#22-self-hosted-deployment)
- You have root or sudo access on the server
- You have a domain name with DNS pointing to your server
- You have obtained an SSL certificate for your domain
- PostgreSQL, Redis, and Node.js are installed or you are prepared to install them

> **Warning:** Do not perform a self-hosted installation on a production server that is already running other services without first consulting your infrastructure team. WorkIt requires dedicated ports 80 and 443.

### 4.2 Install on Linux

These instructions apply to **Ubuntu 20.04 LTS** and **Ubuntu 22.04 LTS**.

#### Step 1: Update your system

```bash
sudo apt update && sudo apt upgrade -y
```

#### Step 2: Install dependencies

```bash
sudo apt install -y curl git nginx postgresql postgresql-contrib redis-server
```

#### Step 3: Install Node.js 18.x

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify the installation:

```bash
node --version
npm --version
```

#### Step 4: Download WorkIt

```bash
cd /opt
sudo git clone https://github.com/workit/workit.git
cd workit
```

#### Step 5: Install WorkIt dependencies

```bash
sudo npm install --production
```

#### Step 6: Create the WorkIt system user

```bash
sudo useradd --system --shell /bin/false workit
sudo chown -R workit:workit /opt/workit
```

### 4.3 Install on Windows Server

These instructions apply to **Windows Server 2019** and **Windows Server 2022**.

#### Step 1: Install dependencies

1. Download and install **Node.js 18.x** from [https://nodejs.org](https://nodejs.org). Select the LTS version.
2. Download and install **PostgreSQL 14** from [https://www.postgresql.org/download/windows](https://www.postgresql.org/download/windows).
3. Download and install **Redis for Windows** from [https://github.com/microsoftarchive/redis/releases](https://github.com/microsoftarchive/redis/releases).

Verify Node.js installation by opening PowerShell and running:

```powershell
node --version
npm --version
```

#### Step 2: Download WorkIt

Open PowerShell as Administrator and run:

```powershell
cd C:\
git clone https://github.com/workit/workit.git
cd workit
```

#### Step 3: Install WorkIt dependencies

```powershell
npm install --production
```

### 4.4 Configure the database

#### Linux

1. Switch to the PostgreSQL user:

```bash
sudo -i -u postgres
```

2. Open the PostgreSQL prompt:

```bash
psql
```

3. Create the WorkIt database and user:

```sql
CREATE DATABASE workit;
CREATE USER workituser WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE workit TO workituser;
\q
```

4. Exit the PostgreSQL user session:

```bash
exit
```

#### Windows Server

1. Open **pgAdmin** (installed with PostgreSQL).
2. Connect to your PostgreSQL server.
3. Right-click **Databases** and select **Create** > **Database**.
4. Name the database `workit` and select **Save**.
5. Open the **Query Tool** and run:

```sql
CREATE USER workituser WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE workit TO workituser;
```

> **Important:** Replace `your_password` with a strong, unique password. Store this password securely. You will need it in the next step.

### 4.5 Configure environment variables

WorkIt uses a `.env` file for all configuration. Copy the example file and edit it:

#### Linux

```bash
sudo cp /opt/workit/.env.example /opt/workit/.env
sudo nano /opt/workit/.env
```

#### Windows Server

```powershell
Copy-Item C:\workit\.env.example C:\workit\.env
notepad C:\workit\.env
```

Update the following variables in the `.env` file:

| Variable | Description | Example |
|---|---|---|
| `APP_URL` | The full URL of your WorkIt instance | `https://support.yourcompany.com` |
| `APP_PORT` | The port WorkIt runs on | `3000` |
| `DB_HOST` | PostgreSQL server host | `localhost` |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_NAME` | Database name | `workit` |
| `DB_USER` | Database username | `workituser` |
| `DB_PASSWORD` | Database password | `your_password` |
| `REDIS_HOST` | Redis server host | `localhost` |
| `REDIS_PORT` | Redis port | `6379` |
| `SECRET_KEY` | A random secret key for session encryption | Generate with `openssl rand -hex 32` |
| `MAIL_FROM` | The email address WorkIt sends mail from | `support@yourcompany.com` |
| `MAIL_HOST` | Your SMTP server host | `smtp.yourcompany.com` |
| `MAIL_PORT` | Your SMTP server port | `587` |
| `MAIL_USER` | Your SMTP username | `support@yourcompany.com` |
| `MAIL_PASSWORD` | Your SMTP password | `your_mail_password` |

Save and close the file.

### 4.6 Start WorkIt services

#### Linux

1. Initialize the database:

```bash
sudo -u workit npm run db:migrate
```

2. Create a systemd service file:

```bash
sudo nano /etc/systemd/system/workit.service
```

3. Add the following content:

```ini
[Unit]
Description=WorkIt
After=network.target postgresql.service redis.service

[Service]
Type=simple
User=workit
WorkingDirectory=/opt/workit
ExecStart=/usr/bin/node server.js
Restart=on-failure
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=workit

[Install]
WantedBy=multi-user.target
```

4. Enable and start the WorkIt service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable workit
sudo systemctl start workit
```

5. Configure Nginx as a reverse proxy:

```bash
sudo nano /etc/nginx/sites-available/workit
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name support.yourcompany.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. Enable the Nginx configuration:

```bash
sudo ln -s /etc/nginx/sites-available/workit /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Windows Server

1. Initialize the database:

```powershell
npm run db:migrate
```

2. Install WorkIt as a Windows service using NSSM:

```powershell
nssm install WorkIt "C:\Program Files\nodejs\node.exe" "C:\workit\server.js"
nssm set WorkIt AppDirectory C:\workit
nssm start WorkIt
```

### 4.7 Verify the installation

After starting WorkIt, verify it is running correctly.

1. Open a browser and go to your WorkIt URL (for example, `http://support.yourcompany.com`).
2. The WorkIt login page should appear.
3. Log in with the default admin credentials:
   - **Email:** `admin@workit.local`
   - **Password:** `WorkIt@Admin123`

> **Important:** Change the default admin password immediately after your first login. Go to **Profile settings** > **Change password**.

Check the service status:

#### Linux

```bash
sudo systemctl status workit
```

#### Windows Server

```powershell
nssm status WorkIt
```

---

## 5. Post-installation setup

### 5.1 Configure SSL

> **Important:** SSL is required for all production deployments. Do not skip this step.

#### Linux (using Let's Encrypt)

1. Install Certbot:

```bash
sudo apt install -y certbot python3-certbot-nginx
```

2. Obtain an SSL certificate:

```bash
sudo certbot --nginx -d support.yourcompany.com
```

3. Follow the prompts. Certbot automatically configures Nginx to use the certificate and sets up automatic renewal.

4. Verify automatic renewal:

```bash
sudo certbot renew --dry-run
```

#### Windows Server

1. Obtain an SSL certificate from your preferred certificate authority.
2. Open **IIS Manager**.
3. Select your server, and then select **Server Certificates**.
4. Select **Import**, and then choose your certificate file.
5. Bind the certificate to port 443 for your WorkIt site.

### 5.2 Set up email

WorkIt uses email to send case notifications, invitation emails, and password reset links.

1. Log in to WorkIt as an admin.
2. Go to **Settings** > **Email** > **SMTP configuration**.
3. Enter your SMTP server details:

| Field | Description |
|---|---|
| **SMTP host** | Your SMTP server address |
| **SMTP port** | Typically 587 (TLS) or 465 (SSL) |
| **Username** | Your SMTP authentication username |
| **Password** | Your SMTP authentication password |
| **From address** | The email address WorkIt sends mail from |
| **From name** | The display name for outgoing emails (for example, `WorkIt Support`) |
| **Encryption** | Select TLS or SSL |

4. Select **Send test email** to verify the configuration.
5. Select **Save**.

### 5.3 Configure single sign-on

WorkIt supports SSO using SAML 2.0 and OAuth 2.0. SSO allows your team to log in to WorkIt using their existing company credentials.

#### SAML 2.0

1. Go to **Settings** > **Security** > **Single sign-on**.
2. Select **SAML 2.0**.
3. Copy the **WorkIt ACS URL** and **Entity ID** and provide them to your identity provider (for example, Okta, Azure AD, or Google Workspace).
4. Enter the following details from your identity provider:

| Field | Description |
|---|---|
| **SSO URL** | The SAML SSO URL from your identity provider |
| **Entity ID** | The entity ID from your identity provider |
| **Certificate** | The X.509 certificate from your identity provider |

5. Select **Test configuration** to verify SSO is working.
6. Select **Enable SSO**.

> **Important:** Test SSO in a separate browser session before enabling it. If SSO is misconfigured and you enable it, you may be locked out of WorkIt.

### 5.4 Set up backups

For self-hosted deployments, configure regular backups of your WorkIt database and file storage.

#### Database backup (Linux)

Create a daily backup script:

```bash
sudo nano /opt/workit/scripts/backup.sh
```

Add the following:

```bash
#!/bin/bash
BACKUP_DIR="/var/backups/workit"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
pg_dump -U workituser workit | gzip > $BACKUP_DIR/workit_$DATE.sql.gz
find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete
```

Make the script executable and schedule it:

```bash
sudo chmod +x /opt/workit/scripts/backup.sh
sudo crontab -e
```

Add the following line to run the backup daily at 2:00 AM:

```
0 2 * * * /opt/workit/scripts/backup.sh
```

> **Tip:** Store backups in a separate location from your WorkIt server. Consider using an offsite storage service such as Amazon S3 or Azure Blob Storage.

---

## 6. Upgrade WorkIt

### 6.1 Upgrade cloud

WorkIt Cloud updates automatically. You do not need to take any action. WorkIt publishes release notes for all updates at [WorkIt Release Notes](#).

### 6.2 Upgrade self-hosted

> **Warning:** Always back up your database before upgrading. See [Set up backups](#54-set-up-backups).

#### Linux

1. Stop the WorkIt service:

```bash
sudo systemctl stop workit
```

2. Pull the latest version:

```bash
cd /opt/workit
sudo git pull origin main
```

3. Install updated dependencies:

```bash
sudo -u workit npm install --production
```

4. Run database migrations:

```bash
sudo -u workit npm run db:migrate
```

5. Restart the WorkIt service:

```bash
sudo systemctl start workit
```

#### Windows Server

1. Stop the WorkIt service:

```powershell
nssm stop WorkIt
```

2. Pull the latest version:

```powershell
cd C:\workit
git pull origin main
```

3. Install updated dependencies:

```powershell
npm install --production
```

4. Run database migrations:

```powershell
npm run db:migrate
```

5. Start the WorkIt service:

```powershell
nssm start WorkIt
```

---

## 7. Uninstall WorkIt

### Cloud

To delete your WorkIt Cloud account:

1. Go to **Settings** > **Workspace** > **Danger zone**.
2. Select **Delete workspace**.
3. Type your workspace name to confirm.
4. Select **Delete permanently**.

> **Warning:** Deleting your WorkIt workspace permanently removes all cases, contacts, projects, and configuration. This action cannot be undone. Export your data before deleting.

### Self-hosted (Linux)

1. Stop and disable the WorkIt service:

```bash
sudo systemctl stop workit
sudo systemctl disable workit
sudo rm /etc/systemd/system/workit.service
sudo systemctl daemon-reload
```

2. Remove the WorkIt files:

```bash
sudo rm -rf /opt/workit
```

3. Drop the WorkIt database:

```bash
sudo -i -u postgres psql -c "DROP DATABASE workit;"
sudo -i -u postgres psql -c "DROP USER workituser;"
```

4. Remove the Nginx configuration:

```bash
sudo rm /etc/nginx/sites-enabled/workit
sudo rm /etc/nginx/sites-available/workit
sudo systemctl restart nginx
```

### Self-hosted (Windows Server)

1. Stop and remove the WorkIt service:

```powershell
nssm stop WorkIt
nssm remove WorkIt confirm
```

2. Remove the WorkIt files:

```powershell
Remove-Item -Recurse -Force C:\workit
```

3. Drop the WorkIt database using pgAdmin or the PostgreSQL command line.

---

## 8. Troubleshooting

### WorkIt does not start

**Symptom:** The WorkIt service fails to start or returns an error.

**Steps:**

1. Check the WorkIt service logs:

   **Linux:**
   ```bash
   sudo journalctl -u workit -n 100
   ```

   **Windows Server:**
   ```powershell
   Get-EventLog -LogName Application -Source WorkIt -Newest 50
   ```

2. Verify that PostgreSQL and Redis are running:

   **Linux:**
   ```bash
   sudo systemctl status postgresql
   sudo systemctl status redis
   ```

3. Check that the `.env` file contains valid database credentials and that the database exists.

---

### Cannot connect to the database

**Symptom:** WorkIt starts but displays a database connection error.

**Steps:**

1. Verify the database credentials in your `.env` file match those you configured in PostgreSQL.
2. Confirm PostgreSQL is running and accepting connections on the configured host and port.
3. Check that the `workituser` has the correct privileges:

```sql
GRANT ALL PRIVILEGES ON DATABASE workit TO workituser;
```

---

### SSL certificate errors

**Symptom:** Browsers display a security warning when accessing WorkIt.

**Steps:**

1. Verify your SSL certificate is valid and has not expired.
2. Confirm the certificate is issued for the correct domain.
3. On Linux, check that Certbot has configured Nginx correctly:

```bash
sudo nginx -t
sudo certbot certificates
```

---

### Email notifications are not sending

**Symptom:** WorkIt is not sending invitation emails, case notifications, or password reset emails.

**Steps:**

1. Go to **Settings** > **Email** > **SMTP configuration**.
2. Click **Send test email** and check whether it is delivered.
3. Verify your SMTP credentials and port settings.
4. Check that your firewall allows outbound connections on port 587 or 465.
5. Check your SMTP server logs for authentication or delivery errors.

---

### Cannot log in after enabling SSO

**Symptom:** You are locked out of WorkIt after enabling SSO.

**Steps:**

1. Access WorkIt using the emergency admin URL:
   ```
   https://yourworkspace.workit.io/admin/login
   ```
2. Log in with your admin email and password (bypasses SSO).
3. Go to **Settings** > **Security** > **Single sign-on** and disable SSO.
4. Reconfigure your SSO settings and test before re-enabling.

---

*This document is part of the [WorkIt Sample Portfolio](./README.md). WorkIt is a fictional product created for the [Awesome Tech Writing](../README.md) repository.*