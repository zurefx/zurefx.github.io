---
TitleSEO: "HackTheBox — Node (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Node (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Node. Insecure Deserialization and SSRF to achieve medium compromise on OpenBSD."
Keywords: "hard, easy, pwntilldawn, insane, forensics, active directory, reversing"
URL: "https://zurefx.github.io/writeups/htb-node-156.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-156/"
Date: "2026-03-18"
Tags: "Hard, Easy, PwnTillDawn, Insane, Forensics, Active Directory, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-node-156"
Permalink: "/writeups/htb-node-156.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Node** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.30.230.145`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.75.111.171 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.27.254.25 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.101.137.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.115.194.191 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.112.105.122/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.125.114.148 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.97.107.141 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **SSRF**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.45.175.134 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.87.166
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.84.90.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.41.11
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `smbclient`
- `GetNPUsers`
- `ffuf`
- `evil-winrm`
- `crackmapexec`

### Key Takeaways

- Insecure Deserialization
- SSRF
