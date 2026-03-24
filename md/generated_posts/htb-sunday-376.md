---
TitleSEO: "VulnHub — Sunday (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Sunday (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Sunday. IDOR and Path Traversal to achieve insane compromise on FreeBSD."
Keywords: "tryhackme, web, reversing"
URL: "https://zurefx.github.io/writeups/htb-sunday-376.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-376/"
Date: "2024-12-18"
Tags: "TryHackMe, Web, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-376"
Permalink: "/writeups/htb-sunday-376.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sunday** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.77.7.103`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.22.147.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.45.182.246 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.30.35.249 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
crackmapexec smb 10.127.188.51 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.123.121.7 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p23,1521,27017 10.123.160.182 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.57.60/FUZZ
```

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **IDOR**.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.232.43
evil-winrm -i 10.15.160.49 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.20.210.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.79.86.177 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.140.13
nmap -sCV -p135,1433,464 10.44.22.223 -oN scan.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.98.247.153 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p143,1521,636 10.25.163.116 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `dcomexec`
- `rubeus`
- `netcat`
- `nmap`
- `mimikatz`
- `bloodhound`
- `GetUserSPNs`
- `rpcclient`

### Key Takeaways

- IDOR
- Path Traversal
- Subdomain Takeover
