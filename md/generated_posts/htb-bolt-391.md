---
TitleSEO: "HackTheBox — Bolt (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Bolt (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Bolt. Pass the Ticket and Sudo Misconfiguration to achieve insane compromise on FreeBSD."
Keywords: "reversing, web, forensics, easy, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-bolt-391.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bolt-391/"
Date: "2024-03-15"
Tags: "Reversing, Web, Forensics, Easy, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-bolt-391"
Permalink: "/writeups/htb-bolt-391.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bolt** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.45.241.107`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.91.34.41 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.29.150.210/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.42.64.89 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p21,1433,995 10.23.208.214 -oN scan.txt
gobuster dir -u http://10.51.123.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **SSRF**.

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.65.64.35 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.113.40.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.97.73.151 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.201.27/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.221.2
evil-winrm -i 10.128.157.230 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.216.226/FUZZ
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.212.131
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.252.37/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.190.218/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `evil-winrm`
- `chisel`
- `crackmapexec`
- `hashcat`

### Key Takeaways

- Pass the Ticket
- Sudo Misconfiguration
- SSRF
- Silver Ticket
