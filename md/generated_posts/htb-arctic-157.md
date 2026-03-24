---
TitleSEO: "HackTheBox — Arctic (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Arctic (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Arctic. DNS Rebinding and AS-REP Roasting to achieve hard compromise on OpenBSD."
Keywords: "hard, hackthebox, offsec, easy, linux, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-arctic-157.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-157/"
Date: "2024-02-28"
Tags: "Hard, HackTheBox, OffSec, Easy, Linux, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-157"
Permalink: "/writeups/htb-arctic-157.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Arctic** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.57.232.82`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.57.37.159 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.25.223/FUZZ
gobuster dir -u http://10.42.249.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p110,1521,8888 10.91.121.5 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.110.61.71 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.19.228.202 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p135,22,135 10.81.188.109 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Remote File Inclusion**.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.47.102.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.103.94.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.88.156.30 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.124.157.56 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.254.244 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1521,23,9200 10.121.46.64 -oN scan.txt
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.76.243.45 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.229.195
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `sqlmap`
- `smbexec`
- `nmap`
- `enum4linux`
- `gobuster`
- `metasploit`
- `burpsuite`

### Key Takeaways

- DNS Rebinding
- AS-REP Roasting
- DLL Hijacking
- Remote File Inclusion
