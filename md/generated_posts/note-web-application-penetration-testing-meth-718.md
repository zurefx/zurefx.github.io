---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, privilege escalation, lateral movement, windows, persistence"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-718.html"
URL_IMAGES: ""
Date: "2025-06-19"
Tags: "DFIR, Privilege Escalation, Lateral Movement, Windows, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-718"
Permalink: "/notes/note-web-application-penetration-testing-meth-718.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Sudo Misconfiguration

### Docker Escape

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

## SMB

### ffuf

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.50.154.164 -u administrator -p 'P@ssw0rd!' --shares
```

## chisel

### WinRM

> **Note:** XXE was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.148.163 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.65.43.187 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## atexec

### DNS Rebinding

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.35.219/FUZZ
crackmapexec smb 10.127.176.38 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.107.193.22/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Path Traversal

### nmap

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `SSRF`
- `Pass the Ticket`
- `Local File Inclusion`
- `enum4linux`
- `Broken Access Control`
- `Command Injection`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.48.85 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.29.209.122/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.179.164/FUZZ
nmap -sCV -p80,23,995 10.117.154.204 -oN scan.txt
```

- `ligolo-ng`
- `rubeus`
- `SeDebugPrivilege`
- `wmiexec`
- `Subdomain Takeover`
- `DCSync`

## ligolo-ng

### smbclient

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

> **Note:** IDOR was identified as the primary attack vector in this scenario.

```bash
gobuster dir -u http://10.57.239.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
