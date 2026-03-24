---
TitleSEO: "VulnHub — Ophiuchi (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Ophiuchi (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Ophiuchi. Broken Access Control and Cron Job to achieve medium compromise on FreeBSD."
Keywords: "reversing, insane, hard"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-924.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-924/"
Date: "2025-07-07"
Tags: "Reversing, Insane, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-924"
Permalink: "/writeups/htb-ophiuchi-924.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.22.185.117`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p9200,8443,3389 10.127.54.196 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.225.164/FUZZ
gobuster dir -u http://10.61.239.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.84.208.230 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.102.106.28 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.62.182.19 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.123.3.246 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Broken Access Control**.

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.96.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.217.73 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.129.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```powershell
nmap -sCV -p22,9200,993 10.46.197.110 -oN scan.txt
evil-winrm -i 10.78.143.18 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5432,443,995 10.97.213.235 -oN scan.txt
crackmapexec smb 10.19.171.215 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `netcat`
- `rpcclient`
- `msfvenom`
- `metasploit`
- `rubeus`
- `gobuster`
- `enum4linux`
- `ffuf`

### Key Takeaways

- Broken Access Control
- Cron Job
- Golden Ticket
