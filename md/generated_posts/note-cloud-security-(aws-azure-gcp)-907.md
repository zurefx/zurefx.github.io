---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "persistence, blue team, linux"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-907.html"
URL_IMAGES: ""
Date: "2024-11-11"
Tags: "Persistence, Blue Team, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-907"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-907.html"
BtnLabel: "Read Notes"
Pick: 0
---
## C#

### Insecure Deserialization

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.218.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.27.20.230/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `Unconstrained Delegation`
- `LAPS Abuse`
- `socat`
- `hydra`

## Spring

### impacket

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.54.65.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Laravel

### hashcat

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

- `mimikatz`
- `hashcat`
- `netcat`
- `nmap`
- `atexec`
- `impacket`

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.145.139/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Constrained Delegation

### ffuf

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## CentOS

### dcomexec

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.
