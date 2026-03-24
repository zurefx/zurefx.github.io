---
TitleSEO: "TryHackMe — Crossfit (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Crossfit (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Crossfit. NFS No Root Squash and CSRF to achieve easy compromise on Linux."
Keywords: "tryhackme, hard, reversing, forensics, insane"
URL: "https://zurefx.github.io/writeups/htb-crossfit-933.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-933/"
Date: "2024-10-14"
Tags: "TryHackMe, Hard, Reversing, Forensics, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-933"
Permalink: "/writeups/htb-crossfit-933.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.36.24.144`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
evil-winrm -i 10.113.169.211 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.108.77.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.42.144.11 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.70.238.201 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

Key finding: **NFS No Root Squash**.

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p389,1433,8080 10.98.113.169 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.52.224.180/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.41.116.208 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `evil-winrm`
- `nikto`
- `mimikatz`
- `hashcat`

### Key Takeaways

- NFS No Root Squash
- CSRF
- Sudo Misconfiguration
- NTLM Relay
