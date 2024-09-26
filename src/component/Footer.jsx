import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
      <footer className="main">
  <section
    className="newsletter p-30 text-white wow fadeIn animated animated animated"
    style={{ visibility: "visible" }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 mb-md-3 mb-lg-0">
          <div className="row align-items-center">
            <div className="col flex-horizontal-center">
              <img
                className="icon-email"
                src="./src/theme/assetss/imgs/theme/icons/icon-email.svg"
                alt=""
              />
              <h4 className="font-size-20 mb-0 ml-3">Sign up to Newsletter</h4>
            </div>
            <div className="col my-4 my-md-0 des">
              <h5 className="font-size-15 ml-4 mb-0">
                ...and receive <strong>$25 coupon for first shopping.</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          {/* Subscribe Form */}
          <form
            className="form-subcriber d-flex wow fadeIn animated animated animated"
            style={{ visibility: "visible" }}
          >
            <input
              type="email"
              className="form-control bg-white font-small"
              placeholder="Enter your email"
            />
            <button className="btn bg-dark text-white" type="submit">
              Subscribe
            </button>
          </form>
          {/* End Subscribe Form */}
        </div>
      </div>
    </div>
  </section>
  <section className="section-padding footer-mid">
    <div className="container pt-15 pb-20">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="widget-about font-md mb-md-5 mb-lg-0">
            <div
              className="logo logo-width-1 wow fadeIn animated animated animated"
              style={{ visibility: "visible" }}
            >
              <Link to="/">
                <img src="./src/theme/assetss/imgs/theme/logo.svg" alt="logo" />
              </Link>
            </div>
            <h5
              className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated animated animated"
              style={{ visibility: "visible" }}
            >
              Contact
            </h5>
            <p
              className="wow fadeIn animated animated animated"
              style={{ visibility: "visible" }}
            >
              <strong>Address: </strong>Sarabhai Road Atlantis Heights
            </p>
            <p
              className="wow fadeIn animated animated animated"
              style={{ visibility: "visible" }}
            >
              <strong>Phone: </strong>+01 2222 365 /(+91) 01 2345 6789
            </p>
            <p
              className="wow fadeIn animated animated animated"
              style={{ visibility: "visible" }}
            >
              <strong>Hours: </strong>10:00 - 18:00, Mon - Sat
            </p>
            <h5
              className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated animated animated"
              style={{ visibility: "visible" }}
            >
              Follow Us
            </h5>
            <div
              className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated animated"
              style={{ visibility: "visible" }}
            >
              <Link to="/">
                <img src="./src/theme/assetss/imgs/theme/icons/icon-facebook.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="./src/theme/assetss/imgs/theme/icons/icon-twitter.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="./src/theme/assetss/imgs/theme/icons/icon-instagram.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="./src/theme/assetss/imgs/theme/icons/icon-pinterest.svg" alt="" />
              </Link>
              <Link to="/">
                <img src="./src/theme/assetss/imgs/theme/icons/icon-youtube.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <h5
            className="widget-title wow fadeIn animated animated animated"
            style={{ visibility: "visible" }}
          >
            About
          </h5>
          <ul
            className="footer-list wow fadeIn animated mb-sm-5 mb-md-0 animated animated"
            style={{ visibility: "visible" }}
          >
            <li>
              <Link to="About">About Us</Link>
            </li>
            <li>
              <Link to="/">Delivery Information</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Support Center</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2  col-md-3">
          <h5
            className="widget-title wow fadeIn animated animated animated"
            style={{ visibility: "visible" }}
          >
            My Account
          </h5>
          <ul
            className="footer-list wow fadeIn animated animated animated"
            style={{ visibility: "visible" }}
          >
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/">View Cart</Link>
            </li>
            <li>
              <Link to="/">My Wishlist</Link>
            </li>
            <li>
              <Link to="/">Track My Order</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/">Order</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5
            className="widget-title wow fadeIn animated animated animated"
            style={{ visibility: "visible" }}
          >
            Install App
          </h5>
          <div className="row">
            <div className="col-md-8 col-lg-12">
              <p
                className="wow fadeIn animated animated animated"
                style={{ visibility: "visible" }}
              >
                From App Store or Google Play
              </p>
              <div
                className="download-app wow fadeIn animated animated animated"
                style={{ visibility: "visible" }}
              >
                <Link to="/" className="hover-up mb-sm-4 mb-lg-0">
                  <img
                    className="active"
                    src="./src/theme/assetss/imgs/theme/app-store.jpg"
                    alt=""
                  />
                </Link>
                <Link to="/" className="hover-up">
                  <img src="./src/theme/assetss/imgs/theme/google-play.jpg" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-lg-12 mt-md-3 mt-lg-0">
              <p
                className="mb-20 wow fadeIn animated animated animated"
                style={{ visibility: "visible" }}
              >
                Secured Payment Gateways
              </p>
              <img
                className="wow fadeIn animated animated animated"
                src="./src/theme/assetss/imgs/theme/payment-method.png"
                alt=""
                style={{ visibility: "visible" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div
    className="container pb-20 wow fadeIn animated animated animated"
    style={{ visibility: "visible" }}
  >
    <div className="row">
      <div className="col-12 mb-20">
        <div className="footer-bottom" />
      </div>
      <div className="col-lg-6">
        <p className="float-md-left font-sm text-muted mb-0">
          © 2022, <strong className="text-brand">Evara</strong> - HTML Ecommerce
          Template{" "}
        </p>
      </div>
      <div className="col-lg-6">
        <p className="text-lg-end text-start font-sm text-muted mb-0">
          Designed by{" "}
          <Link to="/" target="_blank">
            Alithemes.com
          </Link>
          . All rights reserved
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
