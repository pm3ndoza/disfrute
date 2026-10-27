// Antepone el `base` del sitio (ej: /disfrute) a rutas de public/.
export const ruta = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
