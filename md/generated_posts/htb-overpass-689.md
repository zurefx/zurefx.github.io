---
TitleSEO: "OffSec Proving Grounds — Overpass (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Overpass (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Overpass. Open Redirect and Remote Code Execution to achieve insane compromise on Windows."
Keywords: "tryhackme, windows, medium"
URL: "https://zurefx.github.io/writeups/htb-overpass-689.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-689/"
Date: "2024-09-20"
Tags: "TryHackMe, Windows, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-689"
Permalink: "/writeups/htb-overpass-689.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Overpass** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.61.146.208`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
nmap -sCV -p80,9200,8443 10.90.47.27 -oN scan.txt
nmap -sCV -p3268,8888,22 10.15.125.152 -oN scan.txt
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.75.127.63 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.77.179.247 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Pass the Hash**.

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.28.254.92 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.6.222/FUZZ
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.207.214/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.161.135/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.196.216 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `crackmapexec`
- `metasploit`
- `kerbrute`
- `rubeus`
- `nikto`
- `impacket`
- `bloodhound`
- `pwncat`

### Key Takeaways

- Open Redirect
- Remote Code Execution
- Pass the Hash
