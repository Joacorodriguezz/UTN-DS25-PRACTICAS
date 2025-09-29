import { useState, useEffect } from "react";

export function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        setCargando(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error al obtener datos");
        const data = await res.json();
        setDatos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, [url]);

  return { datos, cargando, error };
}
