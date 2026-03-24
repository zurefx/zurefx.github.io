---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, cheatsheet, networking, enumeration"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-904.html"
URL_IMAGES: ""
Date: "2024-01-11"
Tags: "Blue Team, Cheatsheet, Networking, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-904"
Permalink: "/notes/note-kubernetes-security-assessment-904.html"
BtnLabel: "Read Notes"
Pick: 0
---
## WinRM

### ligolo-ng

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Unquoted Service Path

### kerbrute

```bash
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Ruby on Rails

### IIS

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.128.50
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.45.225.233/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## CMD

### Nginx

- `secretsdump`
- `feroxbuster`
- `wpscan`
- `Pass the Hash`

- `enum4linux`
- `Subdomain Takeover`
- `crackmapexec`
- `Silver Ticket`

```bash
gobuster dir -u http://10.42.60.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3306,445,389 10.85.35.166 -oN scan.txt
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.45.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## SMB

### gobuster

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

## secretsdump

### Path Traversal

```powershell
feroxbuster -h
crackmapexec smb 10.43.208.74 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.48.90.24 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.
