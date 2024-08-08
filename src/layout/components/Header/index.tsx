import logo from '/logo.svg'

import discordLogo from '../../../assets/svgs/discord_logo.svg'
import fingerprintLogo from '../../../assets/svgs/fingerprint_logo.svg'

import { HeaderButton } from './components/HeaderButton'

export function Header() {
  return (
    <header className='bg-black flex items-center justify-around p-4'>
      <div className='flex items-start gap-2'>
        <div>
          <img src={logo} alt='Logo da página' width={40} height={40} className='flex-shrink-0' />
        </div>
        <h1 className='text-white text-xl font-bold'>CodeNFT</h1>
      </div>

      <div className='flex gap-4'>
        <HeaderButton className='bg-[#131313] text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800'>
          <img src={discordLogo} alt='Discord logo' width={24} height={24} />
          <span className='hidden sm:inline'>DISCORD</span>
        </HeaderButton>
        <HeaderButton className='bg-[#F7FC0E] text-black flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#d4d800]'>
          <img src={fingerprintLogo} alt='Fingerprint logo' width={24} height={24} />
          <span className='hidden sm:inline'>CONECTAR</span>
        </HeaderButton>
      </div>
    </header>
  )
}
