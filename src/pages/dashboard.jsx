import Section from "../components/section"
import Navbar from "../components/dashboard/navbar"
import Body from "../components/dashboard/body"

export default function DashboardView() {
  return (
    <Section>
      <Navbar />
      <Body />
    </Section>
  )
}