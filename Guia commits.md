# Guía para Escribir Mensajes de Commit

Este archivo tiene como objetivo ayudarte a seguir una convención clara y consistente para los mensajes de commit. Utilizamos la convención **Conventional Commits** para facilitar el trabajo en equipo, el seguimiento de cambios y la integración continua.

---

## **Resumen Rápido**

Un mensaje de commit sigue esta estructura:

```
<tipo>(<alcance>): <descripción>
```

- **`<tipo>`**: Define la naturaleza del cambio. Los tipos comunes incluyen:
  - `feat`: Una nueva funcionalidad.
  - `fix`: Corrección de un error.
  - `docs`: Cambios en la documentación.
  - `style`: Cambios de formato que no afectan la lógica.
  - `refactor`: Reestructuración del código sin cambiar su comportamiento.
  - `test`: Agregar o modificar pruebas.
  - `chore`: Cambios menores o tareas auxiliares.
  - `perf`: Cambios relacionados con el rendimiento.

- **`<alcance>`** (opcional): Indica qué parte del proyecto se ve afectada (p. ej., un módulo o componente).

---

## **Formato General**

```
<tipo>(<alcance>): <descripción>

<cuerpo opcional>

<pie opcional>
```

- **`<tipo>`**: Describe la naturaleza del cambio.
- **`<alcance>` (opcional)**: Especifica qué parte del proyecto se ve afectada.
- **`<descripción>`**: Resumen breve del cambio.
- **`<cuerpo>` (opcional)**: Detalles adicionales del cambio.
- **`<pie>` (opcional)**: Referencias a issues, tickets o notas relacionadas.

---

## **Tipos Comunes**

### `feat`
Se utiliza para agregar una nueva funcionalidad.

**Ejemplos:**
```
feat(auth): agregar soporte para autenticación con OAuth

feat(ui): incluir componente de barra de búsqueda
```

### `fix`
Se usa para corregir errores.

**Ejemplos:**
```
fix(api): corregir error al manejar tokens expirados

fix(styles): solucionar problema de alineación en dispositivos móviles
```

### `docs`
Cambios en la documentación.

**Ejemplos:**
```
docs(readme): actualizar pasos de instalación

docs(api): agregar ejemplos de uso para el endpoint /login
```

### `style`
Cambios relacionados con formato, espacios, comas, etc., sin alterar la lógica del código.

**Ejemplos:**
```
style(app): aplicar formato con Prettier

style(css): eliminar espacios innecesarios
```

### `refactor`
Cambios en el código que no corrigen errores ni agregan funcionalidades nuevas.

**Ejemplos:**
```
refactor(auth): optimizar verificación de credenciales

refactor(utils): simplificar función de parseo de datos
```

### `test`
Agregar o modificar pruebas.

**Ejemplos:**
```
test(auth): agregar pruebas unitarias para flujo de login

test(api): cubrir caso de error 404
```

### `chore`
Tareas menores o cambios que no afectan directamente el código funcional del proyecto.

**Ejemplos:**
```
chore(deps): actualizar dependencias

chore(ci): agregar configuración para GitHub Actions
```

### `perf`
Cambios relacionados con el rendimiento.

**Ejemplos:**
```
perf(query): optimizar consulta SQL para reducir tiempos de respuesta

perf(images): comprimir imágenes para mejorar carga de página
```

---

## **Cuerpo del Mensaje**
El cuerpo debe incluir detalles relevantes sobre el cambio, como:
- **Por qué se realizó el cambio.**
- **Qué problema soluciona o funcionalidad agrega.**
- **Impacto en otras partes del sistema.**

**Ejemplo Completo:**
```
feat(auth): agregar soporte para autenticación con OAuth

Se añadió un nuevo flujo para autenticación con OAuth, permitiendo a los usuarios
iniciar sesión con sus cuentas de Google y Facebook.

Closes #45
```

---

## **Pie del Mensaje**
El pie del mensaje se usa para:
- Referenciar issues o tickets relacionados:
  ```
  Closes #123
  Fixes #45
  Relates to #78
  ```
- Incluir notas adicionales:
  ```
  BREAKING CHANGE: el nombre del endpoint /login ha cambiado a /auth/login
  ```

---

## **Buenas Prácticas**

1. **Escribe en modo imperativo:**
   - Correcto: "Agrega soporte para login."
   - Incorrecto: "Agregado soporte para login."

2. **Divide los cambios en commits pequeños y enfocados.**

3. **Incluye referencias a issues cuando sea relevante.**

4. **Usa mensajes descriptivos y claros, evita generalidades como "arreglado".**
