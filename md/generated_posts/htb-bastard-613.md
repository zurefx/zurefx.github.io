---
TitleSEO: "PwnTillDawn — Bastard (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Bastard (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Bastard. SQL Injection and Local File Inclusion to achieve easy compromise on Linux."
Keywords: "linux, insane, active directory"
URL: "https://zurefx.github.io/writeups/htb-bastard-613.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bastard-613/"
Date: "2024-06-13"
Tags: "Linux, Insane, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-bastard-613"
Permalink: "/writeups/htb-bastard-613.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bastard** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.33.143.154`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.39.207.123 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.170.177 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
gobuster dir -u http://10.11.75.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.90.9.210/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
evil-winrm -i 10.59.118.48 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.101.2/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.1.105 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.143.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Key finding: **SQL Injection**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.238.218/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.43.97.95 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.35.186
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.59.57
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.174.199/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `bloodhound`
- `rubeus`
- `wmiexec`
- `msfvenom`
- `atexec`
- `enum4linux`
- `hashcat`

### Key Takeaways

- SQL Injection
- Local File Inclusion
- Constrained Delegation
