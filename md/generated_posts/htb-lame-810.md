---
TitleSEO: "OffSec Proving Grounds — Lame (Insane Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Lame (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Lame. SSTI and XXE to achieve insane compromise on Linux."
Keywords: "ctf, easy, offsec, windows, reversing, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-lame-810.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-810/"
Date: "2024-09-07"
Tags: "CTF, Easy, OffSec, Windows, Reversing, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-810"
Permalink: "/writeups/htb-lame-810.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Lame** is rated **Insane** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.71.242.35`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.250.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Docker Escape**.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.218.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p139,8888,3306 10.74.228.161 -oN scan.txt
crackmapexec smb 10.121.1.97 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.58.233
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.87.70.3 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `enum4linux`
- `lookupsid`
- `wpscan`
- `secretsdump`
- `sharphound`

### Key Takeaways

- SSTI
- XXE
- Silver Ticket
- Docker Escape
