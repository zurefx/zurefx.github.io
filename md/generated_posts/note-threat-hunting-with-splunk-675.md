---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, blue team, windows"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-675.html"
URL_IMAGES: ""
Date: "2024-02-20"
Tags: "DFIR, Blue Team, Windows"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-675"
Permalink: "/notes/note-threat-hunting-with-splunk-675.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DNS Rebinding

### Kerberoasting

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## WordPress

### Unconstrained Delegation

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.2.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## HTTPS

### rubeus

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Broken Access Control

### NFS No Root Squash

```bash
evil-winrm -i 10.92.166.21 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.122.135/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.234.116/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.28.74/FUZZ
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.187.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.33.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.77.94
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.139.184
```

## Pass the Ticket

### hydra

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p445,445,9200 10.65.121.146 -oN scan.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.151.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.85.17.18 -u administrator -p 'P@ssw0rd!' --shares
```

- `Unquoted Service Path`
- `XXE`
- `gobuster`
- `Subdomain Takeover`
- `SUID Binary`

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.
