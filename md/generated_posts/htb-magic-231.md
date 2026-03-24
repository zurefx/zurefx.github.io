---
TitleSEO: "HackTheBox — Magic (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Magic (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Magic. NTLM Relay and CSRF to achieve easy compromise on Linux."
Keywords: "easy, active directory, hard, medium, forensics, web, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-magic-231.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-magic-231/"
Date: "2024-01-05"
Tags: "Easy, Active Directory, Hard, Medium, Forensics, Web, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-magic-231"
Permalink: "/writeups/htb-magic-231.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Magic** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.69.150.191`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.154.192/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.108.140/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p1521,3268,443 10.35.223.208 -oN scan.txt
gobuster dir -u http://10.80.241.102/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.163.91 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p1433,636,25 10.75.179.30 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

Key finding: **NTLM Relay**.

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p1521,636,443 10.24.215.137 -oN scan.txt
gobuster dir -u http://10.92.20.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.25.38.145/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.93.211.25 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.114.77/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.78.14/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `burpsuite`
- `enum4linux`
- `ffuf`
- `chisel`
- `ldapsearch`

### Key Takeaways

- NTLM Relay
- CSRF
