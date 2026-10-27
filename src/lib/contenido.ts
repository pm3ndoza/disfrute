import { getEntry } from "astro:content";
import type { Idioma } from "../i18n";

// Texto de una sección en un idioma; si falta el archivo, el build falla con un mensaje claro.
export async function texto<C extends "hero" | "historia" | "acai">(coleccion: C, lang: Idioma) {
  const entrada = await getEntry(coleccion, `${lang}/${coleccion}`);
  if (!entrada) throw new Error(`Falta src/content/textos/${lang}/${coleccion}.md`);
  return entrada;
}

export async function contacto() {
  const entrada = await getEntry("contacto", "contacto");
  if (!entrada) throw new Error("Falta src/content/contacto.md");
  return entrada.data;
}
