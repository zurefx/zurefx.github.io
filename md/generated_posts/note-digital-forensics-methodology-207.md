---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, linux, networking, privilege escalation, persistence, dfir"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-207.html"
URL_IMAGES: ""
Date: "2024-03-10"
Tags: "Enumeration, Linux, Networking, Privilege Escalation, Persistence, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-207"
Permalink: "/notes/note-digital-forensics-methodology-207.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RDP

### IIS

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.242.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.33.62 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```python
gobuster dir -u http://10.128.200.220/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

- `nikto`
- `chisel`
- `Resource-Based Constrained Delegation`
- `burpsuite`
- `wpscan`
- `Remote File Inclusion`

## Writable PATH

### burpsuite

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.91.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.73.233.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.225.216/FUZZ
```

## PHP

### GetNPUsers

```python
nmap -sCV -p143,27017,587 10.45.113.126 -oN scan.txt
```

```bash
nmap -sCV -p25,636,3268 10.65.195.226 -oN scan.txt
```

- `Constrained Delegation`
- `feroxbuster`
- `rpcclient`

## DNS

### GetUserSPNs

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Broken Access Control

### Node.js

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.90.224.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Apache

### ligolo-ng

- `Local File Inclusion`
- `Pass the Hash`
- `Remote File Inclusion`

- `netcat`
- `DNS Rebinding`
- `rubeus`
- `Open Redirect`
- `LXD Privilege Escalation`

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.
