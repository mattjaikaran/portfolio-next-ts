import styles from './Contact.module.scss';
import ContactForm from '@/components/forms/utils/ContactForm';
import { Container } from '@mantine/core';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Container>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
