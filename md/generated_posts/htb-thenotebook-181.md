---
TitleSEO: "OffSec Proving Grounds — TheNotebook (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — TheNotebook (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds TheNotebook. ACL Abuse and Unconstrained Delegation to achieve easy compromise on Linux."
Keywords: "pwntilldawn, hackthebox, windows, web, insane, ctf"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-181.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-181/"
Date: "2025-05-20"
Tags: "PwnTillDawn, HackTheBox, Windows, Web, Insane, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-181"
Permalink: "/writeups/htb-thenotebook-181.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.64.25.104`.

### Objectives

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.18.157.242/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.132.176/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
evil-winrm -i 10.123.145.106 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.110.204.165 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p8080,3306,23 10.112.138.90 -oN scan.txt
feroxbuster -h
nmap -sCV -p23,9200,5986 10.85.236.6 -oN scan.txt
nmap -sCV -p3268,80,5432 10.82.48.205 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **ACL Abuse**.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.63.159.179/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.105.152.253 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.144.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.124.120.183 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.222.104/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.189.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `rpcclient`
- `socat`
- `john`
- `sqlmap`
- `nikto`
- `bloodhound`
- `wpscan`

### Key Takeaways

- ACL Abuse
- Unconstrained Delegation
- Cron Job
- XSS
