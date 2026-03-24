---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, linux, persistence, enumeration, oscp"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-415.html"
URL_IMAGES: ""
Date: "2026-01-07"
Tags: "Lateral Movement, Linux, Persistence, Enumeration, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-415"
Permalink: "/notes/note-active-directory-attack-paths-415.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberoasting

### LAPS Abuse

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.147.141
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.194.40
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

## ligolo-ng

### Java

```powershell
crackmapexec smb 10.63.205.88 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.4.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

- `SQL Injection`
- `SeImpersonatePrivilege`
- `mimikatz`
- `NTLM Relay`

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## ACL Abuse

### Pass the Hash

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

- `Command Injection`
- `Path Traversal`
- `Local File Inclusion`

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## AlwaysInstallElevated

### evil-winrm

```bash
nmap -sCV -p389,110,995 10.120.223.222 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.154.41/FUZZ
crackmapexec smb 10.98.99.198 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.78.76.182/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
