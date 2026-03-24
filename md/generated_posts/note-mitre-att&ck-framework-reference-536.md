---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, malware, cheatsheet"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-536.html"
URL_IMAGES: ""
Date: "2024-09-01"
Tags: "Blue Team, Malware, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-536"
Permalink: "/notes/note-mitre-att&ck-framework-reference-536.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RDP

### Resource-Based Constrained Delegation

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

- `hydra`
- `feroxbuster`
- `impacket`

## Remote Code Execution

### C#

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.214.43/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.39.183
gobuster dir -u http://10.85.103.56/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Elasticsearch

### Silver Ticket

```powershell
gobuster dir -u http://10.32.38.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## socat

### XSS

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.45.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.64.100 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```python
crackmapexec smb 10.91.201.20 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.120.141.79/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.133.128 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p587,23,25 10.73.77.23 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## FTP

### SMB

- `Subdomain Takeover`
- `SSRF`
- `Kerberoasting`
- `XXE`

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Kali Linux

### wpscan

- `Sudo Misconfiguration`
- `Writable PATH`
- `smbexec`
- `GetNPUsers`
- `john`
- `rpcclient`

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.
