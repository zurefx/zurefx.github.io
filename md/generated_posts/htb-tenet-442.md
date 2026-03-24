---
TitleSEO: "OffSec Proving Grounds — Tenet (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tenet (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tenet. Docker Escape and SSRF to achieve medium compromise on Linux."
Keywords: "hackthebox, medium, forensics, windows, web"
URL: "https://zurefx.github.io/writeups/htb-tenet-442.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-442/"
Date: "2026-02-01"
Tags: "HackTheBox, Medium, Forensics, Windows, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-442"
Permalink: "/writeups/htb-tenet-442.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.68.110.1`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.129.10.92 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.128.197.5 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.204.190
evil-winrm -i 10.39.153.61 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.146.97/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.107.197.225 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

Key finding: **Docker Escape**.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p22,3268,8443 10.69.9.95 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.139.108
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.131.17/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.87.244.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `rpcclient`
- `smbclient`
- `ffuf`
- `secretsdump`
- `gobuster`
- `chisel`

### Key Takeaways

- Docker Escape
- SSRF
