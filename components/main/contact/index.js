import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import useObserver from '@/hooks/useObserver';

const Contact = () => {
  const { ref } = useObserver();

  return (
    <div id="contact" className="pt-36" ref={ref}>
      <h2 className="text-4xl text-center font-bold uppercase bg-black">Contact <span className="text-green-500">Me</span></h2>

      <div className="bg-black mt-12 p-2 md:grid grid-cols-2 gap-x-10">
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;