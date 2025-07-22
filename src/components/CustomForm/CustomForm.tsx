import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form"
import InputForm from "./components/CustomInput"
import { type FormValues, schema } from "./models" 

const CustomForm = () => {
  const {control, handleSubmit, formState: { errors }} = 
  useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    } 
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm name="name" control={control} label="Nombre" type="text" error={errors.name} />
      <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
      <InputForm name="password" control={control} label="Contraseña" type="password" error={errors.password} />
      <InputForm name="confirmPassword" control={control} label="Confirmar contraseña" type="password" error={errors.confirmPassword} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default CustomForm;