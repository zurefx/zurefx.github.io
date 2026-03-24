---
TitleSEO: "TryHackMe — Armageddon (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Armageddon (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Armageddon. Unquoted Service Path and Weak Service Permissions to achieve medium compromise on Windows."
Keywords: "ctf, offsec, easy, web, insane"
URL: "https://zurefx.github.io/writeups/htb-armageddon-381.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-381/"
Date: "2026-02-04"
Tags: "CTF, OffSec, Easy, Web, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-381"
Permalink: "/writeups/htb-armageddon-381.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.95.187.136`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.41.243.110 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.62.187.127 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.80.174
evil-winrm -i 10.32.47.165 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
evil-winrm -i 10.15.30.196 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Unquoted Service Path**.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
crackmapexec smb 10.43.177.178 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.94.38.39 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.65.26.238 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `psexec`
- `secretsdump`
- `wmiexec`
- `GetNPUsers`
- `kerbrute`
- `enum4linux`

### Key Takeaways

- Unquoted Service Path
- Weak Service Permissions
- Command Injection
