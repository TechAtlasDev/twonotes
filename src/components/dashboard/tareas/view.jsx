import { getTareas } from "../../../db/users";
import { useState, useEffect } from "react";

import NewTarea from "./new";

export default function ListTareas() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // Intentar obtener el usuario desde localStorage
    let userId = null;
    try {
      const user = localStorage.getItem("user");
      userId = user ? JSON.parse(user).uid : null;
      console.log("📌 User ID desde localStorage:", userId);
    } catch (err) {
      console.error("⚠ Error leyendo localStorage", err);
      setError("Error obteniendo usuario");
      setLoading(false);
      return;
    }

    if (!userId) {
      setError("Usuario no autenticado");
      setLoading(false);
      return;
    }

    getTareas(userId)
      .then(tareas => {
        if (isMounted) {
          console.log("📂 Tareas obtenidas:", tareas);
          setTareas(tareas);
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          console.error("🔥 Error al obtener tareas:", err);
          setError("Error al obtener tareas");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div>
      {tareas.length > 0 ? (
        tareas.map(tarea => (
          <div key={tarea.id} className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold">{tarea.descripcion}</h2>
            <p className="text-gray-500">Curso: {tarea.curso}</p>
            <p className="text-gray-500">
              Entrega:{" "}
              {tarea.fechaEntrega?.toDate 
                ? new Date(tarea.fechaEntrega.toDate()).toLocaleDateString() 
                : new Date(tarea.fechaEntrega).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <NewTarea/>
      )}
    </div>
  );
}
