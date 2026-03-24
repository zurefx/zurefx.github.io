---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, lateral movement, blue team, networking, enumeration"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-945.html"
URL_IMAGES: ""
Date: "2025-07-18"
Tags: "OSCP, Lateral Movement, Blue Team, Networking, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-945"
Permalink: "/notes/note-kubernetes-security-assessment-945.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSTI

### Open Redirect

> **Note:** AlwaysInstallElevated was identified as the primary attack vector in this scenario.

- `netcat`
- `nikto`
- `wmiexec`
- `metasploit`

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.102.132.241/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## LXD Privilege Escalation

### atexec

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p443,27017,9200 10.68.8.183 -oN scan.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.214.19
```

```bash
evil-winrm -i 10.14.190.148 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Elasticsearch

### Laravel

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8443,8443,3389 10.93.29.251 -oN scan.txt
crackmapexec smb 10.25.1.19 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

## SNMP

### NTLM Relay

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.109.108.157 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.122.71.131/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## netcat

### nmap

```powershell
gobuster dir -u http://10.25.253.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.120.118.160 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## SUID Binary

### Remote File Inclusion

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
gobuster dir -u http://10.17.110.117/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
