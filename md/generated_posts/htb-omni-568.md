---
TitleSEO: "OffSec Proving Grounds — Omni (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Omni (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Omni. Golden Ticket and GPP Password to achieve insane compromise on Windows."
Keywords: "forensics, offsec, linux, ctf, easy"
URL: "https://zurefx.github.io/writeups/htb-omni-568.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-568/"
Date: "2024-10-06"
Tags: "Forensics, OffSec, Linux, CTF, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-568"
Permalink: "/writeups/htb-omni-568.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Omni** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.112.27.249`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.140.78
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.18.163.239 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.41.100.210 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.113.93.170 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.51.104.231 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

Key finding: **GPP Password**.

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5986,21,1521 10.38.214.57 -oN scan.txt
gobuster dir -u http://10.31.34.137/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.42.219.150 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
nmap -sCV -p139,3268,8888 10.77.165.161 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.173.106
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `secretsdump`
- `hydra`
- `gobuster`
- `crackmapexec`
- `kerbrute`
- `evil-winrm`

### Key Takeaways

- Golden Ticket
- GPP Password
- Pass the Ticket
