---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "malware, networking, lateral movement"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-766.html"
URL_IMAGES: ""
Date: "2024-04-29"
Tags: "Malware, Networking, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-766"
Permalink: "/notes/note-incident-response-playbook-766.html"
BtnLabel: "Read Notes"
Pick: 0
---
## dcomexec

### Constrained Delegation

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## atexec

### IIS

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
gobuster dir -u http://10.119.95.53/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## NTLM Relay

### C#

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3306,389,995 10.67.54.94 -oN scan.txt
gobuster dir -u http://10.54.21.189/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Elasticsearch

### RDP

- `rubeus`
- `LAPS Abuse`
- `NFS No Root Squash`
- `Docker Escape`
- `gobuster`
- `Unquoted Service Path`

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

> **Note:** Cron Job was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## ACL Abuse

### netcat

- `Path Traversal`
- `AlwaysInstallElevated`
- `LXD Privilege Escalation`
- `SUID Binary`

- `NFS No Root Squash`
- `burpsuite`
- `Golden Ticket`

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.
