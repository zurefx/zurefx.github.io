---
TitleSEO: "HackTheBox — Granny (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Granny (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Granny. DNS Rebinding and DLL Hijacking to achieve insane compromise on Linux."
Keywords: "forensics, web, pwntilldawn, offsec, medium, tryhackme, reversing"
URL: "https://zurefx.github.io/writeups/htb-granny-638.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-638/"
Date: "2025-01-22"
Tags: "Forensics, Web, PwnTillDawn, OffSec, Medium, TryHackMe, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-638"
Permalink: "/writeups/htb-granny-638.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Granny** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.88.120.59`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.88.213.22/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.6.26/FUZZ
nmap -sCV -p8443,445,995 10.105.143.10 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.121.42.77 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.32.90.224 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.21.249.233 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **DLL Hijacking**.

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.175.117
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.237.20
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.199.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.126.179.53 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.87.239.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `atexec`
- `hashcat`
- `mimikatz`
- `nmap`
- `evil-winrm`

### Key Takeaways

- DNS Rebinding
- DLL Hijacking
