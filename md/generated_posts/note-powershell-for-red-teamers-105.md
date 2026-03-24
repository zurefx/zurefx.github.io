---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, dfir, lateral movement, persistence"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-105.html"
URL_IMAGES: ""
Date: "2024-02-12"
Tags: "OSCP, DFIR, Lateral Movement, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-105"
Permalink: "/notes/note-powershell-for-red-teamers-105.html"
BtnLabel: "Read Notes"
Pick: 0
---
## hashcat

### Flask

```bash
nmap -sCV -p135,135,8080 10.26.111.217 -oN scan.txt
feroxbuster -h
crackmapexec smb 10.99.188.229 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8888,464,23 10.13.203.144 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

## SSH

### netcat

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.248.213/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.137.223
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## WordPress

### RDP

- `SSRF`
- `XXE`
- `impacket`
- `burpsuite`

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.
