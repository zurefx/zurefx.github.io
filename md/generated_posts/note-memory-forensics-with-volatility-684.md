---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "windows, blue team, oscp"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-684.html"
URL_IMAGES: ""
Date: "2024-01-12"
Tags: "Windows, Blue Team, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-684"
Permalink: "/notes/note-memory-forensics-with-volatility-684.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Debian

### pwncat

- `feroxbuster`
- `Command Injection`
- `CORS Misconfiguration`
- `smbexec`
- `GPP Password`
- `wpscan`

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

- `IDOR`
- `DNS Rebinding`
- `ligolo-ng`
- `impacket`
- `john`

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p9200,25,143 10.15.147.186 -oN scan.txt
evil-winrm -i 10.104.183.70 -u administrator -p 'P@ssw0rd!'
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.200.39/FUZZ
gobuster dir -u http://10.47.166.230/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p443,27017,5432 10.102.81.54 -oN scan.txt
```

## SNMP

### NFS No Root Squash

- `DCSync`
- `ACL Abuse`
- `kerbrute`
- `gobuster`
- `AlwaysInstallElevated`
- `chisel`

```bash
evil-winrm -i 10.91.23.196 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.122.82.93 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.207.89 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## XSS

### gobuster

- `Sudo Misconfiguration`
- `Remote Code Execution`
- `hydra`
- `SeImpersonatePrivilege`
- `atexec`

> **Note:** IDOR was identified as the primary attack vector in this scenario.

- `sharphound`
- `socat`
- `smbexec`

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

## HTTPS

### Flask

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.31.50
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.85.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.
