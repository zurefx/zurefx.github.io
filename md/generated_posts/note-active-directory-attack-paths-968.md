---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "networking, oscp, persistence, privilege escalation, dfir, linux"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-968.html"
URL_IMAGES: ""
Date: "2024-06-16"
Tags: "Networking, OSCP, Persistence, Privilege Escalation, DFIR, Linux"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-968"
Permalink: "/notes/note-active-directory-attack-paths-968.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Drupal

### Sudo Misconfiguration

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

- `chisel`
- `smbexec`
- `sqlmap`
- `Path Traversal`
- `CSRF`

```powershell
crackmapexec smb 10.38.18.38 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.83.135.1 -u administrator -p 'P@ssw0rd!' --shares
```

## HTTPS

### CMD

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

- `hydra`
- `psexec`
- `IDOR`
- `chisel`
- `GPP Password`

## LXD Privilege Escalation

### PowerShell

```powershell
evil-winrm -i 10.103.244.92 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p3389,8888,80 10.48.6.249 -oN scan.txt
gobuster dir -u http://10.118.94.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## XXE

### MSSQL

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.
