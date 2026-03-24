---
TitleSEO: "TryHackMe — Granny (Easy Windows) | ZureFX"
TitlePost: "TryHackMe — Granny (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Granny. Subdomain Takeover and SSRF to achieve easy compromise on Windows."
Keywords: "reversing, tryhackme, hackthebox, windows, hard, active directory"
URL: "https://zurefx.github.io/writeups/htb-granny-167.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-167/"
Date: "2025-10-23"
Tags: "Reversing, TryHackMe, HackTheBox, Windows, Hard, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-167"
Permalink: "/writeups/htb-granny-167.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Granny** is rated **Easy** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.45.130.223`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.15.229.163 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.198.99
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.252.172/FUZZ
gobuster dir -u http://10.127.25.254/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.101.137.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.66.133.219 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **ACL Abuse**.

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.65.91.60 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.32.166.12/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
gobuster dir -u http://10.96.152.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.198.57/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `mimikatz`
- `chisel`
- `crackmapexec`
- `sharphound`
- `rpcclient`

### Key Takeaways

- Subdomain Takeover
- SSRF
- ACL Abuse
