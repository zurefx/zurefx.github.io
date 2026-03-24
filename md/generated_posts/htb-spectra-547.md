---
TitleSEO: "VulnHub — Spectra (Insane Linux) | ZureFX"
TitlePost: "VulnHub — Spectra (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Spectra. ACL Abuse and Subdomain Takeover to achieve insane compromise on Linux."
Keywords: "pwntilldawn, offsec, reversing, medium, web, windows, easy"
URL: "https://zurefx.github.io/writeups/htb-spectra-547.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-547/"
Date: "2024-10-12"
Tags: "PwnTillDawn, OffSec, Reversing, Medium, Web, Windows, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-547"
Permalink: "/writeups/htb-spectra-547.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Insane** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.101.222.167`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.123.86.57 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.118.83.76 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.172.197/FUZZ
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.158.208/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.60.16
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.16.185.165 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **ACL Abuse**.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.97.35.234/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p23,5986,23 10.98.59.37 -oN scan.txt
feroxbuster -h
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.88.150/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `chisel`
- `netcat`
- `john`
- `GetNPUsers`
- `kerbrute`
- `ffuf`

### Key Takeaways

- ACL Abuse
- Subdomain Takeover
- XSS
