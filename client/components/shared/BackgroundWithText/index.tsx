
import { Heading, Text } from '@chakra-ui/react'
import styles from './BackgroundWithText.module.scss'

interface IBackgroundWithText {
  bgColor: string,
  textColor: string,
  title: string,
  subtitle: string
}

const BackgroundWithText = ({
  // bgColor,
  // textColor,
  title,
  subtitle
}: IBackgroundWithText) => {
  return (
    <div className={styles.backgroundWithText}>
      <Heading>{title}</Heading>
      <Text>{subtitle}</Text>
    </div>
  )
}

export default BackgroundWithText