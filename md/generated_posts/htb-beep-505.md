---
TitleSEO: "OffSec Proving Grounds — Beep (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Beep (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Beep. SUID Binary and SQL Injection to achieve easy compromise on Linux."
Keywords: "web, linux, ctf, insane, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-beep-505.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-505/"
Date: "2024-06-22"
Tags: "Web, Linux, CTF, Insane, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-505"
Permalink: "/writeups/htb-beep-505.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Beep** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.79.151.103`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.180.152/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.100.27
nmap -sCV -p5432,8080,587 10.11.128.165 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.45.133.221 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

Key finding: **SUID Binary**.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p8443,23,80 10.20.44.57 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.48.42.123 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.73.168.124 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.7.99 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.23.6/FUZZ
nmap -sCV -p1521,464,8443 10.51.96.254 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `wpscan`
- `nmap`
- `rubeus`
- `netcat`
- `sharphound`
- `smbexec`
- `GetNPUsers`
- `pwncat`

### Key Takeaways

- SUID Binary
- SQL Injection
