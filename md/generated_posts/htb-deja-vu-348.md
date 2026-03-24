---
TitleSEO: "VulnHub — Deja Vu (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Deja Vu (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Deja Vu. DNS Rebinding and CSRF to achieve hard compromise on FreeBSD."
Keywords: "hackthebox, easy, insane, web, forensics"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-348.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-348/"
Date: "2024-05-02"
Tags: "HackTheBox, Easy, Insane, Web, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-348"
Permalink: "/writeups/htb-deja-vu-348.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.107.232.238`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.220.182 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p993,8443,110 10.35.6.189 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.44.247/FUZZ
gobuster dir -u http://10.56.184.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.30.250
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **CSRF**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p21,135,110 10.123.147.159 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.31.237/FUZZ
nmap -sCV -p110,23,1521 10.17.214.92 -oN scan.txt
nmap -sCV -p80,110,3268 10.73.31.174 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.81.13.104 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.46.167.195 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8888,80,995 10.13.245.17 -oN scan.txt
gobuster dir -u http://10.115.133.39/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.25.111.107 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `msfvenom`
- `bloodhound`
- `ldapsearch`
- `gobuster`
- `smbclient`

### Key Takeaways

- DNS Rebinding
- CSRF
- NTLM Relay
- AS-REP Roasting
