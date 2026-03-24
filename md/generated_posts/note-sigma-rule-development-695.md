---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "malware, blue team, networking, privilege escalation, dfir, windows"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-695.html"
URL_IMAGES: ""
Date: "2025-06-02"
Tags: "Malware, Blue Team, Networking, Privilege Escalation, DFIR, Windows"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-695"
Permalink: "/notes/note-sigma-rule-development-695.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetUserSPNs

### RPC

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

- `DNS Rebinding`
- `ligolo-ng`
- `CORS Misconfiguration`
- `Subdomain Takeover`
- `Golden Ticket`

## Drupal

### john

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## Spring

### Weak Service Permissions

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.155.199/FUZZ
```

- `netcat`
- `AS-REP Roasting`
- `GetUserSPNs`
- `kerbrute`
- `ligolo-ng`
- `bloodhound`

- `wpscan`
- `msfvenom`
- `secretsdump`
- `pwncat`
- `metasploit`
- `Unquoted Service Path`

```powershell
gobuster dir -u http://10.113.212.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.215.42
crackmapexec smb 10.93.115.7 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
crackmapexec smb 10.30.103.146 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.22.229/FUZZ
```

## Debian

### Active Directory

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.222.36/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `burpsuite`
- `feroxbuster`
- `Docker Escape`

## Joomla

### Redis

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.62.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.42.204 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

## SSTI

### Silver Ticket

```bash
gobuster dir -u http://10.129.175.136/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** SSRF was identified as the primary attack vector in this scenario.

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.
