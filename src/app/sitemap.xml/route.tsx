// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = 'https://cardoso.dev'; // reemplaza con tu dominio real

  const staticRoutes = ['', 'portafolio']; // Agrega aquí tus rutas

  const urls = staticRoutes.map((route) => {
    return `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>
  `;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
