---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, enumeration, privilege escalation, linux"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-512.html"
URL_IMAGES: ""
Date: "2026-03-10"
Tags: "Cheatsheet, Enumeration, Privilege Escalation, Linux"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-512"
Permalink: "/notes/note-kubernetes-security-assessment-512.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS

### Node.js

> **Note:** Pass the Hash was identified as the primary attack vector in this scenario.

- `DCSync`
- `Kerberoasting`
- `GPP Password`
- `rpcclient`
- `Weak Service Permissions`
- `feroxbuster`

```bash
nmap -sCV -p3268,3268,1521 10.103.119.91 -oN scan.txt
evil-winrm -i 10.97.180.229 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p23,110,135 10.35.201.223 -oN scan.txt
gobuster dir -u http://10.58.140.108/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Path Traversal

### Remote File Inclusion

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

- `DCSync`
- `lookupsid`
- `AlwaysInstallElevated`

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## ligolo-ng

### ACL Abuse

```python
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.29.144/FUZZ
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.72.140.132 -u administrator -p 'P@ssw0rd!'
```

## Active Directory

### NFS No Root Squash

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

## Unquoted Service Path

### DLL Hijacking

- `sharphound`
- `crackmapexec`
- `Unquoted Service Path`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.51.82/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.42.196
evil-winrm -i 10.90.111.177 -u administrator -p 'P@ssw0rd!'
```

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

## HTTP

### CORS Misconfiguration

```bash
gobuster dir -u http://10.109.52.117/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.165.224/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.34.121
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.
