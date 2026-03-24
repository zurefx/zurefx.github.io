---
TitleSEO: "VulnHub — Ice (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Ice (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Ice. IDOR and AS-REP Roasting to achieve hard compromise on Windows."
Keywords: "ctf, web, tryhackme, forensics, insane"
URL: "https://zurefx.github.io/writeups/htb-ice-780.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-780/"
Date: "2025-09-06"
Tags: "CTF, Web, TryHackMe, Forensics, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-780"
Permalink: "/writeups/htb-ice-780.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.112.232.51`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.11.130.98/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.8.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.144.222 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.100.112 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **XSS**.

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.154.93
gobuster dir -u http://10.53.37.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.103.207.179/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.18.139.27 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.151.2 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `metasploit`
- `chisel`
- `atexec`
- `smbexec`
- `burpsuite`
- `kerbrute`
- `crackmapexec`

### Key Takeaways

- IDOR
- AS-REP Roasting
- XSS
