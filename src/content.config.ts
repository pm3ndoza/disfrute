import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { existsSync } from "node:fs";
import { join } from "node:path";

// Valida que la foto exista en public/img/<carpeta>/ para que un nombre mal escrito
// frene el deploy en vez de publicar una imagen rota.
const foto = (carpeta: string) =>
  z.string().refine((archivo) => existsSync(join("public/img", carpeta, archivo)), {
    message: `La foto no existe en ${join("public/img", carpeta)}/`,
  });

const hero = defineCollection({
  loader: glob({ pattern: "hero.md", base: "./src/content" }),
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    foto: foto(""),
  }),
});

const historia = defineCollection({
  loader: glob({ pattern: "historia.md", base: "./src/content" }),
  schema: z.object({
    titulo: z.string(),
    foto: foto("").optional(),
  }),
});

const productos = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/productos" }),
  schema: z.object({
    nombre: z.string(),
    precio: z.number().positive().optional(),
    foto: foto("productos"),
    orden: z.number().int().default(99),
    disponible: z.boolean().default(true),
  }),
});

const contacto = defineCollection({
  loader: glob({ pattern: "contacto.md", base: "./src/content" }),
  schema: z.object({
    direccion: z.string(),
    ciudad: z.string(),
    horarios: z.array(z.object({ dias: z.string(), horas: z.string() })),
    whatsapp: z.string().regex(/^\d{8,15}$/, "Solo números, con código de país (ej: 59899123456)"),
    mensaje_whatsapp: z.string(),
    instagram: z.string().regex(/^[\w.]+$/, "Solo el usuario, sin @ ni link"),
  }),
});

export const collections = { hero, historia, productos, contacto };
