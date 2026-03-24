---
TitleSEO: "PwnTillDawn — Vulnnet (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Vulnnet (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Vulnnet. Resource-Based Constrained Delegation and Writable PATH to achieve medium compromise on Linux."
Keywords: "forensics, insane, hackthebox, web"
URL: "https://zurefx.github.io/writeups/htb-vulnnet-734.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-vulnnet-734/"
Date: "2024-08-14"
Tags: "Forensics, Insane, HackTheBox, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-vulnnet-734"
Permalink: "/writeups/htb-vulnnet-734.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Vulnnet** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.87.212.195`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.251.55/FUZZ
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.24.30 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.92.190 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.78.5.71 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.76.61 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Resource-Based Constrained Delegation**.

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.81.30
gobuster dir -u http://10.59.120.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.54.124.178 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
crackmapexec smb 10.113.38.222 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.46.123/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `burpsuite`
- `ffuf`
- `gobuster`
- `hashcat`
- `metasploit`
- `atexec`
- `smbclient`

### Key Takeaways

- Resource-Based Constrained Delegation
- Writable PATH
