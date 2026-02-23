# 🚀 PROYECTO: NUTRICIÓN GANADERA - SITIO WEB PROFESIONAL
## Planificación Completa y Especificaciones Técnicas

---

## 📋 INFORMACIÓN DEL PROYECTO

**Cliente:** Nutrición Ganadera
**Tipo:** Sitio web corporativo con catálogo de productos
**Stack Tecnológico:** React + Vite + Tailwind CSS + React Router
**Fecha de inicio:** 22 de Febrero de 2026
**Estado:** ✅ En desarrollo activo

---

## 🎨 PALETA DE COLORES

### Colores Principales (Extraídos del boceto original)
```css
--color-primary-green: #2D5016      /* Verde oscuro principal */
--color-primary-light: #4A7C2E      /* Verde medio */
--color-accent-blue: #3B82F6        /* Azul acento */
--color-white: #FFFFFF              /* Blanco puro */
--color-gray-light: #F3F4F6         /* Gris claro (fondos) */
--color-gray-medium: #6B7280        /* Gris medio (textos secundarios) */
--color-gray-dark: #1F2937          /* Gris oscuro (textos principales) */
```

### Aplicación de Colores
- **Header/Navbar:** Verde oscuro (#2D5016) con texto blanco
- **Botones principales:** Verde medio (#4A7C2E) con hover más oscuro
- **Acentos:** Azul (#3B82F6) para links y elementos interactivos
- **Fondos:** Alternancia blanco/gris claro para secciones
- **Textos:** Gris oscuro para cuerpo, gris medio para secundarios

---

## 🗂️ ESTRUCTURA DEL SITIO

### Páginas Principales
```
/                   → Home
/productos          → Catálogo de productos
/nosotros           → Sobre la empresa y filosofía
/donde-comprar      → Mapa de puntos de venta
/contacto           → Información de contacto + WhatsApp
```

### Navegación
```
Logo [NG] | Inicio | Productos | Nosotros | Donde Comprar | Contacto | [WhatsApp Icon]
```

---

## 📦 COMPONENTES A DESARROLLAR

### Componentes Globales
- ✅ **Navbar** - Navegación responsive con menú mobile
- ✅ **Footer** - Información completa + redes sociales
- ✅ **WhatsAppButton** - Botón flotante fijo
- ✅ **Layout** - Wrapper general para todas las páginas

### Componentes de Home
- ✅ **Hero** - Section principal con call-to-action
- ✅ **ValueProposition** - Salud, Energía, Vitalidad
- ✅ **FeaturedProducts** - Grid de productos destacados
- ✅ **Benefits** - Grid con iconos de beneficios
- ✅ **Testimonials** - Carousel de testimonios
- ✅ **CTASection** - Banner final de contacto

### Componentes de Productos
- ✅ **ProductCard** - Card individual con botón WhatsApp
- ✅ **ProductGrid** - Grid responsive de productos
- ✅ **ProductFilter** - Filtros por categoría (opcional)
- ✅ **ProductModal** - Detalle ampliado de producto

### Componentes de Contacto
- ✅ **ContactBanner** - Banner grande con botón WhatsApp
- ✅ **GoogleMap** - Mapa embebido de ubicación
- ✅ **SocialLinks** - Links a redes sociales

### Componentes Reutilizables
- ✅ **Button** - Botones con variantes
- ✅ **Section** - Wrapper de secciones
- ✅ **Card** - Cards genéricas
- ✅ **Icon** - Wrapper para react-icons

---

## 📄 CONTENIDO DE CADA PÁGINA

### 🏠 HOME
1. **Hero Section**
   - Título: "ALIMENTO COMPLETO PARA PERROS"
   - Subtítulo: "Soluciones integrales para el desarrollo animal"
   - Descripción: Texto sobre ingredientes seleccionados y calidad
   - CTA: "Ver Productos" + "Contactar por WhatsApp"
   - Imagen de fondo: Perro feliz

2. **Valores**
   - Tres columnas con iconos:
     - 🏥 Salud
     - ⚡ Energía
     - 💪 Vitalidad

3. **Productos Destacados**
   - Grid 3 columnas
   - 3-6 productos principales
   - Botón "Ver todos los productos"

4. **Beneficios**
   - Grid 2x3 con iconos de react-icons
   - 24% Proteínas
   - Carne y Pollo
   - Alta Digestibilidad
   - Pelaje Brillante
   - Huesos Fuertes
   - Antioxidantes Naturales

5. **Testimonios**
   - Carousel con 3-5 testimonios
   - Foto de cliente/mascota
   - Nombre y testimonio

6. **CTA Final**
   - Banner grande
   - "¿Listo para mejorar la nutrición de tu mascota?"
   - Botón WhatsApp grande

### 📦 PRODUCTOS
1. **Hero Mini**
   - Título: "Nuestros Productos"
   - Breadcrumb: Home > Productos

2. **Línea Estándar**
   - Imagen de producto
   - Descripción completa
   - Características técnicas
   - 24% Proteínas destacado
   - Botón WhatsApp: "Consultar por este producto"

3. **Otros Productos**
   - Grid de productos
   - Cards con:
     - Imagen
     - Nombre
     - Breve descripción
     - Botón WhatsApp

### 👥 NOSOTROS
1. **Nuestra Historia**
   - Texto sobre el emprendimiento
   - Misión y Visión

2. **Nuestra Filosofía**
   - "Alimentación de calidad"
   - Compromiso con las mascotas
   - Ingredientes seleccionados

3. **Por qué elegirnos**
   - Lista de razones
   - Iconos + texto

4. **Equipo / Instalaciones** (si aplica)
   - Fotos del equipo o fábrica

### 📍 DONDE COMPRAR
1. **Mapa Interactivo**
   - Google Maps embebido
   - Marcadores de puntos de venta

2. **Lista de Distribuidores**
   - Cards con:
     - Nombre del distribuidor
     - Dirección
     - Teléfono
     - Botón "Cómo llegar"

3. **CTA Distribuidores**
   - "¿Querés vender nuestros productos?"
   - Botón WhatsApp comercial

### 📞 CONTACTO
1. **Banner Principal**
   - "Contactanos"
   - Botón grande WhatsApp
   - Texto: "Estamos para ayudarte"

2. **Información de Contacto**
   - WhatsApp: 543487542190
   - Instagram: @ng.petfood
   - Facebook: /nutricionganadera
   - Email (si tienen)

3. **Google Maps**
   - Ubicación de oficina/depósito

4. **Redes Sociales**
   - Grid de iconos grandes
   - Links a cada red

---

## 💾 ESTRUCTURA DE DATOS (JSON)

### products.json
```json
[
  {
    "id": 1,
    "name": "Nutrición Ganadera - Línea Estándar",
    "slug": "linea-estandar",
    "category": "perros-adultos",
    "image": "/images/productos/producto-1.jpg",
    "description": "Nuestra línea estándar de alimentos está desarrollada para ofrecer un aporte completo y confiable en el uso cotidiano.",
    "features": [
      "24% Proteínas",
      "Carne y Pollo",
      "Alta Digestibilidad",
      "Pelaje Brillante"
    ],
    "protein": "24%",
    "ingredients": "Carne y pollo como principales fuentes de proteína animal",
    "whatsappMessage": "Hola! Me interesa consultar por el producto: Nutrición Ganadera - Línea Estándar",
    "featured": true
  }
]
```

### testimonials.json
```json
[
  {
    "id": 1,
    "name": "María González",
    "location": "Buenos Aires",
    "image": "/images/testimonials/cliente-1.jpg",
    "rating": 5,
    "text": "Mi perro está más saludable y con más energía desde que comenzamos a usar Nutrición Ganadera. ¡Excelente producto!",
    "petName": "Rocky"
  }
]
```

### distributors.json
```json
[
  {
    "id": 1,
    "name": "Veterinaria San Martín",
    "address": "Av. San Martín 1234, CABA",
    "phone": "011-1234-5678",
    "lat": -34.6037,
    "lng": -58.3816,
    "type": "veterinaria"
  }
]
```

---

## 🎨 SISTEMA DE DISEÑO TAILWIND

### Configuración Extendida
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2D5016',
        light: '#4A7C2E',
        dark: '#1A3309'
      },
      accent: {
        DEFAULT: '#3B82F6',
        light: '#60A5FA',
        dark: '#2563EB'
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Poppins', 'sans-serif']
    }
  }
}
```

### Clases Personalizadas
```css
/* index.css */
@layer components {
  .btn-primary {
    @apply bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105;
  }
  
  .btn-whatsapp {
    @apply bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2;
  }
  
  .section {
    @apply py-16 md:py-24;
  }
  
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}
```

---

## ⚡ ANIMACIONES

### Bibliotecas a usar
- **Framer Motion** (opcional, si se necesita)
- **Tailwind CSS Transitions**
- **Scroll Animations**

### Animaciones Principales
1. **Fade In al Scroll** - Elementos aparecen al hacer scroll
2. **Hover Effects** - Cards y botones con efecto hover
3. **Carousel** - Transiciones suaves en testimonios
4. **Menu Mobile** - Slide in/out animado
5. **WhatsApp Button** - Pulse animation
6. **Loading** - Spinner durante cargas

### Implementación
```javascript
// Intersection Observer para animaciones al scroll
const fadeInOnScroll = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints Tailwind
```
sm: 640px   → Mobile landscape
md: 768px   → Tablet
lg: 1024px  → Desktop
xl: 1280px  → Large desktop
2xl: 1536px → Extra large
```

### Mobile First Approach
- Diseñar primero para mobile
- Agregar complejidad en pantallas más grandes
- Menu hamburguesa en mobile
- Grids de 1 columna → 2 → 3 → 4
- Textos escalables
- Imágenes responsive con aspect-ratio

---

## 🔗 INTEGRACIÓN WHATSAPP

### Botón Flotante
```javascript
// WhatsAppButton.jsx
const whatsappNumber = "543487542190"
const defaultMessage = "Hola! Me gustaría consultar sobre Nutrición Ganadera"
const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
```

### Botones en Productos
```javascript
const productWhatsAppLink = (productName) => {
  const message = `Hola! Me interesa consultar por el producto: ${productName}`
  return `https://wa.me/543487542190?text=${encodeURIComponent(message)}`
}
```

---

## 🗺️ GOOGLE MAPS

### Implementación
```javascript
// GoogleMap.jsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

---

## 📁 ESTRUCTURA DE CARPETAS

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── WhatsAppButton.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── ValueProposition.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── Benefits.jsx
│   │   ├── Testimonials.jsx
│   │   └── CTASection.jsx
│   ├── products/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── ProductDetail.jsx
│   ├── contact/
│   │   ├── ContactBanner.jsx
│   │   ├── GoogleMap.jsx
│   │   └── SocialLinks.jsx
│   ├── shared/
│   │   ├── Button.jsx
│   │   ├── Section.jsx
│   │   ├── Card.jsx
│   │   └── Spinner.jsx
│   └── carousel/
│       └── TestimonialCarousel.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── About.jsx
│   ├── WhereToBy.jsx
│   └── Contact.jsx
├── data/
│   ├── products.json
│   ├── testimonials.json
│   └── distributors.json
├── utils/
│   ├── whatsapp.js
│   └── animations.js
├── hooks/
│   └── useScrollAnimation.js
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

---

## ✅ CHECKLIST DE FUNCIONALIDADES

### Navegación
- [ ] Navbar responsive con logo
- [ ] Menú hamburguesa en mobile
- [ ] Links activos con highlight
- [ ] Scroll suave entre secciones
- [ ] Botón WhatsApp en navbar

### Home
- [ ] Hero section impactante
- [ ] Sección de valores (3 columnas)
- [ ] Productos destacados (grid)
- [ ] Beneficios con iconos
- [ ] Carousel de testimonios
- [ ] CTA section final

### Productos
- [ ] Grid de productos desde JSON
- [ ] Cards con imagen, nombre, descripción
- [ ] Botón WhatsApp por producto
- [ ] Mensaje personalizado por producto
- [ ] Filtros (opcional)

### Nosotros
- [ ] Historia de la empresa
- [ ] Misión y visión
- [ ] Valores diferenciales
- [ ] Imágenes del equipo/instalaciones

### Donde Comprar
- [ ] Google Maps embebido
- [ ] Lista de distribuidores
- [ ] Información de contacto
- [ ] CTA para nuevos distribuidores

### Contacto
- [ ] Banner principal
- [ ] Botón WhatsApp grande
- [ ] Información de contacto
- [ ] Google Maps
- [ ] Redes sociales

### Global
- [ ] Footer completo
- [ ] Botón WhatsApp flotante fijo
- [ ] Loading states
- [ ] 404 page
- [ ] SEO básico (titles, meta)
- [ ] 100% responsive
- [ ] Animaciones suaves
- [ ] Optimización de imágenes

---

## 🎯 PRIORIDADES DE DESARROLLO

### Fase 1: Estructura Base (Día 1)
1. ✅ Setup de React Router
2. ✅ Layout con Navbar y Footer
3. ✅ Estructura de páginas básica
4. ✅ Sistema de colores en Tailwind

### Fase 2: Componentes Core (Día 1-2)
5. ✅ Hero Section
6. ✅ ProductCard component
7. ✅ WhatsApp integration
8. ✅ Footer completo

### Fase 3: Páginas Principales (Día 2-3)
9. ✅ Home completa
10. ✅ Productos completa
11. ✅ Nosotros
12. ✅ Contacto

### Fase 4: Features Avanzadas (Día 3-4)
13. ✅ Carousel de testimonios
14. ✅ Google Maps
15. ✅ Animaciones
16. ✅ Botón WhatsApp flotante

### Fase 5: Polish y Testing (Día 4-5)
17. ✅ Responsive completo
18. ✅ Optimizaciones
19. ✅ Testing en diferentes dispositivos
20. ✅ SEO básico

---

## 📝 NOTAS IMPORTANTES

### Decisiones de Diseño
- ✅ Multi-página (NO landing page)
- ✅ Navegación tradicional con menú
- ✅ WhatsApp como principal método de contacto
- ✅ Sin formularios tradicionales
- ✅ Mobile-first approach
- ✅ Animaciones sutiles pero presentes

### Integraciones
- ✅ WhatsApp: 543487542190
- ✅ Instagram: @ng.petfood
- ✅ Facebook: /nutricionganadera
- ✅ Google Maps (ubicación pendiente del cliente)

### Assets Necesarios del Cliente
- ⚠️ Logo en alta calidad (PNG con transparencia)
- ⚠️ Imágenes de productos profesionales
- ⚠️ Foto del equipo o instalaciones
- ⚠️ Testimonios reales de clientes
- ⚠️ Ubicación exacta para Google Maps
- ⚠️ Lista de distribuidores actuales
- ⚠️ Email de contacto (opcional)

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

1. ✅ Configurar paleta de colores en Tailwind
2. ✅ Crear estructura de carpetas
3. ✅ Instalar React Router
4. ✅ Crear componentes base (Layout, Navbar, Footer)
5. ✅ Crear archivos JSON con data
6. ✅ Implementar Home page
7. ✅ Implementar resto de páginas
8. ✅ Agregar animaciones
9. ✅ Testing responsive
10. ✅ Deploy

---

**Documento creado:** 22 de Febrero de 2026
**Última actualización:** 22 de Febrero de 2026
**Estado:** ✅ Planificación completa - Listo para desarrollo
