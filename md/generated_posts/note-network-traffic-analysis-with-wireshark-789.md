---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, dfir, privilege escalation, blue team, networking"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-789.html"
URL_IMAGES: ""
Date: "2024-07-28"
Tags: "Lateral Movement, DFIR, Privilege Escalation, Blue Team, Networking"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-789"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-789.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DCSync

### ACL Abuse

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## SSH

### Drupal

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.171.130
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.148.8/FUZZ
nmap -sCV -p3389,5432,5986 10.58.19.81 -oN scan.txt
```

- `smbclient`
- `enum4linux`
- `metasploit`
- `Insecure Deserialization`
- `hydra`
- `sharphound`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.101.75.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.163.49/FUZZ
```

## bloodhound

### metasploit

- `Subdomain Takeover`
- `rubeus`
- `kerbrute`
- `CSRF`
- `nmap`
- `lookupsid`

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## Constrained Delegation

### Golden Ticket

- `Local File Inclusion`
- `LXD Privilege Escalation`
- `DNS Rebinding`

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.106.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.51.35.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## rpcclient

### IIS

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

- `XSS`
- `Insecure Deserialization`
- `GetNPUsers`
- `smbclient`
- `XXE`
