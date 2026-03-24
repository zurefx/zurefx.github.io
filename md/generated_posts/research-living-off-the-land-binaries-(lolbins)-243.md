---
TitleSEO: "Living off the Land Binaries (LOLBins) | ZureFX"
TitlePost: "Living off the Land Binaries (LOLBins)"
Author: "ZureFX"
Description: "Technical research on Living off the Land Binaries (LOLBins). In-depth analysis with PoC and mitigation strategies."
Keywords: "kernel, rop, exploit development"
URL: "https://zurefx.github.io/research/research-living-off-the-land-binaries-(lolbins)-243.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-living-off-the-land-binaries-(lolbins)-243/"
Date: "2024-01-11"
Tags: "Kernel, ROP, Exploit Development"
Section: "research"
Lang: "en"
main_img: "research-living-off-the-land-binaries-(lolbins)-24"
Permalink: "/research/research-living-off-the-land-binaries-(lolbins)-243.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Background

### Context

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### Related Work

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Technical Analysis

### Vulnerability Details

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.125.223.126 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Proof of Concept

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Exploitation Chain

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.48.110.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.90.66.128 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Impact Assessment

### Risk Analysis

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Mitigation

### Short-term Fixes

- The backup files contained sensitive information that should not have been accessible.
- Command injection was possible through unsanitized user input in the search functionality.
- The kernel version was outdated and vulnerable to a publicly known exploit.

### Long-term Recommendations

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Conclusion

### Final Thoughts

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.
