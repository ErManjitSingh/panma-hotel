const sightseeingData = [
  {
    title: 'Tabo',
    description:
      'Located at a distance of 48 km from Kaza, this ancient village houses one of the most prominent monastic complexes widely known as the Tabo Monastery. Spiti is the Thinking Place also known as the Ajanta of the Himalayas, it is flanked by hills on either side; a place not to be missed.',
  },
  {
    title: 'Pin Valley National Park',
    description:
      'Set amidst scenic rivers known as the Pin Valley, the Pin Valley National Park is situated in the Cold Desert Biosphere Reserve situated in the Lahaul and Spiti District of Himachal Pradesh. The park\'s extremely frozen peaks soar from 3,300 metres near Ka Dogri to more than 6,000 metres at its pinnacle.',
  },
  {
    title: 'Dhankar Monastery',
    description:
      'Dhankar Monastery is also referred to as Drangkhar, Drangkar or Dhangkar Gompa. It stands on a cliff at 3,894 m and used to light in Himachal Pradesh, in the middle of the 17th century. The recognition is particularly obtained by the shape of the cliff and a yellow copper statue of Vajradhara, the most important deity of the Gelugpa order. Even so, Dhankar Monastery is listed as one of the world\'s 100 most endangered monuments.',
  },
  {
    title: 'Key Monastery',
    description:
      'The Key Monastery is a famous Tibetan Buddhist monastery in the Lahaul and Spiti district of Himachal Pradesh, located on top of a hill at 4,166 metres above sea level, about 12 kilometres north of Kaza. It is one of the most famous places to visit in Spiti and sits in the middle of a prominent pilgrim route.',
  },
  {
    title: 'Chandratal Lake',
    description:
      'Chandratal lake is an artist\'s dream. It is one of the most beautiful high-altitude lakes located at 4,350 m on the mighty Himalayas. The lake is believed to have been the original source of the Chandra River and is situated between two high-altitude passes crossed by the Chandra River.',
  },
  {
    title: 'Kaza Market',
    description:
      'Kaza, although a small town, is famous for its pure wool shawls, carpets and local dresses. Guests can find local jewellery shops along with gift items. Let\'s check out some major shopping outlets of Kaza town.',
  },
  {
    title: 'Kunzum Pass',
    description:
      'Kunzum Pass or Kunzum La, as it is called by locals, is one of the highest motorable mountain passes in the world, located at the gateway to Spiti\'s remote villages. It offers a grand view of the Bara-Sigri Glacier, the second largest glacier in the Himalayas and is at a distance of 123 km from Kaza.',
  },
];

const Sightseeing = () => {
  return (
    <section id='sightseeing' className='py-24 bg-white'>
      <div className='container mx-auto px-6 lg:px-0'>
        <div className='max-w-3xl mx-auto text-center mb-14'>
          <p className='font-tertiary uppercase text-[15px] tracking-[6px] text-accent mb-3'>Local Wonders</p>
          <h2 className='font-primary text-[42px] md:text-[52px] leading-tight mb-4'>Sightseeing in Spiti Valley</h2>
          <p className='text-primary/75'>
            Discover the spellbinding landscapes and sacred spaces that surround Panma Hotel, each destination carefully chosen to help you plan unforgettable day trips.
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-2'>
          {sightseeingData.map(({ title, description }, index) => (
            <article
              key={title}
              className='group bg-white rounded-[28px] shadow-xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl p-8'
            >
              <div className='flex flex-col gap-4'>
                <span className='font-tertiary uppercase tracking-[4px] text-sm text-accent'>{String(index + 1).padStart(2, '0')}</span>
                <h3 className='font-primary text-3xl tracking-[1px]'>{title}</h3>
                <div className='h-[2px] w-16 bg-accent/40 group-hover:bg-accent transition-colors duration-300' />
                <p className='text-primary/75 leading-relaxed'>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sightseeing;

