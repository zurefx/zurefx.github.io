---
TitleSEO: "OffSec Proving Grounds — Bucket (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Bucket (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Bucket. Local File Inclusion and Path Traversal to achieve easy compromise on Linux."
Keywords: "medium, reversing, forensics, hackthebox, web, ctf"
URL: "https://zurefx.github.io/writeups/htb-bucket-835.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bucket-835/"
Date: "2024-06-23"
Tags: "Medium, Reversing, Forensics, HackTheBox, Web, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-bucket-835"
Permalink: "/writeups/htb-bucket-835.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bucket** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.52.196.98`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.19.170.214 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.135.10/FUZZ
crackmapexec smb 10.107.130.192 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.51.79
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.143.171/FUZZ
crackmapexec smb 10.125.35.51 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.41.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.164.122
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Local File Inclusion**.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p23,1521,80 10.129.231.38 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p27017,8443,8080 10.58.148.99 -oN scan.txt
feroxbuster -h
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.61.11.112/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.23.210/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `ldapsearch`
- `sqlmap`
- `john`
- `nikto`
- `psexec`
- `msfvenom`
- `smbexec`

### Key Takeaways

- Local File Inclusion
- Path Traversal
