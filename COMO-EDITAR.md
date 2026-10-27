# Cómo editar la página de ¡Disfrute!

Todo se edita desde **github.com**, sin instalar nada. Después de guardar, la página se actualiza sola en 1–2 minutos.

## Pasos generales

1. Entrá al repositorio en github.com.
2. Abrí el archivo que querés cambiar (ver la tabla de abajo).
3. Tocá el lápiz ✏️ (*Edit this file*).
4. Cambiá **solo el texto entre comillas** o después de los dos puntos.
5. Tocá **Commit changes** → **Commit changes**.

## Qué archivo cambia qué

| Quiero cambiar…                      | Archivo                                  |
| ------------------------------------ | ---------------------------------------- |
| Título y frase principal             | `src/content/hero.md`                    |
| Nuestra historia                     | `src/content/historia.md`                |
| Dirección, horarios, WhatsApp, Insta | `src/content/contacto.md`                |
| Un producto                          | `src/content/productos/<producto>.md`    |
| Fotos                                | `public/img/` y `public/img/productos/`  |

## Reglas para no romper nada

- No borres las líneas `---` del principio.
- No borres las comillas `"` de los textos.
- Precios: solo el número, sin `$` (ej: `precio: 290`).
- WhatsApp: solo números con código de país, sin `+` ni espacios (ej: `59899123456`).
- Instagram: solo el usuario, sin `@` (ej: `disfrute.acai`).

> Si algo queda mal, **la página no se rompe**: sigue mostrando la versión anterior y GitHub te manda un mail con el error. Corregí el archivo y guardá de nuevo.

## Agregar un producto

1. Subí la foto: entrá a `public/img/productos/` → **Add file** → **Upload files**. Usá un nombre sin espacios ni tildes (ej: `bowl-frutilla.jpg`).
2. Entrá a `src/content/productos/` → **Add file** → **Create new file**, llamalo `bowl-frutilla.md` y pegá:

```markdown
---
nombre: "Bowl de Frutilla"
precio: 310
foto: "bowl-frutilla.jpg"
orden: 4
disponible: true
---

Descripción corta del producto.
```

- `orden`: en qué posición aparece (1 = primero).
- `disponible: false` lo oculta sin borrarlo.

## Quitar un producto

Poné `disponible: false`, o borrá el archivo (menú `…` → **Delete file**).

## Fotos

- Formato JPG o WebP, idealmente de menos de 500 KB (se pueden achicar en <https://squoosh.app>).
- Productos: horizontales (4:3). Historia: cuadrada.
