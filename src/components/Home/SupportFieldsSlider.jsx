// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import SupportCard from "../Cards/SupportCard";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SupportFieldsSlider({seasonalPrograms}) {


  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        className={`mySwiper h-[480px] w-[80%] mx-auto pagination-slider`}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1028: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {seasonalPrograms?.map((slide) => (
          <SwiperSlide key={slide?.id}>
            <SupportCard slide={slide}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="custom-prev mt-10 max-xl:hidden">
        <FontAwesomeIcon
          className="absolute bottom-1/2 translate-y-[-50%] left-[5%] cursor-pointer z-10 text-mainColor hover:text-mainColor duration-300 text-[60px]"
          icon={faChevronLeft}
        />
      </button>

      <button className="custom-next mt-10 max-xl:hidden">
        <FontAwesomeIcon
          className="absolute bottom-1/2 translate-y-[-50%] right-[5%] cursor-pointer z-10 text-mainColor hover:text-mainColor duration-300 text-[60px]"
          icon={faChevronRight}
        />
      </button>
    </div>
  );
}
