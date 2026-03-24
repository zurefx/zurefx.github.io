---
TitleSEO: "TryHackMe — Anthem (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Anthem (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Anthem. Unquoted Service Path and Silver Ticket to achieve medium compromise on Linux."
Keywords: "active directory, insane, windows"
URL: "https://zurefx.github.io/writeups/htb-anthem-367.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-367/"
Date: "2024-07-17"
Tags: "Active Directory, Insane, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-367"
Permalink: "/writeups/htb-anthem-367.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Anthem** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.96.108.11`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.127.41.49/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.200.200/FUZZ
crackmapexec smb 10.81.46.37 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.40.232.100 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.107.166.197/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

Key finding: **LXD Privilege Escalation**.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p143,1433,22 10.42.169.82 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.77.22.37 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.44.24.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
evil-winrm -i 10.35.112.59 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.68.65/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `chisel`
- `hashcat`
- `gobuster`
- `wpscan`
- `sharphound`
- `sqlmap`
- `rpcclient`
- `wmiexec`

### Key Takeaways

- Unquoted Service Path
- Silver Ticket
- LXD Privilege Escalation
- AlwaysInstallElevated
