---
TitleSEO: "TryHackMe — Academy (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Academy (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Academy. SeImpersonatePrivilege and DNS Rebinding to achieve medium compromise on Linux."
Keywords: "hard, tryhackme, active directory, reversing, windows, medium, offsec"
URL: "https://zurefx.github.io/writeups/htb-academy-190.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-academy-190/"
Date: "2024-04-03"
Tags: "Hard, TryHackMe, Active Directory, Reversing, Windows, Medium, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-academy-190"
Permalink: "/writeups/htb-academy-190.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Academy** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.33.63.211`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.180.135/FUZZ
evil-winrm -i 10.121.48.223 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.198.2
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.104.104/FUZZ
evil-winrm -i 10.14.214.6 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p443,139,53 10.85.177.146 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.30.100
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **SeImpersonatePrivilege**.

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3306,587,23 10.34.5.202 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.38.234.187 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.28.244.138 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.12.94.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `psexec`
- `wmiexec`
- `rubeus`
- `smbclient`
- `bloodhound`
- `hashcat`
- `netcat`
- `sharphound`

### Key Takeaways

- SeImpersonatePrivilege
- DNS Rebinding
- Command Injection
- Subdomain Takeover
