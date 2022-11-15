import styles from './Contact.module.scss';
import ContactForm from '@/components/forms/utils/ContactForm';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h5>Contact Me</h5>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
