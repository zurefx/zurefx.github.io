---
TitleSEO: "PwnTillDawn — Pit (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Pit (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Pit. NTLM Relay and Broken Access Control to achieve insane compromise on Windows."
Keywords: "pwntilldawn, ctf, easy, forensics"
URL: "https://zurefx.github.io/writeups/htb-pit-211.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-211/"
Date: "2024-09-08"
Tags: "PwnTillDawn, CTF, Easy, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-211"
Permalink: "/writeups/htb-pit-211.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pit** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.103.194.127`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.129.29.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.30.19.234 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.74.110.27 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.64.29 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

Key finding: **NTLM Relay**.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.238.90 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.16.5.254/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.127.50.169 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p25,8888,53 10.51.69.134 -oN scan.txt
evil-winrm -i 10.38.48.126 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p22,143,23 10.25.123.144 -oN scan.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.23.58.189 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.124.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.184.67
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `gobuster`
- `nmap`
- `sharphound`
- `pwncat`
- `wpscan`
- `msfvenom`

### Key Takeaways

- NTLM Relay
- Broken Access Control
