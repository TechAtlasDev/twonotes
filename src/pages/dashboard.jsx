import Section from "../components/section"
import Navbar from "../components/dashboard/navbar"
import Body from "../components/dashboard/body"
import Sidebar from "../components/dashboard/sidebar"

export default function DashboardView() {
  return (
    <Section className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <Body />
    </Section>
  )
}