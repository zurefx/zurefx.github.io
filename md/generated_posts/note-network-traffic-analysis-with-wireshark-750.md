---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, windows, malware"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-750.html"
URL_IMAGES: ""
Date: "2025-04-03"
Tags: "Privilege Escalation, Windows, Malware"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-750"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-750.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Pass the Ticket

### Golden Ticket

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

- `DCSync`
- `ligolo-ng`
- `Constrained Delegation`
- `secretsdump`
- `wmiexec`

## sqlmap

### GetNPUsers

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
gobuster dir -u http://10.65.139.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p21,23,587 10.94.202.244 -oN scan.txt
```

## SSRF

### CORS Misconfiguration

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## dcomexec

### CSRF

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

- `SSTI`
- `Golden Ticket`
- `impacket`
- `SeDebugPrivilege`

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Cron Job

### Kali Linux

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.107.239.179 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.49.91.153 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
