import React from 'react'
import { Link } from 'react-router-dom'

const MainBody = () => {
  return (
    <main className="">
    <section className="home-slider position-relative pt-50">
      <div className="hero-slider-1 dot-style-1 dot-style-1-position-1 slick-initialized slick-slider slick-dotted">
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1, width: 4560 }}>
            <div
              className="single-hero-slider single-animation-wrap slick-slide"
              data-slick-index={0}
              aria-hidden="true"
              tabIndex={-1}
              role="tabpanel"
              id="slick-slide00"
              aria-describedby="slick-slide-control00"
              style={{
                width: 1520,
                position: "relative",
                left: 0,
                top: 0,
                zIndex: 998,
                opacity: 0,
                transition: "opacity 500ms"
              }}
            >
              <div className="container">
                <div className="row align-items-center slider-animated-1">
                  <div className="col-lg-5 col-md-6">
                    <div className="hero-slider-content-2">
                      <h4 className="animated">Trade-in offer</h4>
                      <h2 className="animated fw-900">Supper value deals</h2>
                      <h1 className="animated fw-900 text-brand">
                        On all products
                      </h1>
                      <p className="animated">
                        Save more with coupons &amp; up to 70% off
                      </p>
                      <a
                        className="animated btn btn-brush btn-brush-3"
                        href="shop-product-right.html"
                        tabIndex={-1}
                      >
                        {" "}
                        Shop Now{" "}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="single-slider-img single-slider-img-1">
                      <img
                        className="animated slider-1-1"
                        src="./src/theme/assetss/imgs/slider/slider-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-hero-slider single-animation-wrap slick-slide slick-current slick-active"
              data-slick-index={1}
              aria-hidden="false"
              tabIndex={0}
              role="tabpanel"
              id="slick-slide01"
              aria-describedby="slick-slide-control01"
              style={{
                width: 1520,
                position: "relative",
                left: "-1520px",
                top: 0,
                zIndex: 999,
                opacity: 1
              }}
            >
              <div className="container">
                <div className="row align-items-center slider-animated-1">
                  <div className="col-lg-5 col-md-6">
                    <div className="hero-slider-content-2">
                      <h4 className="animated">Hot promotions</h4>
                      <h2 className="animated fw-900">Fashion Trending</h2>
                      <h1 className="animated fw-900 text-7">Great Collection</h1>
                      <p className="animated">
                        Save more with coupons &amp; up to 20% off
                      </p>
                      <a
                        className="animated btn btn-brush btn-brush-2"
                        href="shop-product-right.html"
                        tabIndex={0}
                      >
                        {" "}
                        Discover Now{" "}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="single-slider-img single-slider-img-1">
                      <img
                        className="animated slider-1-2"
                        src="./src/theme/assetss/imgs/slider/slider-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-hero-slider single-animation-wrap slick-slide"
              data-slick-index={2}
              aria-hidden="true"
              tabIndex={-1}
              role="tabpanel"
              id="slick-slide02"
              aria-describedby="slick-slide-control02"
              style={{
                width: 1520,
                position: "relative",
                left: "-3040px",
                top: 0,
                zIndex: 998,
                opacity: 0,
                transition: "opacity 500ms"
              }}
            >
              <div className="container">
                <div className="row align-items-center slider-animated-1">
                  <div className="col-lg-5 col-md-6">
                    <div className="hero-slider-content-2">
                      <h4 className="animated">Upcoming Offer</h4>
                      <h2 className="animated fw-900">Big Deals From</h2>
                      <h1 className="animated fw-900 text-8">Manufacturer</h1>
                      <p className="animated">
                        Clothing, Shoes, Bags, Wallets...
                      </p>
                      <a
                        className="animated btn btn-brush btn-brush-1"
                        href="shop-product-right.html"
                        tabIndex={-1}
                      >
                        {" "}
                        Shop Now{" "}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="single-slider-img single-slider-img-1">
                      <img
                        className="animated slider-1-3"
                        src="./src/theme/assetss/imgs/slider/slider-3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="slick-dots" style={{}} role="tablist">
          <li className="" role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control00"
              aria-controls="slick-slide00"
              aria-label="1 of 3"
              tabIndex={-1}
            >
              1
            </button>
          </li>
          <li role="presentation" className="slick-active">
            <button
              type="button"
              role="tab"
              id="slick-slide-control01"
              aria-controls="slick-slide01"
              aria-label="2 of 3"
              tabIndex={0}
              aria-selected="true"
            >
              2
            </button>
          </li>
          <li role="presentation" className="">
            <button
              type="button"
              role="tab"
              id="slick-slide-control02"
              aria-controls="slick-slide02"
              aria-label="3 of 3"
              tabIndex={-1}
            >
              3
            </button>
          </li>
        </ul>
      </div>
      <div className="slider-arrow hero-slider-1-arrow">
        <span className="slider-btn slider-prev slick-arrow" style={{}}>
          <i className="fi-rs-angle-left" />
        </span>
        <span className="slider-btn slider-next slick-arrow" style={{}}>
          <i className="fi-rs-angle-right" />
        </span>
      </div>
    </section>
    <section className="featured section-padding position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div
              className="banner-features wow fadeIn animated hover-up animated animated"
              style={{ visibility: "visible" }}
            >
              <img src="./src/theme/assetss/imgs/theme/icons/feature-1.png" alt="" />
              <h4 className="bg-1">Free Shipping</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div
              className="banner-features wow fadeIn animated hover-up animated animated"
              style={{ visibility: "visible" }}
            >
              <img src="./src/theme/assetss/imgs/theme/icons/feature-2.png" alt="" />
              <h4 className="bg-3">Online Order</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div
              className="banner-features wow fadeIn animated hover-up animated animated"
              style={{ visibility: "visible" }}
            >
              <img src="./src/theme/assetss/imgs/theme/icons/feature-3.png" alt="" />
              <h4 className="bg-2">Save Money</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div
              className="banner-features wow fadeIn animated hover-up animated animated"
              style={{ visibility: "visible" }}
            >
              <img src="./src/theme/assetss/imgs/theme/icons/feature-4.png" alt="" />
              <h4 className="bg-4">Promotions</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div
              className="banner-features wow fadeIn animated hover-up animated animated"
              style={{ visibility: "visible" }}
            >
              <img src="./src/theme/assetss/imgs/theme/icons/feature-5.png" alt="" />
              <h4 className="bg-5">Happy Sell</h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
            <div
              className="banner-features wow fadeIn animated hover-up animated animated"
              style={{ visibility: "visible" }}
            >
              <img src="./src/theme/assetss/imgs/theme/icons/feature-6.png" alt="" />
              <h4 className="bg-6">24/7 Support</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="product-tabs section-padding position-relative wow fadeIn animated animated animated"
      style={{ visibility: "visible" }}
    >
      <div className="bg-square" />
      <div className="container">
        <div className="tab-header">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="nav-tab-one"
                data-bs-toggle="tab"
                data-bs-target="#tab-one"
                type="button"
                role="tab"
                aria-controls="tab-one"
                aria-selected="true"
              >
                Featured
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-two"
                data-bs-toggle="tab"
                data-bs-target="#tab-two"
                type="button"
                role="tab"
                aria-controls="tab-two"
                aria-selected="false"
              >
                Popular
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-three"
                data-bs-toggle="tab"
                data-bs-target="#tab-three"
                type="button"
                role="tab"
                aria-controls="tab-three"
                aria-selected="false"
              >
                New added
              </button>
            </li>
          </ul>
          <a href="#" className="view-more d-none d-md-flex">
            View More
            <i className="fi-rs-angle-double-small-right" />
          </a>
        </div>
        {/*End nav-tabs*/}
        <div
          className="tab-content wow fadeIn animated animated animated"
          id="myTabContent"
          style={{ visibility: "visible" }}
        >
          <div
            className="tab-pane fade show active"
            id="tab-one"
            role="tabpanel"
            aria-labelledby="tab-one"
          >
            <div className="row product-grid-4">
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-1-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-1-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Clothing</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Colorful Pattern Shirts
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>90%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-2-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-2-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Clothing</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Plain Color Pocket Shirts
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>50%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$138.85 </span>
                      <span className="old-price">$255.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-3-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="best">Best Sell</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Shirts</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Vintage Floral Oil Shirts
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>95%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$338.85 </span>
                      <span className="old-price">$445.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-4-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-4-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Clothing</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Colorful Hawaiian Shirts
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$123.85 </span>
                      <span className="old-price">$235.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-xs-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-5-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-5-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-30%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Shirt</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Flowers Sleeve Lapel Shirt
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$28.85 </span>
                      <span className="old-price">$45.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-xs-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-6-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-6-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-22%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Shirts</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Ethnic Floral Casual Shirts
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-xs-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-7-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-7-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Shoes</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Stitching Hole Sandals</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>98%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$1275.85 </span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-8-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-8-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Shirt</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Mens Porcelain Shirt</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End product-grid-4*/}
          </div>
          {/*En tab one (Featured)*/}
          <div
            className="tab-pane fade"
            id="tab-two"
            role="tabpanel"
            aria-labelledby="tab-two"
          >
            <div className="row product-grid-4">
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-9-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-9-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Donec </a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Lorem ipsum dolor</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>90%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-10-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-10-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Sed tincidunt interdum</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>50%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$138.85 </span>
                      <span className="old-price">$255.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-11-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-11-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="best">Best Sell</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Watch</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Fusce metus orci</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>95%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$338.85 </span>
                      <span className="old-price">$445.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-12-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-12-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Integer venenatis libero
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$123.85 </span>
                      <span className="old-price">$235.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-13-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-13-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-30%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Speaker</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Cras tempor orci id</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$28.85 </span>
                      <span className="old-price">$45.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-14-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-14-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-22%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Camera</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Nullam cursus mi qui</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-15-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-15-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Phone</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Fusce fringilla ultrices
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>98%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$1275.85 </span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-1-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-1-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Accessories </a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Sed sollicitudin est</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End product-grid-4*/}
          </div>
          {/*En tab two (Popular)*/}
          <div
            className="tab-pane fade"
            id="tab-three"
            role="tabpanel"
            aria-labelledby="tab-three"
          >
            <div className="row product-grid-4">
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-2-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-2-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Donec ut nisl rutrum</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>90%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-3-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Nullam dapibus pharetra
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>50%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$138.85 </span>
                      <span className="old-price">$255.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-4-1.jpg"
                          alt=""
                        />
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-4-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="best">Best Sell</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Watch</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Morbi dictum finibus</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>95%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$338.85 </span>
                      <span className="old-price">$445.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-5-1.jpg"
                          alt=""
                        />
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-5-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Music</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Nunc volutpat massa</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$123.85 </span>
                      <span className="old-price">$235.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-6-1.jpg"
                          alt=""
                        />
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-6-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-30%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Speaker</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Nullam ultricies luctus
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$28.85 </span>
                      <span className="old-price">$45.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-7-1.jpg"
                          alt=""
                        />
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-7-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-22%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Camera</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Nullam mattis enim</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-8-1.jpg"
                          alt=""
                        />
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-8-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Phone</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">Vivamus sollicitudin</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>98%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$1275.85 </span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-9-1.jpg"
                          alt=""
                        />
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-9-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn hover-up"
                        to="WishList"
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn hover-up"
                        href="shop-compare.html"
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Accessories </a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html"> Donec ut nisl rutrum</a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span>
                        <span>70%</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="product-action-1 show">
                      <a
                        aria-label="Add To Cart"
                        className="action-btn hover-up"
                        href="shop-cart.html"
                      >
                        <i className="fi-rs-shopping-bag-add" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End product-grid-4*/}
          </div>
          {/*En tab three (New added)*/}
        </div>
        {/*End tab-content*/}
      </div>
    </section>
    <section className="banner-2 section-padding pb-0">
      <div className="container">
        <div
          className="banner-img banner-big wow fadeIn animated f-none"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <img src="./src/theme/assetss/imgs/banner/banner-4.png" alt="" />
          <div className="banner-text d-md-block d-none">
            <h4 className="mb-15 mt-40 text-brand">Repair Services</h4>
            <h1 className="fw-600 mb-20">
              We're an Apple <br />
              Authorised Service Provider
            </h1>
            <a href="shop-grid-right.html" className="btn">
              Learn More <i className="fi-rs-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="popular-categories section-padding mt-15 mb-25">
      <div
        className="container wow fadeIn animated"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <h3 className="section-title mb-20">
          <span>Popular</span> Categories
        </h3>
        <div className="carausel-6-columns-cover position-relative">
          <div
            className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
            id="carausel-6-columns-arrows"
          >
            <span className="slider-btn slider-prev slick-arrow" style={{}}>
              <i className="fi-rs-angle-left" />
            </span>
            <span className="slider-btn slider-next slick-arrow" style={{}}>
              <i className="fi-rs-angle-right" />
            </span>
          </div>
          <div
            className="carausel-6-columns slick-initialized slick-slider"
            id="carausel-6-columns"
          >
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 4840,
                  transform: "translate3d(-1320px, 0px, 0px)"
                }}
              >
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={-6}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-3.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Sandan
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={-5}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-4.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Scarf Cap
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={-4}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-5.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Shoes
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={-3}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-6.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Pillowcase
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={-2}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-7.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Jumpsuits
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={-1}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-8.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Hats
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-current slick-active"
                  style={{ width: 196 }}
                  tabIndex={0}
                  data-slick-index={0}
                  aria-hidden="false"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={0}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-1.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={0}>
                      T-Shirt
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-active"
                  style={{ width: 196 }}
                  tabIndex={0}
                  data-slick-index={1}
                  aria-hidden="false"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={0}>
                      {" "}
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-2.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={0}>
                      Bags
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-active"
                  style={{ width: 196 }}
                  tabIndex={0}
                  data-slick-index={2}
                  aria-hidden="false"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={0}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-3.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={0}>
                      Sandan
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-active"
                  style={{ width: 196 }}
                  tabIndex={0}
                  data-slick-index={3}
                  aria-hidden="false"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={0}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-4.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={0}>
                      Scarf Cap
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-active"
                  style={{ width: 196 }}
                  tabIndex={0}
                  data-slick-index={4}
                  aria-hidden="false"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={0}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-5.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={0}>
                      Shoes
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-active"
                  style={{ width: 196 }}
                  tabIndex={0}
                  data-slick-index={5}
                  aria-hidden="false"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={0}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-6.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={0}>
                      Pillowcase
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={6}
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-7.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Jumpsuits
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={7}
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-8.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Hats
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={8}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-1.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      T-Shirt
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={9}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      {" "}
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-2.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Bags
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={10}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-3.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Sandan
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={11}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-4.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Scarf Cap
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={12}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-5.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Shoes
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={13}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-6.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Pillowcase
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={14}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-7.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Jumpsuits
                    </a>
                  </h5>
                </div>
                <div
                  className="card-1 slick-slide slick-cloned"
                  style={{ width: 196 }}
                  tabIndex={-1}
                  data-slick-index={15}
                  id=""
                  aria-hidden="true"
                >
                  <figure className=" img-hover-scale overflow-hidden">
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      <img src="./src/theme/assetss/imgs/shop/category-thumb-8.jpg" alt="" />
                    </a>
                  </figure>
                  <h5>
                    <a href="shop-grid-right.html" tabIndex={-1}>
                      Hats
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="banners mb-15">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="banner-img wow fadeIn animated"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <img src="./src/theme/assetss/imgs/banner/banner-1.png" alt="" />
              <div className="banner-text">
                <span>Smart Offer</span>
                <h4>
                  Save 20% on <br />
                  Woman Bag
                </h4>
                <a href="shop-grid-right.html">
                  Shop Now <i className="fi-rs-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="banner-img wow fadeIn animated"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <img src="./src/theme/assetss/imgs/banner/banner-2.png" alt="" />
              <div className="banner-text">
                <span>Sale off</span>
                <h4>
                  Great Summer <br />
                  Collection
                </h4>
                <a href="shop-grid-right.html">
                  Shop Now <i className="fi-rs-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-md-none d-lg-flex">
            <div
              className="banner-img wow fadeIn animated  mb-sm-0"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <img src="./src/theme/assetss/imgs/banner/banner-3.png" alt="" />
              <div className="banner-text">
                <span>New Arrivals</span>
                <h4>
                  Shop Today’s <br />
                  Deals &amp; Offers
                </h4>
                <a href="shop-grid-right.html">
                  Shop Now <i className="fi-rs-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-padding">
      <div
        className="container wow fadeIn animated"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <h3 className="section-title mb-20">
          <span>New</span> Arrivals
        </h3>
        <div className="carausel-6-columns-cover position-relative">
          <div
            className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
            id="carausel-6-columns-2-arrows"
          >
            <span className="slider-btn slider-prev slick-arrow" style={{}}>
              <i className="fi-rs-angle-left" />
            </span>
            <span className="slider-btn slider-next slick-arrow" style={{}}>
              <i className="fi-rs-angle-right" />
            </span>
          </div>
          <div
            className="carausel-6-columns carausel-arrow-center slick-initialized slick-slider"
            id="carausel-6-columns-2"
          >
            {/*End product-cart-wrap-2*/}
            {/*End product-cart-wrap-2*/}
            {/*End product-cart-wrap-2*/}
            {/*End product-cart-wrap-2*/}
            {/*End product-cart-wrap-2*/}
            {/*End product-cart-wrap-2*/}
            {/*End product-cart-wrap-2*/}
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 4400,
                  transform: "translate3d(-2420px, 0px, 0px)",
                  transition: "transform 1000ms"
                }}
              >
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-6}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-4-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-4-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Aliquam posuere
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$173.85 </span>
                      <span className="old-price">$185.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-5}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-15-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-15-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Sed dapibus orci
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$215.85 </span>
                      <span className="old-price">$235.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-4}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-3-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">.33%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Donec congue
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$83.8 </span>
                      <span className="old-price">$125.2</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-3}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-9-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-9-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-25%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Curabitur porta
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$1238.85 </span>
                      <span className="old-price">$1245.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-2}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-7-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-7-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Praesent maximus
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$123 </span>
                      <span className="old-price">$156</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-1}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-1-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-1-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Vestibulum ante
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={0}
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-2-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-2-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Lorem ipsum dolor
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={1}
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-4-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-4-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Aliquam posuere
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$173.85 </span>
                      <span className="old-price">$185.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={2}
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-15-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-15-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Sed dapibus orci
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$215.85 </span>
                      <span className="old-price">$235.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={3}
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-3-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">.33%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Donec congue
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$83.8 </span>
                      <span className="old-price">$125.2</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide"
                  style={{ width: 220 }}
                  tabIndex={0}
                  data-slick-index={4}
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={0}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-9-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-9-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={0}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={0}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-25%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={0}>
                        Curabitur porta
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$1238.85 </span>
                      <span className="old-price">$1245.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-current slick-active"
                  style={{ width: 220 }}
                  tabIndex={0}
                  data-slick-index={5}
                  aria-hidden="false"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={0}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-7-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-7-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={0}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={0}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={0}>
                        Praesent maximus
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$123 </span>
                      <span className="old-price">$156</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-active"
                  style={{ width: 220 }}
                  tabIndex={0}
                  data-slick-index={6}
                  aria-hidden="false"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={0}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-1-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-1-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={0}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={0}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={0}>
                        Vestibulum ante
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned slick-active"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={7}
                  id=""
                  aria-hidden="false"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={0}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-2-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-2-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={0}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={0}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={0}>
                        Lorem ipsum dolor
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned slick-active"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={8}
                  id=""
                  aria-hidden="false"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={0}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-4-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-4-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={0}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={0}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={0}>
                        Aliquam posuere
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$173.85 </span>
                      <span className="old-price">$185.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned slick-active"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={9}
                  id=""
                  aria-hidden="false"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={0}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-15-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-15-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={0}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={0}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={0}>
                        Sed dapibus orci
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$215.85 </span>
                      <span className="old-price">$235.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned slick-active"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={10}
                  id=""
                  aria-hidden="false"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-3-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">.33%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Donec congue
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$83.8 </span>
                      <span className="old-price">$125.2</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={11}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-9-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-9-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-25%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Curabitur porta
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$1238.85 </span>
                      <span className="old-price">$1245.8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={12}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-7-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-7-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Praesent maximus
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$123 </span>
                      <span className="old-price">$156</span>
                    </div>
                  </div>
                </div>
                <div
                  className="product-cart-wrap small hover-up slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={13}
                  id=""
                  aria-hidden="true"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html" tabIndex={-1}>
                        <img
                          className="default-img"
                          src="./src/theme/assetss/imgs/shop/product-1-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="./src/theme/assetss/imgs/shop/product-1-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a
                        aria-label="Quick view"
                        className="action-btn small hover-up"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-eye" />
                      </a>
                      <Link
                        aria-label="Add To Wishlist"
                        className="action-btn small hover-up"
                        to="WishList"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-heart" />
                      </Link>
                      <a
                        aria-label="Compare"
                        className="action-btn small hover-up"
                        href="shop-compare.html"
                        tabIndex={-1}
                      >
                        <i className="fi-rs-shuffle" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <a href="shop-product-right.html" tabIndex={-1}>
                        Vestibulum ante
                      </a>
                    </h2>
                    <div className="rating-result" title="90%">
                      <span></span>
                    </div>
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="deals section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 deal-co">
            <div
              className="deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0"
              style={{
                backgroundImage: 'url("./src/theme/assetss/imgs/banner/menu-banner-7.jpg")',
                visibility: "hidden",
                animationName: "none"
              }}
            >
              <div className="deal-top">
                <h2 className="text-brand">Deal of the Day</h2>
                <h5>Limited quantities.</h5>
              </div>
              <div className="deal-content">
                <h6 className="product-title">
                  <a href="shop-product-right.html">
                    Summer Collection New Morden Design
                  </a>
                </h6>
                <div className="product-price">
                  <span className="new-price">$139.00</span>
                  <span className="old-price">$160.99</span>
                </div>
              </div>
              <div className="deal-bottom">
                <p>Hurry Up! Offer End In:</p>
                <div
                  className="deals-countdown"
                  data-countdown="2025/03/25 00:00:00"
                >
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">03</span>
                    <span className="countdown-period"> days </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">01</span>
                    <span className="countdown-period"> hours </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">21</span>
                    <span className="countdown-period"> mins </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">11</span>
                    <span className="countdown-period"> sec </span>
                  </span>
                </div>
                <a href="shop-grid-right.html" className="btn hover-up">
                  Shop Now <i className="fi-rs-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 deal-co">
            <div
              className="deal wow fadeIn animated"
              style={{
                backgroundImage: 'url("./src/theme/assetss/imgs/banner/menu-banner-8.jpg")',
                visibility: "hidden",
                animationName: "none"
              }}
            >
              <div className="deal-top">
                <h2 className="text-brand">Men Clothing</h2>
                <h5>Shirt &amp; Bag</h5>
              </div>
              <div className="deal-content">
                <h6 className="product-title">
                  <a href="shop-product-right.html">
                    Try something new on vacation
                  </a>
                </h6>
                <div className="product-price">
                  <span className="new-price">$178.00</span>
                  <span className="old-price">$256.99</span>
                </div>
              </div>
              <div className="deal-bottom">
                <p>Hurry Up! Offer End In:</p>
                <div
                  className="deals-countdown"
                  data-countdown="2026/03/25 00:00:00"
                >
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">04</span>
                    <span className="countdown-period"> days </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">01</span>
                    <span className="countdown-period"> hours </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">21</span>
                    <span className="countdown-period"> mins </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">11</span>
                    <span className="countdown-period"> sec </span>
                  </span>
                </div>
                <a href="shop-grid-right.html" className="btn hover-up">
                  Shop Now <i className="fi-rs-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-padding">
      <div className="container">
        <h3
          className="section-title mb-20 wow fadeIn animated"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <span>Featured</span> Brands
        </h3>
        <div
          className="carausel-6-columns-cover position-relative wow fadeIn animated"
          style={{ visibility: "hidden", animationName: "none" }}
        >
          <div
            className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
            id="carausel-6-columns-3-arrows"
          >
            <span className="slider-btn slider-prev slick-arrow" style={{}}>
              <i className="fi-rs-angle-left" />
            </span>
            <span className="slider-btn slider-next slick-arrow" style={{}}>
              <i className="fi-rs-angle-right" />
            </span>
          </div>
          <div
            className="carausel-6-columns text-center slick-initialized slick-slider"
            id="carausel-6-columns-3"
          >
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 4400,
                  transform: "translate3d(-2420px, 0px, 0px)",
                  transition: "transform 1000ms"
                }}
              >
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-6}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-2.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-5}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-4}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-4.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-3}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-5.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-2}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-6.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={-1}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={0}
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-1.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={1}
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-2.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={2}
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={3}
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-4.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide"
                  style={{ width: 220 }}
                  tabIndex={0}
                  data-slick-index={4}
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-5.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-current slick-active"
                  style={{ width: 220 }}
                  tabIndex={0}
                  data-slick-index={5}
                  aria-hidden="false"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-6.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-active"
                  style={{ width: 220 }}
                  tabIndex={0}
                  data-slick-index={6}
                  aria-hidden="false"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned slick-active"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={7}
                  id=""
                  aria-hidden="false"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-1.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned slick-active"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={8}
                  id=""
                  aria-hidden="false"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-2.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned slick-active"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={9}
                  id=""
                  aria-hidden="false"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned slick-active"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={10}
                  id=""
                  aria-hidden="false"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-4.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={11}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-5.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={12}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-6.png"
                    alt=""
                  />
                </div>
                <div
                  className="brand-logo slick-slide slick-cloned"
                  style={{ width: 220 }}
                  tabIndex={-1}
                  data-slick-index={13}
                  id=""
                  aria-hidden="true"
                >
                  <img
                    className="img-grey-hover"
                    src="./src/theme/assetss/imgs/banner/brand-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-grey-9 section-padding">
      <div className="container pt-25 pb-25">
        <div className="heading-tab d-flex">
          <div
            className="heading-tab-left wow fadeIn animated"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <h3 className="section-title mb-20">
              <span>Monthly</span> Best Sell
            </h3>
          </div>
          <div
            className="heading-tab-right wow fadeIn animated"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <ul
              className="nav nav-tabs right no-border"
              id="myTab-1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="nav-tab-one-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-one-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-one"
                  aria-selected="true"
                >
                  Featured
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-two-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-two-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-two"
                  aria-selected="false"
                >
                  Popular
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-three-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-three-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-three"
                  aria-selected="false"
                >
                  New added
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex">
            <div
              className="banner-img style-2 wow fadeIn animated animated animated"
              style={{ visibility: "visible" }}
            >
              <img src="./src/theme/assetss/imgs/banner/banner-9.jpg" alt="" />
              <div className="banner-text">
                <span>Woman Area</span>
                <h4 className="mt-5">
                  Save 17% on <br />
                  Clothing
                </h4>
                <a href="shop-grid-right.html" className="text-white">
                  Shop Now <i className="fi-rs-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div
              className="tab-content wow fadeIn animated"
              id="myTabContent-1"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <div
                className="tab-pane fade show active"
                id="tab-one-1"
                role="tabpanel"
                aria-labelledby="tab-one-1"
              >
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-arrows"
                  >
                    <span
                      className="slider-btn slider-prev slick-arrow"
                      style={{}}
                    >
                      <i className="fi-rs-angle-left" />
                    </span>
                    <span
                      className="slider-btn slider-next slick-arrow"
                      style={{}}
                    >
                      <i className="fi-rs-angle-right" />
                    </span>
                  </div>
                  <div
                    className="carausel-4-columns carausel-arrow-center slick-initialized slick-slider"
                    id="carausel-4-columns"
                  >
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 3472,
                          transform: "translate3d(-1736px, 0px, 0px)",
                          transition: "transform 1000ms"
                        }}
                      >
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={-4}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-2-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-2-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Duis{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Luctus suscipit
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={-3}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-3-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-3-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Fusce{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Aliquam ac
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={-2}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-4-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-4-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Nunc{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Fusce et ligula
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Aliquam
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Morbi lacinia
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={0}
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-1-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-1-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">Hot</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Nulla
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Maecenas eget
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={1}
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-2-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-2-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Duis{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Luctus suscipit
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide"
                          style={{ width: 224 }}
                          tabIndex={0}
                          data-slick-index={2}
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-3-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-3-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Fusce{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Aliquam ac
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-current slick-active"
                          style={{ width: 224 }}
                          tabIndex={0}
                          data-slick-index={3}
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-4-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-4-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Nunc{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Fusce et ligula
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-active"
                          style={{ width: 224 }}
                          tabIndex={0}
                          data-slick-index={4}
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Aliquam
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Morbi lacinia
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned slick-active"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={5}
                          id=""
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-1-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-1-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">Hot</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Nulla
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Maecenas eget
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned slick-active"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={6}
                          id=""
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-2-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-2-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Duis{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Luctus suscipit
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={7}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-3-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-3-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Fusce{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Aliquam ac
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={8}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-4-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-4-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Nunc{" "}
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Fusce et ligula
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 224 }}
                          tabIndex={-1}
                          data-slick-index={9}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Aliquam
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Morbi lacinia
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End tab-pane*/}
              <div
                className="tab-pane fade"
                id="tab-two-1"
                role="tabpanel"
                aria-labelledby="tab-two-1"
              >
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-2-arrows"
                  >
                    <span
                      className="slider-btn slider-prev slick-arrow"
                      style={{}}
                    >
                      <i className="fi-rs-angle-left" />
                    </span>
                    <span
                      className="slider-btn slider-next slick-arrow"
                      style={{}}
                    >
                      <i className="fi-rs-angle-right" />
                    </span>
                  </div>
                  <div
                    className="carausel-4-columns carausel-arrow-center slick-initialized slick-slider"
                    id="carausel-4-columns-2"
                  >
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 0,
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "transform 1000ms"
                        }}
                      >
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={-4}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-7-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-7-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={-3}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-5-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-5-1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Hugy Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={-2}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-10-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-10-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-12-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-12-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Cotton Leaf Printed
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={0}
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-6-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-6-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">Hot</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Cotton Leaf Printed 2
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={1}
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-7-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-7-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide"
                          style={{ width: 0 }}
                          tabIndex={0}
                          data-slick-index={2}
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-5-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-5-1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Hugy Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-current slick-active"
                          style={{ width: 0 }}
                          tabIndex={0}
                          data-slick-index={3}
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-10-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-10-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-active"
                          style={{ width: 0 }}
                          tabIndex={0}
                          data-slick-index={4}
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-12-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-12-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Cotton Leaf Printed
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned slick-active"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={5}
                          id=""
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-6-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-6-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">Hot</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Cotton Leaf Printed 2
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned slick-active"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={6}
                          id=""
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-7-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-7-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={7}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-5-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-5-1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Hugy Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={8}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-10-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-10-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={9}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-12-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-12-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Cotton Leaf Printed
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-three-1"
                role="tabpanel"
                aria-labelledby="tab-three-1"
              >
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-3-arrows"
                  >
                    <span
                      className="slider-btn slider-prev slick-arrow"
                      style={{}}
                    >
                      <i className="fi-rs-angle-left" />
                    </span>
                    <span
                      className="slider-btn slider-next slick-arrow"
                      style={{}}
                    >
                      <i className="fi-rs-angle-right" />
                    </span>
                  </div>
                  <div
                    className="carausel-4-columns carausel-arrow-center slick-initialized slick-slider"
                    id="carausel-4-columns-3"
                  >
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 0,
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "transform 1000ms"
                        }}
                      >
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={-4}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-13-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-13-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={-3}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-14-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-14-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Hugy Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={-2}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-15-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-15-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Cotton Leaf Printed
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-current slick-active"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={0}
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-8-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-8-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">Hot</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Cotton Leaf Printed
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-active"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={1}
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-13-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-13-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-active"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={2}
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-14-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-14-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Hugy Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-active"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={3}
                          aria-hidden="false"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-15-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-15-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide"
                          style={{ width: 0 }}
                          tabIndex={0}
                          data-slick-index={4}
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Cotton Leaf Printed
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={5}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-8-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-8-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">Hot</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Cotton Leaf Printed
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={6}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-13-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-13-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">New</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$138.85 </span>
                              <span className="old-price">$145.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={7}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={0}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-14-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-14-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={0}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={0}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best Sell</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={0}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={0}>
                                Hugy Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$152.85 </span>
                              <span className="old-price">$156.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={0}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={8}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-15-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-15-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">-12%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Smart Speaker
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-cart-wrap slick-slide slick-cloned"
                          style={{ width: 0 }}
                          tabIndex={-1}
                          data-slick-index={9}
                          id=""
                          aria-hidden="true"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <a href="shop-product-right.html" tabIndex={-1}>
                                <img
                                  className="default-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-1.jpg"
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src="./src/theme/assetss/imgs/shop/product-11-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product-action-1">
                              <a
                                aria-label="Quick view"
                                className="action-btn small hover-up"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-eye" />
                              </a>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn small hover-up"
                                to="WishList"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <a
                                aria-label="Compare"
                                className="action-btn small hover-up"
                                href="shop-compare.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a href="shop-grid-right.html" tabIndex={-1}>
                                Watch
                              </a>
                            </div>
                            <h2>
                              <a href="shop-product-right.html" tabIndex={-1}>
                                Cotton Leaf Printed
                              </a>
                            </h2>
                            <div className="rating-result" title="90%">
                              <span>
                                <span>70%</span>
                              </span>
                            </div>
                            <div className="product-price">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="product-action-1 show">
                              <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                href="shop-cart.html"
                                tabIndex={-1}
                              >
                                <i className="fi-rs-shopping-bag-add" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End tab-content*/}
          </div>
          {/*End Col-lg-9*/}
        </div>
      </div>
    </section>
    <section className="section-padding">
      <div className="container pt-25 pb-20">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="section-title mb-20">
              <span>From</span> blog
            </h3>
            <div className="post-list mb-4 mb-lg-0">
              <article
                className="wow fadeIn animated"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <div className="d-md-flex d-block">
                  <div className="post-thumb d-flex mr-15">
                    <a className="color-white" href="blog-post-fullwidth.html">
                      <img src="./src/theme/assetss/imgs/blog/blog-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="entry-meta mb-10 mt-10">
                      <a
                        className="entry-meta meta-2"
                        href="blog-category-fullwidth.html"
                      >
                        <span className="post-in font-x-small">Fashion</span>
                      </a>
                    </div>
                    <h4 className="post-title mb-25 text-limit-2-row">
                      <a href="blog-post-fullwidth.html">
                        Qualcomm is developing a Nintendo Switch-like console,
                        report says
                      </a>
                    </h4>
                    <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                      <div>
                        <span className="post-on">14 April 2022</span>
                        <span className="hit-count has-dot">12M Views</span>
                      </div>
                      <a href="blog-post-right.html">Read More</a>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="wow fadeIn animated"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <div className="d-md-flex d-block">
                  <div className="post-thumb d-flex mr-15">
                    <a className="color-white" href="blog-post-fullwidth.html">
                      <img src="./src/theme/assetss/imgs/blog/blog-1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="entry-meta mb-10 mt-10">
                      <a
                        className="entry-meta meta-2"
                        href="blog-category-fullwidth.html"
                      >
                        <span className="post-in font-x-small">Healthy</span>
                      </a>
                    </div>
                    <h4 className="post-title mb-25 text-limit-2-row">
                      <a href="blog-post-fullwidth.html">
                        Not even the coronavirus can derail 5G's global momentum
                      </a>
                    </h4>
                    <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                      <div>
                        <span className="post-on">14 April 2022</span>
                        <span className="hit-count has-dot">12M Views</span>
                      </div>
                      <a href="blog-post-right.html">Read More</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="banner-img banner-1 wow fadeIn animated"
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <img src="./src/theme/assetss/imgs/banner/banner-5.jpg" alt="" />
                  <div className="banner-text">
                    <span>Accessories</span>
                    <h4>
                      Save 17% on <br />
                      Autumn Hat
                    </h4>
                    <a href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="banner-img mb-15 wow fadeIn animated"
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <img src="./src/theme/assetss/imgs/banner/banner-6.jpg" alt="" />
                  <div className="banner-text">
                    <span>Big Offer</span>
                    <h4>
                      Save 20% on <br />
                      Women's socks
                    </h4>
                    <a href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="banner-img banner-2 wow fadeIn animated"
                  style={{ visibility: "hidden", animationName: "none" }}
                >
                  <img src="./src/theme/assetss/imgs/banner/banner-7.jpg" alt="" />
                  <div className="banner-text">
                    <span>Smart Offer</span>
                    <h4>
                      Save 20% on <br />
                      Eardrop
                    </h4>
                    <a href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="banner-bg wow fadeIn animated"
              style={{
                backgroundImage: 'url("./src/theme/assetss/imgs/banner/banner-8.jpg")',
                visibility: "hidden",
                animationName: "none"
              }}
            >
              <div className="banner-content">
                <h5 className="text-grey-4 mb-15">Shop Today’s Deals</h5>
                <h2 className="fw-600">
                  Happy <span className="text-brand">Mother's Day</span>. Big Sale
                  Up to 40%
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <div
              className="banner-img wow fadeIn animated mb-md-4 mb-lg-0"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <img src="./src/theme/assetss/imgs/banner/banner-10.jpg" alt="" />
              <div className="banner-text">
                <span>Shoes Zone</span>
                <h4>
                  Save 17% on <br />
                  All Items
                </h4>
                <a href="shop-grid-right.html">
                  Shop Now <i className="fi-rs-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <h4
              className="section-title style-1 mb-30 wow fadeIn animated"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              Deals &amp; Outlet
            </h4>
            <div
              className="product-list-small wow fadeIn animated"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-3.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Fish Print Patched T-shirt
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-4.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Vintage Floral Print Dress
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-5.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Multi-color Stripe Circle Print T-Shirt
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <h4
              className="section-title style-1 mb-30 wow fadeIn animated"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              Top Selling
            </h4>
            <div
              className="product-list-small wow fadeIn animated"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-6.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Geometric Printed Long Sleeve Blosue
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-7.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Print Patchwork Maxi Dress
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-8.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Daisy Floral Print Straps Jumpsuit
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4
              className="section-title style-1 mb-30 wow fadeIn animated"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              Hot Releases
            </h4>
            <div
              className="product-list-small wow fadeIn animated"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-9.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Floral Print Casual Cotton Dress
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-1.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Ruffled Solid Long Sleeve Blouse
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <a href="shop-product-right.html">
                    <img src="./src/theme/assetss/imgs/shop/thumbnail-2.jpg" alt="" />
                  </a>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <a href="shop-product-right.html">
                      Multi-color Print V-neck T-Shirt
                    </a>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  )
}

export default MainBody
