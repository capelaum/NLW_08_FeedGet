interface ServiceCardProps {
  title: string
  text: string
}

export function ServiceCard({ title, text }: ServiceCardProps) {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg p-6 max-w-md">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#F3F0FF" />
        <path
          d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001"
          stroke="#5F3DC4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h3 className="text-zinc-900 text-2xl font-semibold py-4">{title}</h3>
      <p className="text-zinc-700">{text}</p>
    </div>
  )
}
