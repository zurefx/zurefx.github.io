---
TitleSEO: "OffSec Proving Grounds — Beep (Easy FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Beep (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Beep. LAPS Abuse and Subdomain Takeover to achieve easy compromise on FreeBSD."
Keywords: "hard, ctf, linux, reversing, insane, offsec, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-beep-557.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-557/"
Date: "2025-09-13"
Tags: "Hard, CTF, Linux, Reversing, Insane, OffSec, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-557"
Permalink: "/writeups/htb-beep-557.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Beep** is rated **Easy** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.81.134.49`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.55.249.6 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.66.242.59 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p3268,443,9200 10.86.54.129 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.125.224 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5432,1433,139 10.99.55.254 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.103.76
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Subdomain Takeover**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.27.37
crackmapexec smb 10.119.135.140 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
feroxbuster -h
gobuster dir -u http://10.42.113.128/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.57.189.112 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.23.123.179 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p636,23,80 10.110.188.175 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `ligolo-ng`
- `hashcat`
- `psexec`
- `GetNPUsers`
- `hydra`
- `dcomexec`
- `wmiexec`

### Key Takeaways

- LAPS Abuse
- Subdomain Takeover
