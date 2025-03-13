import Section from '../components/section'
import LoginForm from '../components/sections/loginform'

export default function Login() {
  return (
    <Section className="w-full h-full flex flex-row">
    <div 
      className="hidden lg:block w-1/2 h-full bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/Simple Book Preloader.gif')" }}
    >
      <img src="/Simple Book Preloader.gif" alt="Gif de prueba" />
      <span className="sr-only">Imagen decorativa del login</span>
    </div>

  

      <div className='flex flex-col justify-center items-center w-full lg:w-1/2'>
        <LoginForm />
      </div>
    </Section>
  )
}

