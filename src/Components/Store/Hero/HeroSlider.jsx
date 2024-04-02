"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
const HeroSlider = () => {
  return (
    <div className="store">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={200}
        slidesPerView={2.6}
        loop="true"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 150,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 200,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay
        className="flex justify-between gap-8"
      >
        <SwiperSlide>
          <div className="flex items-center px-10 md:px-20 py-[10rem] justify-start bg-[url(https://s3-alpha-sig.figma.com/img/04f5/f809/dccb1bd4475b90246e9bc228a4b1ffa7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jf7LjzoXqdrQCxFc9jGEd037aN5MTAgrXypGyYo48d4-DPWDJuKlkUUN3wo-9NmUmEGA8CZCpstoa83mBYRVbq8S-oGVXi1v-f7vbR8UA0fPWjize4aYMfqnQh0oyqEGNZQ5-w0fBZn-jl8p31rMn0AZ2q0JfMQH7yHqRjtFmixYcDEsnWFtikWDsqfE42pIXuWpeZrdXFVIjhnOdvWTGILGM2bpRTazq7i9zGICO8vLQfs7mVjbslbxacvI0yQsmDbvhXaK7FvCNzC0h-Z9f5qbpoBkCfRfeCyqDoU3IaTQ43i7iFqX~wWUMgSv3sW0NynC5cMvHe5acLmFjredeA__)] bg-cover w-full bg-no-repeat bg-[50%] ">
            <div>
              <p className="text-white Sans tetx-[6vw] md:text-[3vw] font-semibold w-full md:w-[60%]">
                20% Off on all Handmade Home Decor Items!
              </p>
            <button className="btn roboto py-2 px-4 text-white border-white text-[2vw] md:text-[1.5vw] lg:text-[.8vw] border-2 mt-4">
              Shop Now
            </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
