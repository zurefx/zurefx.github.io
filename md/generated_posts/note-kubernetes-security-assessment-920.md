---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "networking, persistence, oscp, linux"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-920.html"
URL_IMAGES: ""
Date: "2024-11-16"
Tags: "Networking, Persistence, OSCP, Linux"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-920"
Permalink: "/notes/note-kubernetes-security-assessment-920.html"
BtnLabel: "Read Notes"
Pick: 0
---
## .NET

### XSS

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## rpcclient

### smbexec

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## SeDebugPrivilege

### crackmapexec

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
nmap -sCV -p143,135,143 10.109.202.180 -oN scan.txt
crackmapexec smb 10.60.14.183 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
gobuster dir -u http://10.56.118.14/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.31.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
