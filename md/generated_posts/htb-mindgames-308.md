---
TitleSEO: "HackTheBox — Mindgames (Easy Windows) | ZureFX"
TitlePost: "HackTheBox — Mindgames (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Mindgames. Remote File Inclusion and Docker Escape to achieve easy compromise on Windows."
Keywords: "insane, active directory, web, medium"
URL: "https://zurefx.github.io/writeups/htb-mindgames-308.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-308/"
Date: "2024-03-03"
Tags: "Insane, Active Directory, Web, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-308"
Permalink: "/writeups/htb-mindgames-308.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Easy** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.36.150.108`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p464,464,135 10.62.29.216 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.238.11/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p27017,636,9200 10.89.76.90 -oN scan.txt
nmap -sCV -p464,5986,21 10.128.236.64 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.150.64
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.121.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.35.166.241/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.47.238.194 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Cron Job**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.18.166/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```powershell
nmap -sCV -p143,9200,3306 10.57.171.187 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.122.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.108.58.75 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `smbexec`
- `lookupsid`
- `feroxbuster`
- `mimikatz`
- `hydra`
- `sqlmap`

### Key Takeaways

- Remote File Inclusion
- Docker Escape
- IDOR
- Cron Job
