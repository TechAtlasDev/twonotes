import Section from '../components/section'
import LoginForm from '../components/sections/loginform'

export default function Login() {
  return (
    <Section className="w-full h-full flex flex-row">
      <div className='hidden lg:block top-0 bg-base-300 left-0 w-1/2 h-full bg-cover bg-center bg-no-repeat '></div>
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2'>
        <LoginForm />
      </div>
    </Section>
  )
}
