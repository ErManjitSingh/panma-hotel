import { FaWifi, FaCoffee, FaBath, FaParking, FaSwimmingPool, FaHotdog, FaStopwatch, FaCocktail } from 'react-icons/fa';
import images from '../assets';

export const roomData = [
  {
    id: 1,
    name: 'Super Deluxe Room',
    description:
      'Spacious corner suite featuring a king bed, private balcony, and panoramic city views with bespoke concierge service.',
    facilities: [
      { name: 'Wifi', icon: FaWifi },
      { name: 'Coffee', icon: FaCoffee },
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Swimming Pool', icon: FaSwimmingPool },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'GYM', icon: FaStopwatch },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 65,
    maxPerson: 3,
    price: 2900,
    image: images.SuperDeluxeImg,
    imageLg: images.SuperDeluxeImgLg,
    images: images.SuperDeluxeImgs,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description:
      'Thoughtfully designed retreat with a queen bed, reading alcove, and modern ensuite to keep you rested and refreshed.',
    facilities: [
      { name: 'Wifi', icon: FaWifi },
      { name: 'Coffee', icon: FaCoffee },
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Swimming Pool', icon: FaSwimmingPool },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'GYM', icon: FaStopwatch },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 45,
    maxPerson: 2,
    price: 2500,
    image: images.DeluxeImg,
    imageLg: images.DeluxeImgLg,
    images: images.DeluxeImgs,
  },
];
