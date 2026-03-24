---
TitleSEO: "TryHackMe — Startup (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Startup (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Startup. DNS Rebinding and Sudo Misconfiguration to achieve medium compromise on Linux."
Keywords: "easy, tryhackme, forensics"
URL: "https://zurefx.github.io/writeups/htb-startup-652.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-652/"
Date: "2025-05-20"
Tags: "Easy, TryHackMe, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-652"
Permalink: "/writeups/htb-startup-652.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Startup** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.73.192.219`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.45.214.235 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.100.44.43/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.214.99 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.50.148.73
crackmapexec smb 10.38.225.109 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8080,3389,22 10.120.232.2 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.101.8.221 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Sudo Misconfiguration**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
nmap -sCV -p21,5432,1433 10.57.30.85 -oN scan.txt
gobuster dir -u http://10.106.176.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.74.81
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.17.209.180 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `feroxbuster`
- `smbexec`
- `ldapsearch`
- `pwncat`
- `ligolo-ng`

### Key Takeaways

- DNS Rebinding
- Sudo Misconfiguration
- Unquoted Service Path
