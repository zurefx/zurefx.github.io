---
TitleSEO: "PwnTillDawn — Convertmyfund (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Convertmyfund (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Convertmyfund. LAPS Abuse and Open Redirect to achieve hard compromise on Linux."
Keywords: "web, hard, insane, easy, reversing, offsec, linux"
URL: "https://zurefx.github.io/writeups/htb-convertmyfund-279.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-convertmyfund-279/"
Date: "2025-09-09"
Tags: "Web, Hard, Insane, Easy, Reversing, OffSec, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-convertmyfund-279"
Permalink: "/writeups/htb-convertmyfund-279.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Convertmyfund** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.92.52.127`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.29.206.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.254.8
crackmapexec smb 10.117.35.45 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.37.161.149 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.101.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.64.182.170 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.16.30.84 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Open Redirect**.

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.49.24
gobuster dir -u http://10.92.236.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.157.121
evil-winrm -i 10.65.102.237 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.42.103
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.128.163/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.139.32/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.171.231/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `lookupsid`
- `smbexec`
- `enum4linux`
- `GetNPUsers`
- `kerbrute`
- `chisel`

### Key Takeaways

- LAPS Abuse
- Open Redirect
- SSTI
