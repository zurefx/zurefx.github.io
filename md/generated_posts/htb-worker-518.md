---
TitleSEO: "PwnTillDawn — Worker (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Worker (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Worker. Weak Service Permissions and SSRF to achieve easy compromise on FreeBSD."
Keywords: "insane, windows, offsec, reversing, linux"
URL: "https://zurefx.github.io/writeups/htb-worker-518.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-worker-518/"
Date: "2025-10-13"
Tags: "Insane, Windows, OffSec, Reversing, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-worker-518"
Permalink: "/writeups/htb-worker-518.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Worker** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.22.242.34`.

### Objectives

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p22,135,53 10.37.181.207 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p1521,993,445 10.89.68.153 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.240.28
gobuster dir -u http://10.19.123.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.5.80
gobuster dir -u http://10.61.104.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.79.252.121 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

Key finding: **Weak Service Permissions**.

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.133.228 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.128.97.63 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p993,1433,80 10.65.194.72 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `ligolo-ng`
- `GetUserSPNs`
- `psexec`
- `crackmapexec`
- `GetNPUsers`
- `rpcclient`

### Key Takeaways

- Weak Service Permissions
- SSRF
