import waveBottomLeft from '../assets/wave-bottom-left.svg'
import waveTopRight from '../assets/wave-top-right.svg'

export function Waves() {
  return (
    <>
      <img
        src={waveTopRight}
        alt=""
        className="absolute top-0 right-0 max-w-[250px] sm:max-w-xs lg:max-w-sm"
      />
      <img
        src={waveBottomLeft}
        alt=""
        className="absolute bottom-0 left-0 max-w-[250px] sm:max-w-xs lg:max-w-sm"
      />
    </>
  )
}
