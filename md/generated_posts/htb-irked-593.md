---
TitleSEO: "HackTheBox — Irked (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Irked (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Irked. SeDebugPrivilege and AlwaysInstallElevated to achieve insane compromise on Linux."
Keywords: "windows, forensics, pwntilldawn, hard, insane, easy"
URL: "https://zurefx.github.io/writeups/htb-irked-593.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-593/"
Date: "2025-10-15"
Tags: "Windows, Forensics, PwnTillDawn, Hard, Insane, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-593"
Permalink: "/writeups/htb-irked-593.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.120.224.89`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.38.52.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.88.189.3 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **SeDebugPrivilege**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.38.42.206/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p8888,443,636 10.16.37.32 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.199.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `john`
- `GetUserSPNs`
- `pwncat`
- `mimikatz`
- `secretsdump`
- `wmiexec`
- `rpcclient`

### Key Takeaways

- SeDebugPrivilege
- AlwaysInstallElevated
