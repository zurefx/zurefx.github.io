---
TitleSEO: "TryHackMe — Mindgames (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Mindgames (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Mindgames. Writable PATH and Local File Inclusion to achieve medium compromise on Linux."
Keywords: "offsec, insane, reversing"
URL: "https://zurefx.github.io/writeups/htb-mindgames-547.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-547/"
Date: "2024-09-16"
Tags: "OffSec, Insane, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-547"
Permalink: "/writeups/htb-mindgames-547.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mindgames** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.57.102.164`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.78.225
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
nmap -sCV -p8888,27017,25 10.30.218.115 -oN scan.txt
crackmapexec smb 10.69.205.48 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.138.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Writable PATH**.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p80,443,27017 10.17.190.131 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.126.49/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p1521,23,8888 10.35.185.121 -oN scan.txt
gobuster dir -u http://10.83.147.182/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.74.29.46 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,993,8080 10.52.34.28 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `msfvenom`
- `smbclient`
- `feroxbuster`
- `rubeus`
- `sqlmap`
- `nmap`
- `atexec`

### Key Takeaways

- Writable PATH
- Local File Inclusion
- Broken Access Control
- SQL Injection
