---
TitleSEO: "HackTheBox — Omni (Easy FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Omni (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Omni. XSS and Remote Code Execution to achieve easy compromise on FreeBSD."
Keywords: "pwntilldawn, web, windows, easy, reversing, active directory, forensics"
URL: "https://zurefx.github.io/writeups/htb-omni-460.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-460/"
Date: "2025-05-14"
Tags: "PwnTillDawn, Web, Windows, Easy, Reversing, Active Directory, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-460"
Permalink: "/writeups/htb-omni-460.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Omni** is rated **Easy** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.28.115.216`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.161.48/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.156.219
crackmapexec smb 10.46.235.51 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.210.210
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.24.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.89.175/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.110.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Silver Ticket**.

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.49.170 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.85.7.153 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.53.96/FUZZ
crackmapexec smb 10.37.101.15 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.57.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `crackmapexec`
- `atexec`
- `rpcclient`
- `evil-winrm`
- `mimikatz`

### Key Takeaways

- XSS
- Remote Code Execution
- Silver Ticket
