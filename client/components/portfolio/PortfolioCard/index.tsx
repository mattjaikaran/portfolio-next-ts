import Link from 'next/link'
import styles from './PortfolioCard.module.scss'

const PortfolioCard = () => {
  return (
    <div className={styles.portfolioCard}>
      <h5>PortfolioCard</h5>
      <Link href="/portfolio/1">See more</Link>
    </div>
  )
}

export default PortfolioCard