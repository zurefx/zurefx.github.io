---
TitleSEO: "TryHackMe — Legacy (Hard Windows) | ZureFX"
TitlePost: "TryHackMe — Legacy (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Legacy. DCSync and GPP Password to achieve hard compromise on Windows."
Keywords: "ctf, offsec, tryhackme, insane, forensics"
URL: "https://zurefx.github.io/writeups/htb-legacy-645.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-645/"
Date: "2024-02-04"
Tags: "CTF, OffSec, TryHackMe, Insane, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-645"
Permalink: "/writeups/htb-legacy-645.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Legacy** is rated **Hard** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.124.100.146`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.18.86.98 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.68.42.162 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.82.10.7 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.61.31.57/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.31.227.253 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5432,587,27017 10.26.93.40 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.116.126.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.126.38.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.251.60
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **DCSync**.

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.57.125.52 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.131.7/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.157.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.186.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.191.190
crackmapexec smb 10.69.202.107 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `dcomexec`
- `lookupsid`
- `smbclient`
- `metasploit`
- `enum4linux`
- `impacket`

### Key Takeaways

- DCSync
- GPP Password
