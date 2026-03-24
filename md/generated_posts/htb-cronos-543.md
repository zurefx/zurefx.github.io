---
TitleSEO: "VulnHub — Cronos (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Cronos (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Cronos. CORS Misconfiguration and AlwaysInstallElevated to achieve easy compromise on Windows."
Keywords: "reversing, easy, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-cronos-543.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cronos-543/"
Date: "2024-09-08"
Tags: "Reversing, Easy, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-cronos-543"
Permalink: "/writeups/htb-cronos-543.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cronos** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.96.148.177`.

### Objectives

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.137.155/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.92.193/FUZZ
feroxbuster -h
crackmapexec smb 10.34.176.200 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p464,9200,995 10.25.71.154 -oN scan.txt
gobuster dir -u http://10.14.11.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p587,464,464 10.120.186.15 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.246.29 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

Key finding: **AlwaysInstallElevated**.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.162.79 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.36.26.44 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
evil-winrm -i 10.23.120.178 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.49.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.12.202/FUZZ
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
nmap -sCV -p53,5986,135 10.123.104.49 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.133.75 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `burpsuite`
- `metasploit`
- `smbexec`
- `wpscan`
- `sharphound`
- `nikto`
- `bloodhound`
- `ffuf`

### Key Takeaways

- CORS Misconfiguration
- AlwaysInstallElevated
- Path Traversal
- Unquoted Service Path
