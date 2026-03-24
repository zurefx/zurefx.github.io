---
TitleSEO: "HackTheBox — Tentacle (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Tentacle (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tentacle. DNS Rebinding and SSRF to achieve insane compromise on Linux."
Keywords: "hackthebox, web, linux"
URL: "https://zurefx.github.io/writeups/htb-tentacle-349.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tentacle-349/"
Date: "2025-03-13"
Tags: "HackTheBox, Web, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-tentacle-349"
Permalink: "/writeups/htb-tentacle-349.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tentacle** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.34.125.60`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.117.21.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.16.30.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.198.107/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

Key finding: **SSRF**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.162.125/FUZZ
nmap -sCV -p8888,5985,27017 10.85.182.126 -oN scan.txt
evil-winrm -i 10.63.246.46 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.88.136.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.98.28.102 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.28.141.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.87.75.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.75.28/FUZZ
nmap -sCV -p587,53,5432 10.111.38.240 -oN scan.txt
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `impacket`
- `john`
- `smbexec`
- `hashcat`

### Key Takeaways

- DNS Rebinding
- SSRF
- NTLM Relay
- Kerberoasting
