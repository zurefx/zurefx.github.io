---
TitleSEO: "PwnTillDawn — Anthem (Insane OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Anthem (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Anthem. NFS No Root Squash and ACL Abuse to achieve insane compromise on OpenBSD."
Keywords: "forensics, tryhackme, pwntilldawn, active directory, hard"
URL: "https://zurefx.github.io/writeups/htb-anthem-324.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-324/"
Date: "2024-09-18"
Tags: "Forensics, TryHackMe, PwnTillDawn, Active Directory, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-324"
Permalink: "/writeups/htb-anthem-324.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Anthem** is rated **Insane** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.11.49.202`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.58.9
nmap -sCV -p993,3268,53 10.111.165.39 -oN scan.txt
nmap -sCV -p389,1521,3268 10.35.71.114 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.237.136/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.128.198/FUZZ
crackmapexec smb 10.66.156.242 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.80.232.84 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.9.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.157.162
nmap -sCV -p443,53,80 10.72.252.226 -oN scan.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.154.189/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **ACL Abuse**.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.113.96.162/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.53.227/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p8443,3306,27017 10.18.150.122 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.42.215/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `nikto`
- `ffuf`
- `lookupsid`
- `bloodhound`

### Key Takeaways

- NFS No Root Squash
- ACL Abuse
- SQL Injection
