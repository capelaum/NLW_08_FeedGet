import happyDoctor from '../../../assets/Demo/doutor-feliz-segurando-prancheta-com-pacientes.png'

export function About() {
  return (
    <section
      id="about"
      className="bg-brand-100 py-40 flex flex-col items-center w-full px-5"
    >
      <div
        className="
          w-full max-w-md lg:max-w-[1120px]
          flex flex-col lg:flex-row-reverse items-center gap-16
        "
      >
        <div className="flex-1">
          <header className="pb-6">
            <h4 className="text-brand-500 text-xs uppercase font-semibold pb-4">
              Sobre nós
            </h4>
            <h2 className="text-zinc-900 text-4xl font-semibold leading-normal">
              Entenda quem somos e por que existimos
            </h2>
          </header>

          <div className="content">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>

        <img
          src={happyDoctor}
          alt="Doutor feliz segurando prancheta com pacientes"
          className="w-full lg:w-1/2"
        />
      </div>
    </section>
  )
}
