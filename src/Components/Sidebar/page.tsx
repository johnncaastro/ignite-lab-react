'use client'

import { gql, useQuery } from '@apollo/client'
import { Lesson } from '../Lesson/page'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}

interface SidebarProps {
  paramsSlug: string
  isMenuLessonsOpen: boolean
}

export function Sidebar({ paramsSlug, isMenuLessonsOpen }: SidebarProps) {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside
      data-menu={isMenuLessonsOpen}
      className="w-[348px] p-6 mobile:max-desktop-large:sr-only data-[menu=true]:mobile:max-desktop-large:not-sr-only data-[menu=true]:mobile:max-desktop-large:absolute
      data-[menu=true]:mobile:max-desktop-large:bottom-0 data-[menu=true]:mobile:max-desktop-large:top-1 data-[menu=true]:mobile:max-desktop-large:z-10 data-[menu=true]:mobile:max-desktop-large:h-full data-[menu=true]:mobile:max-desktop-large:w-full data-[menu=true]:mobile:max-desktop-large:bg-gray-700 data-[menu=true]:mobile:max-desktop-large:p-6"
    >
      <h3 className="border-b border-gray-500 pb-6 text-2xl font-bold text-white">
        Cronograma das aulas
      </h3>

      {data?.lessons.map((lesson) => {
        return (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            paramsSlug={paramsSlug}
            availableAt={new Date(lesson.availableAt)}
            lessonType={lesson.lessonType}
          />
        )
      })}
    </aside>
  )
}
