#!/usr/bin/env python3
"""
update_from_minuta.py
─────────────────────
Lee el texto de una minuta o transcript y actualiza src/data.js
usando la API de Claude.

Uso:
  python scripts/update_from_minuta.py minuta.txt
  python scripts/update_from_minuta.py            ← pega texto directo
"""

import sys
import os
import json
import re
from datetime import date

# ── Leer texto de minuta ─────────────────────────────────────────────────
def leer_minuta():
    if len(sys.argv) > 1:
        with open(sys.argv[1], "r", encoding="utf-8") as f:
            return f.read()
    print("Pega el texto de la minuta/transcript (Ctrl+D cuando termines):\n")
    return sys.stdin.read()

# ── Leer data.js actual ───────────────────────────────────────────────────
def leer_data_actual():
    ruta = os.path.join(os.path.dirname(__file__), "..", "src", "data.js")
    with open(ruta, "r", encoding="utf-8") as f:
        return f.read()

# ── Llamar a Claude API ───────────────────────────────────────────────────
def actualizar_con_claude(minuta_texto, data_actual):
    try:
        import urllib.request
        import urllib.error
    except ImportError:
        print("❌ Error: urllib no disponible")
        sys.exit(1)

    hoy = date.today().strftime("%d/%m/%Y")

    prompt = f"""Eres el asistente del PM Alan Cerón Cardonne en CEN Systems.
Tu tarea es actualizar el archivo data.js del dashboard de proyecto con la información de la siguiente minuta o transcript.

FECHA DE HOY: {hoy}

MINUTA / TRANSCRIPT:
───────────────────
{minuta_texto}
───────────────────

DATA.JS ACTUAL:
───────────────
{data_actual}
───────────────

INSTRUCCIONES:
1. Analiza la minuta e identifica cambios en: avances de implementación, nuevos riesgos, hitos completados, acuerdos, próximas reuniones.
2. Actualiza ÚNICAMENTE los campos de data.js que hayan cambiado según la minuta.
3. Actualiza siempre `proyecto.actualizado` a la fecha de hoy: "{hoy}".
4. Actualiza `proyecto.sesion` con el número de minuta y fecha.
5. Si hay nuevos acuerdos o pendientes, agrégalos a `comunicaciones`.
6. Si se completó algún hito, muévelo de hitosPendientes a hitosCompletados cambiando estado a "done".
7. Si hay nuevos riesgos, agrégalos a `riesgos`.
8. Devuelve ÚNICAMENTE el contenido completo del nuevo data.js, sin explicaciones, sin markdown, sin bloques de código. Solo el JavaScript puro.
"""

    payload = json.dumps({
        "model": "claude-sonnet-4-6",
        "max_tokens": 4096,
        "messages": [{"role": "user", "content": prompt}]
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "x-api-key": os.environ.get("ANTHROPIC_API_KEY", ""),
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req) as resp:
            body = json.loads(resp.read())
            return body["content"][0]["text"]
    except urllib.error.HTTPError as e:
        print(f"❌ Error API: {e.code} {e.reason}")
        print(e.read().decode())
        sys.exit(1)

# ── Guardar data.js actualizado ──────────────────────────────────────────
def guardar_data(nuevo_contenido):
    ruta = os.path.join(os.path.dirname(__file__), "..", "src", "data.js")

    # Backup por si acaso
    backup = ruta.replace("data.js", "data.js.bak")
    with open(ruta, "r") as f:
        with open(backup, "w") as b:
            b.write(f.read())

    with open(ruta, "w", encoding="utf-8") as f:
        f.write(nuevo_contenido)

    print(f"✅ data.js actualizado (backup en data.js.bak)")

# ── Main ──────────────────────────────────────────────────────────────────
def main():
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("❌ Falta ANTHROPIC_API_KEY en variables de entorno.")
        print("   Agrégala con: export ANTHROPIC_API_KEY=sk-ant-...")
        sys.exit(1)

    print("📄 Leyendo minuta...")
    minuta = leer_minuta()

    print("📂 Leyendo data.js actual...")
    data_actual = leer_data_actual()

    print("🤖 Enviando a Claude para actualizar...")
    nuevo_data = actualizar_con_claude(minuta, data_actual)

    # Limpieza básica por si Claude agregó backticks
    nuevo_data = re.sub(r"^```(?:javascript|js)?\n?", "", nuevo_data.strip())
    nuevo_data = re.sub(r"\n?```$", "", nuevo_data.strip())

    guardar_data(nuevo_data)

    print("\n📋 Próximos pasos:")
    print("   1. Revisa src/data.js para confirmar los cambios")
    print("   2. Corre: npm start  (para ver en local)")
    print("   3. Publica: git add src/data.js && git commit -m 'dashboard: [fecha]' && git push")
    print("      GitHub Actions desplegará automáticamente en ~2 minutos ✅")

if __name__ == "__main__":
    main()
