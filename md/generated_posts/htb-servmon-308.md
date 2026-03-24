---
TitleSEO: "PwnTillDawn — ServMon (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — ServMon (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn ServMon. Path Traversal and Pass the Ticket to achieve insane compromise on Windows."
Keywords: "offsec, ctf, forensics, easy, reversing, windows"
URL: "https://zurefx.github.io/writeups/htb-servmon-308.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-308/"
Date: "2025-07-18"
Tags: "OffSec, CTF, Forensics, Easy, Reversing, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-308"
Permalink: "/writeups/htb-servmon-308.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ServMon** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.112.83.75`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.153.29 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.174.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.83.239 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.56.140.131 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.22.186.21 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Pass the Ticket**.

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.74.201.67 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.57.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.4.195/FUZZ
crackmapexec smb 10.52.96.95 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p9200,8888,135 10.109.92.31 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.5.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `msfvenom`
- `sqlmap`
- `ffuf`
- `sharphound`
- `metasploit`
- `psexec`
- `rubeus`
- `bloodhound`

### Key Takeaways

- Path Traversal
- Pass the Ticket
