---
TitleSEO: "HackTheBox — Cronos (Easy FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Cronos (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Cronos. SeDebugPrivilege and XSS to achieve easy compromise on FreeBSD."
Keywords: "hard, web, hackthebox, offsec"
URL: "https://zurefx.github.io/writeups/htb-cronos-460.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cronos-460/"
Date: "2025-09-29"
Tags: "Hard, Web, HackTheBox, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-cronos-460"
Permalink: "/writeups/htb-cronos-460.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Cronos** is rated **Easy** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.37.88.151`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.43.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.240.52/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.134.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.68.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.104.173/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.208.54 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.17.86
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.114.65/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **XSS**.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.101.164.6 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.119.86.188 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.109.6/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
crackmapexec smb 10.118.73.247 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p9200,1521,443 10.92.24.195 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `impacket`
- `nmap`
- `evil-winrm`
- `mimikatz`
- `smbclient`
- `rpcclient`

### Key Takeaways

- SeDebugPrivilege
- XSS
