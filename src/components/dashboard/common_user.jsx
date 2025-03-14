import CardResumen from "../card_resumen"
import { getTareas } from "../../db/users"
import { useState, useEffect } from "react";
import { get_user_id } from "../../functions/user";
import NewTareaModal from "./tareas/new_modal";
import ContainerTareaResume from "./tareas/container";

async function fetchTareas() {
  const userId = get_user_id();
  const tareas = await getTareas(userId);
  console.log(tareas)
  return tareas;
}

export default function CommonUserView() {
  const [tareas, setTareas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  useEffect(() => {
    async function loadTareas() {
      const data = await fetchTareas();
      setLoading(false);
      setTareas(data);
    }
    loadTareas();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardResumen title={"Tus tareas"}>
        {
          loading && 
          <div className="flex flex-col gap-3">
            <div className="w-full rounded-2xl skeleton h-10"></div>
            <div className="w-full rounded-2xl skeleton h-10"></div>
            <div className="w-full rounded-2xl skeleton h-10"></div>
          </div>
        }
        <ul className="flex flex-col gap-3">
          {
            loading ? null :
            tareas.length ? tareas.map((tarea, index) => (
              <ContainerTareaResume tarea={tarea} index={index} key={index} />
            )) :
            <p className="text-lg">Crea tu primer tarea!</p>
          }
        </ul>
        <button className="btn btn-primary" onClick={openModal}>Añadir tarea</button>
        {modalOpen && (
          <div className="modal modal-open">
            <NewTareaModal closeModal={closeModal} />
          </div>
        )}
      </CardResumen>
    </div>
  )
}