---
TitleSEO: "PwnTillDawn — Bolt (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Bolt (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Bolt. NFS No Root Squash and Path Traversal to achieve insane compromise on Windows."
Keywords: "forensics, linux, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-bolt-603.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bolt-603/"
Date: "2025-01-11"
Tags: "Forensics, Linux, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-bolt-603"
Permalink: "/writeups/htb-bolt-603.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bolt** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.121.42.252`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p21,1521,139 10.38.168.36 -oN scan.txt
nmap -sCV -p25,5986,993 10.87.157.243 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.38.52/FUZZ
gobuster dir -u http://10.119.164.96/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.123.98.210/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.54.73/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.108.203/FUZZ
nmap -sCV -p53,135,464 10.103.185.207 -oN scan.txt
crackmapexec smb 10.52.27.76 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

Key finding: **Path Traversal**.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.7.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.43.226.206 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.88.40.102 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.55.104/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `secretsdump`
- `atexec`
- `mimikatz`
- `msfvenom`

### Key Takeaways

- NFS No Root Squash
- Path Traversal
- SSRF
