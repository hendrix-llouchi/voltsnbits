import PrincipleItem from './PrincipleItem.jsx'
import Eyebrow from './ui/Eyebrow.jsx'

const principles = [
  {
    number: '01',
    title: 'Clarity',
    description: 'A clear direction and achievable scope.',
  },
  {
    number: '02',
    title: 'Technical Depth',
    description: 'Understand the tools and decisions behind your build.',
  },
  {
    number: '03',
    title: 'Guided Building',
    description: 'Work through implementation, debugging, and integration.',
  },
  {
    number: '04',
    title: 'Confident Defense',
    description: 'Explain your decisions and defend your work.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us section-space" id="about" aria-labelledby="why-us-heading">
      <div className="content-wrap">
        <div className="section-intro">
          <div>
            <Eyebrow>Why Volts&amp;Bits</Eyebrow>
            <h2 className="section-heading" id="why-us-heading">
              Technical guidance. Human mentorship.
            </h2>
          </div>
        </div>

        <ol className="principle-list">
          {principles.map((principle) => <PrincipleItem key={principle.number} {...principle} />)}
        </ol>
      </div>
    </section>
  )
}
