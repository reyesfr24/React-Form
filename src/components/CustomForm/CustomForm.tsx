import { zodResolver } from "@hookform/resolvers/zod"; // Librería de validación: adapta el esquema de validación de Zod para usarlo dentro de React Hook Form.
import { type SubmitHandler, useForm } from "react-hook-form"
import InputForm from "./components/CustomInput"
import { type FormValues, schema } from "./models" // tipo inferido de Zod (para TypeScript) y el esquema de validación que define las reglas del formulario.

// useForm() crea un centro de control del formulario.
// El control que devuelve se pasa a los componentes hijos.
// Controller conecta cada input con ese sistema de control.
// Así puedes usar inputs personalizados sin perder validación, estado ni errores.

const CustomForm = () => {
  const {control, handleSubmit, formState: { errors }} = 
  useForm<FormValues>({ // El tipo de los datos del formulario se establecen en FormValues que a su vez se infiere del esquema zod.
    // Como en los tipos hay "name: string, email:string.." en el formulario tendrá que haber un elemento con un atributo name, email.. y todos los que haya.
    
    // Control es necesario para conectar el formulario con los inputs personalizados. Siempre se suele llamar así
    // handleSubmit es una función envuelve al onSubmit del formulario para que solo se envíe datos válidos.
    // formState: { errors }, // Aquí se almacenan los errores de validación del formulario 

    resolver: zodResolver(schema), // conectamos la validación de Zod con React Hook Form. Si el formulario no cumple las reglas del schema, se generan errores automáticamente.
    // Si no estuviera resolver tendíramos que validar manualmente el cada input
    mode: "onBlur",
    
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    } 
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => { // declara un función de tipo SubmitHandler (proporcionada por React Hook Form) y le especifica
    // que el tipo de datos que recibe es FormValues.
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm name="name" control={control} label="Nombre" type="text" error={errors.name} />
      <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
      <InputForm name="password" control={control} label="Contraseña" type="password" error={errors.password} />
      <InputForm name="confirmPassword" control={control} label="Confirmar contraseña" type="password" error={errors.confirmPassword} />
      <button type="submit">Enviar</button>
      {/* Control se necesita siempre que se use el componente Controller (definido en el componente InputForm) por usar
      campo controlados (React controla el valor con su estado) */}


    </form>
  )
}

export default CustomForm;