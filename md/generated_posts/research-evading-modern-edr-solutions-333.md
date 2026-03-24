---
TitleSEO: "Evading Modern EDR Solutions | ZureFX"
TitlePost: "Evading Modern EDR Solutions"
Author: "ZureFX"
Description: "Technical research on Evading Modern EDR Solutions. In-depth analysis with PoC and mitigation strategies."
Keywords: "exploit development, uaf, heap exploitation, zero day"
URL: "https://zurefx.github.io/research/research-evading-modern-edr-solutions-333.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-evading-modern-edr-solutions-333/"
Date: "2024-06-21"
Tags: "Exploit Development, UAF, Heap Exploitation, Zero Day"
Section: "research"
Lang: "en"
main_img: "research-evading-modern-edr-solutions-333"
Permalink: "/research/research-evading-modern-edr-solutions-333.html"
BtnLabel: "Read Research"
Pick: 1
---
## Abstract

### Summary

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## Background

### Context

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

### Related Work

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Technical Analysis

### Vulnerability Details

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.51.240.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.23.44.93/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.87.39.209 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p25,22,143 10.126.45.238 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

### Proof of Concept

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```python
crackmapexec smb 10.24.192.34 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.119.1.76 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Exploitation Chain

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.109.218.11 -u administrator -p 'P@ssw0rd!' --shares
```

## Impact Assessment

### Risk Analysis

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Mitigation

### Short-term Fixes

- Unconstrained delegation was enabled on the compromised machine.
- Network traffic analysis revealed unencrypted communications containing user credentials.
- The scheduled task ran with elevated privileges and could be abused for escalation.

### Long-term Recommendations

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## Conclusion

### Final Thoughts

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.
