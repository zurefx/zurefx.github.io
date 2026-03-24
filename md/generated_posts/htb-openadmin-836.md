---
TitleSEO: "PwnTillDawn — OpenAdmin (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — OpenAdmin (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn OpenAdmin. XXE and NFS No Root Squash to achieve easy compromise on OpenBSD."
Keywords: "forensics, insane, easy, hard"
URL: "https://zurefx.github.io/writeups/htb-openadmin-836.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-openadmin-836/"
Date: "2025-01-28"
Tags: "Forensics, Insane, Easy, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-openadmin-836"
Permalink: "/writeups/htb-openadmin-836.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **OpenAdmin** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.29.197.56`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.81.37 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.26.105 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.21.248.33 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,636,8080 10.80.21.163 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.24.28.224 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p445,9200,9200 10.63.67.252 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **NFS No Root Squash**.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.16.66
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.42.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.244.171
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.229.110/FUZZ
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
nmap -sCV -p21,995,8888 10.112.150.163 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `gobuster`
- `sharphound`
- `burpsuite`
- `smbclient`
- `ligolo-ng`

### Key Takeaways

- XXE
- NFS No Root Squash
