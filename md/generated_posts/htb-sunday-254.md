---
TitleSEO: "PwnTillDawn — Sunday (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Sunday (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Sunday. AS-REP Roasting and DCSync to achieve insane compromise on Linux."
Keywords: "hard, windows, easy, ctf, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-sunday-254.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-254/"
Date: "2024-08-17"
Tags: "Hard, Windows, Easy, CTF, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-254"
Permalink: "/writeups/htb-sunday-254.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sunday** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.70.195.144`.

### Objectives

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.75.176/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.77.44.34 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.164.202
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

Key finding: **DCSync**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p5986,139,636 10.79.249.74 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.128.217/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p5985,995,5432 10.41.89.8 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.113.91
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.48.31.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.40.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `ffuf`
- `hydra`
- `ldapsearch`
- `wmiexec`
- `sharphound`
- `rpcclient`
- `crackmapexec`

### Key Takeaways

- AS-REP Roasting
- DCSync
- Resource-Based Constrained Delegation
- Writable PATH
