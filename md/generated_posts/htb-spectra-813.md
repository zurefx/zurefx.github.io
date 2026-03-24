---
TitleSEO: "HackTheBox — Spectra (Easy Windows) | ZureFX"
TitlePost: "HackTheBox — Spectra (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. AS-REP Roasting and CSRF to achieve easy compromise on Windows."
Keywords: "ctf, insane, hackthebox, pwntilldawn, web, offsec, active directory"
URL: "https://zurefx.github.io/writeups/htb-spectra-813.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-813/"
Date: "2026-02-17"
Tags: "CTF, Insane, HackTheBox, PwnTillDawn, Web, OffSec, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-813"
Permalink: "/writeups/htb-spectra-813.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Easy** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.62.251.184`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p3306,53,993 10.121.99.181 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.153.228/FUZZ
nmap -sCV -p8080,8080,135 10.44.63.23 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.145.134
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p445,587,22 10.114.192.197 -oN scan.txt
nmap -sCV -p636,22,8443 10.28.115.205 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.118.186.210 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **CSRF**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.128.237.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.79.226
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.97.223
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.100.22.10/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `john`
- `psexec`
- `feroxbuster`
- `ffuf`
- `socat`

### Key Takeaways

- AS-REP Roasting
- CSRF
