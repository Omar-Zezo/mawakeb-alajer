// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import PartnerCard from "../Cards/PartnerCard";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShadowPartner } from "../../images/imgs";

export default function OurPartnerSlider({ partners }) {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        style={{ padding: "0 20px" }}
        className={`mySwiper container`}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1028: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {partners?.map((partner) => (
          <SwiperSlide key={partner?.id}>
            <PartnerCard partner={partner} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="custom-prev mt-10 max-xl:hidden">
        <FontAwesomeIcon
          className="absolute bottom-1/2 left-[4%] cursor-pointer z-10 text-mainColor hover:text-mainColor duration-300 text-[60px]"
          icon={faChevronLeft}
        />
      </button>

      <button className="custom-next mt-10 max-xl:hidden">
        <FontAwesomeIcon
          className="absolute bottom-1/2 right-[4%] cursor-pointer z-10 text-mainColor hover:text-mainColor duration-300 text-[60px]"
          icon={faChevronRight}
        />
      </button>
    </div>
  );
}
