---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, networking, enumeration, windows"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-421.html"
URL_IMAGES: ""
Date: "2025-03-23"
Tags: "OSCP, Networking, Enumeration, Windows"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-421"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-421.html"
BtnLabel: "Read Notes"
Pick: 0
---
## HTTP

### ldapsearch

- `atexec`
- `sharphound`
- `NFS No Root Squash`
- `sqlmap`
- `Subdomain Takeover`

- `ffuf`
- `bloodhound`
- `evil-winrm`

```python
nmap -sCV -p8080,143,80 10.24.157.241 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

## CentOS

### SeDebugPrivilege

- `burpsuite`
- `socat`
- `smbclient`
- `Broken Access Control`
- `rpcclient`
- `Path Traversal`

- `Broken Access Control`
- `SSTI`
- `Local File Inclusion`
- `Docker Escape`
- `DNS Rebinding`
- `burpsuite`

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```powershell
gobuster dir -u http://10.12.10.212/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.54.30.232 -u administrator -p 'P@ssw0rd!' --shares
```

## chisel

### pwncat

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

- `Silver Ticket`
- `XSS`
- `Remote File Inclusion`

- `dcomexec`
- `pwncat`
- `GetUserSPNs`
- `Subdomain Takeover`

## lookupsid

### Local File Inclusion

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.
