---
TitleSEO: "Bypassing AppLocker and WDAC | ZureFX"
TitlePost: "Bypassing AppLocker and WDAC"
Author: "ZureFX"
Description: "Technical research on Bypassing AppLocker and WDAC. In-depth analysis with PoC and mitigation strategies."
Keywords: "exploit development, shellcode, zero day"
URL: "https://zurefx.github.io/research/research-bypassing-applocker-and-wdac-150.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-bypassing-applocker-and-wdac-150/"
Date: "2025-02-01"
Tags: "Exploit Development, Shellcode, Zero Day"
Section: "research"
Lang: "en"
main_img: "research-bypassing-applocker-and-wdac-150"
Permalink: "/research/research-bypassing-applocker-and-wdac-150.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Background

### Context

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

### Related Work

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Technical Analysis

### Vulnerability Details

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.32.44 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.194.231
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.186.52/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### Proof of Concept

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```python
evil-winrm -i 10.49.63.199 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.123.50.86 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.148.211
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### Exploitation Chain

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.92.208.67 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.243.178
```

## Impact Assessment

### Risk Analysis

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Mitigation

### Short-term Fixes

- The service was running without proper input validation, leading to injection vulnerabilities.
- Weak file permissions allowed modification of critical system files.
- Privilege escalation was possible due to misconfigured sudo permissions.

### Long-term Recommendations

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## Conclusion

### Final Thoughts

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.
