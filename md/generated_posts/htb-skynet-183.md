---
TitleSEO: "TryHackMe — Skynet (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Skynet (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Skynet. Writable PATH and Unconstrained Delegation to achieve insane compromise on Linux."
Keywords: "linux, forensics, hard, windows"
URL: "https://zurefx.github.io/writeups/htb-skynet-183.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-183/"
Date: "2024-09-04"
Tags: "Linux, Forensics, Hard, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-183"
Permalink: "/writeups/htb-skynet-183.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.84.184.34`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.105.200.92/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.117.178.199 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p443,1433,135 10.55.116.249 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Writable PATH**.

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.47.36.32 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.126.171.227 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.124.106.120/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p587,139,5985 10.45.194.94 -oN scan.txt
evil-winrm -i 10.94.216.152 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.211.180
gobuster dir -u http://10.82.19.179/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.2.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.82.53
```

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `rpcclient`
- `netcat`
- `chisel`
- `feroxbuster`
- `wmiexec`
- `impacket`
- `john`

### Key Takeaways

- Writable PATH
- Unconstrained Delegation
- IDOR
