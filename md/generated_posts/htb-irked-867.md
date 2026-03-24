---
TitleSEO: "HackTheBox — Irked (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Irked (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Irked. SSTI and NFS No Root Squash to achieve insane compromise on OpenBSD."
Keywords: "forensics, linux, easy, web, windows"
URL: "https://zurefx.github.io/writeups/htb-irked-867.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-867/"
Date: "2024-03-20"
Tags: "Forensics, Linux, Easy, Web, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-867"
Permalink: "/writeups/htb-irked-867.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Irked** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.31.194.143`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.147.217/FUZZ
evil-winrm -i 10.109.163.116 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p636,587,8443 10.14.72.218 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.15.182.116 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Key finding: **NFS No Root Squash**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p8888,1433,9200 10.101.243.108 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.171.113
nmap -sCV -p27017,8443,8443 10.91.22.213 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.118.235.226/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.26.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `wmiexec`
- `GetNPUsers`
- `evil-winrm`
- `impacket`

### Key Takeaways

- SSTI
- NFS No Root Squash
