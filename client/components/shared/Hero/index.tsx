/* eslint-disable @next/next/no-img-element */

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <img 
          width="100%"
          src="https://images.unsplash.com/photo-1658595638769-69a0a4141ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" 
          alt="hero image"
        />
      </div>
    </div>
  )
}

export default Hero