---
TitleSEO:    "HackTheBox XD — Kerberoasting AD | ZureFX"
TitlePost:   "HTB XD — Easy Windows"
Author:      "ZureFX"
Description: "Full writeup for HackTheBox Active. SMB anonymous share enumeration, GPP password decryption with gpp-decrypt, and Kerberoasting the Administrator account to get SYSTEM."
Keywords:    "hackthebox, active, writeup, kerberoasting, gpp, smb, active directory, windows, easy"
URL:         "https://zurefx.github.io/writeups/htb-activexxxxxxxxx.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-active/"
Date:        "2026-03-25"
Tags:        "HackTheBox, Easy, Windows, Kerberoasting, GPP, SMB, ActiveDirectory"
Section:     "writeups"
Lang:        "en"
main_img:    "htb-active"
Permalink:   "/writeups/htb-activexxxxxxxxxx.html"
BtnLabel:    "Read Writeup"
Pick:        1
---
## Información General

### Contexto del sistema

El objetivo corresponde a una máquina Windows perteneciente a un dominio Active Directory, accesible dentro del entorno de Hack The Box. Desde el inicio, la superficie de ataque sugiere un controlador de dominio debido a la exposición de servicios típicos como Kerberos, LDAP y SMB. El compromiso se realiza siguiendo una metodología OSCP-like, priorizando enumeración exhaustiva, abuso de malas prácticas operativas y escalada de privilegios mediante pertenencia a grupos privilegiados.

La dirección IP asignada al objetivo durante el análisis fue `10.129.9.24`.

## Objetivos

### Alcance del compromiso

El objetivo final del ejercicio es obtener control total del sistema, culminando en acceso con privilegios de administrador del dominio o equivalentes. Para ello, se documenta el proceso completo desde enumeración inicial hasta la obtención de hashes del sistema, manteniendo trazabilidad técnica y justificando cada acción ejecutada.

## Enumeración

### Escaneo de puertos y servicios

El primer paso consistió en identificar la superficie de ataque expuesta mediante un escaneo TCP completo. Se utilizó `nmap` con parámetros agresivos de velocidad, minimizando reintentos y deshabilitando resolución DNS para reducir ruido y latencia.

```bash
sudo nmap -p- -sS -Pn -n --open --min-rate 6500 --max-retries 1 \
--initial-rtt-timeout 100ms --max-rtt-timeout 300ms -T4 \
10.129.9.24 -oG allPortsTCP
```

Este escaneo permitió identificar múltiples puertos abiertos asociados a servicios críticos de Active Directory.

![[Pasted image 20260107071730.png]]

Posteriormente, se realizó un escaneo de enumeración profunda sobre los puertos relevantes para identificar versiones, configuraciones y posibles vectores de ataque.

```bash
nmap -p53,88,135,139,389,445,464,593,636,3268,3269,5985,52710 \
-sCV 10.129.9.24 -oN infoPortsTCP
```

El resultado confirmó la presencia de servicios como Kerberos, LDAP, SMB y WinRM, reforzando la hipótesis de que el objetivo actúa como controlador de dominio.

![[Pasted image 20260107072121.png]]

### Enumeración web y directorios

No se detectaron servicios HTTP relevantes, por lo que el foco se trasladó inmediatamente a SMB como principal vector de enumeración inicial, dada la exposición del puerto 445 y la frecuente mala configuración de recursos compartidos.

### Tecnologías y archivos expuestos

Se realizó autenticación SMB utilizando una sesión de invitado (guest), lo que permitió enumerar recursos compartidos sin credenciales válidas. Esta condición representa una debilidad significativa en entornos corporativos.

![[Pasted image 20260118130141.png]]

Durante la exploración de los recursos compartidos, se identificó un directorio denominado `HR`, accesible sin restricciones.

![[Pasted image 20260118131549.png]]

Dentro de este directorio se encontró un archivo que contenía información sensible, indicando explícitamente la existencia de una contraseña asociada a un usuario interno.

![[Pasted image 20260118131603.png]]  
![[Pasted image 20260118131703.png]]

Este hallazgo justificó continuar con enumeración de usuarios del dominio, ya que sugiere malas prácticas en el almacenamiento de credenciales.

## Explotación

### Identificación de la vulnerabilidad

Con la información obtenida, se procedió a enumerar usuarios del dominio mediante RPC, utilizando credenciales de un usuario recién descubierto. Durante esta fase, se analizaron las descripciones de las cuentas, una técnica común para detectar contraseñas expuestas por error administrativo.

La enumeración reveló una nueva contraseña almacenada directamente en la descripción de un usuario.

![[Pasted image 20260118132411.png]]

Esta práctica constituye una vulnerabilidad crítica, ya que expone credenciales sin necesidad de explotación técnica compleja.

### Ejecución remota de comandos

Las credenciales descubiertas fueron probadas contra el usuario `advid`, resultando válidas. Con esto se confirmó el acceso autenticado al dominio.

![[Pasted image 20260118132846.png]]

Una vez autenticado, se exploraron los recursos compartidos accesibles con este usuario, identificando el directorio `dev`.

![[Pasted image 20260118133712.png]]

### Obtención de acceso interactivo

Dentro del directorio `dev` se localizó un archivo denominado `backup`, el cual contenía credenciales en texto claro pertenecientes al usuario `emily.oscars`.

![[Pasted image 20260118133739.png]]

El uso de credenciales hardcodeadas en archivos de respaldo representa una falla grave de seguridad operacional.

## Subida de privilegios

### Enumeración de vectores de escalada

Al autenticarse como `emily.oscars`, se verificó la pertenencia a grupos del sistema. El usuario formaba parte del grupo `Backup Operators`, el cual posee privilegios elevados que permiten acceder a archivos críticos del sistema, incluso sin ser administrador directo.

![[Pasted image 20260118135406.png]]

Este grupo es especialmente peligroso, ya que permite la copia de los hives del registro que contienen hashes de contraseñas.

### Análisis de la vulnerabilidad

El privilegio de realizar copias de seguridad del sistema fue explotado para extraer los hives `SAM` y `SYSTEM`, que contienen la información necesaria para obtener hashes NTLM de todas las cuentas locales.

Primero, se creó un directorio temporal para almacenar los archivos extraídos.

```powershell
mkdir C:\temp
```

Luego, se procedió a guardar los hives del registro en disco.

```powershell
reg save hklm\sam C:\temp\sam.hive
```

```powershell
reg save hklm\system C:\temp\system.hive
```

![[Pasted image 20260118135417.png]]

### Explotación y obtención de root

Una vez descargados los archivos al sistema atacante, se utilizó `impacket-secretsdump` para extraer los hashes de las cuentas locales.

```bash
impacket-secretsdump -sam sam.hive -system system.hive LOCAL
```

La ejecución fue exitosa, permitiendo obtener los hashes NTLM, incluido el del usuario administrador, lo que equivale a compromiso total del sistema.

![[Pasted image 20260118135444.png]]
