/* 
  Objetivo useCallback: se utiliza para memorizar una INSTANCIA de una función *hace que un hijo no renderice*
  Ejemplo:  Tienes un número de telefono al que llamas todos los días, lo guardas en contactos en vez de marcar siempre
  en vez de marcarlo cada vez. A menos que el número cambie siempre utilizo el contacto

  Explicación: Cuando tenemos un método que no va a cambiar como en este caso makeCall. La función se crea en el padre (PhoneBook) pero se la pasamos 
  al hijo (ContactCard). Cada vez que creemos un contacto, al ser estado del padre [contacts] el padre se volverá a renderizar por lo que se volverá a
  contruir la función makeCall. Como está función es parámetro del componente hijo, el hijo también se renderiza. Por lo tanto sin useCallback cada vez
  que aádamos con contacto se volverán a renderizar todos los demás. Con useCallback en makeCall, conseguimos que aunque se renderize el padre (y todo
  lo que contiene), como la función será igual y es parámetro de otro componente (hijo), no se contruya la función de nuevo para que no renderice el
  componente donde es parámetro
*/
import { memo, useCallback, useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact
  onCall: (phone: string) => void
}

/* 
  Componente hijo
  se usa memo para memorizar el componente y así conseguir que aunque se renderice todo por el cambio de estado, no renderice los hijos si no
  cambian sus propiedades 
*/
const ContactCard = memo(({ contact, onCall }: ContactProps) => {
  console.log(`Renderizando contacto ${contact.name}`)

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Teléfono: {contact.phone}</p>
      <button onClick={() => onCall(contact.name)}>Llamar</button>
    </div>
  )
})

// Componente padre
export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1, name: "Antonio", phone: "123-456-789"
    },
    {
      id: 2, name: "Lucia", phone: "234-567-891"
    },
    {
      id: 3, name: "Jose", phone: "345-678-912"
    },
  ])

  const [log, setLog] = useState<string>("")

  const makeCall = useCallback((name: string) => setLog(`Llamando al ${name}`), [] )

  const addContact = () => {
    const newContact = {
      id: contacts.length +1,
      name: `Contact ${contacts.length +1}`,
      phone: `${Math.floor(1000000000000 + Math.random() * 900000000000)}`
    }

    setContacts([...contacts, newContact])
  }

  /* 
    En este return no le pasamos la función makeCall en sí (por eso no lleva el parámetro de entrada)
    Lo que le pasamos es la referencia a la función. EN la definición del ContactCard es donde se define
    que la función que reciba por props se le pasará el argumento contact.phone
  */
  return (
    <div>
      <h2>Agenda de Contacto</h2>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}
      <button onClick={addContact}>Agregar contacto</button>
      <p>{log}</p>
    </div>
  )
} 