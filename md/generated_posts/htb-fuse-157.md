---
TitleSEO: "VulnHub — Fuse (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Fuse (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Fuse. Silver Ticket and Insecure Deserialization to achieve easy compromise on FreeBSD."
Keywords: "medium, pwntilldawn, forensics, web, offsec, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-fuse-157.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-157/"
Date: "2024-04-11"
Tags: "Medium, PwnTillDawn, Forensics, Web, OffSec, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-157"
Permalink: "/writeups/htb-fuse-157.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Fuse** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.57.78.208`.

### Objectives

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.212.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p25,135,995 10.81.86.154 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.156.179
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p21,443,445 10.104.220.31 -oN scan.txt
crackmapexec smb 10.45.116.199 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.122.21/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
gobuster dir -u http://10.73.186.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Key finding: **SQL Injection**.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.100.99.224 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
crackmapexec smb 10.49.10.139 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.47.13/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.105.109 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
gobuster dir -u http://10.45.17.148/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.100.226.88 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.41.96.207 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `GetUserSPNs`
- `chisel`
- `rpcclient`
- `msfvenom`

### Key Takeaways

- Silver Ticket
- Insecure Deserialization
- Unconstrained Delegation
- SQL Injection
