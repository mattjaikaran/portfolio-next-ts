import ImgCarousel from '@/components/shared/ImgCarousel';
import { Container, Grid, Title, Text, Skeleton } from '@mantine/core';

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
const child = <Skeleton height={140} radius="md" animate={false} />;

const PortfolioDetail = () => {
  return (
    <div>
      <Grid mt="xl">
        <Grid.Col md={8} xl={7}>
          <ImgCarousel images={homeSlides} />
        </Grid.Col>
        <Grid.Col md={4} xl={5}>
          <Container>
            <Title>Project Name</Title>
            <Title mt="md" order={3}>
              Description
            </Title>
            <Text mt="md">
              Some description here with some other text after.
            </Text>
            <Title mt="md" order={5}>
              Technologies:
            </Title>
            <ul>
              <li>Tech</li>
              <li>Tech</li>
              <li>Tech</li>
            </ul>
          </Container>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Container>
            <Title order={5}>Features:</Title>
            <ul>
              <li>Tech</li>
              <li>Tech</li>
              <li>Tech</li>
            </ul>
          </Container>
        </Grid.Col>
        <Grid.Col sm={6}>{child}</Grid.Col>
        <Grid.Col sm={6}>{child}</Grid.Col>
        <Grid.Col sm={6}>{child}</Grid.Col>
        <Grid.Col sm={12}>{child}</Grid.Col>
      </Grid>
    </div>
  );
};

export default PortfolioDetail;
