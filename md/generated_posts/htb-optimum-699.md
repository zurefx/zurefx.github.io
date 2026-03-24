---
TitleSEO: "HackTheBox — Optimum (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Optimum (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Optimum. SSRF and Sudo Misconfiguration to achieve easy compromise on OpenBSD."
Keywords: "easy, medium, tryhackme, linux, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-optimum-699.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-699/"
Date: "2024-04-29"
Tags: "Easy, Medium, TryHackMe, Linux, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-699"
Permalink: "/writeups/htb-optimum-699.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Optimum** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.113.209.3`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.68.101.94 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.197.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.49.40.38 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **SSRF**.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.89.172.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```powershell
nmap -sCV -p8080,389,993 10.89.139.123 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `nmap`
- `gobuster`
- `ligolo-ng`
- `john`
- `mimikatz`
- `ldapsearch`
- `nikto`
- `burpsuite`

### Key Takeaways

- SSRF
- Sudo Misconfiguration
- LXD Privilege Escalation
