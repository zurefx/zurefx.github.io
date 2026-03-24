---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "networking, linux, lateral movement, blue team, windows"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-187.html"
URL_IMAGES: ""
Date: "2024-11-10"
Tags: "Networking, Linux, Lateral Movement, Blue Team, Windows"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-187"
Permalink: "/notes/note-linux-privilege-escalation-techniques-187.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Drupal

### smbclient

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## msfvenom

### impacket

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

## AlwaysInstallElevated

### PHP

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.217.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.24.234.236/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.94.71.66/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.161.243/FUZZ
```

```bash
nmap -sCV -p3268,443,9200 10.17.198.232 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.110.98/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Subdomain Takeover`
- `AS-REP Roasting`
- `Unquoted Service Path`
- `kerbrute`
- `Golden Ticket`

## netcat

### RPC

- `GetUserSPNs`
- `LXD Privilege Escalation`
- `secretsdump`
- `pwncat`
- `Unconstrained Delegation`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.132.247
```

## sharphound

### Ruby on Rails

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Kerberos

### Bash

```bash
crackmapexec smb 10.40.222.113 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p135,993,5985 10.33.240.195 -oN scan.txt
```

```powershell
nmap -sCV -p5985,9200,143 10.44.219.93 -oN scan.txt
evil-winrm -i 10.119.245.62 -u administrator -p 'P@ssw0rd!'
```
