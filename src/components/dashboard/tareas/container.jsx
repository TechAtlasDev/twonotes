export default function ContainerTareaResume({tarea, index}) {
  return (
    <li key={index} className="bg-base-200 rounded-lg p-3 text-md">
      <h2 className="text-md">{tarea.descripcion}</h2>
      <p className="text-sm">Fecha de entrega: <label className="font-bold">{tarea.fecha_entrega.toDate().toLocaleString()}</label></p>
    </li>
  )
}