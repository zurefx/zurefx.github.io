---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "windows, blue team, cheatsheet"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-254.html"
URL_IMAGES: ""
Date: "2025-12-24"
Tags: "Windows, Blue Team, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-254"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-254.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CSRF

### Redis

- `Local File Inclusion`
- `gobuster`
- `chisel`
- `SSRF`
- `Weak Service Permissions`

- `XXE`
- `ACL Abuse`
- `ligolo-ng`
- `ffuf`
- `socat`

## mimikatz

### XXE

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

- `Open Redirect`
- `Cron Job`
- `pwncat`
- `feroxbuster`

## SSTI

### chisel

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
nmap -sCV -p445,8888,5986 10.127.167.218 -oN scan.txt
```

- `Insecure Deserialization`
- `ACL Abuse`
- `NTLM Relay`

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.105.5/FUZZ
```

## DNS

### Kali Linux

- `Sudo Misconfiguration`
- `GPP Password`
- `kerbrute`
- `smbclient`

- `psexec`
- `GetNPUsers`
- `Command Injection`
- `SSRF`

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

## GPP Password

### Command Injection

- `NFS No Root Squash`
- `Remote File Inclusion`
- `Remote Code Execution`
- `dcomexec`
- `wmiexec`
- `evil-winrm`

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Unquoted Service Path

### john

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.51.119
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.
