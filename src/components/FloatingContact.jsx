import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FloatingContact = () => {
  return (
    <div className='fixed right-5 bottom-6 z-50 flex flex-col gap-3'>
      <a
        href='tel:+919805107284'
        className='group flex items-center gap-3 rounded-full bg-accent text-white px-5 py-3 shadow-xl shadow-accent/30 hover:bg-accent-hover transition-all duration-300'
        aria-label='Call Panma Hotel'
      >
        <FaPhoneAlt className='text-lg' />
        <span className='font-tertiary tracking-[3px] uppercase text-sm hidden sm:inline-block'>Call Now</span>
      </a>
      <a
        href='https://wa.me/919805107284'
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center gap-3 rounded-full bg-green-500 text-white px-5 py-3 shadow-xl shadow-green-500/30 hover:bg-green-600 transition-all duration-300'
        aria-label='Chat on WhatsApp'
      >
        <FaWhatsapp className='text-lg' />
        <span className='font-tertiary tracking-[3px] uppercase text-sm hidden sm:inline-block'>WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingContact;


