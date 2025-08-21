/*
  useAPI -> Plantilla reutilizable para trabajar con APIs en React.
  CustomHook para gestionar fácilmente llamadas a APIs desde los de React. En vez de que cada componente tenga que escribir todo el código para:
  manejar el estado de loading (cargando), guardar la data que devuelve la API, capturar posibles error, se centraliza todo aquí.
  Es una versión casera y simplificada de lo que hace React Query.
*/

import { useCallback, useEffect, useState } from "react";
import type { useApiCall } from "../models";

type UseApiOptions<P> = {
  autoFetch?: boolean;
  params: P;
}

type Data<T> = T | null;
type CustomError = Error | null;


interface UseApiResult<T, P> {
  loading: boolean;
  data: Data<T>;
  error: CustomError;
  fetch: (param: P) => void;
}
/* 
  “Voy a exportar una constante llamada useApi, que es una función genérica (puede recibir cualquier tipo de datos como T). 
  Esta función recibe dos parámetros: uno obligatorio (apiCall, que es otra función que devuelve una promesa de Axios con datos del tipo T)
  y uno opcional (options). Al final, devuelve un objeto con la forma definida en UseApiResult<T>.” 
*/

export const useApi = <T, P,>(apiCall: (param: P) => useApiCall<T>, options?: UseApiOptions<P>): UseApiResult<T, P> => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Data<T>>(null)
  const [error, setError] = useState<CustomError>(null)

  const fetch = useCallback((param: P) => {
    const { call, controller } = apiCall(param);
    setLoading(true);

    call.then((response) =>{
      setData(response.data);
      setError(null);
    }).catch((err) => {
      setError(err)
    }).finally(() => {
      setLoading(false)
    })

    return () => controller.abort()
  }, [apiCall])

  useEffect(() => {
    if (options?.autoFetch) {
      return fetch(options.params);
    }
  }, [fetch, options?.autoFetch, options?.params])

  return { loading, data, error, fetch }
}