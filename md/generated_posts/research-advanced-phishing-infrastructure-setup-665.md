---
TitleSEO: "Advanced Phishing Infrastructure Setup | ZureFX"
TitlePost: "Advanced Phishing Infrastructure Setup"
Author: "ZureFX"
Description: "Technical research on Advanced Phishing Infrastructure Setup. In-depth analysis with PoC and mitigation strategies."
Keywords: "buffer overflow, exploit development, kernel, cve"
URL: "https://zurefx.github.io/research/research-advanced-phishing-infrastructure-setup-665.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-advanced-phishing-infrastructure-setup-665/"
Date: "2024-02-06"
Tags: "Buffer Overflow, Exploit Development, Kernel, CVE"
Section: "research"
Lang: "en"
main_img: "research-advanced-phishing-infrastructure-setup-66"
Permalink: "/research/research-advanced-phishing-infrastructure-setup-665.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Background

### Context

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Related Work

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Technical Analysis

### Vulnerability Details

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.145.56/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.64.161.90 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8080,110,445 10.117.49.34 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### Proof of Concept

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
gobuster dir -u http://10.33.161.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Exploitation Chain

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.49.226/FUZZ
```

## Impact Assessment

### Risk Analysis

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Mitigation

### Short-term Fixes

- The target system was identified as running a vulnerable version of the service.
- Weak file permissions allowed modification of critical system files.
- Weak file permissions allowed modification of critical system files.

### Long-term Recommendations

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Conclusion

### Final Thoughts

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.
