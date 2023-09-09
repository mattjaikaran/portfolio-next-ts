import { Title, Text, useMantineTheme } from '@mantine/core';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  const globalTheme = useMantineTheme();
  return (
    <div className={styles.aboutMe}>
      <Title
        order={2}
        size="h1"
        sx={{
          fontFamily: `Greycliff CF, ${globalTheme.fontFamily}`,
        }}
        weight={300}
        pb="xl"
      >
        About Me
      </Title>
      <Text>I am me.</Text>
    </div>
  );
};

export default AboutMe;
