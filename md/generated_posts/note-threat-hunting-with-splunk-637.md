---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, blue team, enumeration, privilege escalation, networking"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-637.html"
URL_IMAGES: ""
Date: "2025-03-29"
Tags: "Lateral Movement, Blue Team, Enumeration, Privilege Escalation, Networking"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-637"
Permalink: "/notes/note-threat-hunting-with-splunk-637.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Java

### impacket

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

## MySQL

### WinRM

- `rpcclient`
- `evil-winrm`
- `wpscan`
- `Insecure Deserialization`
- `IDOR`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
crackmapexec smb 10.50.224.34 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.38.223.65 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p8080,995,5986 10.58.170.80 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.189.176/FUZZ
nmap -sCV -p25,5432,1433 10.123.49.66 -oN scan.txt
nmap -sCV -p3268,8888,53 10.90.93.202 -oN scan.txt
```

## Laravel

### crackmapexec

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
nmap -sCV -p5986,8888,143 10.51.25.105 -oN scan.txt
```

## john

### socat

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

- `gobuster`
- `wmiexec`
- `msfvenom`
- `Remote File Inclusion`
- `smbexec`
