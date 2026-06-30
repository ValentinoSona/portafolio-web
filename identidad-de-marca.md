# Manual de Identidad — Portafolio Personal
## Edición de Video & Estrategia de Contenido

Perfil: profesional audiovisual enfocado en edición de video y estrategia de contenido para influencers y comercios.
Posicionamiento: moderno, minimalista, cálido y cercano. La estética debe transmitir profesionalismo (para cerrar clientes) sin perder calidez humana (porque el negocio es relación y confianza).

---

## 1. Paleta de Colores

Concepto: base neutra cálida (no blanco frío de hospital) + un acento vibrante que remite a edición de video (timeline, "play", energía creativa).

### Colores principales

| Rol | Nombre | Hex | Uso |
|---|---|---|---|
| Acento primario | Coral Ember | `#FF5A36` | CTAs, links activos, detalles de marca, hover states |
| Acento secundario | Mango | `#FFB23E` | Highlights, badges, acentos secundarios, gradientes con el coral |
| Base oscura | Carbón Cálido | `#1C1A18` | Fondos oscuros, texto principal sobre claro, secciones hero |
| Base clara | Hueso | `#FAF6F1` | Fondo principal de la página (no blanco puro) |
| Neutro medio | Arena | `#E8E0D6` | Bordes, separadores, fondos de tarjetas, estados inactivos |
| Texto secundario | Gris Cálido | `#766F68` | Subtítulos, metadata, texto de apoyo |

### Reglas de uso
- **70/20/10**: 70% neutros (Hueso/Carbón), 20% Arena/Gris para jerarquía, 10% Coral/Mango como acento puntual. El acento nunca debe ser el color dominante de una pantalla.
- El Coral Ember es el color de marca: úsalo para un único CTA por pantalla (botón "Ver proyecto", "Contactar"), no lo repitas en todo.
- Mango se reserva para detalles secundarios o degradés combinado con Coral (45°, de Coral a Mango) en elementos hero o thumbnails de proyectos.
- Evitar blanco puro `#FFFFFF` y negro puro `#000000` — siempre usar Hueso y Carbón Cálido para mantener la calidez.
- Modo oscuro (opcional, recomendado para un editor de video): invertir base — Carbón Cálido de fondo, Hueso como texto, mismo acento Coral/Mango.

### Modo oscuro — paleta extendida
| Rol | Hex | Uso |
|---|---|---|
| Fondo | `#1C1A18` | Fondo principal (Carbón Cálido, mismo que base clara invertida) |
| Superficie | `#2C2823` | Tarjetas, navbar, elementos elevados |
| Borde sutil | `#332E29` | Separadores, bordes de navbar/tarjetas |
| Borde medio | `#4A453F` | Botones secundarios (outline) |
| Texto secundario | `#A39C92` | Subtítulos, nav links, metadata |
| Texto principal | `#FAF6F1` | Texto de cuerpo y títulos |
| Acento | `#FF5A36` → hover `#FF7A52` | Igual que en modo claro; en texto sobre fondo oscuro usar el tono más claro `#FF7A52` para mejor contraste |

### Contraste y accesibilidad
- Coral Ember (`#FF5A36`) sobre Hueso (`#FAF6F1`): apto para texto grande/botones, no para texto de cuerpo pequeño.
- Texto de cuerpo siempre en Carbón Cálido sobre Hueso, o Hueso sobre Carbón Cálido (contraste AA garantizado).

---

## 2. Tipografía

Concepto: una sans-serif geométrica/moderna para títulos (impacto, minimalismo) + una sans-serif humanista para texto de lectura (calidez, legibilidad).

### Tipografía principal (Títulos / Display)
**Clash Display** (o alternativa gratuita: **Space Grotesk**)
- Uso: H1, H2, nombres de proyectos, números destacados, frases hero.
- Pesos: Medium (500) para subtítulos grandes, Bold/Semibold (600-700) para H1.
- Carácter: geométrica, algo de personalidad, no genérica.

### Tipografía secundaria (Cuerpo / Texto)
**General Sans** (o alternativa gratuita: **Inter** / **Plus Jakarta Sans**)
- Uso: párrafos, descripciones de proyectos, navegación, botones, formularios.
- Pesos: Regular (400) para cuerpo, Medium (500) para énfasis y botones.
- Carácter: humanista, cálida, muy legible en pantalla.

### Jerarquía sugerida (escala tipográfica, base 16px, ratio 1.25)
| Elemento | Tamaño | Peso | Fuente |
|---|---|---|---|
| H1 (hero) | 56–72px | Bold | Clash Display / Space Grotesk |
| H2 (sección) | 36–40px | Semibold | Clash Display / Space Grotesk |
| H3 (subsección/proyecto) | 24px | Medium | Clash Display / Space Grotesk |
| Cuerpo | 16–18px | Regular | General Sans / Inter |
| Texto pequeño/metadata | 13–14px | Regular | General Sans / Inter |
| Botones/CTA | 15px | Medium, uppercase opcional + letter-spacing | General Sans / Inter |

### Reglas de uso
- Nunca mezclar más de 2 familias tipográficas.
- Interlineado generoso: 1.4–1.6 en cuerpo de texto, 1.1–1.2 en títulos grandes.
- Usar mayúsculas con tracking amplio solo en labels pequeños (categorías, badges), nunca en párrafos.
- Fuentes gratuitas equivalentes (Google Fonts) si no hay licencia para Clash Display / General Sans: **Space Grotesk** + **Plus Jakarta Sans**, o **Sora** + **Inter**.

---

## 3. Elementos Generales

### Logo / Marca personal
- Wordmark simple: nombre o iniciales en Clash Display Bold, sin ícono complejo — el minimalismo es protagonista.
- Variante alternativa: un "marcador" visual mínimo (ej. un corchete `[ ]`, un punto de timeline `●`, o un signo de "play" `▶` estilizado en Coral Ember) que pueda usarse como favicon/avatar.
- Siempre con espacio de respiro alrededor (mínimo igual a la altura de la "x" del wordmark).

### Iconografía
- Línea fina (stroke 1.5–2px), esquinas redondeadas suaves, estilo outline (no filled), set tipo Phosphor Icons o Lucide.
- Color: Carbón Cálido por defecto, Coral Ember solo en estado activo/hover.

### Fotografía y video (thumbnails, portada de proyectos)
- Preferencia por imágenes/fotogramas con tonos cálidos, alto contraste, poca saturación artificial.
- Overlays de color: cuando se use un overlay sobre video/imagen, usar Carbón Cálido al 40–60% de opacidad (nunca negro puro).
- Evitar stock genérico; priorizar capturas reales de proyectos propios.

### Espaciado y grid
- Sistema de espaciado en base 8px (8, 16, 24, 32, 48, 64, 96...).
- Grid de 12 columnas en desktop, márgenes laterales generosos (mínimo 80px en desktop, 24px en mobile).
- Mucho whitespace entre secciones (mínimo 96–120px desktop) — refuerza el minimalismo.

### Bordes y formas
- Radios de borde suaves y consistentes: 8px en elementos pequeños (botones, inputs), 16–24px en tarjetas/imágenes grandes.
- Sin sombras duras; si se usan, sombras suaves y difusas con tinte cálido (`rgba(28,26,24,0.08)`), nunca negro puro.

### Botones / CTA
- Botón primario: fondo Coral Ember, texto Hueso, radio 8px, sin bordes.
- Botón secundario: borde 1.5px Carbón Cálido o Arena, texto Carbón Cálido, fondo transparente.
- Hover: leve oscurecimiento del Coral (`#E64B2A`) o transición a Mango.

### Tono de voz (copy)
- Cercano y directo, en primera persona, sin jerga corporativa excesiva.
- Frases cortas, orientadas a resultados ("Edito el video que hace que tu marca pare el scroll").
- Mezcla de profesionalismo (credibilidad para clientes B2B/comercios) con cercanía (lenguaje natural, no robótico).

---

## 4. Resumen rápido (cheat sheet)

```
Colores:
  Acento:     #FF5A36 (Coral Ember)
  Acento 2:   #FFB23E (Mango)
  Oscuro:     #1C1A18 (Carbón Cálido)
  Claro:      #FAF6F1 (Hueso)
  Neutro:     #E8E0D6 (Arena)
  Texto sec:  #766F68 (Gris Cálido)

Tipografía:
  Títulos: Space Grotesk (Bold/Semibold)
  Cuerpo:  Inter / Plus Jakarta Sans (Regular/Medium)

Radios: 8px (chico) / 16-24px (grande)
Espaciado base: 8px
```
