---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "linux, blue team, cheatsheet"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-448.html"
URL_IMAGES: ""
Date: "2025-09-02"
Tags: "Linux, Blue Team, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-448"
Permalink: "/notes/note-threat-hunting-with-splunk-448.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Drupal

### mimikatz

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

## Elasticsearch

### Windows Server 2019

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

- `ffuf`
- `burpsuite`
- `kerbrute`

- `Golden Ticket`
- `bloodhound`
- `john`
- `impacket`
- `Pass the Ticket`
- `Path Traversal`

```bash
nmap -sCV -p443,135,27017 10.128.117.180 -oN scan.txt
crackmapexec smb 10.126.10.222 -u administrator -p 'P@ssw0rd!' --shares
```

## Redis

### SNMP

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.238.47/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.210.205/FUZZ
feroxbuster -h
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## XXE

### Django

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

- `Path Traversal`
- `Remote Code Execution`
- `sqlmap`
- `feroxbuster`
