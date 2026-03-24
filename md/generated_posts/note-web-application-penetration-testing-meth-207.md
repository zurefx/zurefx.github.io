---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, privilege escalation, malware, oscp"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-207.html"
URL_IMAGES: ""
Date: "2026-01-01"
Tags: "Blue Team, Privilege Escalation, Malware, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-207"
Permalink: "/notes/note-web-application-penetration-testing-meth-207.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### hydra

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.100.105.126 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8443,5986,5985 10.85.183.161 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Remote Code Execution

### Kerberoasting

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.140.153
```

- `Pass the Hash`
- `Insecure Deserialization`
- `lookupsid`

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.161.1/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.21.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.18.103.231/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

## pwncat

### nmap

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## MSSQL

### Insecure Deserialization

- `Remote File Inclusion`
- `Golden Ticket`
- `AS-REP Roasting`
- `wmiexec`

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

- `smbexec`
- `SSRF`
- `CORS Misconfiguration`
- `Weak Service Permissions`
- `rpcclient`
- `Sudo Misconfiguration`

```bash
evil-winrm -i 10.125.222.19 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.98.17.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.97.71.123 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Apache

### metasploit

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).
