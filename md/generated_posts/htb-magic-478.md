---
TitleSEO: "PwnTillDawn — Magic (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Magic (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Magic. Unquoted Service Path and SSRF to achieve insane compromise on Windows."
Keywords: "ctf, reversing, forensics, hackthebox, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-magic-478.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-magic-478/"
Date: "2025-08-01"
Tags: "CTF, Reversing, Forensics, HackTheBox, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-magic-478"
Permalink: "/writeups/htb-magic-478.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Magic** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.50.208.120`.

### Objectives

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.92.81.64 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.210.151
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.64.67/FUZZ
crackmapexec smb 10.99.69.152 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3306,3389,25 10.46.214.222 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Unquoted Service Path**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.69.212.116 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p53,143,27017 10.31.21.144 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
gobuster dir -u http://10.26.4.99/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.47.94
evil-winrm -i 10.105.138.67 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `rpcclient`
- `sharphound`
- `psexec`
- `pwncat`
- `metasploit`
- `enum4linux`

### Key Takeaways

- Unquoted Service Path
- SSRF
