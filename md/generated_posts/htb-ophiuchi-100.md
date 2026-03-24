---
TitleSEO: "HackTheBox — Ophiuchi (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Ophiuchi (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ophiuchi. NTLM Relay and XSS to achieve insane compromise on Windows."
Keywords: "medium, hard, forensics, web, active directory, insane"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-100.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-100/"
Date: "2024-04-04"
Tags: "Medium, Hard, Forensics, Web, Active Directory, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-100"
Permalink: "/writeups/htb-ophiuchi-100.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.118.54.214`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.94.100.44 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.39.70
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.252.119/FUZZ
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.210.90/FUZZ
evil-winrm -i 10.58.6.223 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.240.40/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **XSS**.

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.31.139.65 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.102.147
evil-winrm -i 10.18.72.193 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
gobuster dir -u http://10.60.130.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.115.86.70 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.126.13/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `crackmapexec`
- `ffuf`
- `dcomexec`
- `sharphound`
- `kerbrute`

### Key Takeaways

- NTLM Relay
- XSS
- Pass the Hash
