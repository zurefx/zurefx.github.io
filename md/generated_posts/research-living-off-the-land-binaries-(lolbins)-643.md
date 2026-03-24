---
TitleSEO: "Living off the Land Binaries (LOLBins) | ZureFX"
TitlePost: "Living off the Land Binaries (LOLBins)"
Author: "ZureFX"
Description: "Technical research on Living off the Land Binaries (LOLBins). In-depth analysis with PoC and mitigation strategies."
Keywords: "zero day, format string, malware analysis, cve, exploit development, buffer overflow"
URL: "https://zurefx.github.io/research/research-living-off-the-land-binaries-(lolbins)-643.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-living-off-the-land-binaries-(lolbins)-643/"
Date: "2024-02-22"
Tags: "Zero Day, Format String, Malware Analysis, CVE, Exploit Development, Buffer Overflow"
Section: "research"
Lang: "en"
main_img: "research-living-off-the-land-binaries-(lolbins)-64"
Permalink: "/research/research-living-off-the-land-binaries-(lolbins)-643.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## Background

### Context

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

### Related Work

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

## Technical Analysis

### Vulnerability Details

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.108.58.252 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.70.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Proof of Concept

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```python
evil-winrm -i 10.30.45.202 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.110.96.3 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Exploitation Chain

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.80.254/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Impact Assessment

### Risk Analysis

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

## Mitigation

### Short-term Fixes

- The application stored sensitive credentials in an unencrypted configuration file.
- Lateral movement was facilitated by reusing discovered credentials across services.
- Authentication bypass was achieved through careful manipulation of the login mechanism.

### Long-term Recommendations

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Conclusion

### Final Thoughts

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.
