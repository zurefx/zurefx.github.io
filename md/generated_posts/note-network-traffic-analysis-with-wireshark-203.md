---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "windows, lateral movement, blue team"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-203.html"
URL_IMAGES: ""
Date: "2025-04-25"
Tags: "Windows, Lateral Movement, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-203"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-203.html"
BtnLabel: "Read Notes"
Pick: 0
---
## msfvenom

### CORS Misconfiguration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

- `AlwaysInstallElevated`
- `Constrained Delegation`
- `bloodhound`
- `burpsuite`
- `rpcclient`
- `ldapsearch`

## MSSQL

### secretsdump

- `Pass the Ticket`
- `XSS`
- `SUID Binary`
- `kerbrute`
- `impacket`

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.159.176
gobuster dir -u http://10.42.43.190/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## metasploit

### Telnet

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.148.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## Java

### SMTP

- `SQL Injection`
- `SUID Binary`
- `gobuster`
- `NTLM Relay`
- `LXD Privilege Escalation`

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.65.242.63 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p143,464,139 10.21.6.20 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## SUID Binary

### Remote Code Execution

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

> **Note:** SSRF was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.35.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.43.139.197 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## hashcat

### Kerberos

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.
