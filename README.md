# API E-commerce

API RESTful para un sistema de e-commerce con autenticación, gestión de usuarios, búsqueda de productos y procesamiento de pagos con MercadoPago.

## 📋 Descripción

Esta API proporciona endpoints para:
- Autenticación de usuarios mediante códigos enviados por email
- Gestión de perfil de usuario
- Búsqueda y consulta de productos
- Generación y procesamiento de órdenes de compra
- Integración con MercadoPago para pagos

## 🚀 Endpoints

### Autenticación

#### `POST /auth`
Envía un código de verificación al email proporcionado. Si el usuario no existe, lo crea.

**Body:**
```json
{
  "email": "usuario@ejemplo.com"
}
```

#### `POST /auth/token`
Valida el código de verificación y devuelve un token de autenticación.

**Body:**
```json
{
  "email": "usuario@ejemplo.com",
  "code": "123456"
}
```

### Usuario

#### `GET /me`
Obtiene la información del usuario autenticado.

**Headers:**
```
Authorization: Bearer {token}
```

#### `PATCH /me`
Actualiza los datos del usuario autenticado.

**Headers:**
```
Authorization: Bearer {token}
```

**Body:**
```json
{
  "name": "Nombre Usuario",
  "phone": "+598123456789"
}
```

#### `PATCH /me/address`
Actualiza la dirección del usuario autenticado.

**Headers:**
```
Authorization: Bearer {token}
```

**Body:**
```json
{
  "street": "Calle Principal",
  "number": "1234",
  "city": "Montevideo",
  "country": "Uruguay",
  "zipCode": "11000"
}
```

### Productos

#### `GET /search`
Busca productos en la base de datos.

**Query Parameters:**
- `q`: término de búsqueda
- `offset`: desplazamiento para paginación (default: 0)
- `limit`: cantidad de resultados (default: 10)

**Ejemplo:**
```
GET /search?q=laptop&offset=0&limit=10
```

#### `GET /products/{id}`
Obtiene información detallada de un producto específico.

**Ejemplo:**
```
GET /products/ABC123
```

### Órdenes

#### `POST /order`
Crea una orden de compra y genera un link de pago en MercadoPago.

**Query Parameters:**
- `productId`: ID del producto a comprar

**Headers:**
```
Authorization: Bearer {token}
```

**Respuesta:**
```json
{
  "paymentUrl": "https://www.mercadopago.com/checkout/..."
}
```

#### `POST /ipn/mercadopago`
Webhook para recibir notificaciones de MercadoPago sobre el estado de los pagos.

**Body:** (enviado por MercadoPago)
```json
{
  "action": "payment.updated",
  "data": {
    "id": "123456789"
  }
}
```

## 🛠️ Tecnologías

- Node.js
- Vercel (deployment)
- micro-method-router (routing)
- MercadoPago API
- Email service (para códigos de verificación)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Desarrollo local
npm run dev

# Deploy a Vercel
vercel
```

## 🔐 Variables de Entorno

```env
DATABASE_URL=
MERCADOPAGO_ACCESS_TOKEN=
EMAIL_API_KEY=
JWT_SECRET=
```

## 📚 Documentación de Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/your-collection-id)

> **Nota:** Reemplaza `your-collection-id` con el ID de tu collection de Postman una vez que la hayas creado y publicado.

### Cómo obtener el botón de Postman:

1. Abre tu collection en Postman
2. Haz clic en los tres puntos (•••) junto al nombre de la collection
3. Selecciona "Share collection"
4. En la pestaña "Via Run in Postman", copia el código del botón
5. Reemplaza el enlace en este README

## 📝 Notas de Desarrollo

- Todos los endpoints actualmente responden con status 200 para las rutas y verbos correctos
- Esta es una base inicial que será expandida en futuros desafíos
- Se debe implementar validación de tokens JWT para endpoints protegidos
- El webhook de MercadoPago debe validar la autenticidad de las notificaciones

## 📄 Licencia

ISC