---
TitleSEO: "PwnTillDawn — Solidstate (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Solidstate (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Solidstate. Golden Ticket and Remote Code Execution to achieve medium compromise on FreeBSD."
Keywords: "insane, tryhackme, hackthebox, pwntilldawn, reversing, ctf"
URL: "https://zurefx.github.io/writeups/htb-solidstate-899.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-solidstate-899/"
Date: "2024-05-02"
Tags: "Insane, TryHackMe, HackTheBox, PwnTillDawn, Reversing, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-solidstate-899"
Permalink: "/writeups/htb-solidstate-899.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Solidstate** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.116.192.219`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.58.240.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.136.105/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.238.129/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.63.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5985,25,80 10.121.14.105 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Key finding: **Unquoted Service Path**.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.119.58/FUZZ
evil-winrm -i 10.86.105.127 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.190.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.44.165.82 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.153.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `mimikatz`
- `GetNPUsers`
- `hashcat`
- `GetUserSPNs`
- `chisel`
- `smbexec`
- `netcat`
- `impacket`

### Key Takeaways

- Golden Ticket
- Remote Code Execution
- Unquoted Service Path
