import Link from 'next/link'
import styles from './Header.module.scss'
import { routes } from '../../../lib/routes'

const Header = () => {
  return (
    <div className={styles.header}>
      {routes.map(({ id, name, url}) => (
        <Link key={id} href={url}>{name}</Link>
      ))}
    </div>
  )
}

export default Header