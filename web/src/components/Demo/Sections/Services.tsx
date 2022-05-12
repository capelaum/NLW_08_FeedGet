import { ServiceCard } from './ServiceCard'

const servicesCards = [
  {
    title: 'Problemas digestivos',
    text: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
  },
  {
    title: 'Saúde Hormonal',
    text: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
  },
  {
    title: 'Bem-estar mental',
    text: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
  },
  {
    title: 'Cuidados Pediátricos',
    text: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
  },
  {
    title: 'Autoimune e inflamação',
    text: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
  },
  {
    title: 'Saúde do Coração',
    text: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
  }
]

export function Services() {
  return (
    <section
      id="services"
      className="bg-zinc-100 py-40 flex flex-col items-center w-full "
    >
      <div className="w-full max-w-[1120px]  flex flex-col items-center ">
        <header className="pb-16 max-w-[500px]">
          <h4 className="text-brand-500 text-center text-xs uppercase font-semibold pb-4">
            Serviços
          </h4>
          <h2 className="text-zinc-900 text-center text-4xl font-semibold mx-5">
            Como podemos ajudá-lo a se sentir melhor?
          </h2>
        </header>

        <div
          className="
            flex flex-col gap-8 mx-5
            lg:grid lg:grid-cols-3
          "
        >
          {servicesCards.map(({ title, text }) => (
            <ServiceCard title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  )
}
