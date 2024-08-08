import { ReactNode } from 'react'

interface IHeaderButtonProps {
  children: ReactNode
  className?: string
}

export function HeaderButton({ children, className, ...props }: IHeaderButtonProps) {
  return (
    <button {...props} className={`flex flex-row justify-center items-center px-6 py-3 gap-2 ${className} transition-all duration-300 ease-in-out `}>
      {children}
    </button>
  )
}
