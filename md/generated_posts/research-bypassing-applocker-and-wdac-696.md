---
TitleSEO: "Bypassing AppLocker and WDAC | ZureFX"
TitlePost: "Bypassing AppLocker and WDAC"
Author: "ZureFX"
Description: "Technical research on Bypassing AppLocker and WDAC. In-depth analysis with PoC and mitigation strategies."
Keywords: "format string, zero day, malware analysis, cve, buffer overflow"
URL: "https://zurefx.github.io/research/research-bypassing-applocker-and-wdac-696.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-bypassing-applocker-and-wdac-696/"
Date: "2024-06-10"
Tags: "Format String, Zero Day, Malware Analysis, CVE, Buffer Overflow"
Section: "research"
Lang: "en"
main_img: "research-bypassing-applocker-and-wdac-696"
Permalink: "/research/research-bypassing-applocker-and-wdac-696.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Background

### Context

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Related Work

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

## Technical Analysis

### Vulnerability Details

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Proof of Concept

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.36.20
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Exploitation Chain

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.59.234/FUZZ
nmap -sCV -p22,993,22 10.36.192.10 -oN scan.txt
feroxbuster -h
```

## Impact Assessment

### Risk Analysis

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Mitigation

### Short-term Fixes

- The application stored sensitive credentials in an unencrypted configuration file.
- Weak file permissions allowed modification of critical system files.
- The application stored sensitive credentials in an unencrypted configuration file.

### Long-term Recommendations

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Conclusion

### Final Thoughts

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.
