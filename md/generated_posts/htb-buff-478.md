---
TitleSEO: "HackTheBox — Buff (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Buff (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Buff. Sudo Misconfiguration and NTLM Relay to achieve hard compromise on OpenBSD."
Keywords: "windows, linux, web, easy, ctf"
URL: "https://zurefx.github.io/writeups/htb-buff-478.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buff-478/"
Date: "2024-07-14"
Tags: "Windows, Linux, Web, Easy, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-buff-478"
Permalink: "/writeups/htb-buff-478.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buff** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.51.69.190`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.161.186
gobuster dir -u http://10.111.108.227/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p8443,135,80 10.48.146.91 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.50.198.144
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p53,22,445 10.63.96.19 -oN scan.txt
gobuster dir -u http://10.120.152.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

Key finding: **Sudo Misconfiguration**.

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.83.158.254 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.31.249.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p5986,25,443 10.126.38.180 -oN scan.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.210.26
```

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `wmiexec`
- `chisel`
- `psexec`
- `socat`
- `sqlmap`
- `rubeus`

### Key Takeaways

- Sudo Misconfiguration
- NTLM Relay
