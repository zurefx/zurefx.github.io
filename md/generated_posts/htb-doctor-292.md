---
TitleSEO: "VulnHub — Doctor (Hard Linux) | ZureFX"
TitlePost: "VulnHub — Doctor (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Doctor. XSS and SQL Injection to achieve hard compromise on Linux."
Keywords: "forensics, insane, web, hackthebox, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-doctor-292.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-292/"
Date: "2024-08-13"
Tags: "Forensics, Insane, Web, HackTheBox, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-292"
Permalink: "/writeups/htb-doctor-292.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Hard** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.75.30.44`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p9200,587,1433 10.10.125.127 -oN scan.txt
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p53,389,995 10.24.30.175 -oN scan.txt
evil-winrm -i 10.16.192.103 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.193.169
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.210.136
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **SQL Injection**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.31.187.86 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.249.197/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.103.226.17 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.137.239
evil-winrm -i 10.117.242.207 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.8.153/FUZZ
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.126.2.50 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.33.222.204 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p23,587,5432 10.28.20.104 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `netcat`
- `ligolo-ng`
- `wmiexec`
- `hashcat`
- `evil-winrm`
- `GetUserSPNs`
- `impacket`
- `sharphound`

### Key Takeaways

- XSS
- SQL Injection
