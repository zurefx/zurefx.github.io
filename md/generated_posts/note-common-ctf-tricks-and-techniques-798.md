---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, persistence, windows, cheatsheet, blue team, privilege escalation"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-798.html"
URL_IMAGES: ""
Date: "2024-11-19"
Tags: "OSCP, Persistence, Windows, Cheatsheet, Blue Team, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-798"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-798.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### Open Redirect

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## socat

### IIS

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## msfvenom

### AS-REP Roasting

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.82.238.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Node.js

### Drupal

- `hashcat`
- `feroxbuster`
- `psexec`
- `ligolo-ng`
- `enum4linux`

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

- `sharphound`
- `Remote Code Execution`
- `AS-REP Roasting`

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.28.122
crackmapexec smb 10.71.197.221 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## burpsuite

### ffuf

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.72.181.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.92.165.92 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.53.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Kerberos

### CORS Misconfiguration

```powershell
gobuster dir -u http://10.47.185.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.60.86 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.253.202
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.4.249/FUZZ
```

- `DNS Rebinding`
- `rubeus`
- `feroxbuster`
