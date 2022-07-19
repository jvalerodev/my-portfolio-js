import Head from 'next/head';
import Header from '@/components/header/Header';

const Home = () => {
  return (
    <div className="bg-slate-900 h-screen overflow-y-auto">
      <Head>
        <title>Jesús Valero - Web Developer</title>
      </Head>

      <div className="w-4/5 xl:w-3/5 mx-auto">
        <Header />
      </div>
    </div>
  );
};

export default Home;