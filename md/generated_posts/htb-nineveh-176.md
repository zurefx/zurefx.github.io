---
TitleSEO: "VulnHub — Nineveh (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Nineveh (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Nineveh. IDOR and SSRF to achieve easy compromise on FreeBSD."
Keywords: "tryhackme, insane, windows, forensics, easy, web, linux"
URL: "https://zurefx.github.io/writeups/htb-nineveh-176.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-176/"
Date: "2024-03-07"
Tags: "TryHackMe, Insane, Windows, Forensics, Easy, Web, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-176"
Permalink: "/writeups/htb-nineveh-176.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nineveh** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.106.29.160`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.12.167.215/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.92.201/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.120.159.43 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.83.112.161/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.24.31.38 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.78.190.196/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

Key finding: **SSRF**.

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p8080,27017,636 10.40.179.21 -oN scan.txt
gobuster dir -u http://10.127.190.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
crackmapexec smb 10.80.195.150 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.65.69.75 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.59.20.198 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.172.171/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `metasploit`
- `chisel`
- `wmiexec`
- `hashcat`

### Key Takeaways

- IDOR
- SSRF
