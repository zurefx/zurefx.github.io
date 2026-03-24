---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, malware, dfir, enumeration, oscp"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-209.html"
URL_IMAGES: ""
Date: "2025-09-17"
Tags: "Lateral Movement, Malware, DFIR, Enumeration, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-209"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-209.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Remote File Inclusion

### Broken Access Control

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```python
nmap -sCV -p587,25,5985 10.64.130.249 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.23.161.29 -u administrator -p 'P@ssw0rd!'
```

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.89.149 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Ruby on Rails

### kerbrute

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

## NFS

### RDP

- `Broken Access Control`
- `Silver Ticket`
- `rpcclient`

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.9.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Golden Ticket

### socat

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p1433,8443,995 10.95.179.180 -oN scan.txt
evil-winrm -i 10.128.238.36 -u administrator -p 'P@ssw0rd!'
```

- `Command Injection`
- `LXD Privilege Escalation`
- `gobuster`
- `GPP Password`
- `Broken Access Control`

```bash
feroxbuster -h
nmap -sCV -p1433,3306,1433 10.33.101.44 -oN scan.txt
evil-winrm -i 10.83.251.161 -u administrator -p 'P@ssw0rd!'
```

- `ldapsearch`
- `Pass the Hash`
- `smbclient`
- `SeImpersonatePrivilege`

## secretsdump

### SSTI

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.113.154.196 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8443,3306,135 10.128.58.155 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.43.206 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `hashcat`
- `ldapsearch`
- `DLL Hijacking`

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.
