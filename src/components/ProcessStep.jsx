import Divider from './ui/Divider.jsx'

export default function ProcessStep({ number, title, description }) {
  return (
    <li className="process-step">
      <Divider />
      <article className="process-step__content">
        <div className="process-step__marker" aria-hidden="true">
          <span>{number}</span>
        </div>
        <h3 className="process-step__title">{title}</h3>
        <p className="process-step__description">{description}</p>
      </article>
    </li>
  )
}
