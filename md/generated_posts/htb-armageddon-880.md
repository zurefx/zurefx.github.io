---
TitleSEO: "TryHackMe — Armageddon (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Armageddon (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Armageddon. SSRF and Docker Escape to achieve medium compromise on Linux."
Keywords: "active directory, insane, easy, web, hard"
URL: "https://zurefx.github.io/writeups/htb-armageddon-880.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-880/"
Date: "2024-05-11"
Tags: "Active Directory, Insane, Easy, Web, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-880"
Permalink: "/writeups/htb-armageddon-880.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.113.202.167`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.60.66 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.163.188
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.209.208
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p464,80,8080 10.50.73.135 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.182.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.186.28
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

Key finding: **SSRF**.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.84.46.25 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.17.35.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.38.171.70 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.89.81
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.9.247/FUZZ
nmap -sCV -p3389,8888,1521 10.87.141.191 -oN scan.txt
crackmapexec smb 10.123.68.14 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `psexec`
- `hashcat`
- `netcat`
- `feroxbuster`
- `enum4linux`
- `sharphound`
- `secretsdump`

### Key Takeaways

- SSRF
- Docker Escape
