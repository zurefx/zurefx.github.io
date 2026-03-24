---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, windows, networking, privilege escalation, linux"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-521.html"
URL_IMAGES: ""
Date: "2025-02-20"
Tags: "DFIR, Windows, Networking, Privilege Escalation, Linux"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-521"
Permalink: "/notes/note-bash-one-liners-for-security-testing-521.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Spring

### Broken Access Control

- `DCSync`
- `psexec`
- `Kerberoasting`
- `Local File Inclusion`
- `CSRF`

```bash
nmap -sCV -p21,993,389 10.12.168.163 -oN scan.txt
```

## WordPress

### .NET

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `burpsuite`
- `CSRF`
- `wmiexec`

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

- `Remote Code Execution`
- `LAPS Abuse`
- `Writable PATH`
- `CORS Misconfiguration`
- `sqlmap`

## DCSync

### rpcclient

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.
