import data from './data/data.json'
import { SectionTitle } from '../../../../components/SectionTitle'


export function Collections() {
  return (
    <section className='flex items-center flex-col p-4'>
      <SectionTitle>Coleções</SectionTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-screen-xl'>
        {data.map((card) => (
          <div key={card.id} className='bg-[#131313] p-5 rounded-lg'>
            <img src={card.imagePath} alt={card.title} className='w-full h-auto object-cover rounded-md mb-4' />
            <h3 className='text-white font-semibold text-lg sm:text-xl md:text-2xl'>{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
