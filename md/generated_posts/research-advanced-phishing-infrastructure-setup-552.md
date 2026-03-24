---
TitleSEO: "Advanced Phishing Infrastructure Setup | ZureFX"
TitlePost: "Advanced Phishing Infrastructure Setup"
Author: "ZureFX"
Description: "Technical research on Advanced Phishing Infrastructure Setup. In-depth analysis with PoC and mitigation strategies."
Keywords: "uaf, kernel, exploit development, shellcode, rop"
URL: "https://zurefx.github.io/research/research-advanced-phishing-infrastructure-setup-552.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-advanced-phishing-infrastructure-setup-552/"
Date: "2024-09-07"
Tags: "UAF, Kernel, Exploit Development, Shellcode, ROP"
Section: "research"
Lang: "en"
main_img: "research-advanced-phishing-infrastructure-setup-55"
Permalink: "/research/research-advanced-phishing-infrastructure-setup-552.html"
BtnLabel: "Read Research"
Pick: 1
---
## Abstract

### Summary

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Background

### Context

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### Related Work

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Technical Analysis

### Vulnerability Details

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p1433,5986,3306 10.109.182.196 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

### Proof of Concept

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```python
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

### Exploitation Chain

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

## Impact Assessment

### Risk Analysis

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Mitigation

### Short-term Fixes

- The target system was identified as running a vulnerable version of the service.
- Initial enumeration revealed several interesting open ports on the target.
- Group Policy Preferences contained encrypted but recoverable credentials.

### Long-term Recommendations

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Conclusion

### Final Thoughts

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.
