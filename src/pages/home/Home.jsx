import Slider from "../../components/section-1/Slider";
import Foundation from "../../components/section-2/foundation/Foundation.jsx";
import LastNews from "../../components/section-3/LastNews.jsx";
import LastProduct from "../../components/section-4/LastProduct.jsx";
import SuccessPartners from "../../components/section-5/SuccessPartners.jsx";
import ContactUs from "../../components/section-6/ContactUs.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Initiatives from "../../components/initiatives/Initiatives.jsx";

const Home = () => {
  return (
    <>
      <Slider />
      <Foundation />
      <Initiatives />
      <LastNews />
      {/* <LastProduct /> */}
      <SuccessPartners />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
