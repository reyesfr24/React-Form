/* 
Un servicio en React normalmente es un módulo (archivo JS/TS) que contiene funciones reutilizables para interactuar con APIs, 
manejar datos o lógica de negocio.

La idea es separar responsabilidades:
Los componentes React se encargan de la UI (qué se ve).
Los servicios se encargan de obtener/procesar datos (qué hacer con la información).

*/

import axios from "axios"
import { type Character } from "../models/character.model"

const BASE_URL = "https://rickandmortyapi.com/api"

export const getCharacter = (id: number) => {
  return axios.get<Character>(`${BASE_URL}/characters/${id}`)
}

export const newCharacter = (character: Character) => {
  return axios.post<null>(`${BASE_URL}/characters/`, character)
}