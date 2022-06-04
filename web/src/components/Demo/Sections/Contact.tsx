import contactImg from '../../../assets/Demo/homem-negro-com-moletom-bege-mexendo-no-celular.png'
import { ScheduleButton } from '../ScheduleButton'

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-40 flex flex-col items-center w-full px-5"
    >
      <div
        className="
          w-full max-w-md lg:max-w-[1120px]
          flex flex-col lg:flex-row items-center gap-16
        "
      >
        <div className="flex-1">
          <header>
            <h2 className="text-zinc-900 text-4xl font-semibold leading-snug lg:max-w-[300px]">
              Entre em contato com a gente!
            </h2>
          </header>

          <div className="content">
            <ul className="py-10">
              <li className="flex gap-2 pb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="#8257E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#8257E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                R. Amauri Souza, 346
              </li>

              <li className="flex gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="#8257E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="#8257E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                contato@doctorcare.com
              </li>
            </ul>

            <ScheduleButton
              variant="primary"
              link="https://wa.me/5511987654321"
              isTargetBlank
            />
          </div>
        </div>

        <img
          src={contactImg}
          alt="Homem negro com moletom bege mexendo no celular e sorrindo"
          className="w-full lg:w-1/2"
        />
      </div>
    </section>
  )
}
