---
TitleSEO: "OffSec Proving Grounds — Node (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Node (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Node. Remote File Inclusion and NTLM Relay to achieve easy compromise on Windows."
Keywords: "web, easy, ctf, linux, tryhackme, offsec"
URL: "https://zurefx.github.io/writeups/htb-node-145.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-145/"
Date: "2025-08-22"
Tags: "Web, Easy, CTF, Linux, TryHackMe, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-node-145"
Permalink: "/writeups/htb-node-145.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Node** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.93.217.20`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.79.63.57 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.10.39.119 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,3268,443 10.88.229.106 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.52.191.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p587,995,5985 10.61.32.44 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.3.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **NTLM Relay**.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.64.156.217 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.67.71.94 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.26.109.180 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `nikto`
- `sharphound`
- `enum4linux`
- `hashcat`

### Key Takeaways

- Remote File Inclusion
- NTLM Relay
