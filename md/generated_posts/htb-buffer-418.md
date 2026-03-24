---
TitleSEO: "TryHackMe — Buffer (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Buffer (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Buffer. Subdomain Takeover and Constrained Delegation to achieve insane compromise on Linux."
Keywords: "medium, reversing, web, tryhackme, ctf"
URL: "https://zurefx.github.io/writeups/htb-buffer-418.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buffer-418/"
Date: "2025-07-14"
Tags: "Medium, Reversing, Web, TryHackMe, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-buffer-418"
Permalink: "/writeups/htb-buffer-418.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buffer** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.18.18.116`.

### Objectives

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.157.88
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.11.74.230 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.122.182.24 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Subdomain Takeover**.

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p23,22,135 10.61.204.37 -oN scan.txt
crackmapexec smb 10.83.175.36 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.75.4.64 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1521,21,587 10.17.33.8 -oN scan.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.32.253 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `feroxbuster`
- `ffuf`
- `secretsdump`
- `GetUserSPNs`
- `lookupsid`

### Key Takeaways

- Subdomain Takeover
- Constrained Delegation
