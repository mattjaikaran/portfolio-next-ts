import PortfolioCard from '@/components/portfolio/PortfolioCard'
import { Container, Grid } from '@chakra-ui/react'
import styles from './Portfolio.module.scss'

const Portfolio = () => {
  return (
    <Container className={styles.portfolio} maxW={'7xl'}>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <PortfolioCard
          title="Portfolio Item 1"
          subtitle="Subtitle"
          description="Details on the Portfolio Item 1"
          tags={['art', 'photography', 'music']}
          link="portfolio/1"
        />
        <PortfolioCard
          title="Portfolio Item 2"
          subtitle="Subtitle"
          description="Details on the Portfolio Item 2"
          tags={['art', 'photography', 'music']}
          link="portfolio/2"
        />
        <PortfolioCard
          title="Portfolio Item 3"
          subtitle="Subtitle"
          description="Details on the Portfolio Item 3"
          tags={['art', 'photography', 'music']}
          link="portfolio/3"
        />
        <PortfolioCard
          title="Portfolio Item 4"
          subtitle="Subtitle"
          description="Details on the Portfolio Item 4"
          tags={['art', 'photography', 'music']}
          link="portfolio/4"
        />
        <PortfolioCard
          title="Portfolio Item 5"
          subtitle="Subtitle"
          description="Details on the Portfolio Item 5"
          tags={['art', 'photography', 'music']}
          link="portfolio/5"
        />
        <PortfolioCard
          title="Portfolio Item 6"
          subtitle="Subtitle"
          description="Details on the Portfolio Item 6"
          tags={['art', 'photography', 'music']}
          link="portfolio/6"
        />
      </Grid>
    </Container>
  )
}

export default Portfolio