'use client'

import Link from 'next/link'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from '@phosphor-icons/react'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  lessonType: 'live' | 'class'
  paramsSlug: string
}

export function Lesson({
  title,
  slug,
  availableAt,
  lessonType,
  paramsSlug,
}: LessonProps) {
  const isLessonAvailable = isPast(availableAt)
  const dateFormatted = format(availableAt, "EEEE' • 'd' de 'LLLL' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = paramsSlug === slug

  return (
    <Link
      href={`/platform/lesson/${slug}`}
      data-available={isLessonAvailable}
      className="group mt-6 block data-[available=false]:pointer-events-none"
    >
      <span className="text-gray-400">{dateFormatted}</span>

      <div
        data-available={isLessonAvailable}
        data-activeLesson={isActiveLesson}
        className="mt-2 block rounded-sm border border-gray-500 px-4 pb-4 data-[activeLesson=true]:bg-green-500 data-[available=true]:group-hover:border-green-500"
      >
        <div className="mb-4 mt-2 flex items-center justify-between">
          {isLessonAvailable ? (
            <div
              data-activeLesson={isActiveLesson}
              className="flex items-center gap-2 text-sm font-semibold text-blue-300 data-[activeLesson=true]:text-white"
            >
              <CheckCircle />
              Conteúdo liberado
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm font-semibold text-warning">
              <Lock />
              Em breve
            </div>
          )}
          <span
            data-activeLesson={isActiveLesson}
            className="border border-green-300 p-1 text-xs font-bold uppercase text-green-300 data-[activeLesson=true]:border-white data-[activeLesson=true]:text-white"
          >
            {lessonType === 'class' ? 'aula prática' : 'ao vivo'}
          </span>
        </div>
        <strong
          data-activeLesson={isActiveLesson}
          className="text-gray-300 data-[activeLesson=true]:text-white"
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
