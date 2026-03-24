---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "windows, privilege escalation, oscp"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-700.html"
URL_IMAGES: ""
Date: "2024-03-05"
Tags: "Windows, Privilege Escalation, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-700"
Permalink: "/notes/note-kubernetes-security-assessment-700.html"
BtnLabel: "Read Notes"
Pick: 0
---
## C#

### hydra

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.220.228
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.84.31.10 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## impacket

### nmap

- `hashcat`
- `Weak Service Permissions`
- `metasploit`

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## sharphound

### rubeus

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

- `wmiexec`
- `SeImpersonatePrivilege`
- `AlwaysInstallElevated`
- `DLL Hijacking`
- `LXD Privilege Escalation`
- `bloodhound`

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.
