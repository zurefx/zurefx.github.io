---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "networking, cheatsheet, malware, linux, oscp, blue team"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-532.html"
URL_IMAGES: ""
Date: "2025-05-10"
Tags: "Networking, Cheatsheet, Malware, Linux, OSCP, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-532"
Permalink: "/notes/note-mitre-att&ck-framework-reference-532.html"
BtnLabel: "Read Notes"
Pick: 0
---
## netcat

### Ubuntu 20.04

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

## hashcat

### Remote File Inclusion

- `SQL Injection`
- `evil-winrm`
- `smbclient`
- `Golden Ticket`

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

- `burpsuite`
- `GPP Password`
- `dcomexec`
- `impacket`
- `SSTI`

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Telnet

### wmiexec

- `msfvenom`
- `psexec`
- `DNS Rebinding`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.159.249/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Redis

### Pass the Ticket

```powershell
crackmapexec smb 10.97.180.110 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.100.224.110 -u administrator -p 'P@ssw0rd!'
```

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.80.50/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.195.237 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.73.81.99/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## ldapsearch

### HTTP

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Pass the Hash`
- `Sudo Misconfiguration`
- `sharphound`
- `feroxbuster`
- `SeDebugPrivilege`
- `Remote File Inclusion`
