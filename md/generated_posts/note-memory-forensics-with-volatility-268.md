---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, cheatsheet, privilege escalation, oscp, malware"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-268.html"
URL_IMAGES: ""
Date: "2024-05-04"
Tags: "Enumeration, Lateral Movement, Cheatsheet, Privilege Escalation, OSCP, Malware"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-268"
Permalink: "/notes/note-memory-forensics-with-volatility-268.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CentOS

### SNMP

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.46.86.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## LXD Privilege Escalation

### Local File Inclusion

- `AlwaysInstallElevated`
- `kerbrute`
- `DLL Hijacking`
- `feroxbuster`

- `burpsuite`
- `msfvenom`
- `Weak Service Permissions`
- `wmiexec`
- `DCSync`
- `secretsdump`

```bash
nmap -sCV -p22,5986,135 10.127.133.129 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.90.143/FUZZ
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## enum4linux

### LDAP

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Ruby on Rails

### Writable PATH

- `Pass the Hash`
- `Command Injection`
- `netcat`

- `enum4linux`
- `netcat`
- `Sudo Misconfiguration`
- `ligolo-ng`
- `ldapsearch`

- `hashcat`
- `ligolo-ng`
- `enum4linux`
- `LXD Privilege Escalation`
- `netcat`

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Unconstrained Delegation

### HTTP

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.30.219
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.79.44
feroxbuster -h
```

## FTP

### MySQL

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.90.154.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.40.16.172/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.207.33/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.
