---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, enumeration, cheatsheet"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-176.html"
URL_IMAGES: ""
Date: "2024-11-19"
Tags: "Privilege Escalation, Enumeration, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-176"
Permalink: "/notes/note-threat-hunting-with-splunk-176.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Path Traversal

### rubeus

- `Weak Service Permissions`
- `sqlmap`
- `Insecure Deserialization`
- `SQL Injection`
- `DCSync`
- `Writable PATH`

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

- `NTLM Relay`
- `Docker Escape`
- `pwncat`

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## LDAP

### CentOS

```bash
gobuster dir -u http://10.83.50.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
gobuster dir -u http://10.113.47.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.84.46.73/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.85.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.242.87
```

## Drupal

### Ubuntu 20.04

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.226.97
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

- `rpcclient`
- `pwncat`
- `enum4linux`

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## john

### GPP Password

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

- `smbclient`
- `pwncat`
- `Command Injection`

```bash
gobuster dir -u http://10.59.232.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3306,3268,5985 10.56.196.57 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.45.116
evil-winrm -i 10.90.105.147 -u administrator -p 'P@ssw0rd!'
```

## psexec

### crackmapexec

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.82.6 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.247.52/FUZZ
nmap -sCV -p8888,8888,5985 10.96.99.121 -oN scan.txt
```
