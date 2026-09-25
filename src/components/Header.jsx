import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  const { resetRoomFilterData } = useRoomContext();

  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 50
        ? setHeader(true)
        : setHeader(false)
    );
  });

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Book', href: '#book' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Camping', href: '#camping' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Sightseeing', href: '#sightseeing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >

      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>

        {/* Logo */}
        <Link to="/" onClick={resetRoomFilterData}
          className={`text-3xl font-primary tracking-[3px] uppercase transition-colors duration-300 ${header ? 'text-primary' : 'text-white'}`}>
          Panma Hotel
        </Link>

        {/* Nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
        flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
          {
            navLinks.map(({ label, href }) => (
              <a href={href} className='transition hover:text-accent' key={label}>
                {label}
              </a>
            ))
          }
        </nav>

      </div>

    </header>
  );
};

export default Header;
