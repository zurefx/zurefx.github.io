---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, persistence, privilege escalation, malware, cheatsheet, linux"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-146.html"
URL_IMAGES: ""
Date: "2025-07-29"
Tags: "DFIR, Persistence, Privilege Escalation, Malware, Cheatsheet, Linux"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-146"
Permalink: "/notes/note-kubernetes-security-assessment-146.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Pass the Ticket

### CentOS

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

> **Note:** LAPS Abuse was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.24.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p995,636,22 10.45.185.171 -oN scan.txt
```

## Nginx

### AlwaysInstallElevated

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.115.211.137 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.112.250
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
crackmapexec smb 10.97.247.235 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
gobuster dir -u http://10.52.2.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Elasticsearch

### Debian

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

- `nmap`
- `sharphound`
- `SUID Binary`
- `rubeus`
- `psexec`
- `SSTI`

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## NTLM Relay

### Cron Job

```bash
gobuster dir -u http://10.96.221.73/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

> **Note:** Cron Job was identified as the primary attack vector in this scenario.

## ffuf

### john

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

## DNS

### ACL Abuse

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.
