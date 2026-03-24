---
TitleSEO: "TryHackMe — Horizontall (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Horizontall (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Horizontall. Command Injection and Remote Code Execution to achieve medium compromise on Linux."
Keywords: "medium, insane, ctf"
URL: "https://zurefx.github.io/writeups/htb-horizontall-209.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-horizontall-209/"
Date: "2024-02-11"
Tags: "Medium, Insane, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-horizontall-209"
Permalink: "/writeups/htb-horizontall-209.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Horizontall** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.52.143.202`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.78.140
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
nmap -sCV -p1433,22,21 10.59.218.136 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.49.192.6 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Command Injection**.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.78.141
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.31.70.251 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `smbclient`
- `dcomexec`
- `gobuster`
- `kerbrute`
- `crackmapexec`
- `rubeus`
- `secretsdump`
- `netcat`

### Key Takeaways

- Command Injection
- Remote Code Execution
- Constrained Delegation
- Unquoted Service Path
