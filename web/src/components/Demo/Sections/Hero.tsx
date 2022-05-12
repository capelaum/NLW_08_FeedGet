import heroImage from '../../../assets/Demo/mulher-negra-com-moleton-verde-com-as-duas-maos-no-peito.png'
import { ScheduleButton } from '../ScheduleButton'
import { HeroStatItem } from './HeroStatItem'

/*
before:bg-brand-200 before:w-full
before:h-full
before:absolute before:block -z-1
before:top-0 before-left-0  before:content-['']
*/

export function Hero() {
  return (
    <section
      id="home"
      className="
        pt-[120px] w-full flex justify-center bg-brand-200

      "
    >
      <div className="w-full max-w-[1120px] flex flex-col items-center mx-5 relative">
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col w-full lg:justify-center pb-16">
            <header>
              <h4 className="uppercase text-brand-500 font-semibold text-sm text-center lg:text-left">
                BOAS-VINDAS A DOCTORCARE 👋
              </h4>
              <h1 className="text-zinc-900 text-4xl lg:text-5xl font-semibold pt-5 pb-8 leading-snug lg:leading-snug text-center lg:text-left">
                Assistência médica simplificada para todos
              </h1>
            </header>

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-zinc-600 font-medium text-center lg:text-left pb-8">
                Os médicos da DoctorCare vão além dos sintomas para tratar a
                causa raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>

              <ScheduleButton variant="primary" link="#contact" />
            </div>
          </div>

          <div className="lg:mr-5">
            <img
              src={heroImage}
              alt="Mulher negra vestindo moletom verde com as duas mãos no peito e sorrindo"
              className="block w-[300px] lg:w-[740px]"
            />
          </div>
        </div>

        <div
          className="
              w-fit lg:w-full max-w-full
            bg-white border border-zinc-100 rounded-lg
              flex flex-col lg:flex-row justify-between items-center gap-16
              py-10 lg:py-14 px-20 lg:px-[100px]
            "
        >
          <HeroStatItem
            hasSideBorder
            text="Pacientes atendidos"
            number="3.500"
          />
          <HeroStatItem
            hasSideBorder
            text="Especialistas disponíveis"
            number="15"
          />
          <HeroStatItem text="Anos no mercado" number="10" />
        </div>
      </div>
    </section>
  )
}
