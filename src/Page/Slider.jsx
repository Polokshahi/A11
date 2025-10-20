import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = () => {
    const fashionSlides = [



        {
          image: 'https://i.ibb.co.com/tTzWz8L7/70684466f58e43c0a337e3c952767d2b.jpg',
          title: "Spring Collection 2025",
          description: "Experience the freshness of spring with our vibrant designs."
        },
        {
          image: 'https://i.ibb.co.com/MDMvPzqb/kwh-PF4-SP-fond-decran-Ete-118.webp',
          title: "Summer Vibes",
          description: "Stay cool and stylish with our summer collection."
        },
        {
          image: 'https://i.ibb.co.com/m1jNZ2k/hero-slide-22-optimized.jpg',
          title: "Autumn Elegance",
          description: "Warm tones and cozy styles for the perfect autumn look."
        },
     
      ];

    return (
        <div className="">
               <div className="p-4 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-2xl shadow-lg overflow-hidden"
      >
        {fashionSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[280px] lg:h-[650px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">{slide.title}</h2>
              <p className="text-sm">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
    );
};

export default Slider;
