---
TitleSEO: "OffSec Proving Grounds — Ghizer (Easy FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Ghizer (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Ghizer. XXE and Pass the Ticket to achieve easy compromise on FreeBSD."
Keywords: "windows, active directory, hackthebox, ctf, linux, web, reversing"
URL: "https://zurefx.github.io/writeups/htb-ghizer-656.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ghizer-656/"
Date: "2024-04-02"
Tags: "Windows, Active Directory, HackTheBox, CTF, Linux, Web, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-ghizer-656"
Permalink: "/writeups/htb-ghizer-656.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ghizer** is rated **Easy** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.101.208.74`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.40.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.40.216.136/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.116.168/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.34.143 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.97.33.94 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.117.181.35 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Pass the Ticket**.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.110.112.60 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.6.129/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.194.228 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.228.98/FUZZ
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `msfvenom`
- `smbclient`
- `netcat`
- `sharphound`

### Key Takeaways

- XXE
- Pass the Ticket
- Remote Code Execution
- Subdomain Takeover
