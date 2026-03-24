---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, malware, privilege escalation, lateral movement"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-844.html"
URL_IMAGES: ""
Date: "2025-07-28"
Tags: "Persistence, Malware, Privilege Escalation, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-844"
Permalink: "/notes/note-mitre-att&ck-framework-reference-844.html"
BtnLabel: "Read Notes"
Pick: 0
---
## chisel

### Kerberos

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p993,464,8888 10.46.94.96 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

- `XXE`
- `DLL Hijacking`
- `smbclient`
- `ligolo-ng`
- `netcat`
- `crackmapexec`

## XXE

### evil-winrm

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```python
evil-winrm -i 10.54.226.5 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.37.39.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.110.253.230 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## XSS

### SeImpersonatePrivilege

- `SSTI`
- `rubeus`
- `smbexec`
- `Golden Ticket`
- `nmap`
- `Pass the Hash`

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.90.253
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.139.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.20.197
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

## Open Redirect

### ffuf

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.233.252/FUZZ
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.67.212.77 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## RDP

### lookupsid

```bash
gobuster dir -u http://10.117.157.122/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.53.52/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

> **Note:** Golden Ticket was identified as the primary attack vector in this scenario.

> **Note:** ACL Abuse was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.43.64 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.126.55.129 -u administrator -p 'P@ssw0rd!'
```

## Sudo Misconfiguration

### atexec

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.100.248
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.81.57/FUZZ
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.
