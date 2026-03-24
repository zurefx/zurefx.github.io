---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, dfir, oscp, lateral movement, malware, windows"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-500.html"
URL_IMAGES: ""
Date: "2026-01-23"
Tags: "Cheatsheet, DFIR, OSCP, Lateral Movement, Malware, Windows"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-500"
Permalink: "/notes/note-docker-security-hardening-500.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CORS Misconfiguration

### MySQL

```powershell
gobuster dir -u http://10.47.90.14/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.96.135/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.217.178/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

- `kerbrute`
- `rubeus`
- `netcat`
- `rpcclient`
- `ligolo-ng`
- `lookupsid`

## GPP Password

### Weak Service Permissions

- `CSRF`
- `DNS Rebinding`
- `metasploit`

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## RPC

### Constrained Delegation

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.72.178.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3268,8080,110 10.21.230.13 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.172.216 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## SUID Binary

### Open Redirect

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.
