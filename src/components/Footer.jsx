import { FaInstagram } from 'react-icons/fa';
import { instagramUrl } from './Camping';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Camping', href: '#camping' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Sightseeing', href: '#sightseeing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => (
  <footer className='bg-primary text-white pt-16 pb-10'>
    <div className='container mx-auto px-6 lg:px-0'>
      <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12'>
        <div className='space-y-4 max-w-sm'>
          <a href='#home' className='text-3xl font-primary tracking-[3px] uppercase inline-block'>Panma Hotel</a>
          <p className='text-white/70 leading-relaxed'>
            Boutique comfort in the heart of Spiti Valley. We curate personalised journeys with refined rooms, curated amenities, and insider access to unforgettable experiences.
          </p>
          <div className='space-y-1 text-white/80 text-sm font-tertiary uppercase tracking-[3px]'>
            <p>Email: <a href='mailto:panmahotel@gmail.com' className='text-accent hover:text-accent/80 transition'>panmahotel@gmail.com</a></p>
            <p>Phone: <a href='tel:+919805107284' className='text-accent hover:text-accent/80 transition'>+91 98051 07284</a></p>
            <p>
              <a href={instagramUrl} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-accent hover:text-accent/80 transition'>
                <FaInstagram /> Instagram
              </a>
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm uppercase tracking-[3px] font-tertiary'>
          <div className='space-y-4'>
            <h4 className='text-white text-lg font-primary tracking-[2px]'>Explore</h4>
            <ul className='space-y-3 text-white/70'>
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className='hover:text-accent transition-colors duration-200'>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='text-white text-lg font-primary tracking-[2px]'>Visit</h4>
            <p className='text-white/70 normal-case leading-relaxed'>
              221B Ocean View, Panma City<br />Spiti Valley, Himachal Pradesh 172114
            </p>
            <p className='text-white/60 normal-case'>Check-in: 2:00 PM — 10:00 PM</p>
          </div>
        </div>
      </div>

      <div className='mt-14 pt-8 border-t border-white/10 text-center text-white/50 text-xs tracking-[3px] uppercase'>
        © {new Date().getFullYear()} Panma Hotel. Crafted with care for discerning travellers.
      </div>
    </div>
  </footer>
);

export default Footer;