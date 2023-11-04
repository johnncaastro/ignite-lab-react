import Image from 'next/image'
import logoIgniteLabImg from '../../../public/logo-ignite-lab.svg'
import { ButtonMenuLessons } from '../ButtonMenuLessons/page'

interface HeaderProps {
  isMenuLessonsOpen: boolean
  onMenuLessonsOpen: (state: boolean) => void
}

export function Header({ isMenuLessonsOpen, onMenuLessonsOpen }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 z-10 flex justify-center border-b border-gray-500 bg-gray-700 py-5 mobile:max-desktop-large:justify-between mobile:max-desktop-large:gap-1 mobile:max-desktop-large:px-6">
      <Image src={logoIgniteLabImg} alt="Ignite lab reactjs" />

      <ButtonMenuLessons
        isMenuLessonsOpen={isMenuLessonsOpen}
        onMenuLessonsOpen={onMenuLessonsOpen}
      />
    </header>
  )
}
