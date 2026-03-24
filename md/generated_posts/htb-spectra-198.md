---
TitleSEO: "HackTheBox — Spectra (Easy Windows) | ZureFX"
TitlePost: "HackTheBox — Spectra (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. IDOR and Pass the Hash to achieve easy compromise on Windows."
Keywords: "hackthebox, easy, linux, reversing, active directory, hard"
URL: "https://zurefx.github.io/writeups/htb-spectra-198.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-198/"
Date: "2026-01-19"
Tags: "HackTheBox, Easy, Linux, Reversing, Active Directory, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-198"
Permalink: "/writeups/htb-spectra-198.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Easy** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.118.172.82`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p143,22,443 10.76.23.251 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.183.154/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.87.69/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.188.15 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.232.4 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.13.103.31 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.113.100.190/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

Key finding: **Command Injection**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.126.239/FUZZ
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
gobuster dir -u http://10.31.132.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.47.202.171/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p27017,5985,53 10.125.53.97 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.186.40/FUZZ
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.129.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `metasploit`
- `pwncat`
- `crackmapexec`
- `psexec`
- `smbexec`
- `hydra`
- `wmiexec`

### Key Takeaways

- IDOR
- Pass the Hash
- LAPS Abuse
- Command Injection
