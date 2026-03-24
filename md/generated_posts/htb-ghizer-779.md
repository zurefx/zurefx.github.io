---
TitleSEO: "HackTheBox — Ghizer (Hard Linux) | ZureFX"
TitlePost: "HackTheBox — Ghizer (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ghizer. SeDebugPrivilege and CORS Misconfiguration to achieve hard compromise on Linux."
Keywords: "medium, insane, active directory, easy, ctf, tryhackme, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-ghizer-779.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ghizer-779/"
Date: "2024-08-14"
Tags: "Medium, Insane, Active Directory, Easy, CTF, TryHackMe, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-ghizer-779"
Permalink: "/writeups/htb-ghizer-779.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ghizer** is rated **Hard** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.114.230.203`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.51.171.120/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.122.96.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.62.124/FUZZ
crackmapexec smb 10.26.81.200 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p143,25,389 10.122.80.28 -oN scan.txt
feroxbuster -h
nmap -sCV -p3306,8080,53 10.63.64.115 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **CORS Misconfiguration**.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.40.37
evil-winrm -i 10.102.126.154 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.73.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.54.55.138 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `ldapsearch`
- `evil-winrm`
- `GetUserSPNs`
- `sharphound`

### Key Takeaways

- SeDebugPrivilege
- CORS Misconfiguration
- Constrained Delegation
