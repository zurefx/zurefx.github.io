---
TitleSEO: "VulnHub — Sense (Insane Linux) | ZureFX"
TitlePost: "VulnHub — Sense (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Sense. DCSync and Remote File Inclusion to achieve insane compromise on Linux."
Keywords: "reversing, forensics, hackthebox, offsec, easy"
URL: "https://zurefx.github.io/writeups/htb-sense-133.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-133/"
Date: "2025-05-11"
Tags: "Reversing, Forensics, HackTheBox, OffSec, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-133"
Permalink: "/writeups/htb-sense-133.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Insane** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.78.122.9`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.148.166
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.25.22
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.77.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3306,3306,5432 10.80.119.133 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.131.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.62.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

Key finding: **DCSync**.

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.85.27.212 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.82.89
gobuster dir -u http://10.96.161.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.181.13
gobuster dir -u http://10.109.112.145/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.101.237
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.83.41/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `wmiexec`
- `chisel`
- `mimikatz`
- `GetUserSPNs`
- `msfvenom`

### Key Takeaways

- DCSync
- Remote File Inclusion
