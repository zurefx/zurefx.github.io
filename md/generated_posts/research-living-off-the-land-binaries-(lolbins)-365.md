---
TitleSEO: "Living off the Land Binaries (LOLBins) | ZureFX"
TitlePost: "Living off the Land Binaries (LOLBins)"
Author: "ZureFX"
Description: "Technical research on Living off the Land Binaries (LOLBins). In-depth analysis with PoC and mitigation strategies."
Keywords: "format string, malware analysis, kernel, rop, aslr bypass"
URL: "https://zurefx.github.io/research/research-living-off-the-land-binaries-(lolbins)-365.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-living-off-the-land-binaries-(lolbins)-365/"
Date: "2025-06-26"
Tags: "Format String, Malware Analysis, Kernel, ROP, ASLR Bypass"
Section: "research"
Lang: "en"
main_img: "research-living-off-the-land-binaries-(lolbins)-36"
Permalink: "/research/research-living-off-the-land-binaries-(lolbins)-365.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Background

### Context

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### Related Work

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## Technical Analysis

### Vulnerability Details

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Proof of Concept

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Exploitation Chain

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.98.18.53 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.34.101.186 -u administrator -p 'P@ssw0rd!' --shares
```

## Impact Assessment

### Risk Analysis

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Mitigation

### Short-term Fixes

- Privilege escalation was possible due to misconfigured sudo permissions.
- The target system was identified as running a vulnerable version of the service.
- Initial enumeration revealed several interesting open ports on the target.

### Long-term Recommendations

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Conclusion

### Final Thoughts

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.
