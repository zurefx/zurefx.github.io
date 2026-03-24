---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "malware, privilege escalation, blue team, oscp, lateral movement, windows"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-592.html"
URL_IMAGES: ""
Date: "2024-12-06"
Tags: "Malware, Privilege Escalation, Blue Team, OSCP, Lateral Movement, Windows"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-592"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-592.html"
BtnLabel: "Read Notes"
Pick: 0
---
## socat

### feroxbuster

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.46.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p9200,22,27017 10.41.186.67 -oN scan.txt
nmap -sCV -p464,464,464 10.66.83.9 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## impacket

### Resource-Based Constrained Delegation

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

## FTP

### Subdomain Takeover

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## SSRF

### SSH

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.100.109.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5432,587,25 10.120.184.203 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.121.85 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.
