'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import logoIgniteLabImg from '../../public/logo-ignite-lab.svg'
import mockupImg from '../../public/mockup.png'
import logoRocketseatImg from '../../public/logo-rocketseat.svg'
import { FormEvent, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { CircleNotch } from '@phosphor-icons/react'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export default function Subscriber() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { called }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    try {
      await createSubscriber({
        variables: {
          name,
          email,
        },
      })

      router.push('/platform/lesson/nlw-ia-or-abertura-oficial')
    } catch {
      throw new Error('Erro ao se inscrever!')
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-600 to-gray-900 px-28 pt-20 mobile:max-desktop:px-0 mobile:max-desktop:pt-10">
        <div className="flex items-center justify-between mobile:max-desktop:flex-col mobile:max-desktop:gap-8 mobile:max-desktop:text-center">
          <div className="max-w-[624px] mobile:max-desktop:flex mobile:max-desktop:flex-col mobile:max-desktop:items-center mobile:max-desktop:px-6">
            <Image src={logoIgniteLabImg} alt="Ignite Lab" width={200} />

            <h1 className="mb-6 mt-8 text-3xl text-gray-100">
              Construa uma{' '}
              <strong className="text-blue-300">aplicação completa</strong>,
              <br />
              do zero, com <strong className="text-blue-300">React JS</strong>
            </h1>

            <p className="text-gray-300">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais <br /> utilizadas e com alta demanda para acessar
              as melhores oportunidades do mercado.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex h-64 w-72 flex-col items-start gap-2 rounded border border-gray-500 bg-gray-700 p-8"
          >
            <h2 className="mb-4 text-base font-semibold text-gray-100">
              Inscreva-se gratuitamente
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-sm border border-gray-800 bg-gray-800 p-2 text-sm text-gray-100
              outline-none placeholder:text-gray-400 focus:border focus:border-green-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-sm border border-gray-800 bg-gray-800 p-2 text-sm text-gray-100
              outline-none placeholder:text-gray-400 focus:border focus:border-green-300"
            />

            <button
              type="submit"
              disabled={called}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm border-0 bg-green-500 p-2 text-xs uppercase text-white hover:bg-green-600 disabled:opacity-50"
            >
              {called ? (
                <>
                  <CircleNotch className="h-5 w-5 animate-spin" />
                  carregando a plataforma
                </>
              ) : (
                <>garantir minha vaga</>
              )}
            </button>
          </form>
        </div>

        <Image
          src={mockupImg}
          alt="projeto react no vs code"
          className="px-3"
        />
      </div>
      <footer className="flex items-center justify-between bg-gray-800 p-6 mobile:max-laptop:flex-col mobile:max-laptop:justify-center mobile:max-laptop:gap-6">
        <div className="flex items-center gap-6 mobile:max-laptop:flex-col">
          <Image src={logoRocketseatImg} alt="Rocketseat" width={180} />
          <span className="text-gray-400">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>

        <span className="text-gray-400">Políticas de privacidade</span>
      </footer>
    </>
  )
}
