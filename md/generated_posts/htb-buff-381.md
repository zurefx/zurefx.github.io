---
TitleSEO: "OffSec Proving Grounds — Buff (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Buff (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Buff. GPP Password and SeImpersonatePrivilege to achieve insane compromise on FreeBSD."
Keywords: "linux, offsec, easy, ctf"
URL: "https://zurefx.github.io/writeups/htb-buff-381.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buff-381/"
Date: "2025-05-29"
Tags: "Linux, OffSec, Easy, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-buff-381"
Permalink: "/writeups/htb-buff-381.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buff** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.38.180.101`.

### Objectives

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.101.28/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.20.41.51/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.246.75 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p3389,9200,993 10.98.249.164 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.78.65.65 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.99.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.86.89.165 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8888,8080,27017 10.84.53.73 -oN scan.txt
gobuster dir -u http://10.102.81.68/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

Key finding: **GPP Password**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.201.244/FUZZ
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.226.110 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.126.99.102 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.177.221/FUZZ
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.127.161.8 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `chisel`
- `nmap`
- `wpscan`
- `netcat`
- `smbexec`
- `enum4linux`
- `impacket`
- `GetUserSPNs`

### Key Takeaways

- GPP Password
- SeImpersonatePrivilege
