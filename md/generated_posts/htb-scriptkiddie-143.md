---
TitleSEO: "OffSec Proving Grounds — ScriptKiddie (Medium FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — ScriptKiddie (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds ScriptKiddie. Command Injection and Unconstrained Delegation to achieve medium compromise on FreeBSD."
Keywords: "ctf, tryhackme, easy, insane, offsec, windows"
URL: "https://zurefx.github.io/writeups/htb-scriptkiddie-143.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-scriptkiddie-143/"
Date: "2024-01-19"
Tags: "CTF, TryHackMe, Easy, Insane, OffSec, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-scriptkiddie-143"
Permalink: "/writeups/htb-scriptkiddie-143.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ScriptKiddie** is rated **Medium** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.103.61.73`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.86.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.105.144/FUZZ
evil-winrm -i 10.59.102.166 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.75.58.252 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.33.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.146.128/FUZZ
crackmapexec smb 10.76.50.69 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Unconstrained Delegation**.

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p636,27017,143 10.42.78.110 -oN scan.txt
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.70.114/FUZZ
nmap -sCV -p1521,8888,3268 10.62.64.64 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.40.253
nmap -sCV -p27017,993,1433 10.27.71.223 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `ffuf`
- `wpscan`
- `mimikatz`
- `hashcat`

### Key Takeaways

- Command Injection
- Unconstrained Delegation
- ACL Abuse
- AlwaysInstallElevated
