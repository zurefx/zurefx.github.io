---
TitleSEO: "Bypassing AppLocker and WDAC | ZureFX"
TitlePost: "Bypassing AppLocker and WDAC"
Author: "ZureFX"
Description: "Technical research on Bypassing AppLocker and WDAC. In-depth analysis with PoC and mitigation strategies."
Keywords: "shellcode, zero day, exploit development, malware analysis, heap exploitation, rop"
URL: "https://zurefx.github.io/research/research-bypassing-applocker-and-wdac-601.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-bypassing-applocker-and-wdac-601/"
Date: "2024-10-16"
Tags: "Shellcode, Zero Day, Exploit Development, Malware Analysis, Heap Exploitation, ROP"
Section: "research"
Lang: "en"
main_img: "research-bypassing-applocker-and-wdac-601"
Permalink: "/research/research-bypassing-applocker-and-wdac-601.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Background

### Context

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### Related Work

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Technical Analysis

### Vulnerability Details

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p5432,464,22 10.118.51.126 -oN scan.txt
gobuster dir -u http://10.29.81.179/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Proof of Concept

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.27.76/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

### Exploitation Chain

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.10.203.64 -u administrator -p 'P@ssw0rd!'
```

## Impact Assessment

### Risk Analysis

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## Mitigation

### Short-term Fixes

- The service was running without proper input validation, leading to injection vulnerabilities.
- Group Policy Preferences contained encrypted but recoverable credentials.
- Group Policy Preferences contained encrypted but recoverable credentials.

### Long-term Recommendations

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Conclusion

### Final Thoughts

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.
