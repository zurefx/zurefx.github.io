---
TitleSEO: "PwnTillDawn — Skynet (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Skynet (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Skynet. NFS No Root Squash and XXE to achieve medium compromise on OpenBSD."
Keywords: "linux, forensics, medium"
URL: "https://zurefx.github.io/writeups/htb-skynet-771.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-771/"
Date: "2026-03-22"
Tags: "Linux, Forensics, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-771"
Permalink: "/writeups/htb-skynet-771.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Skynet** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.128.83.171`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p993,80,443 10.96.240.154 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.210.144
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.47.20.207 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p23,22,5985 10.66.200.138 -oN scan.txt
crackmapexec smb 10.127.101.88 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.67.227.159/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
gobuster dir -u http://10.36.245.163/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
evil-winrm -i 10.33.172.189 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **XXE**.

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p1521,135,443 10.33.240.138 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.116.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.11.246.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.37.81/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.44.41 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `pwncat`
- `rubeus`
- `metasploit`
- `sharphound`
- `ffuf`
- `wmiexec`

### Key Takeaways

- NFS No Root Squash
- XXE
