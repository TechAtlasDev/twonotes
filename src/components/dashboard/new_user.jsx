import NewIcon from "../../assets/icons/new"

export default function NewUser() {
  return (
    <div className="flex flex-col items-center justify-center h-full mx-10 md:mx-44 lg:mx-52">
      <NewIcon className="w-28 text-base-content/60" />
      <div className="flex flex-col items-center my-5 gap-3">
        <h1 className="text-3xl font-bold">Bienvenido a TwoNotes</h1>
        <p className=" text-center">Para iniciar, sube tu horario</p>
        <button className="btn btn-primary">Horario</button>
      </div>
    </div>
  )
}