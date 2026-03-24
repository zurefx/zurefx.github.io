---
TitleSEO: "PwnTillDawn — Cronos (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Cronos (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Cronos. Command Injection and ACL Abuse to achieve medium compromise on Linux."
Keywords: "offsec, medium, pwntilldawn, hackthebox, tryhackme, active directory, reversing"
URL: "https://zurefx.github.io/writeups/htb-cronos-531.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cronos-531/"
Date: "2024-10-11"
Tags: "OffSec, Medium, PwnTillDawn, HackTheBox, TryHackMe, Active Directory, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-cronos-531"
Permalink: "/writeups/htb-cronos-531.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cronos** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.100.2.62`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.103.173.227 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.112.111
evil-winrm -i 10.31.88.200 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.40.235/FUZZ
nmap -sCV -p9200,139,3389 10.40.146.79 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.40.35.178 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

Key finding: **ACL Abuse**.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.18.87
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.243.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.30.232.168 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `netcat`
- `sqlmap`
- `pwncat`
- `john`
- `lookupsid`

### Key Takeaways

- Command Injection
- ACL Abuse
