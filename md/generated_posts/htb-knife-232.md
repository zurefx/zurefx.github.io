---
TitleSEO: "VulnHub — Knife (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Knife (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Knife. NFS No Root Squash and XXE to achieve insane compromise on Windows."
Keywords: "windows, forensics, reversing, easy, web, hard"
URL: "https://zurefx.github.io/writeups/htb-knife-232.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-knife-232/"
Date: "2024-11-06"
Tags: "Windows, Forensics, Reversing, Easy, Web, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-knife-232"
Permalink: "/writeups/htb-knife-232.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Knife** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.84.123.80`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.71.122
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.1.163
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.115.78.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **NFS No Root Squash**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.79.121.93 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8080,8888,139 10.14.46.190 -oN scan.txt
gobuster dir -u http://10.92.198.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.84.87.211 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p53,27017,9200 10.56.213.175 -oN scan.txt
gobuster dir -u http://10.122.45.41/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.102.224.109 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.43.220.16/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `GetUserSPNs`
- `msfvenom`
- `secretsdump`
- `gobuster`

### Key Takeaways

- NFS No Root Squash
- XXE
- Path Traversal
