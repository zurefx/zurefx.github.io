---
TitleSEO: "HackTheBox — Ghizer (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Ghizer (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ghizer. Insecure Deserialization and SeDebugPrivilege to achieve easy compromise on Linux."
Keywords: "windows, hackthebox, pwntilldawn, easy, web, linux, reversing"
URL: "https://zurefx.github.io/writeups/htb-ghizer-960.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ghizer-960/"
Date: "2025-05-09"
Tags: "Windows, HackTheBox, PwnTillDawn, Easy, Web, Linux, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-ghizer-960"
Permalink: "/writeups/htb-ghizer-960.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ghizer** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.75.143.149`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.10.211/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
nmap -sCV -p110,143,389 10.28.160.141 -oN scan.txt
evil-winrm -i 10.64.229.32 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,587,23 10.13.120.211 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.82.23.241 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.50.32.72 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

Key finding: **DLL Hijacking**.

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.63.222.37 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.220.122/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.107.171.213 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.168.218
crackmapexec smb 10.60.88.147 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.132.122/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.93.62/FUZZ
gobuster dir -u http://10.117.158.127/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `netcat`
- `secretsdump`
- `wmiexec`
- `kerbrute`
- `crackmapexec`
- `wpscan`
- `gobuster`
- `GetUserSPNs`

### Key Takeaways

- Insecure Deserialization
- SeDebugPrivilege
- DLL Hijacking
- DNS Rebinding
