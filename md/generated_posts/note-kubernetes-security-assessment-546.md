---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, enumeration, linux, windows"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-546.html"
URL_IMAGES: ""
Date: "2024-04-30"
Tags: "Blue Team, Enumeration, Linux, Windows"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-546"
Permalink: "/notes/note-kubernetes-security-assessment-546.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### Sudo Misconfiguration

- `ffuf`
- `LAPS Abuse`
- `feroxbuster`
- `Unconstrained Delegation`
- `ligolo-ng`

- `kerbrute`
- `rpcclient`
- `LAPS Abuse`
- `Pass the Hash`
- `smbclient`

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## CMD

### ACL Abuse

- `chisel`
- `pwncat`
- `john`
- `nikto`
- `Remote File Inclusion`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.129.159/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## bloodhound

### Apache

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.77.32
crackmapexec smb 10.12.26.169 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.47.208.59 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## CSRF

### metasploit

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```python
gobuster dir -u http://10.126.111.82/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

- `LXD Privilege Escalation`
- `Remote File Inclusion`
- `LAPS Abuse`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.236.12
```

## MSSQL

### Resource-Based Constrained Delegation

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.
