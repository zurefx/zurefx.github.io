---
TitleSEO: "VulnHub — Node (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Node (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Node. Resource-Based Constrained Delegation and SSTI to achieve hard compromise on FreeBSD."
Keywords: "web, active directory, ctf, forensics, easy"
URL: "https://zurefx.github.io/writeups/htb-node-111.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-111/"
Date: "2025-07-20"
Tags: "Web, Active Directory, CTF, Forensics, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-node-111"
Permalink: "/writeups/htb-node-111.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Node** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.25.184.62`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.42.222.179 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.235.254
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p3268,5985,636 10.55.194.153 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.97.153.86 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.99.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.13.3.30/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Resource-Based Constrained Delegation**.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.141.85/FUZZ
evil-winrm -i 10.11.213.222 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.246.148 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.57.95.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.97.32.127/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.105.148
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.126.96
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `hydra`
- `mimikatz`
- `john`
- `enum4linux`
- `rpcclient`
- `atexec`
- `burpsuite`
- `psexec`

### Key Takeaways

- Resource-Based Constrained Delegation
- SSTI
- XXE
- Constrained Delegation
