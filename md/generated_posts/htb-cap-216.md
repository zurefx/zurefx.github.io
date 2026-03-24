---
TitleSEO: "HackTheBox — Cap (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Cap (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Cap. DNS Rebinding and NTLM Relay to achieve medium compromise on OpenBSD."
Keywords: "insane, tryhackme, web, easy"
URL: "https://zurefx.github.io/writeups/htb-cap-216.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cap-216/"
Date: "2025-08-06"
Tags: "Insane, TryHackMe, Web, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-cap-216"
Permalink: "/writeups/htb-cap-216.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cap** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.63.216.108`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.98.241.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.34.55.63/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.57.235.168/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p21,53,445 10.59.69.203 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p443,3268,110 10.40.24.31 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.204.16/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.149.95/FUZZ
crackmapexec smb 10.102.24.169 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

Key finding: **Unquoted Service Path**.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.13.132.198/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.153.92/FUZZ
nmap -sCV -p8443,1433,445 10.17.228.106 -oN scan.txt
gobuster dir -u http://10.89.187.251/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.82.176/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```powershell
crackmapexec smb 10.129.7.143 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `lookupsid`
- `enum4linux`
- `socat`
- `netcat`

### Key Takeaways

- DNS Rebinding
- NTLM Relay
- Unquoted Service Path
- Sudo Misconfiguration
