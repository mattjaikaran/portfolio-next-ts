import Hero from '@/components/shared/Hero'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  )
}

export default Home