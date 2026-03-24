---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, malware, dfir, oscp, enumeration"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-385.html"
URL_IMAGES: ""
Date: "2025-08-04"
Tags: "Privilege Escalation, Malware, DFIR, OSCP, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-385"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-385.html"
BtnLabel: "Read Notes"
Pick: 0
---
## XXE

### SMTP

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

- `CSRF`
- `wmiexec`
- `Writable PATH`
- `Unconstrained Delegation`
- `smbexec`

## smbexec

### Ruby on Rails

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.31.10
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.66.91.73 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## DNS

### Laravel

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```powershell
gobuster dir -u http://10.128.100.201/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## CORS Misconfiguration

### SeDebugPrivilege

```python
feroxbuster -h
nmap -sCV -p464,139,5985 10.121.170.201 -oN scan.txt
evil-winrm -i 10.24.190.124 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.
