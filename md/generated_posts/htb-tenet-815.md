---
TitleSEO: "OffSec Proving Grounds — Tenet (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tenet (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tenet. SeDebugPrivilege and NFS No Root Squash to achieve insane compromise on FreeBSD."
Keywords: "insane, hackthebox, offsec, reversing, windows, linux, active directory"
URL: "https://zurefx.github.io/writeups/htb-tenet-815.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-815/"
Date: "2026-01-05"
Tags: "Insane, HackTheBox, OffSec, Reversing, Windows, Linux, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-815"
Permalink: "/writeups/htb-tenet-815.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.16.132.47`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.228.17
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.11.168.188 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.85.216.109 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Path Traversal**.

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.9.93
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.194.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.21.120.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```powershell
gobuster dir -u http://10.35.192.63/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p9200,1433,995 10.49.45.73 -oN scan.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.142.17/FUZZ
gobuster dir -u http://10.48.26.94/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `nikto`
- `secretsdump`
- `wpscan`
- `ligolo-ng`
- `kerbrute`
- `feroxbuster`
- `mimikatz`
- `burpsuite`

### Key Takeaways

- SeDebugPrivilege
- NFS No Root Squash
- Path Traversal
- SeImpersonatePrivilege
