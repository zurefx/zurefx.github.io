---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, networking, linux, cheatsheet, windows, malware"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-512.html"
URL_IMAGES: ""
Date: "2026-03-19"
Tags: "Privilege Escalation, Networking, Linux, Cheatsheet, Windows, Malware"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-512"
Permalink: "/notes/note-threat-hunting-with-splunk-512.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSTI

### PostgreSQL

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.17.253/FUZZ
```

- `ldapsearch`
- `AlwaysInstallElevated`
- `Remote Code Execution`

```python
gobuster dir -u http://10.28.41.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.7.182/FUZZ
```

## Joomla

### IMAP

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.118.29/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.249.37
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.1.133/FUZZ
```

## nmap

### SMTP

- `SSRF`
- `CSRF`
- `secretsdump`

```bash
evil-winrm -i 10.128.91.11 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.148.75
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.
