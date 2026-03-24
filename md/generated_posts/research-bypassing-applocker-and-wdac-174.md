---
TitleSEO: "Bypassing AppLocker and WDAC | ZureFX"
TitlePost: "Bypassing AppLocker and WDAC"
Author: "ZureFX"
Description: "Technical research on Bypassing AppLocker and WDAC. In-depth analysis with PoC and mitigation strategies."
Keywords: "rop, aslr bypass, uaf, exploit development"
URL: "https://zurefx.github.io/research/research-bypassing-applocker-and-wdac-174.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-bypassing-applocker-and-wdac-174/"
Date: "2024-07-21"
Tags: "ROP, ASLR Bypass, UAF, Exploit Development"
Section: "research"
Lang: "en"
main_img: "research-bypassing-applocker-and-wdac-174"
Permalink: "/research/research-bypassing-applocker-and-wdac-174.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Background

### Context

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

### Related Work

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Technical Analysis

### Vulnerability Details

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

### Proof of Concept

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.223.29 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Exploitation Chain

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.79.137
crackmapexec smb 10.120.231.203 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.127.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Impact Assessment

### Risk Analysis

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Mitigation

### Short-term Fixes

- The scheduled task ran with elevated privileges and could be abused for escalation.
- The backup files contained sensitive information that should not have been accessible.
- The service account had excessive permissions assigned in Active Directory.

### Long-term Recommendations

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Conclusion

### Final Thoughts

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).
