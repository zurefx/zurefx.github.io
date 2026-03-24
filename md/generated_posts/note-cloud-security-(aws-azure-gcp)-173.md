---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, oscp, lateral movement"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-173.html"
URL_IMAGES: ""
Date: "2025-02-11"
Tags: "Cheatsheet, OSCP, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-173"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-173.html"
BtnLabel: "Read Notes"
Pick: 0
---
## MySQL

### netcat

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.12.55.103 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.29.251.158 -u administrator -p 'P@ssw0rd!' --shares
```

- `kerbrute`
- `lookupsid`
- `john`

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.55.62.11 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## FTP

### GPP Password

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## CSRF

### Unconstrained Delegation

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.117.240/FUZZ
```

## mimikatz

### lookupsid

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p135,3306,464 10.53.206.50 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
feroxbuster -h
```

## Active Directory

### LXD Privilege Escalation

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

- `XSS`
- `socat`
- `GetNPUsers`

## secretsdump

### Path Traversal

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

- `SSRF`
- `ldapsearch`
- `enum4linux`
