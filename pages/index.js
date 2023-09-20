import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";
import CTAThree from "../components/CTAThree";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Testimonials from "../components/Testimonials";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Psicólogo Leal">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Banner />
      <Services />
      <CTAOne />
      <FunFact />
      <CTATwo />
      <Testimonials />
      <BlogHome />
      <CTAThree />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
