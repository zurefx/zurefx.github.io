---
TitleSEO: "TryHackMe — Doctor (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Doctor (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Doctor. Kerberoasting and Insecure Deserialization to achieve insane compromise on FreeBSD."
Keywords: "web, ctf, medium, easy, linux"
URL: "https://zurefx.github.io/writeups/htb-doctor-435.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-435/"
Date: "2025-06-30"
Tags: "Web, CTF, Medium, Easy, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-435"
Permalink: "/writeups/htb-doctor-435.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Doctor** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.62.231.127`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.12.143 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.19.243.251/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.103.210.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.96.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.61.57/FUZZ
crackmapexec smb 10.124.201.249 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

Key finding: **Docker Escape**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.123.252.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```powershell
nmap -sCV -p143,21,3306 10.34.109.31 -oN scan.txt
crackmapexec smb 10.25.223.76 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.21.22
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.191.85
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.37.95
nmap -sCV -p80,27017,8443 10.125.182.82 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `nmap`
- `smbclient`
- `GetUserSPNs`
- `enum4linux`
- `sqlmap`
- `ffuf`
- `sharphound`
- `atexec`

### Key Takeaways

- Kerberoasting
- Insecure Deserialization
- Docker Escape
