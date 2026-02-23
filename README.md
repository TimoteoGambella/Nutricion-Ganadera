# 🐕 Nutrición Ganadera - Sitio Web

Sitio web profesional para Nutrición Ganadera, empresa de alimentos balanceados para mascotas.

## 🚀 Tecnologías

- **React** 19.2.0
- **Vite** 7.3.1
- **React Router DOM** 7.13.0
- **Tailwind CSS** 4.2.0
- **React Icons** 5.5.0
- **React Spinners** 0.17.0

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

## 🌐 Estructura del Sitio

### Páginas
- **Home** (`/`) - Página principal con hero, valores, productos destacados, beneficios y testimonios
- **Productos** (`/productos`) - Catálogo completo de productos con integración WhatsApp
- **Nosotros** (`/nosotros`) - Historia, valores y diferenciadores de la empresa
- **Donde Comprar** (`/donde-comprar`) - Mapa interactivo y lista de distribuidores
- **Contacto** (`/contacto`) - Información de contacto y banner de WhatsApp

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Navegación responsive
│   │   ├── Footer.jsx          # Footer con links y redes sociales
│   │   ├── Layout.jsx          # Wrapper general
│   │   └── WhatsAppButton.jsx  # Botón flotante de WhatsApp
│   └── home/
│       ├── Hero.jsx            # Sección hero principal
│       ├── ValueProposition.jsx # Valores (Salud, Energía, Vitalidad)
│       ├── FeaturedProducts.jsx # Productos destacados
│       ├── Benefits.jsx        # Grid de beneficios
│       ├── Testimonials.jsx    # Carousel de testimonios
│       └── CTASection.jsx      # Call to action final
├── pages/
│   ├── Home.jsx                # Página principal
│   ├── Products.jsx            # Página de productos
│   ├── About.jsx               # Página nosotros
│   ├── WhereToBuy.jsx         # Página donde comprar
│   └── Contact.jsx            # Página de contacto
├── data/
│   ├── products.json          # Datos de productos
│   ├── testimonials.json      # Datos de testimonios
│   └── distributors.json      # Datos de distribuidores
├── utils/
│   └── whatsapp.js           # Utilidades WhatsApp
├── App.jsx                    # Configuración de rutas
└── main.jsx                   # Entry point
```

## 🎨 Paleta de Colores

```css
Verde principal: #2D5016
Verde claro: #4A7C2E
Verde oscuro: #1A3309
Azul acento: #3B82F6
Blanco: #FFFFFF
Gris claro: #F3F4F6
```

## 📱 WhatsApp

Todas las integraciones de WhatsApp usan el número: **543487542190**

### Funcionalidades:
- Botón flotante en todas las páginas
- Botón en navbar
- Consultas por producto (mensaje personalizado)
- Asesoramiento general
- Consulta para distribuidores

## 🗺️ Google Maps

Integrado en:
- Página "Donde Comprar" - Mapa de distribuidores
- Página "Contacto" - Ubicación principal

## ✨ Características

- ✅ 100% Responsive (Mobile First)
- ✅ Navegación fluida con React Router
- ✅ WhatsApp integrado en productos y navegación
- ✅ Carousel de testimonios automatizado
- ✅ Animaciones y transiciones suaves
- ✅ Google Maps embebido
- ✅ Diseño moderno con Tailwind CSS
- ✅ Optimizado para conversión

## 🔧 Configuración

### Actualizar datos de productos
Editar: `src/data/products.json`

### Actualizar testimonios
Editar: `src/data/testimonials.json`

### Actualizar distribuidores
Editar: `src/data/distributors.json`

### Cambiar número de WhatsApp
Editar: `src/utils/whatsapp.js`

## 📊 Scripts Disponibles

```bash
npm run dev      # Servidor desarrollo (http://localhost:5173)
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linter
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop la carpeta 'dist' en Netlify
```

### Otros
El build genera una carpeta `dist/` lista para cualquier hosting estático.

## 📝 Notas

- Las imágenes actuales son placeholders de Unsplash
- Reemplazar con imágenes reales del cliente
- Actualizar información de productos según catálogo real
- Configurar dominio propio
- Revisar y actualizar testimonios

## 📞 Contacto

- WhatsApp: +54 3487 542190
- Instagram: @ng.petfood
- Facebook: /nutricionganadera

---

**Desarrollado con ❤️ para Nutrición Ganadera**
