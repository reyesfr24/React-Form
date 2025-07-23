// FiledError: tipo para representar errores de un campo

import  { type FieldError, type Control, Controller }  from "react-hook-form" 
import './CustomInput.css'
import type { FormValues } from "../models";

interface Props {
  name: keyof FormValues; // keyof es un operador que permite obtener las claves de un tipo de objeto como un tipo literal.
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = ({name, control, label, type, error }: Props) => {
  return (
      <div className="form-group">
        
        {/* Esto vincula el texto del label descriptivo con el input a través de la etiqueta htmlFor que tiene que tenerl el mismo
        valor que el id del input */}
        <label htmlFor={name}>{label}</label> 
        
        {/* Controller es un componente de React Hook Form que conecta un input personalizado 
        (no nativo o no registrado automáticamente) con el sistema de formularios. */}
        <Controller 
          name={name} // Nombre del campo que estamos controlando. Tiene que coincidir con el nombre del campo en el esquema de validación.
          control={control} 

          // {field} es un objeto que React Hook Form da automáticamente, y que contiene todas las props necesarias para 
           //que ese input esté conectado al formulario ( incluye onChange, onBlur, value, name, ref, etc.).
          render={ ({field}) => 
            <input 
              id={name} 
              type={type}
              
              // desestructuración con el spread operator es como si escribieramos una a una las propiedades de field:
              // name={field.name}
              // value={field.value} .....
              {...field} 
              className={`form-control ${ error ? "is-invalid" : "" }`}
            />
          }
        />
        {error && <p className="error">{error.message}</p>}
      </div>
  )
}

export default InputForm

