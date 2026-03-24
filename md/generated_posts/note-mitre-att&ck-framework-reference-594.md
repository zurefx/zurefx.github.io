---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, cheatsheet, oscp, dfir"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-594.html"
URL_IMAGES: ""
Date: "2024-03-05"
Tags: "Blue Team, Cheatsheet, OSCP, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-594"
Permalink: "/notes/note-mitre-att&ck-framework-reference-594.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### XXE

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

- `Docker Escape`
- `Kerberoasting`
- `metasploit`

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## .NET

### wmiexec

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## wpscan

### psexec

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `netcat`
- `NFS No Root Squash`
- `psexec`

## Silver Ticket

### MongoDB

```bash
nmap -sCV -p1521,27017,1433 10.126.48.143 -oN scan.txt
nmap -sCV -p9200,445,53 10.111.108.211 -oN scan.txt
```

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.168.118
crackmapexec smb 10.129.35.235 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.45.217.242 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.92.12.56/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.47.229/FUZZ
evil-winrm -i 10.17.242.109 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.32.129.151 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1521,8080,993 10.114.246.235 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## ACL Abuse

### Spring

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.18.110.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.56.113
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

- `kerbrute`
- `DLL Hijacking`
- `secretsdump`
- `Broken Access Control`
- `GPP Password`
- `Resource-Based Constrained Delegation`

> **Note:** Sudo Misconfiguration was identified as the primary attack vector in this scenario.
