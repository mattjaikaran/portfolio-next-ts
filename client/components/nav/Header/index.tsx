import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Header