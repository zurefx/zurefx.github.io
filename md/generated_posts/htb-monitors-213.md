---
TitleSEO: "OffSec Proving Grounds — Monitors (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Monitors (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Monitors. Insecure Deserialization and Unconstrained Delegation to achieve medium compromise on Linux."
Keywords: "reversing, pwntilldawn, tryhackme, linux, hard"
URL: "https://zurefx.github.io/writeups/htb-monitors-213.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-213/"
Date: "2024-03-10"
Tags: "Reversing, PwnTillDawn, TryHackMe, Linux, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-213"
Permalink: "/writeups/htb-monitors-213.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Monitors** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.108.253.53`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.106.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5985,464,27017 10.107.68.110 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.115.76.80 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.52.127/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Insecure Deserialization**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p22,993,8080 10.51.21.45 -oN scan.txt
gobuster dir -u http://10.78.43.127/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.196.112 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p445,389,110 10.95.12.60 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.88.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.98.4.120 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p9200,8888,587 10.26.62.24 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `smbexec`
- `ldapsearch`
- `nmap`
- `GetUserSPNs`
- `evil-winrm`
- `burpsuite`
- `sharphound`

### Key Takeaways

- Insecure Deserialization
- Unconstrained Delegation
