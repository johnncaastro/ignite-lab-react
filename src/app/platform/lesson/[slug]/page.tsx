'use client'

import { useState } from 'react'
import { Header } from '../../../../Components/Header/page'
import { Sidebar } from '../../../../Components/Sidebar/page'
import { Video } from '../../../../Components/Video/page'

interface RouteParams {
  params: {
    slug: string
  }
}

export default function Platform({ params }: RouteParams) {
  const [isMenuLessonsOpen, setIsMenuLessonsOpen] = useState(false)

  return (
    <div>
      <Header
        isMenuLessonsOpen={isMenuLessonsOpen}
        onMenuLessonsOpen={setIsMenuLessonsOpen}
      />

      <div className="relative top-[70px] flex">
        <Video lessonSlug={params.slug} />
        <Sidebar
          paramsSlug={params.slug}
          isMenuLessonsOpen={isMenuLessonsOpen}
        />
      </div>
    </div>
  )
}
