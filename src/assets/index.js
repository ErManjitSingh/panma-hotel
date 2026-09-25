import HeroRoomImg from './img/hero-room.png';
import HeroRoomImg2 from './img/hero-room-2.png';

import DeluxeImg1 from './img/deluxe/WhatsApp Image 2026-09-20 at 12.45.33 PM.jpeg';
import DeluxeImg2 from './img/deluxe/WhatsApp Image 2026-09-20 at 12.45.33 PM (1).jpeg';

import SuperDeluxeImg1 from './img/Super deluxe/WhatsApp Image 2026-09-20 at 12.45.10 PM.jpeg';
import SuperDeluxeImg2 from './img/Super deluxe/WhatsApp Image 2026-09-20 at 12.45.10 PM (1).jpeg';
import SuperDeluxeImg3 from './img/Super deluxe/WhatsApp Image 2026-09-20 at 12.45.10 PM (2).jpeg';
import SuperDeluxeImg4 from './img/Super deluxe/WhatsApp Image 2026-09-20 at 12.45.11 PM.jpeg';
import SuperDeluxeImg5 from './img/Super deluxe/WhatsApp Image 2026-09-20 at 12.45.11 PM (1).jpeg';
import SuperDeluxeImg6 from './img/Super deluxe/WhatsApp Image 2026-09-20 at 12.45.11 PM (2).jpeg';
import SuperDeluxeImg7 from './img/Super deluxe/WhatsApp Image 2026-09-20 at 12.45.12 PM.jpeg';

export { ReactComponent as LogoDark } from './img/logo-dark.svg';
export { ReactComponent as LogoWhite } from './img/logo-white.svg';

const images = {
    HeroRoomImg,
    HeroRoomImg2,

    // Super Deluxe Room
    SuperDeluxeImg: SuperDeluxeImg1,
    SuperDeluxeImgLg: SuperDeluxeImg1,
    SuperDeluxeImgs: [
        SuperDeluxeImg1,
        SuperDeluxeImg2,
        SuperDeluxeImg3,
        SuperDeluxeImg4,
        SuperDeluxeImg5,
        SuperDeluxeImg6,
        SuperDeluxeImg7,
    ],

    // Deluxe Room
    DeluxeImg: DeluxeImg1,
    DeluxeImgLg: DeluxeImg1,
    DeluxeImgs: [DeluxeImg1, DeluxeImg2],

    // Gallery / slider helpers
    Room1Img: SuperDeluxeImg1,
    Room2Img: DeluxeImg1,
    Room3Img: SuperDeluxeImg2,
    Room4Img: SuperDeluxeImg3,
    Room5Img: DeluxeImg2,
    Room6Img: SuperDeluxeImg4,
    Room7Img: SuperDeluxeImg5,
    Room1ImgLg: SuperDeluxeImg1,
    Room2ImgLg: DeluxeImg1,
    Room3ImgLg: SuperDeluxeImg2,
    Room4ImgLg: SuperDeluxeImg3,
    Room5ImgLg: DeluxeImg2,
    Room6ImgLg: SuperDeluxeImg4,
    Room7ImgLg: SuperDeluxeImg5,
};

export default images;
