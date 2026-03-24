---
TitleSEO: "HackTheBox — Bucket (Hard Linux) | ZureFX"
TitlePost: "HackTheBox — Bucket (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Bucket. ACL Abuse and Path Traversal to achieve hard compromise on Linux."
Keywords: "tryhackme, active directory, forensics, ctf"
URL: "https://zurefx.github.io/writeups/htb-bucket-688.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bucket-688/"
Date: "2025-07-03"
Tags: "TryHackMe, Active Directory, Forensics, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-bucket-688"
Permalink: "/writeups/htb-bucket-688.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bucket** is rated **Hard** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.20.88.164`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.1.167 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.16.254.73/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Path Traversal**.

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.39.190
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.88.1
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.104.119/FUZZ
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.18.205.24 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `nikto`
- `ffuf`
- `sharphound`
- `sqlmap`
- `hydra`
- `gobuster`
- `rpcclient`

### Key Takeaways

- ACL Abuse
- Path Traversal
- Insecure Deserialization
