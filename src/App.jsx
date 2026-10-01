import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import Navigation from './components/Navigation.jsx'
import Process from './components/Process.jsx'
import Services from './components/Services.jsx'
import TermsAndConditions from './components/TermsAndConditions.jsx'
import WhoWeHelp from './components/WhoWeHelp.jsx'
import WhyUs from './components/WhyUs.jsx'

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '')
  const legalPage = pathname === '/terms-and-conditions'
    ? <TermsAndConditions />
    : pathname === '/privacy-policy'
      ? <PrivacyPolicy />
      : null

  return (
    <div className="site-shell">
      <Navigation />
      {legalPage || (
        <main>
          <Hero />
          <WhoWeHelp />
          <Services />
          <Process />
          <WhyUs />
          <FinalCTA />
        </main>
      )}
      <Footer />
    </div>
  )
}
