---
TitleSEO: "OffSec Proving Grounds — Armageddon (Hard Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Armageddon (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Armageddon. IDOR and Constrained Delegation to achieve hard compromise on Linux."
Keywords: "linux, insane, easy, ctf, offsec"
URL: "https://zurefx.github.io/writeups/htb-armageddon-325.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-325/"
Date: "2024-12-30"
Tags: "Linux, Insane, Easy, CTF, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-325"
Permalink: "/writeups/htb-armageddon-325.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Hard** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.115.25.209`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
crackmapexec smb 10.41.77.50 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.247.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5985,143,139 10.115.130.128 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.76.202.107 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Resource-Based Constrained Delegation**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.62.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p464,1433,8443 10.28.231.25 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.158.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.133.45/FUZZ
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.193.178/FUZZ
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `nikto`
- `feroxbuster`
- `netcat`
- `gobuster`

### Key Takeaways

- IDOR
- Constrained Delegation
- Resource-Based Constrained Delegation
