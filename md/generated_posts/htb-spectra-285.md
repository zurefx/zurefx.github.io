---
TitleSEO: "PwnTillDawn — Spectra (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Spectra (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Spectra. LXD Privilege Escalation and Path Traversal to achieve easy compromise on Linux."
Keywords: "reversing, ctf, linux, medium, easy, forensics"
URL: "https://zurefx.github.io/writeups/htb-spectra-285.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-285/"
Date: "2024-05-18"
Tags: "Reversing, CTF, Linux, Medium, Easy, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-285"
Permalink: "/writeups/htb-spectra-285.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.35.235.5`.

### Objectives

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.113.95 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.62.118.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.109.237.250 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.178.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.40.213.51/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **LXD Privilege Escalation**.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.29.254/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.29.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,445,53 10.89.123.235 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `msfvenom`
- `ffuf`
- `ldapsearch`
- `burpsuite`
- `ligolo-ng`
- `smbexec`
- `evil-winrm`
- `GetNPUsers`

### Key Takeaways

- LXD Privilege Escalation
- Path Traversal
- NTLM Relay
