---
TitleSEO: "OffSec Proving Grounds — Traverxec (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Traverxec (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Traverxec. LAPS Abuse and Unconstrained Delegation to achieve easy compromise on OpenBSD."
Keywords: "hard, ctf, reversing, hackthebox, web"
URL: "https://zurefx.github.io/writeups/htb-traverxec-451.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-451/"
Date: "2025-11-30"
Tags: "Hard, CTF, Reversing, HackTheBox, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-451"
Permalink: "/writeups/htb-traverxec-451.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.121.40.4`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.73.238.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.152.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.12.48.136/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **LAPS Abuse**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.229.171/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.176.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
crackmapexec smb 10.54.161.238 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
gobuster dir -u http://10.84.236.221/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `sharphound`
- `wmiexec`
- `bloodhound`
- `wpscan`
- `smbexec`
- `nikto`
- `GetUserSPNs`

### Key Takeaways

- LAPS Abuse
- Unconstrained Delegation
