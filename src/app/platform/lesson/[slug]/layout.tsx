import { Metadata } from 'next'

interface LessonLayoutProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: LessonLayoutProps): Metadata {
  const arraySlug = params.slug.split('-')
  const newArraySlug = arraySlug
    .filter((word) => word.replace('or', ''))
    .join(' ')

  const formattedSlug = newArraySlug.toString()

  return {
    title: `Ignite Lab | ${formattedSlug}`,
  }
}

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
