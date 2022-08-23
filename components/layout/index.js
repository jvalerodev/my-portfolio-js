import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth">
      <Head>
        <title>Jesús Valero - Web Developer</title>
      </Head>

      <div className="w-4/5 xl:w-3/5 mx-auto">
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;