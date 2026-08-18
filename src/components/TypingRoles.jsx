import { useEffect, useState } from 'react'

const ROLES = [
  'Problem Solver',
  'Software Engineer',
  'Product Consultant',
  'Project Manager',
  'AI Strategist',
]

const TYPING_SPEED = 90
const DELETING_SPEED = 40
const PAUSE_AFTER_TYPED = 1500
const PAUSE_AFTER_DELETED = 300

export default function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED)
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
      }, PAUSE_AFTER_DELETED)
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1)
        )
      }, isDeleting ? DELETING_SPEED : TYPING_SPEED)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="text-[#985f6f]">
      {text}
      <span className="typing-cursor ml-0.5 inline-block h-[1em] w-[2px] bg-amber-900 align-middle" />
    </span>
  )
}
