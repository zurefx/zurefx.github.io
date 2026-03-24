---
TitleSEO: "OffSec Proving Grounds — Irked (Insane Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Irked (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Irked. Writable PATH and ACL Abuse to achieve insane compromise on Linux."
Keywords: "web, linux, tryhackme, forensics, windows, reversing, medium"
URL: "https://zurefx.github.io/writeups/htb-irked-486.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-486/"
Date: "2024-06-29"
Tags: "Web, Linux, TryHackMe, Forensics, Windows, Reversing, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-486"
Permalink: "/writeups/htb-irked-486.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Insane** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.122.175.219`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.89.66.83 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.64.73.175 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.247.219/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **ACL Abuse**.

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.86.84.92 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.154.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p27017,3268,445 10.48.203.248 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.242.72/FUZZ
nmap -sCV -p25,3268,993 10.127.103.218 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `kerbrute`
- `impacket`
- `pwncat`
- `john`

### Key Takeaways

- Writable PATH
- ACL Abuse
- Silver Ticket
