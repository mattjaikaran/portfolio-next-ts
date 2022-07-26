import { Title, Text } from '@mantine/core';
import styles from './BackgroundWithText.module.scss';

interface IBackgroundWithText {
  bgColor: string;
  textColor: string;
  title?: string;
  subtitle?: string;
}

const BackgroundWithText = ({
  bgColor,
  textColor,
  title,
  subtitle,
}: IBackgroundWithText) => {
  return (
    <div
      className={`
      ${styles.backgroundWithText}
      ${bgColor === 'black' ? styles.bgBlack : ''}
      ${textColor === 'white' ? styles.textWhite : ''}
    `}
    >
      {title ? <Title order={2}>{title}</Title> : null}
      {subtitle ? <Text>{subtitle}</Text> : null}
    </div>
  );
};

export default BackgroundWithText;
