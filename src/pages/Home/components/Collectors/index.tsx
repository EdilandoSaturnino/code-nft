import { SectionTitle } from '../../../../components/SectionTitle'
import data from './data/data.json'

export function Collectors() {
  const firstLineItems = data.slice(0, 5)
  const secondLineItems = data.slice(5)

  return (
    <section className='p-4'>
      <SectionTitle>Colecionadores</SectionTitle>
      <div className='flex flex-col gap-8 items-center'>
        <div className='flex flex-wrap gap-4 justify-center'>
          {firstLineItems.map((card) => (
            <div key={card.id} className='bg-[#131313] rounded-full flex flex-row text-white w-64 items-center gap-4 p-4 md:w-52 lg:w-64'>
              <img src={card.imagePath} alt={card.name} className='rounded-full w-11 h-11 md:w-10 md:h-10 lg:w-11 lg:h-11' />
              <div>
                <h3 className='font-medium text-base md:text-sm lg:text-base'>{card.name}</h3>
                <p className='text-sm md:text-xs lg:text-sm'>{card.collectionNumber} coleções</p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-wrap gap-4 justify-center'>
          {secondLineItems.map((card) => (
            <div key={card.id} className='bg-[#131313] rounded-full flex flex-row text-white w-64 items-center gap-4 p-4 md:w-52 lg:w-64'>
              <img src={card.imagePath} alt={card.name} className='rounded-full w-11 h-11 md:w-10 md:h-10 lg:w-11 lg:h-11' />
              <div>
                <h3 className='font-medium text-base md:text-sm lg:text-base'>{card.name}</h3>
                <p className='text-sm md:text-xs lg:text-sm'>{card.collectionNumber} coleções</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
