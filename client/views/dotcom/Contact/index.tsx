
import styles from './Contact.module.scss';
import ContactForm from '@/components/forms/utils/ContactForm';
import { Box } from '@chakra-ui/react';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h5>Contact Me</h5>
      <Box p={4}>
        <ContactForm />
      </Box>
    </div>
  );
}

export default Contact;