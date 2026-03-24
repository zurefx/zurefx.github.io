---
TitleSEO: "TryHackMe — Worker (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Worker (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Worker. Unquoted Service Path and SQL Injection to achieve insane compromise on Windows."
Keywords: "easy, reversing, linux"
URL: "https://zurefx.github.io/writeups/htb-worker-750.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-worker-750/"
Date: "2024-05-20"
Tags: "Easy, Reversing, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-worker-750"
Permalink: "/writeups/htb-worker-750.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Worker** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.50.241.106`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.197.86 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p5986,3268,53 10.53.46.168 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.209.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.103.55.188 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

Key finding: **AlwaysInstallElevated**.

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.109.244.78 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.18.184.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.243.93/FUZZ
feroxbuster -h
crackmapexec smb 10.36.5.149 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
evil-winrm -i 10.21.97.7 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.35.103
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.200.86/FUZZ
crackmapexec smb 10.57.178.8 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `GetUserSPNs`
- `impacket`
- `lookupsid`
- `atexec`

### Key Takeaways

- Unquoted Service Path
- SQL Injection
- Sudo Misconfiguration
- AlwaysInstallElevated
