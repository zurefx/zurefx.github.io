---
TitleSEO: "HackTheBox — Worker (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Worker (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Worker. Open Redirect and ACL Abuse to achieve easy compromise on OpenBSD."
Keywords: "tryhackme, windows, web, ctf, hard"
URL: "https://zurefx.github.io/writeups/htb-worker-475.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-worker-475/"
Date: "2024-06-23"
Tags: "TryHackMe, Windows, Web, CTF, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-worker-475"
Permalink: "/writeups/htb-worker-475.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Worker** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.47.149.253`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.82.176.153 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.76.239.118 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.78.2/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.96.27.117 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.72.246.21 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **NTLM Relay**.

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.241.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p80,110,53 10.89.229.167 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.153.122/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.90.156/FUZZ
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.212.7 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
nmap -sCV -p23,1521,22 10.59.180.104 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `enum4linux`
- `bloodhound`
- `impacket`
- `pwncat`
- `kerbrute`
- `hashcat`
- `lookupsid`
- `socat`

### Key Takeaways

- Open Redirect
- ACL Abuse
- NTLM Relay
