---
TitleSEO: "TryHackMe — Relevant (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Relevant (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Relevant. Broken Access Control and Command Injection to achieve insane compromise on Windows."
Keywords: "windows, web, insane, forensics, tryhackme, hard, active directory"
URL: "https://zurefx.github.io/writeups/htb-relevant-571.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-relevant-571/"
Date: "2025-02-11"
Tags: "Windows, Web, Insane, Forensics, TryHackMe, Hard, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-relevant-571"
Permalink: "/writeups/htb-relevant-571.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Relevant** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.124.77.17`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.100.140.117 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.149.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.20.4.64/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Command Injection**.

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p1433,53,21 10.89.177.42 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.208.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.232.2 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.114.248.208 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.167.32
nmap -sCV -p8443,587,22 10.72.71.8 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.236.237/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `mimikatz`
- `lookupsid`
- `GetNPUsers`
- `chisel`
- `wpscan`
- `kerbrute`

### Key Takeaways

- Broken Access Control
- Command Injection
- SSRF
