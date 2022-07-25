
import styles from './Contact.module.scss'
import ContactForm from '@/components/forms/utils/ContactForm'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h5>Contact</h5>
      <ContactForm />
    </div>
  )
}

export default Contact