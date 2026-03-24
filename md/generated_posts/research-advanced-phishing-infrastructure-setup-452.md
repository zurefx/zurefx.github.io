---
TitleSEO: "Advanced Phishing Infrastructure Setup | ZureFX"
TitlePost: "Advanced Phishing Infrastructure Setup"
Author: "ZureFX"
Description: "Technical research on Advanced Phishing Infrastructure Setup. In-depth analysis with PoC and mitigation strategies."
Keywords: "format string, shellcode, uaf, rop"
URL: "https://zurefx.github.io/research/research-advanced-phishing-infrastructure-setup-452.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-advanced-phishing-infrastructure-setup-452/"
Date: "2025-05-14"
Tags: "Format String, Shellcode, UAF, ROP"
Section: "research"
Lang: "en"
main_img: "research-advanced-phishing-infrastructure-setup-45"
Permalink: "/research/research-advanced-phishing-infrastructure-setup-452.html"
BtnLabel: "Read Research"
Pick: 1
---
## Abstract

### Summary

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Background

### Context

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

### Related Work

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Technical Analysis

### Vulnerability Details

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.63.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Proof of Concept

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.218.46/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

### Exploitation Chain

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.23.79.23/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Impact Assessment

### Risk Analysis

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

## Mitigation

### Short-term Fixes

- The scheduled task ran with elevated privileges and could be abused for escalation.
- The kernel version was outdated and vulnerable to a publicly known exploit.
- Token impersonation allowed elevation to SYSTEM privileges on the target.

### Long-term Recommendations

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Conclusion

### Final Thoughts

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.
