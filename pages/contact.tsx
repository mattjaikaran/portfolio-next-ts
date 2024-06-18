import { NextPage } from 'next';
import { HeadingH1 } from '@/components/shared/typography';
import { MainLayout } from '@/layouts/MainLayout';
import ContactForm from '@/components/forms/ContactForm';

const Contact: NextPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <HeadingH1 className="mt-8 mb-8">Contact</HeadingH1>
        <ContactForm />
      </div>
    </MainLayout>
  );
};

export default Contact;
