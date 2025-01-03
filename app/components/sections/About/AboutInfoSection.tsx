type InfoSectionProps = {
  id: string
  title: string
  items: readonly string[]
}

export default function AboutInfoSection({ id, title, items }: InfoSectionProps) {
  return (
    <section
      data-cy={id}
      className="bg-light/5 rounded-lg p-6 space-y-4 h-full"
      aria-labelledby={`${id}-heading`}
    >
      <h3
        id={`${id}-heading`}
        className="text-xl font-display font-semibold text-accent"
      >
        {title}
      </h3>
      <ul role="list" className="space-y-2 text-light/70">
        {items.map((item) => (
          <li key={item} className="list-disc ml-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
} 