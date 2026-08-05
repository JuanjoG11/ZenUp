# Manual de Usuario — ZenUp
## Para Administradores

---

## ¿Qué es ZenUp?

ZenUp es la plataforma de gestión comercial para el equipo de asesores Zenú. Como administrador tienes acceso total: puedes ver el desempeño de cada asesor en tiempo real, gestionar el equipo, el catálogo de productos, los clientes y los reportes acumulados.

---

## 1. Cómo ingresar como Administrador

1. Abre ZenUp.
2. En el campo de cédula escribe `0000`.
3. Presiona **⚡ Ingresar a la App**.

Verás el perfil **"Administrador General"** en el menú lateral y tendrás acceso a todas las secciones.

---

## 2. Dashboard de Administrador

Es la primera pantalla al entrar. Muestra el estado global del equipo en tiempo real.

### KPIs principales

| Tarjeta | Qué muestra |
|---|---|
| **Venta Hoy** | Total en pesos de todas las visitas completadas hoy |
| **Pendientes Hoy** | Clientes del día que aún no tienen visita completada |
| **Acumulado Mes** | Suma histórica total de pedidos completados |
| **Cumplimiento Día** | Porcentaje de clientes visitados vs. programados hoy |

### Cuadrícula de Asesores

Debajo de los KPIs aparece una tarjeta por cada asesor del equipo. Cada tarjeta muestra:

- Nombre, cédula y zona del asesor
- Barra de progreso del día
- Visitas completadas vs. programadas para hoy
- Venta del día en pesos
- Acumulado total y cantidad de clientes

**Estado de alerta:**
- 🟢 **✓ Al día** — completó todos los clientes del día
- 🟡 **⚠️ N pend.** — tiene visitas pendientes

Toca cualquier tarjeta para entrar al **panel detallado del asesor**.

### Botones de sincronización
En la parte superior de la cuadrícula hay dos botones:
- **🔄 Sincronizar** — descarga los datos más recientes del servidor.
- **☁️ Subir al servidor** — fuerza la subida de todos los datos locales.

---

## 3. Panel Detallado del Asesor (Drill-Down)

Al tocar la tarjeta de un asesor se abre su panel de detalle con dos niveles de filtro:

### Filtros disponibles
- **Semana del Mes** — semana 1 (días 1-7), semana 2 (8-14), semana 3 (15-21), semana 4 (22+).
- **Día de Ruta** — filtra por día de la semana (Lunes a Sábado).

### Métricas del asesor
Muestra KPIs del asesor para el filtro seleccionado: visitas completadas, pendientes, total vendido.

### Lista de clientes del día
Aparece cada cliente asignado al asesor para el día/semana filtrado, con su estado de visita.

> Toca cualquier cliente para ver su **rastro completo**: todas las visitas históricas con fechas, estados, productos pedidos y totales.

---

## 4. Gestión del Equipo — Trabajadores

Menú lateral → **Equipo de Asesores**.

Aquí registras y administras a todos los asesores del equipo.

### Registrar un nuevo asesor
Toca **+ Registrar Asesor** y completa:

| Campo | Descripción |
|---|---|
| Código Asesor | Código de ventas (ej: 25027) |
| Cédula (Login) | Cédula con la que el asesor ingresa a la app |
| Nombre Completo | Nombre completo en mayúsculas |
| Zona / Ruta Asignada | Territorio o ruta del asesor |
| Teléfono de Contacto | Celular del asesor (opcional) |

> La **cédula es el dato más importante**: es la contraseña con la que el asesor ingresa. Una vez creado, el asesor puede entrar con su cédula desde cualquier dispositivo.

### Buscar un asesor
Usa la barra de búsqueda para filtrar por nombre, cédula o zona.

### Editar un asesor
Toca su tarjeta para editar cualquier dato.

---

## 5. Gestión de Clientes

Menú lateral → **Clientes**.

Como administrador ves **todos los clientes** de todos los asesores, no solo los de uno.

### Crear un cliente
Toca **+ Nuevo** y completa el formulario:

| Campo | Descripción |
|---|---|
| Código del Negocio | Número de código del punto de venta |
| Nombre del Negocio | Nombre completo del establecimiento |
| Población / Zona | Barrio o sector |
| Día de Visita | Día de la semana asignado |
| Teléfono | Contacto del negocio (opcional) |
| Trabajador / Asesor Asignado | A qué asesor pertenece este cliente |
| Notas | Observaciones |

> El campo **Asesor Asignado** es exclusivo del admin. Define qué asesor verá ese cliente en su ruta.

### Filtrar y buscar
- Barra de búsqueda por nombre o código.
- Pestañas de días para ver clientes de un día específico.

---

## 6. Catálogo de Productos

Menú lateral → **Catálogo**.

Administra los productos que aparecen en la tabla de visitas de todos los asesores.

### Agregar un producto
Toca **+ Nuevo** y completa:

| Campo | Descripción |
|---|---|
| Código | Código del producto (ej: 1089614) |
| Nombre | Nombre descriptivo del producto |
| Precio | Precio de venta en pesos |
| Categoría | Categoría (CHORIZO, JAMÓN, SALCHICHA, etc.) |

### Editar un producto
Toca su fila en la lista para modificar precio, nombre o categoría.

### Buscar productos
Usa la barra de búsqueda por nombre o código.

> Los cambios en el catálogo aplican de inmediato para todos los asesores cuando registran nuevas visitas.

---

## 7. Reportes y Acumulados

Menú lateral → **Reportes & Acumulados**.

La sección más completa para análisis del equipo.

### Filtros disponibles

**Rango de fecha:**
| Opción | Período |
|---|---|
| 📅 Esta Semana | Lunes a sábado de la semana actual |
| ⏪ Semana Pasada | Semana anterior completa |
| 📆 Este Mes | Desde el día 1 del mes en curso |
| 🌐 Histórico Completo | Todos los registros sin filtro de fecha |
| 🛠 Personalizado... | Tú defines fecha de inicio y fin |

**Asesor / Vendedor:**
- **👥 Todos los Asesores** — reporte consolidado del equipo completo.
- Asesor individual — filtra para ver solo los datos de una persona.

Los reportes muestran totales de ventas, visitas completadas, productos pedidos y comparativos por el período seleccionado.

---

## 8. Configuración

Menú lateral → ícono ⚙️ **Configuración** (solo visible para admin).

Permite actualizar el nombre y zona del perfil de administrador.

### Borrar todos los datos
Dentro de Configuración hay un botón **🗑 Borrar todos los datos**. Úsalo con precaución: elimina toda la información local del dispositivo (clientes, visitas, configuración).

> Esta acción no se puede deshacer en el dispositivo. Si los datos están sincronizados con el servidor, se pueden recuperar volviendo a sincronizar.

---

## 9. Sincronización y modo offline

ZenUp guarda todo localmente y sincroniza con Supabase cuando hay internet.

- **Sin conexión** — el aviso aparece en la barra superior. Puedes seguir trabajando con normalidad.
- **Con conexión** — los datos se sincronizan automáticamente.
- **Sincronización manual** — usa el botón **🔄 Sincronizar** en el dashboard para forzar la descarga de datos, o **☁️ Subir al servidor** para forzar la subida.

Recomendación: al iniciar el turno del día, presiona **Sincronizar** para asegurarte de tener los últimos registros de todos los asesores.

---

## 10. Cerrar sesión

Menú lateral → **Cerrar Sesión** (al fondo). Regresarás a la pantalla de login.

---

## Flujo de trabajo recomendado para el Admin

```
Inicio del día
  └── Dashboard → Sincronizar
      └── Revisar KPIs globales y estado de cada asesor

Durante el día
  └── Dashboard → Tarjeta de asesor → Ver detalle
      └── Identificar asesores con pendientes altos
      └── Ver historial de clientes si hay novedades

Final del día
  └── Reportes → Esta Semana → Todos los Asesores
      └── Revisar cumplimiento y ventas del equipo
  └── Subir al servidor ☁️ para garantizar backup

Gestión del equipo (cuando sea necesario)
  ├── Registrar nuevos asesores en "Equipo de Asesores"
  ├── Agregar o reasignar clientes en "Clientes"
  └── Actualizar precios o agregar productos en "Catálogo"
```

---

## Preguntas frecuentes

**¿Un asesor puede ver los clientes de otro asesor?**
No. Cada asesor solo ve los clientes asignados a su cédula. Solo el admin ve todo.

**¿Cómo asigno un cliente existente a otro asesor?**
Entra al cliente desde el módulo Clientes, edítalo y cambia el campo "Asesor Asignado".

**¿Qué pasa si un asesor pierde su dispositivo?**
Los datos están en el servidor. El asesor puede ingresar desde otro dispositivo con su cédula y sincronizar para recuperar todo.

**¿Puedo registrar visitas en nombre de un asesor?**
Sí. Abre el módulo Clientes, filtra por el asesor y abre la visita del cliente correspondiente.

**¿Cómo agrego a un asesor nuevo al equipo?**
Ve a Menú → Equipo de Asesores → + Registrar Asesor. Una vez guardado, el asesor puede entrar con su cédula de inmediato.
