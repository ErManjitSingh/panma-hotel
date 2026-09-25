import images from '../assets';

const galleryItems = [
  ...images.SuperDeluxeImgs.map((src, index) => ({
    src,
    title: `Super Deluxe ${index + 1}`,
  })),
  ...images.DeluxeImgs.map((src, index) => ({
    src,
    title: `Deluxe ${index + 1}`,
  })),
];

const Gallery = () => {
  return (
    <section id='gallery' className='py-24 bg-white'>
      <div className='container mx-auto px-6 lg:px-0'>
        <div className='max-w-2xl mx-auto text-center mb-14'>
          <p className='font-tertiary uppercase text-[15px] tracking-[6px] text-accent mb-3'>Discover</p>
          <h2 className='font-primary text-[42px] md:text-[52px] leading-tight mb-4'>Gallery</h2>
          <p className='text-primary/75'>
            Step inside our curated collection of moments capturing the warmth, elegance, and character of Panma Hotel.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {galleryItems.map(({ src, title }, index) => (
            <div
              key={`${title}-${index}`}
              className='group relative overflow-hidden rounded-[26px] shadow-lg border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl'
            >
              <img
                src={src}
                alt={title}
                className='h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
