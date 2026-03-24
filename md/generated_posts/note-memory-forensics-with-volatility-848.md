---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, cheatsheet, dfir, privilege escalation, persistence"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-848.html"
URL_IMAGES: ""
Date: "2024-09-17"
Tags: "Enumeration, Cheatsheet, DFIR, Privilege Escalation, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-848"
Permalink: "/notes/note-memory-forensics-with-volatility-848.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Weak Service Permissions

### C#

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Pass the Hash

### Writable PATH

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.38.87.29 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.52.242.183 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.9.105
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.126.21.56 -u administrator -p 'P@ssw0rd!' --shares
```

## SeImpersonatePrivilege

### Unquoted Service Path

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Drupal

### RPC

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## CentOS

### LXD Privilege Escalation

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
evil-winrm -i 10.21.15.169 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.108.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1521,139,443 10.51.143.236 -oN scan.txt
```

## atexec

### socat

- `Unconstrained Delegation`
- `mimikatz`
- `Command Injection`
- `socat`
- `hydra`
- `Pass the Ticket`

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.
