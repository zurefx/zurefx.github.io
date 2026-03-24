---
TitleSEO: "TryHackMe — Blunder (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Blunder (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Blunder. LXD Privilege Escalation and SSRF to achieve insane compromise on Linux."
Keywords: "easy, forensics, pwntilldawn, reversing"
URL: "https://zurefx.github.io/writeups/htb-blunder-529.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-529/"
Date: "2024-03-25"
Tags: "Easy, Forensics, PwnTillDawn, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-529"
Permalink: "/writeups/htb-blunder-529.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Blunder** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.72.79.134`.

### Objectives

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.240.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.115.249
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.4.225
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.58.169
nmap -sCV -p143,995,22 10.94.18.192 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

Key finding: **SSRF**.

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.164.6
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.21.69/FUZZ
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.69.165.191 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `ligolo-ng`
- `impacket`
- `psexec`
- `msfvenom`
- `hashcat`
- `hydra`
- `sqlmap`

### Key Takeaways

- LXD Privilege Escalation
- SSRF
- Kerberoasting
