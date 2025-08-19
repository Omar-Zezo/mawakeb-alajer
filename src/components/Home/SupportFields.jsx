import { t } from 'i18next'
import { SupportShadow } from '../../images/imgs'
import SupportFieldsSlider from './SupportFieldsSlider'

const SupportFields = ({seasonalPrograms}) => {
  return (
    <div className='mt-[80px]'>
      <h2 className='w-fit mx-auto pb-2 border-b-2 border-white text-5xl max-xl:text-4xl text-white font-semibold text-center'>{t('support fields')}</h2>
      <div className='relative mt-14'>
      <img src={SupportShadow} alt='shadow' className='w-full h-[90%] pointer-events-none max-xl:hidden absolute right-0 top-0 z-10'/>
        <div className='w-full'>
        <SupportFieldsSlider seasonalPrograms={seasonalPrograms}/>
        </div>
      </div>
    </div>
  )
}

export default SupportFields
