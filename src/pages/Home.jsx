import { BookForm, HeroSlider, Rooms, ScrollToTop, HotelFacilities, Gallery, ContactSection, Sightseeing, Camping } from '../components';


const Home = () => {

  return (
    <div>
      <ScrollToTop />

      <section id='home'>
        <HeroSlider />
      </section>

      <section id='book' className='relative py-24'>
        <div className='container mx-auto'>
          <div className='bg-accent/20 mt-4 p-4 lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:-top-12 lg:z-30 lg:shadow-xl'>
            <BookForm />
          </div>
        </div>
      </section>

      <Rooms />

      <Camping />

      <HotelFacilities />

      <Gallery />

      <Sightseeing />

      <ContactSection />
    </div>
  );
};

export default Home;
