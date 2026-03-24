---
TitleSEO: "Bypassing AppLocker and WDAC | ZureFX"
TitlePost: "Bypassing AppLocker and WDAC"
Author: "ZureFX"
Description: "Technical research on Bypassing AppLocker and WDAC. In-depth analysis with PoC and mitigation strategies."
Keywords: "cve, heap exploitation, zero day, format string, rop, shellcode"
URL: "https://zurefx.github.io/research/research-bypassing-applocker-and-wdac-698.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-bypassing-applocker-and-wdac-698/"
Date: "2025-01-27"
Tags: "CVE, Heap Exploitation, Zero Day, Format String, ROP, Shellcode"
Section: "research"
Lang: "en"
main_img: "research-bypassing-applocker-and-wdac-698"
Permalink: "/research/research-bypassing-applocker-and-wdac-698.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Background

### Context

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Related Work

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Technical Analysis

### Vulnerability Details

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.15.121.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

### Proof of Concept

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.212.115/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Exploitation Chain

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.114.182.4 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.49.136.208 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Impact Assessment

### Risk Analysis

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Mitigation

### Short-term Fixes

- The target system was identified as running a vulnerable version of the service.
- Lateral movement was facilitated by reusing discovered credentials across services.
- The service account had excessive permissions assigned in Active Directory.

### Long-term Recommendations

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Conclusion

### Final Thoughts

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.
