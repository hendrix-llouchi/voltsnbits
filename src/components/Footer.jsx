import { ArrowUpRight } from 'lucide-react'
import { INQUIRY_URL } from '../config.js'
import Divider from './ui/Divider.jsx'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-wrap">
        <Divider />
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <p className="site-footer__wordmark">Volts&amp;Bits</p>
            <p className="site-footer__description">
              Guiding final-year students from project idea to confident defense.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <h2 className="site-footer__label">Navigate</h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href={INQUIRY_URL} target="_blank" rel="noopener noreferrer">
                  Start Your Project
                </a>
              </li>
            </ul>
          </nav>

          <div className="site-footer__contact">
            <h2 className="site-footer__label">Have a project in mind?</h2>
            <a className="site-footer__contact-link" href={INQUIRY_URL} target="_blank" rel="noopener noreferrer">
              Tell us about it
              <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a className="site-footer__contact-link site-footer__email-link" href="mailto:voltsnbits26@gmail.com">
              <svg className="site-footer__gmail-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 7.5 12 14l9-6.5" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 7.5v10" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M3 7.5v10" stroke="#FBBC04" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M3 17.5h18" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              voltsnbits26@gmail.com
            </a>
          </div>
        </div>

        <Divider />
        <div className="site-footer__bottom">
          <p>&copy; 2026 Volts&amp;Bits. All rights reserved.</p>
          <p>Built to help students understand, build, and confidently defend their work.</p>
        </div>
      </div>
    </footer>
  )
}
