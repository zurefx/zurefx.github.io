---
TitleSEO: "VulnHub — Valentine (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Valentine (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Valentine. Writable PATH and Remote File Inclusion to achieve medium compromise on Windows."
Keywords: "hard, easy, tryhackme, forensics, active directory, linux, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-valentine-952.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-valentine-952/"
Date: "2025-02-28"
Tags: "Hard, Easy, TryHackMe, Forensics, Active Directory, Linux, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-valentine-952"
Permalink: "/writeups/htb-valentine-952.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Valentine** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.98.127.228`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.247.208/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.233.234 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.215.66/FUZZ
evil-winrm -i 10.53.147.232 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Remote File Inclusion**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.42.123 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.28.74.16 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1521,389,8888 10.39.174.3 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.78.99.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p80,5986,1433 10.73.159.47 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.27.157.95 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3268,8888,8443 10.77.43.187 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.153.144
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.226.23
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `netcat`
- `smbexec`
- `bloodhound`
- `msfvenom`
- `psexec`
- `GetNPUsers`
- `hashcat`

### Key Takeaways

- Writable PATH
- Remote File Inclusion
- XSS
- Unquoted Service Path
