---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, persistence, networking, cheatsheet, malware"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-432.html"
URL_IMAGES: ""
Date: "2025-09-02"
Tags: "Enumeration, Persistence, Networking, Cheatsheet, Malware"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-432"
Permalink: "/notes/note-yara-rule-writing-432.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IIS

### dcomexec

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.86.240.189 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Cron Job`
- `Path Traversal`
- `Unconstrained Delegation`
- `NTLM Relay`
- `DNS Rebinding`

## AlwaysInstallElevated

### Writable PATH

- `DNS Rebinding`
- `Silver Ticket`
- `impacket`
- `Open Redirect`

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.30.144.227 -u administrator -p 'P@ssw0rd!'
```

- `atexec`
- `metasploit`
- `Docker Escape`
- `SeDebugPrivilege`
- `Sudo Misconfiguration`
- `feroxbuster`

## PowerShell

### gobuster

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

- `NTLM Relay`
- `Docker Escape`
- `nmap`
- `Insecure Deserialization`

```bash
feroxbuster -h
feroxbuster -h
```
