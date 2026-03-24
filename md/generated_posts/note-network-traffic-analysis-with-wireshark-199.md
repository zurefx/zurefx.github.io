---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "networking, dfir, cheatsheet, privilege escalation"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-199.html"
URL_IMAGES: ""
Date: "2024-07-25"
Tags: "Networking, DFIR, Cheatsheet, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-199"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-199.html"
BtnLabel: "Read Notes"
Pick: 0
---
## impacket

### Writable PATH

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

- `Path Traversal`
- `ligolo-ng`
- `smbexec`
- `IDOR`
- `feroxbuster`
- `hashcat`

## dcomexec

### Windows Server 2019

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.27.181.88 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

## PHP

### IMAP

```bash
crackmapexec smb 10.68.212.126 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.105.221/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```powershell
nmap -sCV -p22,995,8888 10.50.141.88 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.88.12 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.43.7.8 -u administrator -p 'P@ssw0rd!' --shares
```

- `Remote Code Execution`
- `netcat`
- `SeImpersonatePrivilege`
- `Pass the Hash`

## metasploit

### CentOS

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```python
gobuster dir -u http://10.51.159.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.228.156/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.150.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
crackmapexec smb 10.69.86.142 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

## CSRF

### Kali Linux

- `sqlmap`
- `GetNPUsers`
- `rubeus`
- `pwncat`
- `LAPS Abuse`
- `Unquoted Service Path`

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.93.246/FUZZ
gobuster dir -u http://10.120.35.87/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.66.177.173 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.
