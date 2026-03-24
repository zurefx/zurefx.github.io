---
TitleSEO: "HackTheBox — Cereal (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Cereal (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Cereal. Unconstrained Delegation and SeDebugPrivilege to achieve medium compromise on OpenBSD."
Keywords: "medium, hard, insane, offsec, pwntilldawn, easy"
URL: "https://zurefx.github.io/writeups/htb-cereal-348.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-348/"
Date: "2026-01-20"
Tags: "Medium, Hard, Insane, OffSec, PwnTillDawn, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-348"
Permalink: "/writeups/htb-cereal-348.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cereal** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.59.120.123`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.73.12.240 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.80.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.8.107 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p993,139,3268 10.73.11.8 -oN scan.txt
gobuster dir -u http://10.27.163.97/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Remote Code Execution**.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
evil-winrm -i 10.18.69.252 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.90.207.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.96.28.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.201.200
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p8443,5986,22 10.83.45.54 -oN scan.txt
crackmapexec smb 10.85.104.26 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.119.127.169 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `bloodhound`
- `sqlmap`
- `mimikatz`
- `psexec`

### Key Takeaways

- Unconstrained Delegation
- SeDebugPrivilege
- Remote Code Execution
