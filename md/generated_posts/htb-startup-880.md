---
TitleSEO: "OffSec Proving Grounds — Startup (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Startup (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Startup. Command Injection and Writable PATH to achieve medium compromise on OpenBSD."
Keywords: "pwntilldawn, hard, hackthebox, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-startup-880.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-880/"
Date: "2025-03-17"
Tags: "PwnTillDawn, Hard, HackTheBox, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-880"
Permalink: "/writeups/htb-startup-880.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Startup** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.90.167.56`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.61.54.228 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.100.119.237 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
nmap -sCV -p9200,22,1521 10.57.74.241 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.77.146.184 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.101.221.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.76.56
evil-winrm -i 10.80.122.116 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Writable PATH**.

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.39.86.131 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.43.233.10/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.39.62.240 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.232.201
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.161.104
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```powershell
nmap -sCV -p8443,993,80 10.79.136.131 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `nmap`
- `gobuster`
- `rubeus`
- `atexec`
- `dcomexec`
- `hydra`

### Key Takeaways

- Command Injection
- Writable PATH
- Pass the Hash
- XSS
