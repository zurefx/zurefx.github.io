---
TitleSEO: "OffSec Proving Grounds — Devel (Easy FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Devel (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Devel. Unquoted Service Path and ACL Abuse to achieve easy compromise on FreeBSD."
Keywords: "offsec, pwntilldawn, easy, hard, reversing, active directory"
URL: "https://zurefx.github.io/writeups/htb-devel-196.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-196/"
Date: "2025-03-03"
Tags: "OffSec, PwnTillDawn, Easy, Hard, Reversing, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-196"
Permalink: "/writeups/htb-devel-196.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Devel** is rated **Easy** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.119.186.53`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.138.206/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.203.120
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.28.51.36 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.104.129/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **ACL Abuse**.

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.36.163.13 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.56.176/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
feroxbuster -h
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.226.94 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p25,445,8443 10.49.178.243 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `psexec`
- `msfvenom`
- `wmiexec`
- `rubeus`
- `sqlmap`
- `crackmapexec`

### Key Takeaways

- Unquoted Service Path
- ACL Abuse
