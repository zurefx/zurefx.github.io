---
TitleSEO: "TryHackMe — Convertmyfund (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Convertmyfund (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Convertmyfund. Kerberoasting and GPP Password to achieve medium compromise on Linux."
Keywords: "active directory, reversing, hackthebox, offsec, ctf, windows, forensics"
URL: "https://zurefx.github.io/writeups/htb-convertmyfund-208.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-convertmyfund-208/"
Date: "2024-05-03"
Tags: "Active Directory, Reversing, HackTheBox, OffSec, CTF, Windows, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-convertmyfund-208"
Permalink: "/writeups/htb-convertmyfund-208.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Convertmyfund** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.118.141.195`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.24.126.168 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.64.20.209/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

Key finding: **GPP Password**.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.26.144
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.65.192.82/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.21.81.174 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.60.206.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.20.251/FUZZ
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `ffuf`
- `sqlmap`
- `wmiexec`
- `john`
- `GetUserSPNs`
- `burpsuite`
- `nmap`

### Key Takeaways

- Kerberoasting
- GPP Password
