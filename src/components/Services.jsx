import ServiceItem from './ServiceItem.jsx'
import Eyebrow from './ui/Eyebrow.jsx'

const services = [
  {
    number: '01',
    title: 'Machine Learning & AI Integration',
    description: 'Model selection, datasets, and practical AI integration.',
  },
  {
    number: '02',
    title: 'Focused Research & Gap Analysis',
    description: 'Refine your question and identify a research gap.',
  },
  {
    number: '03',
    title: 'Software & IoT Project Development',
    description: 'Web, mobile, full-stack, and connected-system builds.',
  },
  {
    number: '04',
    title: 'Software Integration',
    description: 'Connect APIs, databases, dashboards, and hardware.',
  },
  {
    number: '05',
    title: 'Guided Project Discovery & Mentorship',
    description: 'Scope a realistic project with clear milestones.',
  },
]

export default function Services() {
  return (
    <section className="services section-space" id="services" aria-labelledby="services-heading">
      <div className="content-wrap">
        <div className="section-intro">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="section-heading" id="services-heading">
              From research to implementation.
            </h2>
          </div>
        </div>

        <ol className="service-list">
          {services.map((service) => (
            <ServiceItem key={service.number} {...service} />
          ))}
        </ol>
      </div>
    </section>
  )
}
