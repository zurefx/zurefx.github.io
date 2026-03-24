---
TitleSEO: "Living off the Land Binaries (LOLBins) | ZureFX"
TitlePost: "Living off the Land Binaries (LOLBins)"
Author: "ZureFX"
Description: "Technical research on Living off the Land Binaries (LOLBins). In-depth analysis with PoC and mitigation strategies."
Keywords: "format string, buffer overflow, aslr bypass, kernel"
URL: "https://zurefx.github.io/research/research-living-off-the-land-binaries-(lolbins)-466.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-living-off-the-land-binaries-(lolbins)-466/"
Date: "2024-09-17"
Tags: "Format String, Buffer Overflow, ASLR Bypass, Kernel"
Section: "research"
Lang: "en"
main_img: "research-living-off-the-land-binaries-(lolbins)-46"
Permalink: "/research/research-living-off-the-land-binaries-(lolbins)-466.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Background

### Context

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Related Work

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Technical Analysis

### Vulnerability Details

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.97.165.103 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.64.191.187 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Proof of Concept

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
evil-winrm -i 10.123.156.38 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.102.6.225 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Exploitation Chain

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.84.187.58 -u administrator -p 'P@ssw0rd!' --shares
```

## Impact Assessment

### Risk Analysis

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Mitigation

### Short-term Fixes

- The database credentials were hardcoded in the application source code.
- The application stored sensitive credentials in an unencrypted configuration file.
- The kernel version was outdated and vulnerable to a publicly known exploit.

### Long-term Recommendations

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Conclusion

### Final Thoughts

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.
