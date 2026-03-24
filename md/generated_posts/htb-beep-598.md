---
TitleSEO: "VulnHub — Beep (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Beep (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Beep. SeImpersonatePrivilege and GPP Password to achieve hard compromise on Windows."
Keywords: "pwntilldawn, ctf, reversing, linux"
URL: "https://zurefx.github.io/writeups/htb-beep-598.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-598/"
Date: "2024-05-16"
Tags: "PwnTillDawn, CTF, Reversing, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-598"
Permalink: "/writeups/htb-beep-598.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Beep** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.108.251.149`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.212.63
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.193.84
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.32.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.20.58.88 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **GPP Password**.

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.251.240 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
gobuster dir -u http://10.87.123.214/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.93.194.69 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `chisel`
- `wpscan`
- `metasploit`
- `ligolo-ng`
- `mimikatz`
- `msfvenom`
- `wmiexec`

### Key Takeaways

- SeImpersonatePrivilege
- GPP Password
