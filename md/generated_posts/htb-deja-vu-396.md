---
TitleSEO: "TryHackMe — Deja Vu (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Deja Vu (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Deja Vu. LXD Privilege Escalation and SSRF to achieve medium compromise on Linux."
Keywords: "insane, hackthebox, reversing, forensics"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-396.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-396/"
Date: "2024-12-20"
Tags: "Insane, HackTheBox, Reversing, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-396"
Permalink: "/writeups/htb-deja-vu-396.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.55.53.52`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p53,3268,8888 10.114.237.241 -oN scan.txt
evil-winrm -i 10.119.151.63 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.96.1.248 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p995,110,993 10.45.166.158 -oN scan.txt
crackmapexec smb 10.12.53.81 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.16.55.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.177.216
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **LXD Privilege Escalation**.

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.134.87
gobuster dir -u http://10.45.48.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.118.22.140 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.116.99.80 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.253.118/FUZZ
nmap -sCV -p8888,3306,8888 10.69.193.137 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.41.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.41.20.91 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.108.173.96/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.103.25.167 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `lookupsid`
- `smbclient`
- `burpsuite`
- `dcomexec`
- `pwncat`
- `chisel`
- `gobuster`
- `evil-winrm`

### Key Takeaways

- LXD Privilege Escalation
- SSRF
- GPP Password
