import Head from 'next/head';
import Header from '@/components/header/Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-neutral-900 h-screen overflow-y-auto">
      <Head>
        <title>Jesús Valero - Web Developer</title>
      </Head>

      <div className="w-4/5 xl:w-3/5 mx-auto">
        <Header />

        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;