---
TitleSEO: "PwnTillDawn — Breadcrumbs (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Breadcrumbs (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Breadcrumbs. SUID Binary and Sudo Misconfiguration to achieve medium compromise on Linux."
Keywords: "easy, pwntilldawn, reversing"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-222.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-222/"
Date: "2024-10-17"
Tags: "Easy, PwnTillDawn, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-222"
Permalink: "/writeups/htb-breadcrumbs-222.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.19.115.77`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.114.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.108.129 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p1433,993,464 10.21.220.169 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Sudo Misconfiguration**.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.80.129/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.47.29.66/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.51.203.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.26.41.51 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.121.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.162.228
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.7.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.206.177
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `wmiexec`
- `metasploit`
- `bloodhound`
- `ligolo-ng`
- `gobuster`

### Key Takeaways

- SUID Binary
- Sudo Misconfiguration
