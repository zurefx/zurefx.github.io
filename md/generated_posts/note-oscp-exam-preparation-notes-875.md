---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "networking, privilege escalation, malware, cheatsheet, linux"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-875.html"
URL_IMAGES: ""
Date: "2024-04-29"
Tags: "Networking, Privilege Escalation, Malware, Cheatsheet, Linux"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-875"
Permalink: "/notes/note-oscp-exam-preparation-notes-875.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Django

### POP3

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

- `secretsdump`
- `Open Redirect`
- `psexec`
- `Insecure Deserialization`
- `burpsuite`
- `sqlmap`

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## MSSQL

### Nginx

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

```bash
gobuster dir -u http://10.111.182.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## PHP

### Laravel

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.
