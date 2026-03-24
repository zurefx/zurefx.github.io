---
TitleSEO: "VulnHub — Brainstorm (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Brainstorm (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Brainstorm. SeImpersonatePrivilege and Weak Service Permissions to achieve hard compromise on Windows."
Keywords: "forensics, pwntilldawn, easy, linux, medium, ctf"
URL: "https://zurefx.github.io/writeups/htb-brainstorm-306.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-brainstorm-306/"
Date: "2024-12-12"
Tags: "Forensics, PwnTillDawn, Easy, Linux, Medium, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-brainstorm-306"
Permalink: "/writeups/htb-brainstorm-306.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Brainstorm** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.66.140.32`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.59.117 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.102.116.243 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.69.49.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.59.192/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.16.228.196/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.45.157
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Weak Service Permissions**.

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.70.79/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.9.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.131.117/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.80.81 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.21.130.214/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `wpscan`
- `socat`
- `crackmapexec`
- `atexec`
- `netcat`
- `kerbrute`
- `enum4linux`
- `nikto`

### Key Takeaways

- SeImpersonatePrivilege
- Weak Service Permissions
- Local File Inclusion
- Subdomain Takeover
