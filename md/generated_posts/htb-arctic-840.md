---
TitleSEO: "HackTheBox — Arctic (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Arctic (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Arctic. SQL Injection and Unquoted Service Path to achieve medium compromise on Linux."
Keywords: "forensics, reversing, hard, tryhackme, easy, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-arctic-840.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-840/"
Date: "2024-01-14"
Tags: "Forensics, Reversing, Hard, TryHackMe, Easy, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-840"
Permalink: "/writeups/htb-arctic-840.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Arctic** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.128.123.204`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.219.130
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **SQL Injection**.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.20.111/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.124.33.92 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.132.210
gobuster dir -u http://10.104.61.39/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.115.239.211/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p25,8080,25 10.39.65.228 -oN scan.txt
gobuster dir -u http://10.16.250.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `GetNPUsers`
- `smbexec`
- `psexec`
- `wmiexec`
- `feroxbuster`
- `wpscan`
- `burpsuite`
- `chisel`

### Key Takeaways

- SQL Injection
- Unquoted Service Path
