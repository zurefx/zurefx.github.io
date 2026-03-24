---
TitleSEO: "HackTheBox — Traverxec (Hard FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Traverxec (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Traverxec. Remote Code Execution and Subdomain Takeover to achieve hard compromise on FreeBSD."
Keywords: "reversing, ctf, hackthebox, easy, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-traverxec-428.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-428/"
Date: "2024-02-20"
Tags: "Reversing, CTF, HackTheBox, Easy, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-428"
Permalink: "/writeups/htb-traverxec-428.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Hard** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.122.171.41`.

### Objectives

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.64.160
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.11.113.28 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.103.248.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.8.54 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Key finding: **IDOR**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.192.186/FUZZ
evil-winrm -i 10.66.158.153 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.116.199.113 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `crackmapexec`
- `psexec`
- `GetUserSPNs`
- `smbclient`
- `evil-winrm`
- `enum4linux`
- `ldapsearch`
- `hydra`

### Key Takeaways

- Remote Code Execution
- Subdomain Takeover
- AlwaysInstallElevated
- IDOR
