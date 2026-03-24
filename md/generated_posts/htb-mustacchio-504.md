---
TitleSEO: "OffSec Proving Grounds — Mustacchio (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Mustacchio (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Mustacchio. Kerberoasting and Broken Access Control to achieve medium compromise on Linux."
Keywords: "windows, tryhackme, hard, reversing, easy, forensics, linux"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-504.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-504/"
Date: "2024-10-24"
Tags: "Windows, TryHackMe, Hard, Reversing, Easy, Forensics, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-504"
Permalink: "/writeups/htb-mustacchio-504.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.107.20.14`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.1.141/FUZZ
evil-winrm -i 10.117.113.19 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p8443,110,443 10.54.102.196 -oN scan.txt
crackmapexec smb 10.42.12.188 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.99.122.213 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **SeDebugPrivilege**.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.12.156 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.148.81 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.75.95
gobuster dir -u http://10.49.186.253/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.229.14/FUZZ
crackmapexec smb 10.101.224.221 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.77.224.53/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p993,80,5985 10.12.192.27 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `sharphound`
- `netcat`
- `socat`
- `GetUserSPNs`
- `lookupsid`
- `ffuf`
- `secretsdump`

### Key Takeaways

- Kerberoasting
- Broken Access Control
- SeDebugPrivilege
