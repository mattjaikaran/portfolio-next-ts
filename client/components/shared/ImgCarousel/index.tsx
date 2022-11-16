import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

interface SlideProps {
  id: number;
  title?: string;
  text?: string;
  image: string;
}

type CarouselProps = Array<SlideProps>;

const ImgCarousel = ({ images }: CarouselProps) => {
  const slides = images.map((slide: SlideProps) => (
    <Carousel.Slide key={slide.id}>
      <Image src={slide.image} alt="Slide" />
    </Carousel.Slide>
  ));
  return (
    <Carousel mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
};

export default ImgCarousel;
