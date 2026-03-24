---
TitleSEO: "VulnHub — Crossfit (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Crossfit (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Crossfit. Subdomain Takeover and Remote File Inclusion to achieve easy compromise on OpenBSD."
Keywords: "active directory, easy, linux, reversing, windows"
URL: "https://zurefx.github.io/writeups/htb-crossfit-197.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-197/"
Date: "2025-07-18"
Tags: "Active Directory, Easy, Linux, Reversing, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-197"
Permalink: "/writeups/htb-crossfit-197.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.94.197.77`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.152.177
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.40.81.31 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.189.41/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Remote File Inclusion**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.35.216/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.54.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.41.107 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.30.245.103 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `nmap`
- `smbexec`
- `sharphound`
- `lookupsid`
- `netcat`

### Key Takeaways

- Subdomain Takeover
- Remote File Inclusion
