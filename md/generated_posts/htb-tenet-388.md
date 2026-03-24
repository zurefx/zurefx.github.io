---
TitleSEO: "TryHackMe — Tenet (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Tenet (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tenet. SeImpersonatePrivilege and DLL Hijacking to achieve insane compromise on Linux."
Keywords: "insane, pwntilldawn, ctf, active directory, tryhackme, hackthebox, forensics"
URL: "https://zurefx.github.io/writeups/htb-tenet-388.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-388/"
Date: "2026-01-19"
Tags: "Insane, PwnTillDawn, CTF, Active Directory, TryHackMe, HackTheBox, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-388"
Permalink: "/writeups/htb-tenet-388.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.25.23.75`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
feroxbuster -h
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.96.176.132 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.142.223
gobuster dir -u http://10.53.238.161/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **CSRF**.

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.80.18.33/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1521,1433,8443 10.105.107.190 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p3268,22,135 10.12.27.43 -oN scan.txt
crackmapexec smb 10.18.135.20 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.229.244
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.31.189 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.226.75/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.185.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `evil-winrm`
- `smbexec`
- `msfvenom`
- `psexec`
- `smbclient`
- `feroxbuster`

### Key Takeaways

- SeImpersonatePrivilege
- DLL Hijacking
- AlwaysInstallElevated
- CSRF
