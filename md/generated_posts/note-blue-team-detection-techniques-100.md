---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, oscp, networking, persistence"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-100.html"
URL_IMAGES: ""
Date: "2024-08-07"
Tags: "Lateral Movement, OSCP, Networking, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-100"
Permalink: "/notes/note-blue-team-detection-techniques-100.html"
BtnLabel: "Read Notes"
Pick: 0
---
## evil-winrm

### POP3

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

- `hydra`
- `Constrained Delegation`
- `SSTI`

```bash
feroxbuster -h
feroxbuster -h
gobuster dir -u http://10.15.148.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
nmap -sCV -p5432,21,3268 10.19.195.210 -oN scan.txt
```

## Silver Ticket

### PHP

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.73.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.2.175/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.189.136/FUZZ
```

```python
crackmapexec smb 10.43.207.81 -u administrator -p 'P@ssw0rd!' --shares
```

- `Remote Code Execution`
- `Pass the Ticket`
- `Weak Service Permissions`
- `Open Redirect`
- `evil-winrm`
- `Path Traversal`

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

## Sudo Misconfiguration

### Nginx

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```python
nmap -sCV -p5432,8080,3268 10.129.9.2 -oN scan.txt
```

## Windows Server 2019

### smbexec

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

- `feroxbuster`
- `AS-REP Roasting`
- `john`
- `IDOR`
- `nmap`
- `rpcclient`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.97.164.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.42.40/FUZZ
crackmapexec smb 10.104.38.69 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.
