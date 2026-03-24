---
TitleSEO: "PwnTillDawn — Traverxec (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Traverxec (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Traverxec. Path Traversal and NTLM Relay to achieve medium compromise on Linux."
Keywords: "forensics, offsec, linux, insane, easy, hard"
URL: "https://zurefx.github.io/writeups/htb-traverxec-411.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-411/"
Date: "2025-07-21"
Tags: "Forensics, OffSec, Linux, Insane, Easy, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-411"
Permalink: "/writeups/htb-traverxec-411.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.82.253.190`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.61.186
crackmapexec smb 10.73.251.79 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.113.47/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.216.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.114.139/FUZZ
crackmapexec smb 10.56.93.97 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.145.128 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Local File Inclusion**.

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.211.211 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.115.116.176 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.252.103
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `ldapsearch`
- `nmap`
- `feroxbuster`
- `netcat`
- `ffuf`
- `rubeus`

### Key Takeaways

- Path Traversal
- NTLM Relay
- Local File Inclusion
- Golden Ticket
