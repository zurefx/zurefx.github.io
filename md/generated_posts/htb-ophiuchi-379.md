---
TitleSEO: "PwnTillDawn — Ophiuchi (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Ophiuchi (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Ophiuchi. DCSync and Pass the Ticket to achieve insane compromise on FreeBSD."
Keywords: "windows, offsec, linux, insane, medium, hard"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-379.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-379/"
Date: "2025-11-17"
Tags: "Windows, OffSec, Linux, Insane, Medium, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-379"
Permalink: "/writeups/htb-ophiuchi-379.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.34.240.176`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p636,23,22 10.66.157.128 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.127.135.104 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.15.214
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.49.31.168/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.114.211.68 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Broken Access Control**.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.187.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.108.97.84/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```powershell
gobuster dir -u http://10.25.96.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `smbexec`
- `GetNPUsers`
- `lookupsid`
- `metasploit`
- `ligolo-ng`
- `dcomexec`

### Key Takeaways

- DCSync
- Pass the Ticket
- SSRF
- Broken Access Control
