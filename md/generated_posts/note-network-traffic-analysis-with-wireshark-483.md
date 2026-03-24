---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, oscp, networking, persistence, lateral movement"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-483.html"
URL_IMAGES: ""
Date: "2025-03-21"
Tags: "Enumeration, OSCP, Networking, Persistence, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-483"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-483.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LAPS Abuse

### Python

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.29.24/FUZZ
gobuster dir -u http://10.129.166.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.223.50 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Golden Ticket

### Django

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## PostgreSQL

### wpscan

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.14.132.112 -u administrator -p 'P@ssw0rd!'
```

## Drupal

### Ubuntu 20.04

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.205.14/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.95.192.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.56.163 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## Ruby on Rails

### Flask

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Cron Job

### XSS

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `sharphound`
- `psexec`
- `smbexec`

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.
