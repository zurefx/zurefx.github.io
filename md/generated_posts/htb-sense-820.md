---
TitleSEO: "TryHackMe — Sense (Easy OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Sense (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Sense. AS-REP Roasting and XSS to achieve easy compromise on OpenBSD."
Keywords: "insane, web, active directory, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-sense-820.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-820/"
Date: "2025-09-06"
Tags: "Insane, Web, Active Directory, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-820"
Permalink: "/writeups/htb-sense-820.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Easy** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.24.30.35`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.57.30.206/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.18.123.148/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.138.105 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.232.82
```

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.40.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.158.109 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **XSS**.

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.122.35
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.175.244/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.15.84/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
nmap -sCV -p8888,3268,3389 10.85.221.130 -oN scan.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.70.215.217 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.57.96/FUZZ
nmap -sCV -p5432,443,464 10.90.123.65 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.225.52
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.149.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `nikto`
- `impacket`
- `hashcat`
- `socat`
- `kerbrute`
- `psexec`

### Key Takeaways

- AS-REP Roasting
- XSS
- Weak Service Permissions
