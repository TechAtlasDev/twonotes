import Section from "../../section";
import TareaIcon from "../../../assets/icons/tareaicon";
import { useState } from "react";

import NewTareaModal from "./new_modal";

export default function NewTarea() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Section className="flex flex-col justify-center items-center py-20">
        <TareaIcon className="w-52" />
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">¡Comienza creando tu nueva tarea!</h2>
          <div className="mt-4">
            <button onClick={openModal} className="btn btn-primary">
              Crear nueva tarea
            </button>
          </div>
        </div>
      </Section>

      {modalOpen && (
        <div className="modal modal-open">
          <NewTareaModal closeModal={closeModal} />
        </div>
      )}
    </>
  );
}