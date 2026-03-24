---
TitleSEO: "Advanced Phishing Infrastructure Setup | ZureFX"
TitlePost: "Advanced Phishing Infrastructure Setup"
Author: "ZureFX"
Description: "Technical research on Advanced Phishing Infrastructure Setup. In-depth analysis with PoC and mitigation strategies."
Keywords: "kernel, heap exploitation, zero day, exploit development"
URL: "https://zurefx.github.io/research/research-advanced-phishing-infrastructure-setup-723.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-advanced-phishing-infrastructure-setup-723/"
Date: "2024-06-12"
Tags: "Kernel, Heap Exploitation, Zero Day, Exploit Development"
Section: "research"
Lang: "en"
main_img: "research-advanced-phishing-infrastructure-setup-72"
Permalink: "/research/research-advanced-phishing-infrastructure-setup-723.html"
BtnLabel: "Read Research"
Pick: 1
---
## Abstract

### Summary

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Background

### Context

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Related Work

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Technical Analysis

### Vulnerability Details

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.96.135.19 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p110,587,9200 10.48.6.6 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.100.74/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Proof of Concept

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```python
evil-winrm -i 10.43.234.223 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### Exploitation Chain

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.68.22
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.138.232 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Impact Assessment

### Risk Analysis

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## Mitigation

### Short-term Fixes

- Command injection was possible through unsanitized user input in the search functionality.
- Privilege escalation was possible due to misconfigured sudo permissions.
- The scheduled task ran with elevated privileges and could be abused for escalation.

### Long-term Recommendations

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Conclusion

### Final Thoughts

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.
