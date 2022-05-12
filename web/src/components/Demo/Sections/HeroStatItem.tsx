interface HeroStatItemProps {
  text: string
  number: string
  hasSideBorder?: boolean
}

export function HeroStatItem({
  text,
  number,
  hasSideBorder
}: HeroStatItemProps) {
  const afterBorder = hasSideBorder
    ? `
    lg:after:absolute lg:after:block after:content-[''] after:h-full
    after:border-r after:border-brand-500
    after:-right-[40%]`
    : ''

  return (
    <div
      className={`
        flex flex-col items-center relative
        ${afterBorder}
      `}
    >
      <h3 className="text-5xl font-bold pb-2">+{number}</h3>
      <p className="text-brand-500 font-medium text-center whitespace-nowrap">
        {text}
      </p>
    </div>
  )
}
