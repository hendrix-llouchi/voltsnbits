import { ArrowLeft } from 'lucide-react'

export default function LegalPage({ eyebrow, title, intro, children }) {
  return (
    <main className="legal-page">
      <div className="content-wrap">
        <a className="legal-page__back" href="/">
          <ArrowLeft size={15} strokeWidth={1.8} aria-hidden="true" />
          Back to Volts&Bits
        </a>
        <header className="legal-page__header">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="legal-page__title">{title}</h1>
          <p className="legal-page__intro">{intro}</p>
        </header>
        <article className="legal-page__content">{children}</article>
      </div>
    </main>
  )
}
