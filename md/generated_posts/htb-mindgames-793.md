---
TitleSEO: "PwnTillDawn — Mindgames (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Mindgames (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Mindgames. Subdomain Takeover and Resource-Based Constrained Delegation to achieve easy compromise on FreeBSD."
Keywords: "hackthebox, active directory, easy, web, insane"
URL: "https://zurefx.github.io/writeups/htb-mindgames-793.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-793/"
Date: "2024-06-24"
Tags: "HackTheBox, Active Directory, Easy, Web, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-793"
Permalink: "/writeups/htb-mindgames-793.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.40.143.1`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.87.123.55 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.242.89 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.72.4
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.20.74.94/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Subdomain Takeover**.

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.116.128.112 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.96.22.220/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.49.22.56/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
evil-winrm -i 10.76.203.222 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.108.39.247 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `netcat`
- `GetNPUsers`
- `smbclient`
- `msfvenom`

### Key Takeaways

- Subdomain Takeover
- Resource-Based Constrained Delegation
