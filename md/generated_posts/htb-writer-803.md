---
TitleSEO: "OffSec Proving Grounds — Writer (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Writer (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Writer. Path Traversal and SeImpersonatePrivilege to achieve hard compromise on Windows."
Keywords: "easy, reversing, offsec"
URL: "https://zurefx.github.io/writeups/htb-writer-803.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-803/"
Date: "2025-10-05"
Tags: "Easy, Reversing, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-803"
Permalink: "/writeups/htb-writer-803.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Writer** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.57.177.126`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p5432,8080,445 10.33.191.168 -oN scan.txt
evil-winrm -i 10.97.113.44 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.43.241.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.136.14 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.128.242/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Key finding: **SeImpersonatePrivilege**.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.115.1.68 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.17.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p53,3268,21 10.126.112.17 -oN scan.txt
evil-winrm -i 10.76.18.184 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p135,3389,21 10.30.28.7 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.235.129/FUZZ
gobuster dir -u http://10.52.134.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `wmiexec`
- `wpscan`
- `chisel`
- `netcat`
- `pwncat`
- `ffuf`
- `nmap`
- `msfvenom`

### Key Takeaways

- Path Traversal
- SeImpersonatePrivilege
