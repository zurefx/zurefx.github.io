---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, privilege escalation, windows, cheatsheet"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-436.html"
URL_IMAGES: ""
Date: "2024-12-19"
Tags: "OSCP, Privilege Escalation, Windows, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-436"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-436.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SQL Injection

### crackmapexec

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.171.75 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.78.242.150 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

## Python

### gobuster

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

- `rubeus`
- `Docker Escape`
- `XXE`

- `pwncat`
- `Weak Service Permissions`
- `Silver Ticket`
- `Remote File Inclusion`

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## mimikatz

### chisel

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.163.221/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.122.40 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.133.12/FUZZ
```

## SUID Binary

### dcomexec

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

- `Pass the Ticket`
- `LXD Privilege Escalation`
- `wmiexec`
- `SeDebugPrivilege`
- `lookupsid`
- `Subdomain Takeover`
