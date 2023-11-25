import "./contactus.css";
import "../homePage/home.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="top-header">
        <Header />
        <div className="home-header">
          <div className="hero-section">
            <div className="hero-one hero">
              <h1>
                CONTACT INFORMATION
              </h1>
            </div>
            <div className="hero-two hero">
            <p>We are thrilled to hear from you</p>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
