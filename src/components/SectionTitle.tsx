import { ReactNode } from 'react'

interface ISectionTitleProps {
  children: ReactNode
}

export function SectionTitle({ children }: ISectionTitleProps) {
  return <h2 className='text-4xl text-white font-semibold my-12 text-center'>{children}</h2>
}
