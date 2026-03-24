---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, lateral movement, malware"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-178.html"
URL_IMAGES: ""
Date: "2025-10-02"
Tags: "Privilege Escalation, Lateral Movement, Malware"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-178"
Permalink: "/notes/note-kubernetes-security-assessment-178.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LXD Privilege Escalation

### DNS

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.22.155.151 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.18.69.115 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.50.160.194/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `hydra`
- `SSRF`
- `Unconstrained Delegation`
- `AS-REP Roasting`

## SSTI

### bloodhound

```bash
crackmapexec smb 10.58.179.60 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.74.236.214 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.79.99.187 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

- `Unconstrained Delegation`
- `evil-winrm`
- `Open Redirect`
- `crackmapexec`
- `hydra`

## SMB

### socat

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## MySQL

### Broken Access Control

```bash
nmap -sCV -p8888,443,1433 10.98.109.241 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.84.159.213 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.160.244/FUZZ
nmap -sCV -p8888,8888,110 10.14.68.102 -oN scan.txt
```

## netcat

### pwncat

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.75.141/FUZZ
evil-winrm -i 10.44.234.166 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.188.168 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `netcat`
- `Cron Job`
- `mimikatz`
