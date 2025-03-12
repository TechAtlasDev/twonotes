import Section from '../components/section'

export default function Home() {
  return (
    <Section className="w-full h-full">
      <div className="flex flex-col items-center justify-center h-full mx-10 md:mx-44 lg:mx-52">
        <h1 className="text-4xl font-bold">TwoNotes</h1>
        <p className="text-lg my-4 text-center">Esta aplicación fue desarrollado de manera experimental para mejorarle la vida a los estudiantes ;)</p>
        <a href="login" className='btn btn-primary'>Iniciar</a>
      </div>
    </Section>
  )
}