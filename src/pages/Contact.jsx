import React from 'react'
import ContactHeader from '../components/Contact/ContactHeader'
import ContactSection from '../components/Contact/ContactSection';
import ContactForm from '../components/Contact/ContactForm';
import FAQSection from '../components/Contact/ContactFAQSection ';

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactSection />
      <ContactForm />
      <FAQSection />
    </div>
  )
}

export default Contact;