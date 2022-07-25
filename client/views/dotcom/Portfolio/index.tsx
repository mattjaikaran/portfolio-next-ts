import PortfolioCard from '@/components/portfolio/PortfolioCard'
import styles from './Portfolio.module.scss'

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h5>Portfolio</h5>
      <PortfolioCard />
    </div>
  )
}

export default Portfolio