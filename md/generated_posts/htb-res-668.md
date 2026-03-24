---
TitleSEO: "PwnTillDawn — Res (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Res (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Res. SSRF and DNS Rebinding to achieve easy compromise on Windows."
Keywords: "hackthebox, web, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-res-668.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-res-668/"
Date: "2025-10-29"
Tags: "HackTheBox, Web, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-res-668"
Permalink: "/writeups/htb-res-668.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Res** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.68.172.93`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.223.226/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.9.142/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.143.198 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.22.126
gobuster dir -u http://10.59.11.156/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.14.228 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

Key finding: **SSRF**.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```powershell
gobuster dir -u http://10.41.61.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.102.177.113 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.187.58 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `impacket`
- `GetNPUsers`
- `ldapsearch`
- `ffuf`
- `hydra`
- `GetUserSPNs`

### Key Takeaways

- SSRF
- DNS Rebinding
- XXE
