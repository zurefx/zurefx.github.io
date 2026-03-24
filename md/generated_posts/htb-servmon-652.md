---
TitleSEO: "OffSec Proving Grounds — ServMon (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — ServMon (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds ServMon. Unquoted Service Path and ACL Abuse to achieve insane compromise on Windows."
Keywords: "ctf, easy, hackthebox, pwntilldawn, medium, hard"
URL: "https://zurefx.github.io/writeups/htb-servmon-652.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-652/"
Date: "2024-10-01"
Tags: "CTF, Easy, HackTheBox, PwnTillDawn, Medium, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-652"
Permalink: "/writeups/htb-servmon-652.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ServMon** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.44.231.85`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p5432,80,3389 10.94.114.172 -oN scan.txt
feroxbuster -h
nmap -sCV -p1433,5985,464 10.92.251.64 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.40.10
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.35.110.238 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.17.171.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Unquoted Service Path**.

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.75.208.229/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.126.252.102 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```powershell
evil-winrm -i 10.114.164.164 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```powershell
nmap -sCV -p1433,21,636 10.22.35.107 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.20.191/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.156.42
gobuster dir -u http://10.53.217.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `impacket`
- `ldapsearch`
- `ligolo-ng`
- `ffuf`
- `metasploit`

### Key Takeaways

- Unquoted Service Path
- ACL Abuse
