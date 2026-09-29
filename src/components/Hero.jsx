import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { INQUIRY_URL } from '../config.js'
import Button from './ui/Button.jsx'
import Eyebrow from './ui/Eyebrow.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="content-wrap hero__inner">
        <div className="hero__copy">
          <Eyebrow>Support for final-year students</Eyebrow>
          <h1 className="hero__heading" id="hero-heading">
            Final-year project guidance.
          </h1>
          <p className="hero__description">
            Research, software development, and defense preparation, guided so you understand what you submit.
          </p>
          <div className="hero__actions">
            <Button
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get project support
              <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
            </Button>
            <a className="hero__process-link" href="#process">
              See how it works
              <ArrowDown size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className="hero__media">
          <img
            className="hero__image"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85"
            alt="A software project taking shape on a laptop"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption className="hero__caption">
            <span>RESEARCH / BUILD / DEFEND</span>
            <strong>Guidance at every stage.</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
