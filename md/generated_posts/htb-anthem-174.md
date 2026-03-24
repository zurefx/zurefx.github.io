---
TitleSEO: "HackTheBox — Anthem (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Anthem (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Anthem. SSRF and IDOR to achieve medium compromise on OpenBSD."
Keywords: "easy, ctf, linux, windows, pwntilldawn, active directory"
URL: "https://zurefx.github.io/writeups/htb-anthem-174.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-174/"
Date: "2025-07-03"
Tags: "Easy, CTF, Linux, Windows, PwnTillDawn, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-174"
Permalink: "/writeups/htb-anthem-174.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Anthem** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.72.182.3`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.46.54.209 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.161.68/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.51.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.78.46
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Unquoted Service Path**.

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```powershell
gobuster dir -u http://10.55.106.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5986,443,27017 10.82.94.243 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `crackmapexec`
- `sharphound`
- `hashcat`
- `nikto`
- `burpsuite`
- `GetNPUsers`
- `GetUserSPNs`

### Key Takeaways

- SSRF
- IDOR
- Unquoted Service Path
- XSS
