---
TitleSEO: "OffSec Proving Grounds — Cap (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Cap (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Cap. CSRF and Open Redirect to achieve easy compromise on Linux."
Keywords: "offsec, medium, linux, hackthebox, hard, easy, insane"
URL: "https://zurefx.github.io/writeups/htb-cap-350.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cap-350/"
Date: "2024-12-29"
Tags: "OffSec, Medium, Linux, HackTheBox, Hard, Easy, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-cap-350"
Permalink: "/writeups/htb-cap-350.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cap** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.43.249.130`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
crackmapexec smb 10.116.170.98 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
evil-winrm -i 10.75.253.109 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.251.111
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.127.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **CSRF**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.89.101
evil-winrm -i 10.119.102.10 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.45.221.161/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.51.54.230 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `burpsuite`
- `metasploit`
- `hashcat`
- `ldapsearch`

### Key Takeaways

- CSRF
- Open Redirect
