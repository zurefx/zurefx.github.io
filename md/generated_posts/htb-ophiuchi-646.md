---
TitleSEO: "HackTheBox — Ophiuchi (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Ophiuchi (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ophiuchi. Weak Service Permissions and SeImpersonatePrivilege to achieve medium compromise on Linux."
Keywords: "tryhackme, ctf, hard"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-646.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-646/"
Date: "2024-01-22"
Tags: "TryHackMe, CTF, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-646"
Permalink: "/writeups/htb-ophiuchi-646.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.16.116.6`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p1433,636,993 10.41.232.28 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.221.35 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p464,53,464 10.36.79.165 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.176.141/FUZZ
gobuster dir -u http://10.19.209.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.91.152.189 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.107.207
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Key finding: **SUID Binary**.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.73.117.97 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.85.183.218 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.92.135 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.88.71.193/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.116.84.217 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,8080,21 10.93.240.243 -oN scan.txt
gobuster dir -u http://10.88.176.201/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `evil-winrm`
- `burpsuite`
- `rubeus`
- `nmap`
- `smbexec`
- `smbclient`
- `sqlmap`

### Key Takeaways

- Weak Service Permissions
- SeImpersonatePrivilege
- SUID Binary
