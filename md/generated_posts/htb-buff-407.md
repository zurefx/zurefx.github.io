---
TitleSEO: "HackTheBox — Buff (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Buff (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Buff. Subdomain Takeover and Broken Access Control to achieve medium compromise on OpenBSD."
Keywords: "hard, web, medium, forensics"
URL: "https://zurefx.github.io/writeups/htb-buff-407.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buff-407/"
Date: "2026-03-21"
Tags: "Hard, Web, Medium, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-buff-407"
Permalink: "/writeups/htb-buff-407.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buff** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.84.13.232`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
nmap -sCV -p995,5986,5986 10.78.198.100 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.77.234 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.40.20/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.19.2/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.27.208/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.118.169
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p23,143,80 10.44.192.154 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.51.229
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Broken Access Control**.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.117.110.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.95.179 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `burpsuite`
- `smbexec`
- `socat`
- `wpscan`

### Key Takeaways

- Subdomain Takeover
- Broken Access Control
