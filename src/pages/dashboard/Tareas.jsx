import Navbar from "../../components/dashboard/navbar"
import Section from "../../components/section"
import ListTareas from "../../components/dashboard/tareas/view"

export default function Tareas() {
  return (
    <Section>
      <Navbar />
      <ListTareas />
    </Section>
  )
}