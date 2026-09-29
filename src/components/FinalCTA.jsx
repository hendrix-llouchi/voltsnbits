import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { INQUIRY_URL } from '../config.js'
import Button from './ui/Button.jsx'
import Divider from './ui/Divider.jsx'
import Eyebrow from './ui/Eyebrow.jsx'

export default function FinalCTA() {
  return (
    <section className="final-cta section-space" id="inquiry" aria-labelledby="final-cta-heading">
      <div className="content-wrap final-cta__inner">
        <Divider />
        <div className="final-cta__layout">
          <div>
            <Eyebrow>Ready to start?</Eyebrow>
            <h2 className="final-cta__heading" id="final-cta-heading">
              <span>Tell us what you&apos;re</span>
              <em>working on.</em>
            </h2>
          </div>
          <div className="final-cta__details">
            <p className="final-cta__copy">
              Share where you are in your project. We&apos;ll help you find the next step.
            </p>
            <div className="final-cta__actions">
              <Button
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get project support
                <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </Button>
              <a className="final-cta__process-link" href="#process">
                Or explore the process again
                <ArrowDown size={15} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
