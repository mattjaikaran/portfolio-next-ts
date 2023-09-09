import styles from './Contact.module.scss';
import ContactForm from '@/components/forms/utils/ContactForm';
import { useMantineTheme, Title } from '@mantine/core';

const Contact = () => {
  const globalTheme = useMantineTheme();
  return (
    <div className={styles.contact}>
      <Title
        order={2}
        size="h1"
        sx={{
          fontFamily: `Greycliff CF, ${globalTheme.fontFamily}`,
        }}
        weight={300}
        pb="xl"
      >
        Contact Me
      </Title>
      <ContactForm />
    </div>
  );
};

export default Contact;
