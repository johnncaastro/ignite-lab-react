/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import { DefaultUi, Player, Youtube } from '@vime/react'
import { gql, useQuery } from '@apollo/client'
import logoRocketseatImg from '../../../public/logo-rocketseat.svg'
import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
  Image as PhosphorImage,
} from '@phosphor-icons/react'

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      description
      videoId
      teacher {
        bio
        avatarUrl
        name
      }
    }
  }
`

interface GetLessonBySlugQueryResponse {
  lesson: {
    title: string
    description: string
    videoId: string
    teacher: {
      bio: string
      avatarUrl: string
      name: string
    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugQueryResponse>(
    GET_LESSON_BY_SLUG_QUERY,
    {
      variables: {
        slug: lessonSlug,
      },
    },
  )

  return (
    <main className="relative z-0 flex-1 border-r border-gray-500 bg-gray-800">
      <div className="flex justify-center">
        <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]">
          <Player>
            <Youtube
              videoId={String(data?.lesson.videoId)}
              key={data?.lesson.videoId}
            />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="mt-8 flex items-start justify-between gap-10 px-8 mobile:max-laptop:flex-col mobile:max-laptop:items-stretch">
        <div className="flex-1 mobile:max-laptop:flex mobile:max-laptop:flex-col">
          <h2 className="mb-4 text-2xl font-bold text-gray-100">
            {data?.lesson.title}
          </h2>
          <p className="text-gray-300">{data?.lesson.description}</p>

          <div className="mt-6 flex items-center gap-4 mobile:max-laptop-large:self-center">
            <img
              src={String(data?.lesson.teacher.avatarUrl)}
              alt={String(data?.lesson.teacher.name)}
              className="h-16 w-16 rounded-full border border-blue-300"
            />
            <div className="leading-3">
              <strong className="block text-2xl text-gray-100">
                {data?.lesson.teacher.name}
              </strong>
              <span className="text-sm text-gray-400">
                {data?.lesson.teacher.bio}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <a
            href="https://discord.gg/Jf3cXFZG"
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-sm border-0 bg-green-500 p-3 text-sm font-bold uppercase text-white transition-colors duration-200 hover:bg-green-600"
          >
            <DiscordLogo size={24} />
            comunidade no discord
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-sm border border-blue-300 p-3 text-sm font-bold uppercase text-blue-300 transition-colors duration-200 hover:bg-blue-300 hover:text-gray-800"
          >
            <Lightning size={24} />
            acesse o desafio
          </a>
        </div>
      </div>

      <div className="mt-20 flex items-center justify-between gap-8 px-8 mobile:max-laptop-large:flex-col">
        <div className="flex flex-1 items-stretch">
          <div className="flex items-center rounded-l-[4px] bg-green-600 px-6 py-12">
            <FileArrowDown className="h-10 w-10 text-white" />
          </div>

          <a
            href="#"
            className="flex items-center justify-between gap-12 rounded-r-[4px] bg-gray-700 p-6 transition-colors duration-200 hover:bg-gray-500"
          >
            <div>
              <strong className="mb-2 block text-2xl text-gray-100">
                Material complementar
              </strong>
              <span className="text-sm text-gray-300">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </span>
            </div>

            <CaretRight className="h-6 w-6 text-blue-300" />
          </a>
        </div>

        <div className="flex flex-1 items-stretch">
          <div className="flex items-center rounded-l-[4px] bg-green-600 px-6 py-12">
            <PhosphorImage className="h-10 w-10 text-white" />
          </div>

          <a
            href="#"
            className="flex items-center justify-between gap-12 rounded-r-[4px] bg-gray-700 p-6 transition-colors duration-200 hover:bg-gray-500"
          >
            <div>
              <strong className="mb-2 block text-2xl text-gray-100">
                Wallpapers exclusivos
              </strong>
              <span className="text-sm text-gray-300">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </span>
            </div>

            <CaretRight className="h-6 w-6 text-blue-300" />
          </a>
        </div>
      </div>

      <div className="px-8">
        <footer className="mt-20 flex items-center justify-between border-t border-gray-500 py-6 text-gray-400 mobile:max-laptop:flex-col mobile:max-laptop:gap-6">
          <div className="flex items-center gap-6 mobile:max-laptop:flex-col">
            <Image
              src={logoRocketseatImg}
              alt="Rocketseat"
              width={162}
              height={30}
            />
            <span>Rocketseat - Todos os direitos reservados</span>
          </div>

          <span>Políticas de privacidade</span>
        </footer>
      </div>
    </main>
  )
}
