/*
  AbortController es una API nativa de JS que permite cancelar fetch o peticiones HTTP.
  Su propiedad signal se pasa a la llamada HTTP (Axios lo soporta) y permite abortar la petición si es necesario, por ejemplo si el usuario
  cambia de página antes de que la petición termine.
*/

export const loadAbort = () => {
  return new AbortController();
}