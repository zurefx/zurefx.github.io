---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "networking, windows, privilege escalation, cheatsheet, linux, blue team"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-591.html"
URL_IMAGES: ""
Date: "2025-09-19"
Tags: "Networking, Windows, Privilege Escalation, Cheatsheet, Linux, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-591"
Permalink: "/notes/note-memory-forensics-with-volatility-591.html"
BtnLabel: "Read Notes"
Pick: 0
---
## .NET

### Unquoted Service Path

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

> **Note:** SSTI was identified as the primary attack vector in this scenario.

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## CMD

### sharphound

> **Note:** AS-REP Roasting was identified as the primary attack vector in this scenario.

- `GetNPUsers`
- `john`
- `wmiexec`
- `crackmapexec`
- `ligolo-ng`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.89.40/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

## ACL Abuse

### Cron Job

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

## RDP

### RPC

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## PostgreSQL

### PHP

- `hydra`
- `kerbrute`
- `SUID Binary`
- `sharphound`
- `SQL Injection`

```bash
crackmapexec smb 10.102.158.133 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.150.97/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.85.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.19.243/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.229.119 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.73.130.34 -u administrator -p 'P@ssw0rd!' --shares
```

## Active Directory

### Insecure Deserialization

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.235.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.103.156.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.65.137
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.
