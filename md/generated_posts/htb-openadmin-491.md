---
TitleSEO: "TryHackMe — OpenAdmin (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — OpenAdmin (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe OpenAdmin. Open Redirect and Pass the Hash to achieve insane compromise on Windows."
Keywords: "offsec, medium, reversing, insane, active directory, easy, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-openadmin-491.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-openadmin-491/"
Date: "2024-02-08"
Tags: "OffSec, Medium, Reversing, Insane, Active Directory, Easy, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-openadmin-491"
Permalink: "/writeups/htb-openadmin-491.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **OpenAdmin** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.123.93.86`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.58.136/FUZZ
nmap -sCV -p135,110,389 10.52.7.249 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.141.162
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

Key finding: **Pass the Hash**.

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
evil-winrm -i 10.18.95.98 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p143,25,445 10.17.25.19 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.113.180 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.91.3/FUZZ
```

### Exploitation

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```powershell
nmap -sCV -p464,139,8080 10.125.153.187 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `feroxbuster`
- `socat`
- `atexec`
- `rubeus`
- `ffuf`
- `kerbrute`
- `crackmapexec`
- `psexec`

### Key Takeaways

- Open Redirect
- Pass the Hash
