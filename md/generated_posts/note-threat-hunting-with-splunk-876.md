---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "networking, lateral movement, linux, malware, privilege escalation, cheatsheet"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-876.html"
URL_IMAGES: ""
Date: "2024-04-18"
Tags: "Networking, Lateral Movement, Linux, Malware, Privilege Escalation, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-876"
Permalink: "/notes/note-threat-hunting-with-splunk-876.html"
BtnLabel: "Read Notes"
Pick: 0
---
## WinRM

### Java

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
crackmapexec smb 10.93.12.152 -u administrator -p 'P@ssw0rd!' --shares
```

## MSSQL

### HTTPS

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Open Redirect

### ligolo-ng

```python
gobuster dir -u http://10.105.157.148/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.
