import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { PERSONAL_DATA } from '@v2/constants/personal';

export const CarouselCard = ({
  src,
  description,
}: { src: string, description: string }) => (
    <div className='swiper-slide'>
      <img src={src} alt={description} className='mb-2' />
      <p className='text-center text-xs italic'>{description}</p>
    </div >
)

export const Carousel = () => (
  <div className='mb-5'>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide>
        <img src="/assets/images/carousel/pulag.jpeg" className='mb-2' />
        <p className='text-center text-xs italic'>Playground of the Gods. PH's 3rd -- Pulag</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/kalatungan.jpeg" className='mb-2' />
        <p className='text-center text-xs italic'>Chieftain mountain. PH's 4th -- Kalatungan</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/d2.jpeg" className='mb-2' />
        <p className='text-center text-xs italic'>PH's 2nd -- Dulang dulang</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/kitanglad.jpeg" className='mb-2' />
        <p className='text-center text-xs italic'>PH's 4th -- Kitanglad</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/apo.jpeg" className='mb-2' />
        <p className='text-center text-xs italic'>The highest of them all. PH's 1st -- Apo</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/panay-loop.jpeg" className='mb-2' />
        <p className='text-center text-xs italic'>Panay loop Strava evidence</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/bike.jpeg" className='mb-2' />
        <p className='text-center text-xs italic'>My bike!</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/pinatubo.jpeg" className='mb-2' />
        <p className='text-center text-xs italic'>Beautiful disaster of Mt. Pinatubo</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/g2.jpeg" className='mb-2'/>
        <p className='text-center text-xs italic'>Hardest mountain in PH -- Guiting Guiting</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/camp.jpeg" className='mb-2'/>
        <p className='text-center text-xs italic'>Cooking is life</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/images/carousel/marshall.jpeg" alt="Marshall" className='mb-2' />
        <p className='text-center text-xs italic'>Conquering mountains with my buddy</p>
      </SwiperSlide>
      {/* BUG: Map not working */}
      {/* {PERSONAL_DATA.map((p, i) => <CarouselCard key={i} src={p.src} description={p.description} />)} */}
    </Swiper>
  </ div>
);

export default Carousel;
