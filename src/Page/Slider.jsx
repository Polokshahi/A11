import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = () => {
    const fashionSlides = [
        {
          image: 'https://i.pinimg.com/736x/e2/6d/35/e26d352c8710bab40b472bca96997506.jpg',
          title: "Spring Collection 2025",
          description: "Experience the freshness of spring with our vibrant designs."
        },
        {
          image: 'https://i.pinimg.com/736x/df/49/8e/df498ee6bf9502ad89904abb5b826a1a.jpg',
          title: "Summer Vibes",
          description: "Stay cool and stylish with our summer collection."
        },
        {
          image: 'https://i.pinimg.com/736x/9b/fe/e7/9bfee7afd9c8f1cf7e6d3cf4802e0427.jpg',
          title: "Autumn Elegance",
          description: "Warm tones and cozy styles for the perfect autumn look."
        },
        {
          image: 'https://i.pinimg.com/736x/0b/47/6e/0b476e8b34f09135bd28daf5dfc83e61.jpg',
          title: "Winter Glam",
          description: "Bundle up in style with luxurious winter wear."
        }
      ];

    return (
        <div className="">
               <div className="max-w-5xl mx-auto p-4">
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
              className="w-full h-96 lg:h-[550px] object-cover"
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
