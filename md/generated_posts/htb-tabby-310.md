---
TitleSEO: "VulnHub — Tabby (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Tabby (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Tabby. SUID Binary and Sudo Misconfiguration to achieve insane compromise on Windows."
Keywords: "linux, tryhackme, active directory, easy, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-tabby-310.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-310/"
Date: "2024-10-31"
Tags: "Linux, TryHackMe, Active Directory, Easy, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-310"
Permalink: "/writeups/htb-tabby-310.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tabby** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.85.55.145`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.233.21
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.11.118.163 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.98.35.203 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.124.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Sudo Misconfiguration**.

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
nmap -sCV -p445,1433,53 10.85.121.160 -oN scan.txt
nmap -sCV -p5985,389,53 10.53.30.134 -oN scan.txt
evil-winrm -i 10.80.5.241 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```powershell
gobuster dir -u http://10.118.211.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.39.202.226 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.103.63.62 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `socat`
- `ligolo-ng`
- `enum4linux`
- `hydra`
- `rubeus`
- `john`

### Key Takeaways

- SUID Binary
- Sudo Misconfiguration
