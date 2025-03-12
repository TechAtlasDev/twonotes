import GoogleButton from "../button_google"

export default function LoginForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-center my-3">
      
      <h1 className="text-4xl font-bold my-5">TwoNotes</h1>
      <p className="text-center text-white-50">Bienvenido a TwoNotes</p>
      <p className="text-center text-white-50">Inicia sesion para continuar</p>
      
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2 px-20 lg:px-32">
        <input type="text" placeholder="Email" className="input rounded-md w-full" />
        <a href="/dashboard" className="btn btn-primary w-full">Login</a>
      </div>
      <div class="flex w-full px-20 lg:px-32 flex-col my-3">
        <div class="divider">OR</div>
        <GoogleButton />
      </div>
    </div>
  )
}
