---
TitleSEO: "HackTheBox — Ice (Hard Linux) | ZureFX"
TitlePost: "HackTheBox — Ice (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ice. Sudo Misconfiguration and DLL Hijacking to achieve hard compromise on Linux."
Keywords: "active directory, easy, reversing, insane, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-ice-245.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-245/"
Date: "2025-04-19"
Tags: "Active Directory, Easy, Reversing, Insane, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-245"
Permalink: "/writeups/htb-ice-245.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Hard** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.118.193.235`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.64.108.252 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.96.27.193 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.110.31.188/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.31.28
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.38.250
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

Key finding: **Sudo Misconfiguration**.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.238.149/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.74.155.137/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.42.146.214 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.53.94.177 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5432,993,464 10.66.90.26 -oN scan.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.66.131.79 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p3389,995,636 10.12.242.11 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `rubeus`
- `kerbrute`
- `crackmapexec`
- `hydra`
- `nmap`
- `john`
- `sqlmap`
- `GetUserSPNs`

### Key Takeaways

- Sudo Misconfiguration
- DLL Hijacking
