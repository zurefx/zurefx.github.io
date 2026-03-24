---
TitleSEO: "PwnTillDawn — FriendZone (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — FriendZone (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn FriendZone. Remote Code Execution and Path Traversal to achieve easy compromise on Windows."
Keywords: "active directory, hard, reversing, pwntilldawn, windows"
URL: "https://zurefx.github.io/writeups/htb-friendzone-487.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-friendzone-487/"
Date: "2025-04-03"
Tags: "Active Directory, Hard, Reversing, PwnTillDawn, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-friendzone-487"
Permalink: "/writeups/htb-friendzone-487.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **FriendZone** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.43.207.189`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.219.74/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.172.169/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.99.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.138.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Path Traversal**.

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.43.226.71 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p135,1521,21 10.67.207.101 -oN scan.txt
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `chisel`
- `msfvenom`
- `evil-winrm`
- `GetNPUsers`
- `smbexec`

### Key Takeaways

- Remote Code Execution
- Path Traversal
- Unquoted Service Path
