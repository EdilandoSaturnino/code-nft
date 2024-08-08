import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className='py-12'>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
