import { addTarea } from "../../../db/users";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";

export default function NewTareaModal({ closeModal }) {
  const [descripcion, setDescripcion] = useState("");
  const [curso, setCurso] = useState("");
  // const [fecha_creacion] = useState(new Date()); // Se genera automáticamente
  const [fecha_entrega, setFechaEntrega] = useState(
    new Date(new Date().setDate(new Date().getDate() + 7)) // Por defecto, una semana después
  );
  const [prioridad, setPrioridad] = useState("1"); // 1: Baja, 2: Media, 3: Alta
  const [estado] = useState(false); // Por defecto: Pendiente (false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleCrearTarea = async () => {
    // Obtener el uid desde localStorage
    const user = localStorage.getItem("user");
    const userId = user ? JSON.parse(user).uid : null; // ✅ Solo obtenemos el uid como string
  
    if (!userId) {
      setError("Error: Usuario no autenticado");
      return;
    }
  
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const tarea = {
        descripcion,
        fecha_creacion: Timestamp.fromDate(new Date()), // Guardar fecha como Timestamp
        fecha_entrega: Timestamp.fromDate(fecha_entrega),
        curso,
        prioridad: parseInt(prioridad, 10),
        estado,
      };
  
      await addTarea(userId, tarea); // ✅ Pasamos el UID correcto
      setSuccess("Tarea creada exitosamente");
  
      // Resetear formulario
      setDescripcion("");
      setFechaEntrega(new Date(new Date().setDate(new Date().getDate() + 7))); // 7 días después
      setCurso("");
      setPrioridad("1");
    } catch (error) {
      setError("Error al crear la tarea");
      console.error(error);
    } finally {
      setLoading(false);
      closeModal();
    }
  };
  

  return (
    <div className="modal-box p-6 rounded-lg shadow-lg">
      <h3 className="font-bold text-lg mb-4">Crea tu nueva tarea</h3>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <div className="flex flex-col gap-2 bg-base-200 p-4 rounded-lg w-full">
        <label className="font-bold">Descripción</label>
        <input
          type="text"
          placeholder="Escribe la descripción de la tarea"
          className="input"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        {/* Curso */}
        <label className="font-bold">Curso</label>
        <input
          type="text"
          className="input"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />

        {/* Fecha de Entrega */}
        <label className="font-bold">Fecha de Entrega</label>
        <input
          type="date"
          className="input"
          value={fecha_entrega.toISOString().split("T")[0]}
          onChange={(e) => setFechaEntrega(new Date(e.target.value))}
        />

        {/* Prioridad */}
        <label className="font-bold">Prioridad</label>
        <select
          className="input"
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
        >
          <option value="1">Baja</option>
          <option value="2">Media</option>
          <option value="3">Alta</option>
        </select>
      </div>

      {/* Botones */}
      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={handleCrearTarea}
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? "Guardando..." : "Crear Tarea"}
        </button>
        <button onClick={closeModal} className="btn btn-secondary">
          Cancelar
        </button>
      </div>
    </div>
  );
}
