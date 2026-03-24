---
TitleSEO: "PwnTillDawn — Granny (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Granny (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Granny. Local File Inclusion and Command Injection to achieve medium compromise on Linux."
Keywords: "tryhackme, forensics, offsec, ctf, hard, insane, medium"
URL: "https://zurefx.github.io/writeups/htb-granny-813.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-813/"
Date: "2025-08-04"
Tags: "TryHackMe, Forensics, OffSec, CTF, Hard, Insane, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-813"
Permalink: "/writeups/htb-granny-813.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Granny** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.39.119.152`.

### Objectives

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
gobuster dir -u http://10.24.154.142/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.96.100/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.149.60 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Local File Inclusion**.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.101.76
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.54.1/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.86.103/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.179.42 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.42.238.47 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `feroxbuster`
- `bloodhound`
- `mimikatz`
- `hydra`
- `wpscan`
- `sharphound`
- `netcat`

### Key Takeaways

- Local File Inclusion
- Command Injection
