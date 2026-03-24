---
TitleSEO: "PwnTillDawn — Intelligence (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Intelligence (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Intelligence. NTLM Relay and Insecure Deserialization to achieve medium compromise on OpenBSD."
Keywords: "active directory, hackthebox, pwntilldawn, forensics, insane, easy"
URL: "https://zurefx.github.io/writeups/htb-intelligence-240.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-intelligence-240/"
Date: "2024-02-20"
Tags: "Active Directory, HackTheBox, PwnTillDawn, Forensics, Insane, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-intelligence-240"
Permalink: "/writeups/htb-intelligence-240.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Intelligence** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.126.188.190`.

### Objectives

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.163.192/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.68.5/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.229.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.45.217.5 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.48.61.161 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **NTLM Relay**.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.119.195.127 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,53,5985 10.117.126.190 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.146.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.57.236.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,587,23 10.107.70.37 -oN scan.txt
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
nmap -sCV -p389,389,5432 10.117.64.111 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.201.72/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `kerbrute`
- `dcomexec`
- `impacket`
- `chisel`
- `john`

### Key Takeaways

- NTLM Relay
- Insecure Deserialization
