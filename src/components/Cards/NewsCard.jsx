import { Link } from 'react-router-dom'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { t } from 'i18next'
import UseLangDetection from '../../hooks/UseLangDetection'

const NewsCard = ({art}) => {
  const langDetection = UseLangDetection()

  return (
    <div className='rounded-xl shadow-xl'>
      <div className='h-[275px] rounded-xl relative'>
      <Link to={`/media-center/news/${art?.slug}`}>
      <img src={art?.image} alt='news-img' className='object-cover size-full rounded-t-xl'/>
      </Link>
        <div className='rounded-t-full size-[70px] text-center absolute right-5 bottom-0 bg-mainColor text-white font-semibold flex items-center'>
        {art?.created_at_human}
        </div>
      </div>
      <div className='pt-8 pb-3 border-b border-mainColor'>
        <Link to={`/media-center/news/${art?.slug}`} className='block w-[90%] min-h-[56px] mx-auto text-lg text-center text-secondryColor hover:text-mainColor duration-300 font-bold relative description2'>{art?.title}</Link>
      </div>
      <div className='bg-[#f1f1f1] flex justify-center items-center py-5'>
        <Link to={`/media-center/news/${art?.slug}`} className={`text-[#7e7e7e] hover:text-mainColor duration-300 text-base font-medium flex items-center gap-2`}>
        <FontAwesomeIcon icon={faAngleRight} className={langDetection === "en" && 'order-2'}/>
        <p className={`${langDetection === "en" && 'order-1'}`}>{t('more')}</p>
        </Link>
      </div>
    </div>
  )
}

export default NewsCard
