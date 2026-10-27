# ¡Disfrute! Açaí — sitio web

Landing informativa de ¡Disfrute! Açaí: inicio, historia, productos, dónde encontrarnos y contacto.

- **Stack:** [Astro](https://astro.build) (sitio estático, sin JavaScript en el navegador) + CSS.
- **Hosting:** GitHub Pages, publicado por GitHub Actions al hacer push a `main`.
- **Contenido:** archivos de texto en `src/content/`, validados en el build (`src/content.config.ts`). Ver [COMO-EDITAR.md](COMO-EDITAR.md).

## Desarrollo

Requiere Node (ver `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321/disfrute/
npm run build    # valida contenido + genera dist/
npm run preview
```

## Estructura

```
src/
├── content/            # Contenido editable (hero, historia, contacto, productos/)
├── content.config.ts   # Esquema y validaciones del contenido
├── components/         # Una sección por componente
├── layouts/Base.astro  # <head>, SEO, Open Graph y CSP
├── pages/index.astro
└── styles/global.css   # Paleta y estilos
public/img/             # Fotos, logo e ilustraciones (deco/)
```

## Puesta en marcha

1. Crear el repo en la cuenta de GitHub de ¡Disfrute! (con 2FA activado) y sumar al desarrollador como colaborador.
2. La URL y el path se toman solos de GitHub Pages en el deploy (cuenta o dominio propio): no hay que tocar `astro.config.mjs`.
3. *Settings → Pages → Source:* **GitHub Actions**.
4. *Settings → Branches:* proteger `main` contra force-push y borrado.
5. Dominio propio (opcional): verificarlo en *Settings de la cuenta → Pages → Verified domains*, configurarlo en el repo y activar **Enforce HTTPS**.

## Vista previa vs. sitio definitivo

Por defecto el sitio se publica con `noindex` (no aparece en Google), porque las fotos y textos son provisorios. Cuando esté listo: *Settings → Secrets and variables → Actions → Variables* → crear `INDEXAR` = `true` y volver a correr el workflow.

## Pendientes antes de publicar

- **Fotos:** las actuales son recortes de capturas (Instagram, reseñas de Google Maps y PedidosYa), en baja resolución. Reemplazarlas por fotos propias en alta, o pedir permiso a quien las publicó.
- **Logo:** `public/img/logo.png` está recortado de una captura. Pedir el original en vector (SVG/AI/PDF).
- **Textos:** confirmar con los dueños la historia (`src/content/historia.md`), nombres y descripciones de productos, y horarios.
