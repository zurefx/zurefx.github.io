---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, dfir, blue team, networking, enumeration, lateral movement"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-899.html"
URL_IMAGES: ""
Date: "2025-04-26"
Tags: "Privilege Escalation, DFIR, Blue Team, Networking, Enumeration, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-899"
Permalink: "/notes/note-threat-hunting-with-splunk-899.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Insecure Deserialization

### Pass the Ticket

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
evil-winrm -i 10.87.241.34 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.251.138/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Telnet

### Weak Service Permissions

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.145.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.87.98.69 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.120.16.237 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,110,1521 10.29.32.139 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## NFS No Root Squash

### Elasticsearch

- `gobuster`
- `sqlmap`
- `metasploit`
- `chisel`
- `socat`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.129.15
gobuster dir -u http://10.63.254.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p464,3268,1521 10.81.215.240 -oN scan.txt
evil-winrm -i 10.50.205.154 -u administrator -p 'P@ssw0rd!'
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p22,53,21 10.101.190.70 -oN scan.txt
nmap -sCV -p53,8443,995 10.91.164.70 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.
