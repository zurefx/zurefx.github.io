---
TitleSEO: "PwnTillDawn — Buffer (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Buffer (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Buffer. Silver Ticket and Pass the Ticket to achieve insane compromise on Windows."
Keywords: "linux, hackthebox, offsec"
URL: "https://zurefx.github.io/writeups/htb-buffer-499.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buffer-499/"
Date: "2024-03-02"
Tags: "Linux, HackTheBox, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-buffer-499"
Permalink: "/writeups/htb-buffer-499.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buffer** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.30.97.106`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.66.230/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.110.189.198/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.113.236.151 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
feroxbuster -h
evil-winrm -i 10.80.207.213 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Pass the Ticket**.

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.223.246
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.60.103 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
gobuster dir -u http://10.112.99.113/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.223.197/FUZZ
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.48.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `crackmapexec`
- `GetUserSPNs`
- `dcomexec`
- `burpsuite`
- `smbclient`
- `chisel`
- `hashcat`
- `pwncat`

### Key Takeaways

- Silver Ticket
- Pass the Ticket
