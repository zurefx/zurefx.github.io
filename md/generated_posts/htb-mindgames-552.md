---
TitleSEO: "TryHackMe — Mindgames (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Mindgames (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Mindgames. Unconstrained Delegation and LXD Privilege Escalation to achieve medium compromise on Windows."
Keywords: "reversing, medium, insane, ctf"
URL: "https://zurefx.github.io/writeups/htb-mindgames-552.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-552/"
Date: "2024-06-06"
Tags: "Reversing, Medium, Insane, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-552"
Permalink: "/writeups/htb-mindgames-552.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.98.227.92`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.62.74
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.35.106/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.248.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.141.245
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **GPP Password**.

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.18.231/FUZZ
```

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.15.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.17.12.25 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.215.122/FUZZ
evil-winrm -i 10.42.127.3 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `wpscan`
- `enum4linux`
- `smbclient`
- `GetUserSPNs`

### Key Takeaways

- Unconstrained Delegation
- LXD Privilege Escalation
- SSRF
- GPP Password
