import { FaInstagram } from 'react-icons/fa';
import tentInside from '../assets/img/camping/tent-inside.png';
import tentOutside from '../assets/img/camping/tent-outside.png';

export const instagramUrl = 'https://www.instagram.com/reel/DbI2x6whAtf/';

const campingPhotos = [
  { src: tentOutside, title: 'Camp exterior' },
  { src: tentInside, title: 'Camp interior' },
];

const Camping = () => {
  return (
    <section id='camping' className='py-24 bg-primary/5'>
      <div className='container mx-auto px-6 lg:px-0'>
        <div className='max-w-2xl mx-auto text-center mb-14'>
          <p className='font-tertiary uppercase text-[15px] tracking-[6px] text-accent mb-3'>Stay Outdoors</p>
          <h2 className='font-primary text-[42px] md:text-[52px] leading-tight mb-4'>Camping</h2>
          <p className='text-primary/75'>
            Hillside tents with a comfortable bed setup, set among the trees for a quieter stay.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 max-w-5xl mx-auto'>
          {campingPhotos.map(({ src, title }) => (
            <div
              key={title}
              className='overflow-hidden rounded-[26px] shadow-lg'
            >
              <img
                src={src}
                alt={title}
                className='h-[420px] w-full object-cover'
              />
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-10'>
          <a
            href={instagramUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 rounded-full bg-primary text-white px-8 py-4 font-tertiary uppercase tracking-[3px] text-sm hover:bg-accent transition'
          >
            <FaInstagram className='text-lg' />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Camping;
