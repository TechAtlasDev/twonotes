export default function CardResumen({ title, children }) {
  return (
    <div className="card bg-base-300">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
      </div>
    </div>
  )
}