---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "linux, oscp, dfir"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-760.html"
URL_IMAGES: ""
Date: "2024-07-28"
Tags: "Linux, OSCP, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-760"
Permalink: "/notes/note-linux-privilege-escalation-techniques-760.html"
BtnLabel: "Read Notes"
Pick: 0
---
## XSS

### PowerShell

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p995,993,443 10.33.85.228 -oN scan.txt
evil-winrm -i 10.63.145.104 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.223.150/FUZZ
```

## ffuf

### burpsuite

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.228.145/FUZZ
nmap -sCV -p445,636,143 10.68.183.153 -oN scan.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.189.68/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.214.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## C#

### hashcat

```python
crackmapexec smb 10.129.44.219 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.78.216.77 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.80.123.29 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.46.118.112 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.176.195 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```python
nmap -sCV -p3306,135,23 10.34.88.28 -oN scan.txt
evil-winrm -i 10.36.87.165 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.14.69.81 -u administrator -p 'P@ssw0rd!' --shares
```

## POP3

### ligolo-ng

```powershell
gobuster dir -u http://10.47.168.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.129.193.124 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

- `sqlmap`
- `psexec`
- `Writable PATH`
- `Local File Inclusion`
- `Open Redirect`
- `rpcclient`

## AS-REP Roasting

### Laravel

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p80,8443,5985 10.115.154.85 -oN scan.txt
feroxbuster -h
nmap -sCV -p993,22,139 10.109.131.38 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## chisel

### crackmapexec

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.77.168.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.97.117.172/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.70.97/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `CORS Misconfiguration`
- `ligolo-ng`
- `hydra`
- `Sudo Misconfiguration`
- `smbclient`

```bash
nmap -sCV -p445,8888,3306 10.63.113.49 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
