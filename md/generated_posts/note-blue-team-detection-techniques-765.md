---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, linux, oscp, networking"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-765.html"
URL_IMAGES: ""
Date: "2025-07-31"
Tags: "Persistence, Linux, OSCP, Networking"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-765"
Permalink: "/notes/note-blue-team-detection-techniques-765.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Local File Inclusion

### Insecure Deserialization

- `bloodhound`
- `NFS No Root Squash`
- `metasploit`
- `mimikatz`
- `CORS Misconfiguration`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.151.192
```

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## FTP

### Java

- `rubeus`
- `Writable PATH`
- `evil-winrm`
- `Local File Inclusion`
- `SSTI`
- `Command Injection`

- `ligolo-ng`
- `Unconstrained Delegation`
- `GetUserSPNs`
- `XXE`
- `DCSync`
- `Remote File Inclusion`

## atexec

### SUID Binary

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.73.207/FUZZ
feroxbuster -h
crackmapexec smb 10.34.158.48 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.196.151 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## SQL Injection

### CSRF

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## SeImpersonatePrivilege

### Writable PATH

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

- `socat`
- `wmiexec`
- `SeDebugPrivilege`

- `SeImpersonatePrivilege`
- `DNS Rebinding`
- `Local File Inclusion`
- `Broken Access Control`
- `chisel`

- `smbexec`
- `DLL Hijacking`
- `enum4linux`
- `CSRF`
- `SSTI`
