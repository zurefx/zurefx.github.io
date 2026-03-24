---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "networking, persistence, linux, privilege escalation"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-439.html"
URL_IMAGES: ""
Date: "2024-09-14"
Tags: "Networking, Persistence, Linux, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-439"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-439.html"
BtnLabel: "Read Notes"
Pick: 0
---
## socat

### Nginx

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

- `Kerberoasting`
- `evil-winrm`
- `atexec`
- `SeImpersonatePrivilege`

## SQL Injection

### PHP

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

## ldapsearch

### Command Injection

```bash
nmap -sCV -p8888,993,993 10.50.117.15 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## sqlmap

### Ubuntu 20.04

- `SQL Injection`
- `Golden Ticket`
- `rubeus`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.169.154/FUZZ
nmap -sCV -p27017,9200,8080 10.44.59.51 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.22.56
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.155.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.69.224.87/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.236.184
```

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

## kerbrute

### SSH

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.69.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.31.167/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## SSTI

### ligolo-ng

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.44.115.119 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.
