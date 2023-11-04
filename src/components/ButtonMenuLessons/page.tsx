import { List, X } from '@phosphor-icons/react'

interface ButtonMenuLessonsProps {
  isMenuLessonsOpen: boolean
  onMenuLessonsOpen: (state: boolean) => void
}

export function ButtonMenuLessons({
  isMenuLessonsOpen,
  onMenuLessonsOpen,
}: ButtonMenuLessonsProps) {
  function handleToggleMenuLessons() {
    onMenuLessonsOpen(!isMenuLessonsOpen)
  }

  return (
    <button
      onClick={handleToggleMenuLessons}
      className="flex items-center gap-2 desktop-large:hidden"
    >
      <span className="text-sm text-gray-100">Aulas</span>
      {isMenuLessonsOpen ? (
        <X className="h-8 w-8 text-blue-300" />
      ) : (
        <List className="h-8 w-8 text-blue-300" />
      )}
    </button>
  )
}
