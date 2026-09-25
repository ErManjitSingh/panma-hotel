import {
  FaHotjar,
  FaBath,
  FaParking,
  FaMapMarkedAlt,
  FaWalking,
  FaUtensils,
  FaFireExtinguisher,
  FaBell,
} from 'react-icons/fa';

const facilities = [
  { name: 'Hot Water', icon: FaHotjar, description: '24/7 hot water supply in every room for a refreshing stay.' },
  { name: 'Bath', icon: FaBath, description: 'Luxurious bath amenities curated for ultimate relaxation.' },
  { name: 'Parking', icon: FaParking, description: 'Secure on-site parking with dedicated concierge assistance.' },
  { name: 'Map', icon: FaMapMarkedAlt, description: 'Complimentary city maps and tailored travel recommendations.' },
  { name: 'Walk Area', icon: FaWalking, description: 'Manicured walking paths surrounded by lush greenery.' },
  { name: 'Restaurant', icon: FaUtensils, description: 'Signature restaurant serving gourmet local and global cuisine.' },
  { name: 'Fire Service', icon: FaFireExtinguisher, description: 'State-of-the-art fire safety systems and trained staff on-site.' },
  { name: 'Alarm', icon: FaBell, description: 'Round-the-clock security alarms to keep you safe and sound.' },
];

const HotelFacilities = () => {
  return (
    <section id='facilities' className='py-24 bg-primary/5'>
      <div className='container mx-auto px-6 lg:px-0'>
        <div className='max-w-3xl mx-auto text-center mb-14'>
          <p className='font-tertiary uppercase text-[15px] tracking-[6px] text-accent mb-3'>Our Services</p>
          <h2 className='font-primary text-[42px] md:text-[52px] leading-tight mb-4'>Our Hotel Facilities</h2>
          <p className='text-primary/80'>
            Thoughtfully curated amenities to elevate every moment of your stay—from wellness and dining to safety and convenience.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
          {facilities.map(({ name, icon: Icon, description }) => (
            <div
              key={name}
              className='bg-white rounded-[26px] shadow-xl p-8 flex flex-col gap-5 border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl'
            >
              <div className='w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-3xl mx-auto'>
                <Icon aria-hidden='true' />
              </div>
              <div className='text-center'>
                <h3 className='h3 mb-3'>{name}</h3>
                <p className='text-primary/70 text-sm leading-relaxed'>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFacilities;

