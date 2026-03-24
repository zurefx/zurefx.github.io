---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, lateral movement, malware, dfir, oscp, cheatsheet"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-614.html"
URL_IMAGES: ""
Date: "2025-05-09"
Tags: "Blue Team, Lateral Movement, Malware, DFIR, OSCP, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-614"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-614.html"
BtnLabel: "Read Notes"
Pick: 0
---
## feroxbuster

### evil-winrm

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

- `Command Injection`
- `crackmapexec`
- `Constrained Delegation`
- `DCSync`
- `Broken Access Control`

- `psexec`
- `atexec`
- `msfvenom`

## Pass the Ticket

### pwncat

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Subdomain Takeover

### CentOS

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.246.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.94.78.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p27017,110,995 10.12.31.148 -oN scan.txt
```

> **Note:** Pass the Hash was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

## Insecure Deserialization

### rpcclient

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.73.189 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.67.212/FUZZ
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.100.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
