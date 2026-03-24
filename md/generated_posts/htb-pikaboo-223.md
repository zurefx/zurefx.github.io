---
TitleSEO: "VulnHub — Pikaboo (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Pikaboo (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Pikaboo. AlwaysInstallElevated and IDOR to achieve insane compromise on Windows."
Keywords: "hard, easy, linux, medium, forensics"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-223.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-223/"
Date: "2025-06-28"
Tags: "Hard, Easy, Linux, Medium, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-223"
Permalink: "/writeups/htb-pikaboo-223.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.18.9.163`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.108.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.67.29.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.34.198
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.151.133
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **IDOR**.

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.23.29.230 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.63.56.213 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.112.86.128/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p445,110,3268 10.31.32.45 -oN scan.txt
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `gobuster`
- `hydra`
- `sqlmap`
- `wmiexec`
- `bloodhound`
- `mimikatz`

### Key Takeaways

- AlwaysInstallElevated
- IDOR
