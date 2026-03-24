---
TitleSEO: "PwnTillDawn — Ophiuchi (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Ophiuchi (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Ophiuchi. Sudo Misconfiguration and SSRF to achieve insane compromise on Linux."
Keywords: "web, hackthebox, hard, ctf"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-281.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-281/"
Date: "2024-01-04"
Tags: "Web, HackTheBox, Hard, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-281"
Permalink: "/writeups/htb-ophiuchi-281.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.53.91.92`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.111.106.40 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p27017,8443,143 10.94.151.50 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.62.56.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.51.238.157 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.96.110.94 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p80,443,389 10.60.26.168 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **SSRF**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p27017,53,3268 10.75.172.29 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.234.141
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.149.217
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.237.97/FUZZ
evil-winrm -i 10.70.154.76 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8888,5985,9200 10.120.242.160 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `sharphound`
- `metasploit`
- `crackmapexec`
- `feroxbuster`
- `ffuf`

### Key Takeaways

- Sudo Misconfiguration
- SSRF
