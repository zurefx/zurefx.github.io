---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "linux, blue team, malware, oscp, windows"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-180.html"
URL_IMAGES: ""
Date: "2025-05-17"
Tags: "Linux, Blue Team, Malware, OSCP, Windows"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-180"
Permalink: "/notes/note-threat-hunting-with-splunk-180.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSTI

### wpscan

```bash
nmap -sCV -p23,25,53 10.10.245.10 -oN scan.txt
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.66.113/FUZZ
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.246.142/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.55.95
gobuster dir -u http://10.79.211.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## XSS

### PowerShell

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

- `feroxbuster`
- `netcat`
- `gobuster`
- `CSRF`
- `Writable PATH`

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.143.151/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3389,5986,5986 10.43.245.39 -oN scan.txt
```

## Remote File Inclusion

### chisel

- `wpscan`
- `NFS No Root Squash`
- `sharphound`
- `smbexec`

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.
