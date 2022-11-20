import { Grid, Title, Image } from '@mantine/core';
import styles from './Brands.module.scss';

import spotify from '@/images/spotify-green.png';
import hubble from '@/images/hubble.svg';
import hyvee from '@/images/hyvee.png';
import gm from '@/images/gm.png';
import avon from '@/images/avon.png';

const Brands = () => {
  return (
    <div className={styles.brands}>
      <Title order={3} align="center" mt="xl">
        {"Brands I've worked with"}
      </Title>
      <Grid py="xl">
        <Grid.Col sm={6} md={4}>
          <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image radius="md" src={spotify.src} alt="spotify" />
          </div>
        </Grid.Col>
        <Grid.Col sm={6} md={4}>
          <div style={{ width: 90, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image radius="md" src={gm.src} alt="gm" />
          </div>
        </Grid.Col>
        <Grid.Col sm={6} md={4}>
          <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image radius="md" src={hubble.src} alt="hubble" />
          </div>
        </Grid.Col>
        <Grid.Col sm={6} md={4}>
          <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image radius="md" src={hyvee.src} alt="hyvee" />
          </div>
        </Grid.Col>
        <Grid.Col sm={6} md={4}>
          <div style={{ width: 140, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image radius="md" src={avon.src} alt="avon" />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Brands;
