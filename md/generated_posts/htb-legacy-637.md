---
TitleSEO: "OffSec Proving Grounds — Legacy (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Legacy (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Legacy. Unconstrained Delegation and Open Redirect to achieve medium compromise on OpenBSD."
Keywords: "linux, tryhackme, forensics, active directory, pwntilldawn, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-legacy-637.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-637/"
Date: "2024-12-21"
Tags: "Linux, TryHackMe, Forensics, Active Directory, PwnTillDawn, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-637"
Permalink: "/writeups/htb-legacy-637.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Legacy** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.56.10.44`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.45.216.212 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.22.49/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.24.90.151 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Kerberoasting**.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.236.85/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.231.129/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.251.50/FUZZ
crackmapexec smb 10.77.144.122 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
crackmapexec smb 10.128.188.158 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.39.50.175 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `dcomexec`
- `ligolo-ng`
- `hashcat`
- `evil-winrm`
- `kerbrute`
- `nikto`
- `GetUserSPNs`
- `john`

### Key Takeaways

- Unconstrained Delegation
- Open Redirect
- Kerberoasting
