---
TitleSEO: "HackTheBox — Spectra (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Spectra (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. XXE and DCSync to achieve insane compromise on Linux."
Keywords: "forensics, reversing, pwntilldawn, windows"
URL: "https://zurefx.github.io/writeups/htb-spectra-594.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-594/"
Date: "2024-01-23"
Tags: "Forensics, Reversing, PwnTillDawn, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-594"
Permalink: "/writeups/htb-spectra-594.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.64.248.42`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5985,135,464 10.88.235.158 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.12.209.152 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.54.195.34/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.115.104.236/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p443,1521,27017 10.60.160.62 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.245.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **DCSync**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.157.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.177.98
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.44.159.69/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p27017,443,587 10.76.122.225 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.35.182
evil-winrm -i 10.74.59.114 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `metasploit`
- `msfvenom`
- `crackmapexec`
- `kerbrute`

### Key Takeaways

- XXE
- DCSync
