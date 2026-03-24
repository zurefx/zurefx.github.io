---
TitleSEO: "PwnTillDawn — Tenet (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Tenet (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Tenet. SUID Binary and NFS No Root Squash to achieve insane compromise on Linux."
Keywords: "insane, medium, windows, forensics, hard"
URL: "https://zurefx.github.io/writeups/htb-tenet-449.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-449/"
Date: "2025-07-27"
Tags: "Insane, Medium, Windows, Forensics, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-449"
Permalink: "/writeups/htb-tenet-449.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.78.226.160`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.69.196.119/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.13.105
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.57.30
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.102.144.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **SUID Binary**.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.18.119.156 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

### Exploitation

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.172.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.101.40.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `metasploit`
- `ligolo-ng`
- `feroxbuster`
- `netcat`
- `socat`
- `atexec`

### Key Takeaways

- SUID Binary
- NFS No Root Squash
- XXE
- IDOR
