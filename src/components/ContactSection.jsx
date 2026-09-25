import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactDetails = [
  {
    icon: FaPhoneAlt,
    title: 'Phone',
    value: '+91 98051 07284',
    description: 'Front desk available 24/7 for bookings and inquiries.',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'panmahotel@gmail.com',
    description: 'We respond within one business day.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    value: '221B Ocean View, Panma City',
    description: 'Minutes from the central promenade and cultural hub.',
  },
  {
    icon: FaClock,
    title: 'Check-in',
    value: '2:00 PM — 10:00 PM',
    description: 'Early check-in subject to availability.',
  },
];

const ContactSection = () => {
  return (
    <section id='contact' className='py-24 bg-primary/5'>
      <div className='container mx-auto px-6 lg:px-0'>
        <div className='max-w-2xl mx-auto text-center mb-14'>
          <p className='font-tertiary uppercase text-[15px] tracking-[6px] text-accent mb-3'>Connect</p>
          <h2 className='font-primary text-[42px] md:text-[52px] leading-tight mb-4'>Contact Us</h2>
          <p className='text-primary/75'>
            Reach out to plan your stay, arrange bespoke experiences, or learn more about our boutique amenities.
          </p>
        </div>

        <div className='grid gap-12 lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.1fr)] items-start'>
          <div className='space-y-6'>
            {contactDetails.map(({ icon: Icon, title, value, description }) => (
              <div
                key={title}
                className='bg-white rounded-[26px] shadow-lg border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl p-6 flex gap-4'
              >
                <div className='w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl shrink-0'>
                  <Icon aria-hidden='true' />
                </div>
                <div>
                  <h3 className='font-primary text-2xl tracking-[1px]'>{title}</h3>
                  <p className='font-tertiary uppercase tracking-[3px] text-sm text-accent mb-1'>{value}</p>
                  <p className='text-primary/70 text-sm leading-relaxed'>{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='rounded-[30px] overflow-hidden shadow-xl border-4 border-white'>
            <iframe
              title='Panma Hotel Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095074!2d144.95373531590483!3d-37.816279742011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d73a5c0dce6d!2sPanma%20Hotel!5e0!3m2!1sen!2sus!4v1701454362000!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

