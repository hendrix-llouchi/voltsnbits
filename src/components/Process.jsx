import ProcessStep from './ProcessStep.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import MediaBlock from './ui/MediaBlock.jsx'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Find a viable problem and set a clear scope.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Choose the system, tools, and milestones.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Build, integrate, test, and work through blockers.',
  },
  {
    number: '04',
    title: 'Document',
    description: 'Explain the result and prepare to defend it.',
  },
]

export default function Process() {
  return (
    <section className="process section-space" id="process" aria-labelledby="process-heading">
      <div className="content-wrap">
        <div className="section-intro">
          <div>
            <Eyebrow>The Volts&amp;Bits method</Eyebrow>
            <h2 className="section-heading" id="process-heading">
              A clear four-step process.
            </h2>
          </div>
        </div>

        <ol className="process-steps" aria-label="The four stages of the Volts&Bits method">
          {processSteps.map((step) => <ProcessStep key={step.number} {...step} />)}
        </ol>

        <div className="process-statement__layout">
          <p className="process-statement">
            BUILD IT. <span>UNDERSTAND IT.</span>
          </p>
          <MediaBlock
            className="process-statement__media"
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            meta="V&B / PROJECT SUPPORT"
            label="Research, build, document, and defend with clarity."
          />
        </div>
      </div>
    </section>
  )
}
