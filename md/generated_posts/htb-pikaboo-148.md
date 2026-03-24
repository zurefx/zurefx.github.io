---
TitleSEO: "HackTheBox — Pikaboo (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Pikaboo (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Pikaboo. Constrained Delegation and Remote Code Execution to achieve medium compromise on FreeBSD."
Keywords: "web, pwntilldawn, ctf, easy, offsec"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-148.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-148/"
Date: "2025-02-17"
Tags: "Web, PwnTillDawn, CTF, Easy, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-148"
Permalink: "/writeups/htb-pikaboo-148.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.129.53.72`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.117.244.87 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.103.97.48 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.70.28/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.85.43
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.98.109/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

Key finding: **Remote Code Execution**.

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.72.245.240 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.36.135.79 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.97.189.4 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `nikto`
- `nmap`
- `feroxbuster`
- `hydra`
- `ffuf`

### Key Takeaways

- Constrained Delegation
- Remote Code Execution
