import PortfolioCard from '@/components/portfolio/PortfolioCard'
import { Container, Grid } from '@chakra-ui/react'
import styles from './Portfolio.module.scss'

const Portfolio = () => {
  return (
    <Container className={styles.portfolio} maxW={'7xl'}>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </Grid>
    </Container>
  )
}

export default Portfolio