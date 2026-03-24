---
TitleSEO: "OffSec Proving Grounds — Overpass (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Overpass (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Overpass. Unquoted Service Path and Weak Service Permissions to achieve insane compromise on FreeBSD."
Keywords: "linux, ctf, insane, reversing, tryhackme, offsec"
URL: "https://zurefx.github.io/writeups/htb-overpass-681.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-681/"
Date: "2025-12-11"
Tags: "Linux, CTF, Insane, Reversing, TryHackMe, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-681"
Permalink: "/writeups/htb-overpass-681.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Overpass** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.86.196.183`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.207.105 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.74.140/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.213.210/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.238.16
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.172.227/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Unquoted Service Path**.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.135.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.72.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.108.23.167 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.17.64/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.191.228
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.75.44/FUZZ
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p143,1433,995 10.129.38.146 -oN scan.txt
evil-winrm -i 10.92.17.131 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `smbclient`
- `psexec`
- `sharphound`
- `atexec`
- `nikto`

### Key Takeaways

- Unquoted Service Path
- Weak Service Permissions
