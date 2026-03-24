---
TitleSEO: "OffSec Proving Grounds — Remote (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Remote (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Remote. Pass the Hash and Path Traversal to achieve easy compromise on Windows."
Keywords: "medium, hard, windows, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-remote-805.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-remote-805/"
Date: "2025-11-29"
Tags: "Medium, Hard, Windows, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-remote-805"
Permalink: "/writeups/htb-remote-805.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Remote** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.25.239.144`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.79.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.76.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.121.56.58 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.191.232/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p3389,110,8080 10.116.87.142 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.77.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.158.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Path Traversal**.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.218.117/FUZZ
```

### Exploitation

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.6.90
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.98.229
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `sharphound`
- `john`
- `smbexec`
- `socat`

### Key Takeaways

- Pass the Hash
- Path Traversal
