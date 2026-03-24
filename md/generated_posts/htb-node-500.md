---
TitleSEO: "HackTheBox — Node (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Node (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Node. Insecure Deserialization and SUID Binary to achieve medium compromise on OpenBSD."
Keywords: "forensics, active directory, ctf, hard"
URL: "https://zurefx.github.io/writeups/htb-node-500.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-500/"
Date: "2024-07-01"
Tags: "Forensics, Active Directory, CTF, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-node-500"
Permalink: "/writeups/htb-node-500.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Node** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.123.124.56`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.75.129
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.84.136.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1433,23,3306 10.112.201.139 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.58.87
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.81.206.115 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.45.36.25 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Insecure Deserialization**.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.49.54.209/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.61.117.218 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.38.214.228 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.238.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.167.237 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `wpscan`
- `psexec`
- `crackmapexec`
- `ligolo-ng`
- `sharphound`

### Key Takeaways

- Insecure Deserialization
- SUID Binary
