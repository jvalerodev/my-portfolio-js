import Layout from '@/components/layout/Layout';
import Presentation from '@/components/main/Presentation';
import Background from '@/components/layout/Background';
import About from '@/components/main/About';
import Services from '@/components/main/Services';
import Contact from '@/components/main/Contact';

const Home = () => {
  return (
    <Background>
      <Layout>
        <Presentation />
        <About />
        <Services />
        <Contact />
      </Layout>
    </Background>
  );
};

export default Home;