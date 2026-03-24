---
TitleSEO: "PwnTillDawn — Traverxec (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Traverxec (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Traverxec. Constrained Delegation and Unconstrained Delegation to achieve easy compromise on Windows."
Keywords: "tryhackme, offsec, medium, insane"
URL: "https://zurefx.github.io/writeups/htb-traverxec-888.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-888/"
Date: "2026-02-06"
Tags: "TryHackMe, OffSec, Medium, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-888"
Permalink: "/writeups/htb-traverxec-888.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.77.106.204`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.110.239
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.148.69 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.124.211.184 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Key finding: **Unconstrained Delegation**.

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.102.62/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.81.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.229.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.39.111
gobuster dir -u http://10.75.124.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `sharphound`
- `rpcclient`
- `socat`
- `smbclient`
- `hashcat`

### Key Takeaways

- Constrained Delegation
- Unconstrained Delegation
