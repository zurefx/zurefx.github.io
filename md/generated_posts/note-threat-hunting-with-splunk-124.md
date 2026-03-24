---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "malware, enumeration, linux, oscp"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-124.html"
URL_IMAGES: ""
Date: "2024-07-21"
Tags: "Malware, Enumeration, Linux, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-124"
Permalink: "/notes/note-threat-hunting-with-splunk-124.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Silver Ticket

### Pass the Hash

```bash
nmap -sCV -p80,25,1433 10.87.167.56 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `XSS`
- `Sudo Misconfiguration`
- `GPP Password`
- `ligolo-ng`
- `SSRF`
- `smbexec`

## XSS

### Elasticsearch

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

- `Weak Service Permissions`
- `socat`
- `Insecure Deserialization`

```powershell
crackmapexec smb 10.12.197.217 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p80,21,1521 10.76.84.130 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.144.245
```

## Redis

### smbclient

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

- `kerbrute`
- `Weak Service Permissions`
- `burpsuite`
- `ffuf`

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Sudo Misconfiguration

### rpcclient

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.42.21.193 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.109.16.121 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.129.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## wmiexec

### MySQL

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```python
gobuster dir -u http://10.105.183.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).
