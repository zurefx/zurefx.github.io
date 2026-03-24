---
TitleSEO: "TryHackMe — Node (Hard Windows) | ZureFX"
TitlePost: "TryHackMe — Node (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Node. GPP Password and AlwaysInstallElevated to achieve hard compromise on Windows."
Keywords: "insane, ctf, hard, web, forensics"
URL: "https://zurefx.github.io/writeups/htb-node-777.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-777/"
Date: "2024-07-12"
Tags: "Insane, CTF, Hard, Web, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-node-777"
Permalink: "/writeups/htb-node-777.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Node** is rated **Hard** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.34.74.12`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.165.55
crackmapexec smb 10.97.55.122 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.108.228.77 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.107.196.81 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.86.160.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.187.124
```

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **AlwaysInstallElevated**.

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
gobuster dir -u http://10.44.249.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.192.33/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
nmap -sCV -p993,5986,9200 10.88.198.6 -oN scan.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```powershell
nmap -sCV -p464,993,9200 10.53.162.235 -oN scan.txt
feroxbuster -h
crackmapexec smb 10.51.192.124 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `ligolo-ng`
- `smbexec`
- `gobuster`
- `hashcat`
- `rubeus`
- `atexec`
- `burpsuite`
- `metasploit`

### Key Takeaways

- GPP Password
- AlwaysInstallElevated
