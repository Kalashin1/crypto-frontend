import Layout from "./layout";
import Header from "./components/header";
import About from "./components/about";
import Facts from "./components/facts";
import Features from "./components/features";
import Services from "./components/services";
import Faq from './components/faq';

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Facts />
      <Features />
      <Services />
      <Faq />
    </Layout>
  );
};

export default Home;