import Hero from "../hero/hero";
import Nav from "../nav/nav"
import Footer from "../footer/footer";
import Consultation from "../information/consultation";
import Progress from "../information/progress";
import Products from "../products/products";
import Services from "../products/services";
import Portfolio from "../products/portfolio";
import Testimonals from "../testimonals/testimonals";


function Main() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <Services />
      <Progress />
      <Portfolio />
      <Testimonals />
      <Consultation />
      <Footer />
    </>
  );
}

export default Main;