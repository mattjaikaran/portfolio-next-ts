import { Grid, Title, Image, MediaQuery, Container } from '@mantine/core';
import styles from './Brands.module.scss';

import spotify from '@/images/spotify-green.png';
import hubble from '@/images/hubble.svg';
import hyvee from '@/images/hyvee.png';
import gm from '@/images/gm.png';
import avon from '@/images/avon.png';
import rewyre from '@/images/rewyre.png';

const Brands = () => {
  return (
    <div className={styles.brands}>
      <Container>
        <Title className={styles.title} order={3} align="center" my="xl">
          {"Brands I've worked with"}
        </Title>
        <Grid py="xl" className={styles.container}>
          <Grid.Col sm={6} md={4}>
            <div className={styles.spotify}>
              <Image radius="md" src={spotify.src} alt="spotify" />
            </div>
          </Grid.Col>
          <Grid.Col sm={6} md={4}>
            <div className={styles.gm}>
              <Image radius="md" src={gm.src} alt="gm" />
            </div>
          </Grid.Col>
          <Grid.Col sm={6} md={4}>
            <div className={styles.hubble}>
              <Image radius="md" src={hubble.src} alt="hubble" />
            </div>
          </Grid.Col>
          <Grid.Col sm={6} md={4}>
            <MediaQuery query="(min-width: 768px)" styles={{ marginTop: '1rem' }}>
              <div className={styles.hyvee}>
                <Image radius="md" src={hyvee.src} alt="hyvee" />
              </div>
            </MediaQuery>
          </Grid.Col>
          <Grid.Col sm={6} md={4}>
            <div className={styles.avon}>
              <Image radius="md" src={avon.src} alt="avon" />
            </div>
          </Grid.Col>
          <Grid.Col sm={6} md={4}>
            <MediaQuery query="(min-width: 768px)" styles={{ marginTop: '2rem' }}>
              <div className={styles.rewyre}>
                <Image radius="md" src={rewyre.src} alt="rewyre" />
              </div>
            </MediaQuery>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Brands;
