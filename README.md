# 🧾 React Formulario con Validación Zod + React Hook Form

Este proyecto muestra un ejemplo de formulario en React con validación de datos utilizando **React Hook Form** y **Zod**. Incluye inputs personalizados conectados al sistema de validación a través de `Controller`, lo que permite usar componentes reutilizables sin perder control ni validación.

## 🚀 Tecnologías utilizadas

* [React](https://reactjs.org/)
* [React Hook Form](https://react-hook-form.com/)
* [Zod](https://zod.dev/)
* [TypeScript](https://www.typescriptlang.org/) (para tipos fuertes y autocompletado)
* CSS personalizado

## 📁 Estructura del proyecto

```
src/
├── App.css
├── App.tsx
├── main.tsx                      # Punto de entrada principal (Vite)
├── index.css
├── components/
│   ├── CustomForm/
│   │   ├── components/
│   │   │   ├── CustomInput.tsx   # Componente input reutilizable
│   │   │   ├── CustomInput.css   # Estilos del input
│   │   │   └── index.ts
│   │   ├── models/
│   │   │   ├── form.model.ts     # Tipos y esquema de validación con Zod
│   │   │   └── index.ts
│   │   ├── CustomForm.tsx        # Componente principal del formulario
│   │   └── index.ts
│   └── CustomLayout/             # Carpeta reservada para layout (no usada aún)
└── vite-env.d.ts
```

## 📋 Validación del formulario

La validación se basa en un esquema Zod que define las reglas de cada campo (por ejemplo, email válido, contraseñas iguales, etc.). Este esquema se adapta al sistema de React Hook Form usando `zodResolver`.

### Campos del formulario:

* **Nombre** (`name`)
* **Email** (`email`)
* **Contraseña** (`password`)
* **Confirmar contraseña** (`confirmPassword`)

### Ejemplo de esquema (`models.ts`):

```ts
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo no válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"]
});

export type FormValues = z.infer<typeof schema>;
```

## 🧠 ¿Qué hace especial este proyecto?

✅ Inputs personalizados pero **conectados a React Hook Form**
✅ Validación **automatizada con Zod**
✅ **Errores renderizados** automáticamente si se violan las reglas
✅ Código limpio y modular

## ▶️ Cómo ejecutarlo

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

> Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [Vite](https://vitejs.dev/) si usas este sistema de bundling.

## 📄 Licencia

MIT License.


