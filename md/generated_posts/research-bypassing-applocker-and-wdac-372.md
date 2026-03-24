---
TitleSEO: "Bypassing AppLocker and WDAC | ZureFX"
TitlePost: "Bypassing AppLocker and WDAC"
Author: "ZureFX"
Description: "Technical research on Bypassing AppLocker and WDAC. In-depth analysis with PoC and mitigation strategies."
Keywords: "malware analysis, shellcode, zero day, exploit development, uaf"
URL: "https://zurefx.github.io/research/research-bypassing-applocker-and-wdac-372.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-bypassing-applocker-and-wdac-372/"
Date: "2025-01-03"
Tags: "Malware Analysis, Shellcode, Zero Day, Exploit Development, UAF"
Section: "research"
Lang: "en"
main_img: "research-bypassing-applocker-and-wdac-372"
Permalink: "/research/research-bypassing-applocker-and-wdac-372.html"
BtnLabel: "Read Research"
Pick: 1
---
## Abstract

### Summary

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Background

### Context

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

### Related Work

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Technical Analysis

### Vulnerability Details

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p21,445,8080 10.61.2.138 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Proof of Concept

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.42.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Exploitation Chain

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.130.213/FUZZ
gobuster dir -u http://10.33.93.93/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Impact Assessment

### Risk Analysis

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## Mitigation

### Short-term Fixes

- The scheduled task ran with elevated privileges and could be abused for escalation.
- The database credentials were hardcoded in the application source code.
- Token impersonation allowed elevation to SYSTEM privileges on the target.

### Long-term Recommendations

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Conclusion

### Final Thoughts

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.
