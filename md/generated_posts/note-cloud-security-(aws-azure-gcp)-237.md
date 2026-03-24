---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "windows, blue team, oscp, enumeration, privilege escalation, dfir"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-237.html"
URL_IMAGES: ""
Date: "2025-03-19"
Tags: "Windows, Blue Team, OSCP, Enumeration, Privilege Escalation, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-237"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-237.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### dcomexec

> **Note:** Subdomain Takeover was identified as the primary attack vector in this scenario.

- `SeDebugPrivilege`
- `DNS Rebinding`
- `ffuf`
- `evil-winrm`
- `SUID Binary`
- `XXE`

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `sharphound`
- `Weak Service Permissions`
- `CSRF`

## Debian

### atexec

- `GetNPUsers`
- `Subdomain Takeover`
- `Constrained Delegation`
- `CSRF`
- `secretsdump`

- `kerbrute`
- `Open Redirect`
- `GPP Password`
- `rpcclient`

- `IDOR`
- `Remote File Inclusion`
- `evil-winrm`
- `LXD Privilege Escalation`

## LAPS Abuse

### Kerberoasting

```python
nmap -sCV -p53,3268,23 10.104.168.148 -oN scan.txt
evil-winrm -i 10.19.23.146 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.69.207.20 -u administrator -p 'P@ssw0rd!'
```

- `Docker Escape`
- `smbexec`
- `atexec`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p9200,139,993 10.81.168.18 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.180.210
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## pwncat

### DLL Hijacking

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

> **Note:** CORS Misconfiguration was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## ffuf

### Cron Job

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.125.84.214 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.79.182.179 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.238.150 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
evil-winrm -i 10.122.55.62 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.14.12.171 -u administrator -p 'P@ssw0rd!'
```

```powershell
gobuster dir -u http://10.113.12.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
