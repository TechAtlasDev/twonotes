export default function Data({ title, description, children }) {
  return (
    <section className="text-end bg-base-200 p-5 rounded-box">
      <h3 className="text-2xl col-span-1 font-semibold">{title}</h3>
      <p className="text-lg mb-5">{description}</p>
      {children}
    </section>
  )
}