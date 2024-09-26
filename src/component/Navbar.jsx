import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const WishLength = useSelector((store) => store.WishList.length);
  const CartLength = useSelector((store) => store.Cart.length);

  const CartItem = useSelector((store) => store.Cart);

  const totalPrice = CartItem.reduce((acc, item) => acc + item.price.current, 0);
  const flooredTotalPrice = Math.floor(totalPrice);
  
  return (
    <header className="header-area header-style-1 header-height-2">
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li>
                    <i className="fi-rs-smartphone" />{" "}
                    <Link to="/">(+91) - 8574898578 </Link>
                  </li>
                  <li>
                    <i className="fi-rs-marker" />
                    <Link to="Contact">Our location</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div
                  id="news-flash"
                  className="d-inline-block"
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    height: 0,
                  }}
                >
                  <ul
                    style={{
                      position: "absolute",
                      margin: 0,
                      padding: 0,
                      top: 0,
                    }}
                  >
                    <li style={{ margin: 0, padding: 0, height: 0 }}>
                      Trendy 25silver jewelry, save up 35% off today{" "}
                      <a href="shop-grid-right.html">Shop now</a>
                    </li>
                    <li style={{ margin: 0, padding: 0, height: 0 }}>
                      Get great devices up to 50% off{" "}
                      <a href="shop-grid-right.html">View details</a>
                    </li>
                    <li style={{ margin: 0, padding: 0, height: 0 }}>
                      Supper Value Deals - Save more with coupons
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    <a className="language-dropdown-active" href="#">
                      {" "}
                      <i className="fi-rs-world" /> English{" "}
                      <i className="fi-rs-angle-small-down" />
                    </a>
                    <ul className="language-dropdown">
                      <li>
                        <a href="#">
                          <img
                            src="./src/theme/assetss/imgs/theme/flag-fr.png"
                            alt=""
                          />
                          Français
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="./src/theme/assetss/imgs/theme/flag-dt.png"
                            alt=""
                          />
                          Deutsch
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="./src/theme/assetss/imgs/theme/flag-ru.png"
                            alt=""
                          />
                          Pусский
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <i className="fi-rs-user" />
                    <a href="page-login-register.html">Log In / Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <Link to="/">
                <img src="./src/theme/assetss/imgs/theme/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <select
                    className="select-active select2-hidden-accessible"
                    data-select2-id={1}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={3}>All Categories</option>
                    <option>Womens</option>
                    <option>Mens</option>
                    <option>Cellphones</option>
                    <option>Computer</option>
                    <option>Electronics</option>
                    <option> Accessories</option>
                    <option>Home &amp; Garden</option>
                    <option>Luggage</option>
                    <option>Shoes</option>
                    <option>Mother &amp; Kids</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={2}
                    style={{ width: 140 }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-labelledby="select2-kcso-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-kcso-container"
                          role="textbox"
                          aria-readonly="true"
                          title="All Categories"
                        >
                          All Categories
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link to="/WishList">
                      <img
                        className="svgInject"
                        alt="Evara"
                        src="./src/theme/assetss/imgs/theme/icons/icon-heart.svg"
                      />
                      <span className="pro-count blue">{WishLength}</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link className="mini-cart-icon" to="ShopCart">
                      <img
                        alt="Evara"
                        src="./src/theme/assetss/imgs/theme/icons/icon-cart.svg"
                      />
                      <span className="pro-count blue">{CartLength}</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        {CartItem.map((item) => (
                          <li key={item.id}>
                            <div className="shopping-cart-img">
                              <img src={item.images.default} alt={item.title} />
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                              <a href="">{item.title.length > 15 ? item.title.substring(0, 15) + '...' : item.title}</a>

                              </h4>
                              <h4>
                                <span>1 × </span>
                                {item.price.current.toFixed(2)}
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="#">
                                <i className="fi-rs-cross-small" />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                        {
                          CartLength===0 ?<center className="h5">Empty Your Cart</center>:
                          <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total <span>{flooredTotalPrice}.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link to="ShopCart" className="outline">
                            View cart
                          </Link>
                          <Link to="Checkout">Checkout</Link>
                        </div>
                      </div>
                        }
                    

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <Link to="/">
                <img src="./src/theme/assetss/imgs/theme/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <Link className="categori-button-active" to="/">
                  <span className="fi-rs-apps" /> Browse Categories
                </Link>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="MenShirts">MensWear</Link>
                    </li>
                    <li>
                      <Link to="WomensWear">WomenWear</Link>
                    </li>

                  
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/Blog">Blog</Link>
                    </li>

                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hotline d-none d-lg-block">
              <p>
                <i className="fi-rs-headset" />
                <span>Hotline</span> 1800198795{" "}
              </p>
            </div>
            <p className="mobile-promotion">
              Happy <span className="text-brand">Mothers Day</span>. Big Sale Up
              to 40%
            </p>
            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <Link to="/WishList">
                    <img
                      alt="Evara"
                      src="./src/theme/assetss/imgs/theme/icons/icon-heart.svg"
                    />
                    <span className="pro-count white">{WishLength}</span>
                  </Link>
                </div>
                <div className="header-action-icon-2">
                  <Link to="ShopCart" className="mini-cart-icon">
                    <img
                      alt="Evara"
                      src="./src/theme/assetss/imgs/theme/icons/icon-cart.svg"
                    />
                    <span className="pro-count white">{CartLength}</span>
                  </Link>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img
                              alt="Evara"
                              src="./src/theme/assetss/imgs/shop/thumbnail-3.jpg"
                            />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Plain Striola Shirts
                            </a>
                          </h4>
                          <h3>
                            <span>1 × </span>$800.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img
                              alt="Evara"
                              src="./src/theme/assetss/imgs/shop/thumbnail-4.jpg"
                            />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Macbook Pro 2022
                            </a>
                          </h4>
                          <h3>
                            <span>1 × </span>$3500.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small" />
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>
                          Total <span>$383.00</span>
                        </h4>
                      </div>
                      <div className="shopping-cart-button">
                        <Link to="ShopCart">View cart</Link>
                        <a href="shop-checkout.html">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-action-icon-2 d-block d-lg-none">
                  <div className="burger-icon burger-icon-white">
                    <span className="burger-icon-top" />
                    <span className="burger-icon-mid" />
                    <span className="burger-icon-bottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
