---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "malware, lateral movement, dfir, privilege escalation, windows"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-172.html"
URL_IMAGES: ""
Date: "2025-06-21"
Tags: "Malware, Lateral Movement, DFIR, Privilege Escalation, Windows"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-172"
Permalink: "/notes/note-kubernetes-security-assessment-172.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### SeImpersonatePrivilege

```bash
nmap -sCV -p8080,443,993 10.48.222.196 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.54.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## C#

### sharphound

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

- `XXE`
- `hydra`
- `sharphound`
- `SUID Binary`

## Bash

### Spring

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.151.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8443,1433,80 10.12.24.154 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.150.119
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p9200,135,25 10.58.113.5 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.60.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## SSH

### HTTP

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.230.134/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.
