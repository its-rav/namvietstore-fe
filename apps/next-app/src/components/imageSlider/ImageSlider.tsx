import { type ImageSliderItemType, ImageSlider } from '@namviet-fe/core-ui';

const items: ImageSliderItemType[] = [
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww',
    name: 'Slide 1',
    url: '/',
  },
  {
    src: 'https://www.thespruce.com/thmb/P4hBQtEPZVrrWPdbtXy7-wv9fiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1161177015-f1de4ba58a6c4f50969d9119d80405a6.jpg',
    name: 'Slide 2',
    url: '/',
  },
  {
    src: 'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg',
    name: 'Slide 3',
    url: '/',
  },
  {
    src: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg',
    name: 'Slide 4',
    url: '/',
  },
  {
    src: 'https://t3.ftcdn.net/jpg/03/25/31/34/360_F_325313461_0KREdIW6hXqc0eMxfupDnTaJtj2ln6Vd.jpg',
    name: 'Slide 5',
    url: '/',
  },
];

const ImageSliderComponent = () => {
  return <ImageSlider imageSliderItems={items} imageSliderHeight='lg' />;
};

export default ImageSliderComponent;
