---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, cheatsheet, dfir"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-472.html"
URL_IMAGES: ""
Date: "2024-12-20"
Tags: "OSCP, Cheatsheet, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-472"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-472.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### WordPress

```bash
crackmapexec smb 10.121.227.194 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.67.138.139 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.86.205.171 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** Cron Job was identified as the primary attack vector in this scenario.

## PHP

### wpscan

- `ldapsearch`
- `hashcat`
- `psexec`
- `impacket`
- `Docker Escape`

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## HTTPS

### chisel

- `Local File Inclusion`
- `sqlmap`
- `msfvenom`
- `Unconstrained Delegation`
- `Unquoted Service Path`

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.95.9.64 -u administrator -p 'P@ssw0rd!' --shares
```

## Spring

### ACL Abuse

- `chisel`
- `ACL Abuse`
- `AlwaysInstallElevated`

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.164.139
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## secretsdump

### Pass the Ticket

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## PowerShell

### lookupsid

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

- `Docker Escape`
- `wpscan`
- `hydra`
- `secretsdump`
- `NTLM Relay`
- `Open Redirect`

- `NFS No Root Squash`
- `LAPS Abuse`
- `Docker Escape`
- `Unconstrained Delegation`
- `msfvenom`
