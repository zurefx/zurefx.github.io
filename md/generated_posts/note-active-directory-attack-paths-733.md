---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "malware, dfir, windows"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-733.html"
URL_IMAGES: ""
Date: "2026-02-16"
Tags: "Malware, DFIR, Windows"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-733"
Permalink: "/notes/note-active-directory-attack-paths-733.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AS-REP Roasting

### SeDebugPrivilege

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

## SSRF

### RPC

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## kerbrute

### metasploit

```bash
evil-winrm -i 10.100.202.177 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.40.112.8 -u administrator -p 'P@ssw0rd!'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## CORS Misconfiguration

### SMB

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.31.71/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.37.175/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.229.123
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.
