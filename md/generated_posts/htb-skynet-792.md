---
TitleSEO: "HackTheBox — Skynet (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Skynet (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Skynet. Sudo Misconfiguration and Command Injection to achieve medium compromise on FreeBSD."
Keywords: "hard, easy, pwntilldawn, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-skynet-792.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-792/"
Date: "2024-01-20"
Tags: "Hard, Easy, PwnTillDawn, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-792"
Permalink: "/writeups/htb-skynet-792.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.69.238.159`.

### Objectives

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.37.22
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.51.139.13 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.71.190.147 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.67.209
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.99.182.31 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Command Injection**.

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p995,993,587 10.73.159.214 -oN scan.txt
evil-winrm -i 10.120.196.225 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```powershell
gobuster dir -u http://10.102.164.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.91.95.181 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```powershell
gobuster dir -u http://10.29.248.229/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `ligolo-ng`
- `lookupsid`
- `sharphound`
- `ldapsearch`
- `feroxbuster`
- `ffuf`
- `hydra`
- `wpscan`

### Key Takeaways

- Sudo Misconfiguration
- Command Injection
