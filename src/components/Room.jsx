import { useId } from 'react';
import { BsArrowsFullscreen, BsPeople, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Room = ({ room }) => {
  const { id, name, image, images, size, maxPerson, description, price } = room ?? {};
  const gallery = images?.length ? images : [image];
  const uid = useId().replace(/:/g, '');
  const prevClass = `room-prev-${uid}`;
  const nextClass = `room-next-${uid}`;
  const paginationClass = `room-pagination-${uid}`;

  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>

      <div className='relative mb-8'>
        <div className='overflow-hidden'>
          {gallery.length > 1 && (
            <>
              <button
                type='button'
                aria-label='Previous image'
                className={`${prevClass} absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/70`}
              >
                <BsChevronLeft />
              </button>
              <button
                type='button'
                aria-label='Next image'
                className={`${nextClass} absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/70`}
              >
                <BsChevronRight />
              </button>
              <div className={`${paginationClass} room-card-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center`} />
            </>
          )}

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={gallery.length > 1}
            autoplay={
              gallery.length > 1
                ? { delay: 3500, disableOnInteraction: false }
                : false
            }
            navigation={
              gallery.length > 1
                ? { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }
                : false
            }
            pagination={
              gallery.length > 1
                ? { el: `.${paginationClass}`, clickable: true }
                : false
            }
            className='room-card-slider h-[280px] w-full'
          >
            {gallery.map((src, index) => (
              <SwiperSlide key={`${id}-${index}`}>
                <img
                  src={src}
                  alt={`${name} ${index + 1}`}
                  className='h-[280px] w-full object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='absolute left-1/2 bottom-0 z-20 w-full max-w-[300px] -translate-x-1/2 translate-y-1/2'>
          <div className='bg-white shadow-lg h-[60px] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
            <div className='flex justify-between w-[80%]'>
              <div className='flex items-center gap-x-2'>
                <div className='text-accent'>
                  <BsArrowsFullscreen className='text-[15px]' />
                </div>
                <div className='flex gap-x-1'>
                  <div>Size</div>
                  <div>{size}m2</div>
                </div>
              </div>

              <div className='flex items-center gap-x-2'>
                <div className='text-accent'>
                  <BsPeople className='text-[18px]' />
                </div>
                <div className='flex gap-x-1'>
                  <div>Max people</div>
                  <div>{maxPerson}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center pt-4'>
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0, 56)}..</p>
      </div>

      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto duration-300"
      >
        Book now from ₹{price}
      </Link>
    </div>
  );
};

export default Room;
