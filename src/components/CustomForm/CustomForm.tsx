import {z} from "zod"

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"), // Por defecto las propiedades z de schema son obligatorias
  email: z.email("Correo inválido").min(1, "El correo es obligatorio"),
  password: z.string().min(5, "La contraseña debe de tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "La confimración debe tener al menos 6 caracteres")
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas son inválidas",
  path: ['confirmPassword']
})

type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
  
}