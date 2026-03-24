---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "networking, privilege escalation, persistence"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-959.html"
URL_IMAGES: ""
Date: "2024-01-09"
Tags: "Networking, Privilege Escalation, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-959"
Permalink: "/notes/note-mitre-att&ck-framework-reference-959.html"
BtnLabel: "Read Notes"
Pick: 0
---
## crackmapexec

### SMTP

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

- `Pass the Hash`
- `nmap`
- `smbclient`

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.136.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.75.66.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.103.26.106 -u administrator -p 'P@ssw0rd!'
```

- `chisel`
- `Writable PATH`
- `LXD Privilege Escalation`
- `bloodhound`
- `Docker Escape`

## Unquoted Service Path

### NFS

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```python
evil-winrm -i 10.55.208.41 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.121.251.42 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.24.74.17 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.122.157.89/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.229.96
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

## bloodhound

### AS-REP Roasting

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `XSS`
- `SeDebugPrivilege`
- `socat`
- `Sudo Misconfiguration`
- `gobuster`

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

## GetUserSPNs

### netcat

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p25,3389,3389 10.57.34.49 -oN scan.txt
feroxbuster -h
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.145.249 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

## Joomla

### Ruby on Rails

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

- `Pass the Ticket`
- `Insecure Deserialization`
- `nmap`
- `impacket`
- `sharphound`
- `GPP Password`

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

## enum4linux

### sqlmap

- `rubeus`
- `mimikatz`
- `CSRF`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.168.155/FUZZ
crackmapexec smb 10.93.60.113 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.26.103.6/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.93.201.83 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.
