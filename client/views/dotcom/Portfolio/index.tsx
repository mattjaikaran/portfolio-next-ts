import PortfolioCard from '@/components/portfolio/PortfolioCard';
import { Container, Grid } from '@mantine/core';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <Container className={styles.portfolio}>
      <Grid grow>
        <Grid.Col sm={6}>
          <PortfolioCard
            img={
              'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            }
            title="Portfolio Item 1"
            description="Details on the Portfolio Item 1"
            tags={['web']}
            link="portfolio/1"
          />
        </Grid.Col>
        <Grid.Col sm={6}>
          <PortfolioCard
            img={
              'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            }
            title="Portfolio Item 2"
            description="Details on the Portfolio Item 2"
            tags={['web']}
            link="portfolio/2"
          />
        </Grid.Col>
        <Grid.Col sm={6}>
          <PortfolioCard
            img={
              'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            }
            title="Portfolio Item 3"
            description="Details on the Portfolio Item 3"
            tags={['web']}
            link="portfolio/3"
          />
        </Grid.Col>
        <Grid.Col sm={6}>
          <PortfolioCard
            img={
              'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            }
            title="Portfolio Item 4"
            description="Details on the Portfolio Item 4"
            tags={['web']}
            link="portfolio/4"
          />
        </Grid.Col>
        <Grid.Col sm={6}>
          <PortfolioCard
            img={
              'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            }
            title="Portfolio Item 5"
            description="Details on the Portfolio Item 5"
            tags={['web']}
            link="portfolio/5"
          />
        </Grid.Col>
        <Grid.Col sm={6}>
          <PortfolioCard
            img={
              'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            }
            title="Portfolio Item 6"
            description="Details on the Portfolio Item 6"
            tags={['web']}
            link="portfolio/6"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Portfolio;
