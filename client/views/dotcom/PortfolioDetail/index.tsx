import ImgCarousel from '@/components/shared/ImgCarousel';
import { Container, Grid } from '@mantine/core';

const homeSlides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
];

const PortfolioDetail = () => {
  return (
    <Container>
      <Grid>
        <ImgCarousel images={homeSlides} />
      </Grid>
    </Container>
  );
};

export default PortfolioDetail;
