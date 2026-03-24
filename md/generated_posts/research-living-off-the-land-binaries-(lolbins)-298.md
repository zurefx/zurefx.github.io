---
TitleSEO: "Living off the Land Binaries (LOLBins) | ZureFX"
TitlePost: "Living off the Land Binaries (LOLBins)"
Author: "ZureFX"
Description: "Technical research on Living off the Land Binaries (LOLBins). In-depth analysis with PoC and mitigation strategies."
Keywords: "format string, buffer overflow, rop, exploit development, zero day"
URL: "https://zurefx.github.io/research/research-living-off-the-land-binaries-(lolbins)-298.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-living-off-the-land-binaries-(lolbins)-298/"
Date: "2024-06-12"
Tags: "Format String, Buffer Overflow, ROP, Exploit Development, Zero Day"
Section: "research"
Lang: "en"
main_img: "research-living-off-the-land-binaries-(lolbins)-29"
Permalink: "/research/research-living-off-the-land-binaries-(lolbins)-298.html"
BtnLabel: "Read Research"
Pick: 1
---
## Abstract

### Summary

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Background

### Context

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Related Work

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

## Technical Analysis

### Vulnerability Details

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.15.135.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.212.77
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### Proof of Concept

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
feroxbuster -h
evil-winrm -i 10.105.105.184 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

### Exploitation Chain

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.116.188.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.194.127 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## Impact Assessment

### Risk Analysis

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Mitigation

### Short-term Fixes

- Token impersonation allowed elevation to SYSTEM privileges on the target.
- Command injection was possible through unsanitized user input in the search functionality.
- Privilege escalation was possible due to misconfigured sudo permissions.

### Long-term Recommendations

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

## Conclusion

### Final Thoughts

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.
