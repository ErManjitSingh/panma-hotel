import { useRoomContext } from '../context/RoomContext';
import { SpinnerDotted } from 'spinners-react';
import { Room } from '.';


const Rooms = () => {

  const { rooms, loading } = useRoomContext();

  return (
    <section id='rooms' className='py-24'>

      {
        // overlay & spinner effect 
        loading &&
        <div className='h-screen w-full fixed bottom-0 top-0 bg-black/80 z-50 grid place-items-center'>
          <SpinnerDotted />
        </div>
      }


      <div className='container mx-auto lg:px-0'>

        <div className='text-center'>
          <p className='font-tertiary uppercase text-[15px] tracking-[6px]'>Hotel & Spa Adina</p>
          <h2 className='font-primary text-[45px] mb-6'>Room & Suites</h2>
        </div>

        <div className='grid grid-cols-1 gap-[30px] mx-auto md:grid-cols-2 md:max-w-4xl md:gap-[40px]'>
          {
            rooms.map(room =>
              <Room key={room.id} room={room} />
            )
          }
        </div>
      </div>

    </section>
  );
};

export default Rooms;
