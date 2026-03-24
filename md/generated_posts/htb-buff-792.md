---
TitleSEO: "OffSec Proving Grounds — Buff (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Buff (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Buff. Cron Job and Pass the Ticket to achieve medium compromise on Linux."
Keywords: "offsec, hard, windows, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-buff-792.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buff-792/"
Date: "2024-03-14"
Tags: "OffSec, Hard, Windows, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-buff-792"
Permalink: "/writeups/htb-buff-792.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Buff** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.129.186.52`.

### Objectives

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.167.134/FUZZ
crackmapexec smb 10.54.88.59 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
nmap -sCV -p636,3306,8080 10.43.72.49 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.97.130/FUZZ
gobuster dir -u http://10.84.179.18/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.115.208
```

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

Key finding: **Pass the Ticket**.

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.110.5.167 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p135,445,995 10.22.208.169 -oN scan.txt
evil-winrm -i 10.56.234.10 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.105.185
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.36.129
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.96.187.53 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.185.106/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `ffuf`
- `nikto`
- `nmap`
- `pwncat`
- `psexec`
- `msfvenom`

### Key Takeaways

- Cron Job
- Pass the Ticket
- Kerberoasting
- NFS No Root Squash
