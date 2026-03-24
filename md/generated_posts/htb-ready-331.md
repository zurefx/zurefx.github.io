---
TitleSEO: "HackTheBox — Ready (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Ready (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ready. SeDebugPrivilege and XXE to achieve easy compromise on Linux."
Keywords: "linux, hackthebox, ctf, pwntilldawn, web, medium, easy"
URL: "https://zurefx.github.io/writeups/htb-ready-331.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-331/"
Date: "2025-01-23"
Tags: "Linux, HackTheBox, CTF, PwnTillDawn, Web, Medium, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-331"
Permalink: "/writeups/htb-ready-331.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ready** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.26.66.30`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p8080,1433,5432 10.17.206.77 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.140.170/FUZZ
crackmapexec smb 10.18.250.118 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.111.204.52 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p636,443,21 10.107.254.35 -oN scan.txt
crackmapexec smb 10.70.54.204 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.90.17.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.89.30.102 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.170.178/FUZZ
crackmapexec smb 10.60.162.196 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **SeDebugPrivilege**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.67.224 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p1433,1521,8080 10.45.162.47 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p22,135,9200 10.104.55.219 -oN scan.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.147.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.58.118.138 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `bloodhound`
- `smbexec`
- `kerbrute`
- `sharphound`
- `pwncat`
- `smbclient`
- `feroxbuster`
- `netcat`

### Key Takeaways

- SeDebugPrivilege
- XXE
