---
TitleSEO: "TryHackMe — Knife (Hard OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Knife (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Knife. Pass the Hash and SQL Injection to achieve hard compromise on OpenBSD."
Keywords: "ctf, active directory, pwntilldawn, hard, web, offsec, windows"
URL: "https://zurefx.github.io/writeups/htb-knife-759.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-knife-759/"
Date: "2025-10-18"
Tags: "CTF, Active Directory, PwnTillDawn, Hard, Web, OffSec, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-knife-759"
Permalink: "/writeups/htb-knife-759.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Knife** is rated **Hard** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.78.154.45`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p389,1433,8888 10.32.105.159 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.245.67/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.248.106/FUZZ
crackmapexec smb 10.29.46.200 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.68.248
gobuster dir -u http://10.49.6.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.21.9/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Path Traversal**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.109.129.15 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.109.13.155 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p1433,8888,23 10.107.55.216 -oN scan.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
gobuster dir -u http://10.79.236.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.61.15.224/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.78.198.123 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3389,80,636 10.108.82.38 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `wmiexec`
- `ligolo-ng`
- `john`
- `psexec`
- `metasploit`
- `msfvenom`
- `wpscan`

### Key Takeaways

- Pass the Hash
- SQL Injection
- Path Traversal
