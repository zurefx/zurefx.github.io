---
TitleSEO: "TryHackMe — Breadcrumbs (Hard Linux) | ZureFX"
TitlePost: "TryHackMe — Breadcrumbs (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Breadcrumbs. XSS and Cron Job to achieve hard compromise on Linux."
Keywords: "tryhackme, insane, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-915.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-915/"
Date: "2024-04-02"
Tags: "TryHackMe, Insane, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-915"
Permalink: "/writeups/htb-breadcrumbs-915.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Hard** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.87.43.250`.

### Objectives

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.106.75.84 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.58.137
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.139.226
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.56.146.228 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p993,143,53 10.79.135.27 -oN scan.txt
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Cron Job**.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.48.197.199 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.56.191.84 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8080,139,8888 10.83.234.128 -oN scan.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.61.81.167 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `pwncat`
- `smbclient`
- `dcomexec`
- `impacket`
- `lookupsid`
- `ffuf`
- `rubeus`

### Key Takeaways

- XSS
- Cron Job
- Remote Code Execution
- Subdomain Takeover
