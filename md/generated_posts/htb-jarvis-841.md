---
TitleSEO: "PwnTillDawn — Jarvis (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Jarvis (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Jarvis. Docker Escape and Kerberoasting to achieve hard compromise on OpenBSD."
Keywords: "easy, web, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-jarvis-841.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-jarvis-841/"
Date: "2024-12-29"
Tags: "Easy, Web, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-jarvis-841"
Permalink: "/writeups/htb-jarvis-841.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Jarvis** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.52.191.234`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.98.110.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p110,445,9200 10.13.216.25 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.107.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.114.49
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.239.78/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.193.224
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.179.11
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Docker Escape**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.205.213/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.76.37.85/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.163.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.26.62.162/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `wmiexec`
- `dcomexec`
- `smbexec`
- `netcat`

### Key Takeaways

- Docker Escape
- Kerberoasting
- Weak Service Permissions
- Subdomain Takeover
