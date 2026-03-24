---
TitleSEO: "OffSec Proving Grounds — Irked (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Irked (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Irked. SSRF and Open Redirect to achieve easy compromise on OpenBSD."
Keywords: "windows, insane, reversing, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-irked-698.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-698/"
Date: "2024-01-07"
Tags: "Windows, Insane, Reversing, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-698"
Permalink: "/writeups/htb-irked-698.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.64.74.249`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.59.101.134 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.121.248.24 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
gobuster dir -u http://10.73.6.169/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.32.2
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Open Redirect**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.113.199.142 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.154.83 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.36.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3306,9200,8443 10.119.170.86 -oN scan.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
gobuster dir -u http://10.117.78.196/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `bloodhound`
- `GetUserSPNs`
- `kerbrute`
- `impacket`
- `hydra`
- `GetNPUsers`

### Key Takeaways

- SSRF
- Open Redirect
