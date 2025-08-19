// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function HeroSlide({ slider, langDetection }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className="mySwiper hero xl:h-[800px] max-md:h-[310px] h-[580px]"
      >
        {slider?.map((slide) =>
          slide?.url ? (
            <SwiperSlide key={slide?.id}>
                <img
                  src={slide?.img}
                  alt="hero"
                  className="size-full object-cover absolute left-0 top-0"
                />
                <Link to={slide?.url}>
                <div className="container h-full flex flex-col justify-center gap-5 xl:p-0 absolute left-1/2 translate-x-[-50%] z-10">
                  <h2 className={`text-[60px] mt-[150px] max-xl:text-4xl font-semibold bg-gradient-to-r ${langDetection === "en" ? 'from-white to-white':'from-mainColor to-[#c47b50]'} bg-clip-text text-transparent`}>
                    {slide?.title}
                  </h2>
                  <p className={`text-4xl max-xl:text-2xl font-medium bg-gradient-to-r ${langDetection === "en" ? 'from-white to-white':'from-mainColor to-[#c47b50]'} bg-clip-text text-transparent`}>
                    {slide?.content}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={slide?.id}>
              <img
                src={slide?.img}
                alt="hero"
                className="size-full object-cover absolute left-0 top-0"
              />
              <div className="container flex flex-col gap-5 xl:p-0 absolute left-1/2 translate-x-[-50%] z-10 top-[50%]">
                <h2 className={`text-[60px] max-xl:text-4xl font-semibold bg-gradient-to-r ${langDetection === "en" ? 'from-white to-white':'from-mainColor to-[#c47b50]'} bg-clip-text text-transparent`}>
                  {slide?.title}
                </h2>
                <p className={`text-4xl max-xl:text-2xl font-medium bg-gradient-to-r ${langDetection === "en" ? 'from-white to-white':'from-mainColor to-[#c47b50]'} bg-clip-text text-transparent`}>
                  {slide?.content}
                </p>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}