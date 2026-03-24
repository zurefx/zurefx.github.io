---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, oscp, lateral movement, blue team, malware, linux"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-317.html"
URL_IMAGES: ""
Date: "2024-08-23"
Tags: "Cheatsheet, OSCP, Lateral Movement, Blue Team, Malware, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-317"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-317.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Spring

### SSRF

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
evil-winrm -i 10.89.231.11 -u administrator -p 'P@ssw0rd!'
```

- `GetUserSPNs`
- `Unquoted Service Path`
- `NTLM Relay`

## WordPress

### metasploit

```bash
crackmapexec smb 10.101.123.31 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.106.134.253/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.83.52.40 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.87.215.33/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** DCSync was identified as the primary attack vector in this scenario.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.22.253/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.64.82/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## IMAP

### HTTPS

```bash
nmap -sCV -p8080,5986,27017 10.38.120.18 -oN scan.txt
nmap -sCV -p8888,53,445 10.127.123.149 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).
