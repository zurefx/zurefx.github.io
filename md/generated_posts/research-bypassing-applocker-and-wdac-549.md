---
TitleSEO: "Bypassing AppLocker and WDAC | ZureFX"
TitlePost: "Bypassing AppLocker and WDAC"
Author: "ZureFX"
Description: "Technical research on Bypassing AppLocker and WDAC. In-depth analysis with PoC and mitigation strategies."
Keywords: "heap exploitation, malware analysis, uaf, zero day, kernel, rop"
URL: "https://zurefx.github.io/research/research-bypassing-applocker-and-wdac-549.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-bypassing-applocker-and-wdac-549/"
Date: "2024-08-22"
Tags: "Heap Exploitation, Malware Analysis, UAF, Zero Day, Kernel, ROP"
Section: "research"
Lang: "en"
main_img: "research-bypassing-applocker-and-wdac-549"
Permalink: "/research/research-bypassing-applocker-and-wdac-549.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Background

### Context

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Related Work

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Technical Analysis

### Vulnerability Details

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Proof of Concept

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```python
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.234.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.118.223.158 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

### Exploitation Chain

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Impact Assessment

### Risk Analysis

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## Mitigation

### Short-term Fixes

- The application stored sensitive credentials in an unencrypted configuration file.
- The backup files contained sensitive information that should not have been accessible.
- Group Policy Preferences contained encrypted but recoverable credentials.

### Long-term Recommendations

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Conclusion

### Final Thoughts

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.
