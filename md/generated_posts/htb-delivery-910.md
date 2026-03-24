---
TitleSEO: "HackTheBox — Delivery (Easy FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Delivery (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Delivery. CORS Misconfiguration and NTLM Relay to achieve easy compromise on FreeBSD."
Keywords: "ctf, hard, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-delivery-910.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-delivery-910/"
Date: "2025-07-28"
Tags: "CTF, Hard, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-delivery-910"
Permalink: "/writeups/htb-delivery-910.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Delivery** is rated **Easy** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.92.125.174`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.61.112.168 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,1521,80 10.110.94.95 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.29.45.59 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **NTLM Relay**.

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.120.208.161 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.8.195
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.88.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.158.140/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.91.151.167 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.109.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.136.37 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `ldapsearch`
- `atexec`
- `pwncat`
- `nmap`
- `ligolo-ng`
- `sharphound`
- `gobuster`
- `crackmapexec`

### Key Takeaways

- CORS Misconfiguration
- NTLM Relay
