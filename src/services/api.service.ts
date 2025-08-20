/* 
Un servicio en React normalmente es un módulo (archivo JS/TS) que contiene funciones reutilizables para interactuar con APIs, 
manejar datos o lógica de negocio.

La idea es separar responsabilidades:
Los componentes React se encargan de la UI (qué se ve).
Los servicios se encargan de obtener/procesar datos (qué hacer con la información).

*/

import axios from "axios"
import { loadAbort } from "../utilities"
import type { useApiCall, Character } from "../models"

const BASE_URL = "https://rickandmortyapi.com/api"

export const getCharacter = (id: number): useApiCall<Character> => {
  const controller = loadAbort(); // Crea un AbortController para esa petición
  return { 
    call: axios.get<Character>(`${BASE_URL}/character/${id}`, {signal: controller.signal}), 
    controller
  }
}

export const newCharacter = (character: Character): useApiCall<null> => {
  const controller = loadAbort();
  return {
    call: axios.post<null>(`${BASE_URL}/character/`, character, { signal: controller.signal }),
    controller
  }
}