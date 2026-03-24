---
TitleSEO: "PwnTillDawn — Nibbles (Medium Windows) | ZureFX"
TitlePost: "PwnTillDawn — Nibbles (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Nibbles. GPP Password and XSS to achieve medium compromise on Windows."
Keywords: "offsec, easy, hackthebox, insane"
URL: "https://zurefx.github.io/writeups/htb-nibbles-215.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nibbles-215/"
Date: "2024-06-14"
Tags: "OffSec, Easy, HackTheBox, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-nibbles-215"
Permalink: "/writeups/htb-nibbles-215.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nibbles** is rated **Medium** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.61.241.90`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.146.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.33.178.162 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.104.57.188 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.103.30.37 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.214.162/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.63.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **XSS**.

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
nmap -sCV -p8443,8080,3306 10.54.67.128 -oN scan.txt
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.94.248.125 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.91.220.162 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.137.187/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `chisel`
- `dcomexec`
- `wpscan`
- `GetUserSPNs`
- `smbexec`
- `kerbrute`
- `hydra`

### Key Takeaways

- GPP Password
- XSS
- Remote Code Execution
