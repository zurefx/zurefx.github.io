---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, linux"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-704.html"
URL_IMAGES: ""
Date: "2025-03-13"
Tags: "Enumeration, Lateral Movement, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-704"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-704.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetUserSPNs

### LDAP

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.98.82.56 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.34.34.47 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `SSTI`
- `Cron Job`
- `rubeus`
- `Local File Inclusion`
- `CORS Misconfiguration`

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

## Command Injection

### DNS

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

- `ldapsearch`
- `DLL Hijacking`
- `wpscan`
- `hydra`

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.194.88
evil-winrm -i 10.50.148.194 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Kerberos

### secretsdump

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.39.154
```

```bash
gobuster dir -u http://10.105.234.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.214.109/FUZZ
```

- `SSTI`
- `LXD Privilege Escalation`
- `Weak Service Permissions`
- `SSRF`
- `Subdomain Takeover`

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Remote File Inclusion

### POP3

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

- `bloodhound`
- `Pass the Ticket`
- `DCSync`
- `gobuster`
- `SeDebugPrivilege`
- `Weak Service Permissions`
