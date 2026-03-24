---
TitleSEO: "HackTheBox — FriendZone (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — FriendZone (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox FriendZone. Kerberoasting and SSTI to achieve insane compromise on OpenBSD."
Keywords: "linux, reversing, medium, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-friendzone-846.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-friendzone-846/"
Date: "2025-12-12"
Tags: "Linux, Reversing, Medium, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-friendzone-846"
Permalink: "/writeups/htb-friendzone-846.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **FriendZone** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.70.110.238`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p587,3268,23 10.69.54.239 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.185.98
gobuster dir -u http://10.77.53.235/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.73.15.214 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Kerberoasting**.

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.173.117/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.122.18.92/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.38.26/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `msfvenom`
- `psexec`
- `burpsuite`
- `rubeus`
- `pwncat`
- `smbexec`
- `socat`

### Key Takeaways

- Kerberoasting
- SSTI
- Golden Ticket
