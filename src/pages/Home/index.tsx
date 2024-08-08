import { Collections } from './components/Collections'
import { Collectors } from './components/Collectors'
import { Hero } from './components/Hero'

export function Home() {
  return (
    <>
      <Hero />
      <Collectors />
      <Collections />
    </>
  )
}
