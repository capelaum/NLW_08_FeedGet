import { NavItemType } from './Nav'

interface NavItemProps {
  isActive: boolean
  isNavOnTop: boolean
  link: string
  label: string
  setActiveNavItem: (navItemType: NavItemType) => void
}

export function NavItem({
  isActive,
  link,
  label,
  isNavOnTop,
  setActiveNavItem
}: NavItemProps) {
  return (
    <li className="relative flex justify-center items-center py-5 px-2 ">
      <a
        onClick={() => setActiveNavItem(link.replace('#', '') as NavItemType)}
        href={link}
        className={`
          inline-block opacity-70
          hover:opacity-100 hover:font-bold
          after:absolute after:block after:h-[2px] after:top-[62px] after:left-0 after:rounded-rl-full
          hover:after:w-full after:content-['']
          after:transition-all after:duration-200 after:ease-in-out

          ${isNavOnTop ? 'after:bg-brand-500 ' : 'after:bg-white'}

          ${isActive ? 'font-bold opacity-100 after:w-full' : 'after:w-0 '}
      `}
      >
        {label}
      </a>
    </li>
  )
}
