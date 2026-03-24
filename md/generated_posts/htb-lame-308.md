---
TitleSEO: "HackTheBox — Lame (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Lame (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Lame. DLL Hijacking and Sudo Misconfiguration to achieve medium compromise on FreeBSD."
Keywords: "easy, windows, offsec, insane, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-lame-308.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-308/"
Date: "2026-03-16"
Tags: "Easy, Windows, OffSec, Insane, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-308"
Permalink: "/writeups/htb-lame-308.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Lame** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.109.13.223`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.39.64.126 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1433,3389,8443 10.57.161.19 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.27.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.118.147/FUZZ
evil-winrm -i 10.25.200.236 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.110.20/FUZZ
```

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **DLL Hijacking**.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.36.7.203 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.82.77
crackmapexec smb 10.98.16.110 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.17.174
nmap -sCV -p993,27017,3389 10.69.218.176 -oN scan.txt
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.69.120.155/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `bloodhound`
- `pwncat`
- `msfvenom`
- `sqlmap`
- `feroxbuster`
- `burpsuite`

### Key Takeaways

- DLL Hijacking
- Sudo Misconfiguration
- Unquoted Service Path
- Subdomain Takeover
