---
TitleSEO: "Living off the Land Binaries (LOLBins) | ZureFX"
TitlePost: "Living off the Land Binaries (LOLBins)"
Author: "ZureFX"
Description: "Technical research on Living off the Land Binaries (LOLBins). In-depth analysis with PoC and mitigation strategies."
Keywords: "malware analysis, format string, buffer overflow, shellcode, kernel"
URL: "https://zurefx.github.io/research/research-living-off-the-land-binaries-(lolbins)-958.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-living-off-the-land-binaries-(lolbins)-958/"
Date: "2024-02-01"
Tags: "Malware Analysis, Format String, Buffer Overflow, Shellcode, Kernel"
Section: "research"
Lang: "en"
main_img: "research-living-off-the-land-binaries-(lolbins)-95"
Permalink: "/research/research-living-off-the-land-binaries-(lolbins)-958.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Background

### Context

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Related Work

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Technical Analysis

### Vulnerability Details

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.16.86 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

### Proof of Concept

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
crackmapexec smb 10.114.216.159 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.81.90.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

### Exploitation Chain

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.118.190.174 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p587,443,464 10.50.43.28 -oN scan.txt
crackmapexec smb 10.54.52.114 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.219.60/FUZZ
```

## Impact Assessment

### Risk Analysis

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Mitigation

### Short-term Fixes

- The database credentials were hardcoded in the application source code.
- The application stored sensitive credentials in an unencrypted configuration file.
- The backup files contained sensitive information that should not have been accessible.

### Long-term Recommendations

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## Conclusion

### Final Thoughts

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.
