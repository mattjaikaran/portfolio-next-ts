import BackgroundWithText from '@/components/shared/BackgroundWithText'
import Hero from '@/components/shared/Hero'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <BackgroundWithText
        bgColor="black"
        textColor="white"
        title="This is some big text"
        subtitle="With some smaller text below"
      />
    </div>
  )
}

export default Home