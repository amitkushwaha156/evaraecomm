import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const QuickView = () => {

  const navigate = useNavigate();

    const ProductDispatch= useDispatch()

    const handleCart=(id) => {
 
          ProductDispatch({ type: 'ADD_TO_Cart', payload: id })
       }
 
  

    const QuickView= useSelector(store=>store.QuickView)

    useEffect(() => {
      if (QuickView.length <1) {
        navigate('/');
      
      }
    }, [QuickView, navigate]); 

 
    if (QuickView && QuickView.length > 0) {
      const rating = QuickView[0].rating;
      const ratingWidth = ((rating / 5) * 100);
  
      const currentPrice = QuickView[0].price.current;
      const oldPrice = QuickView[0].price.old;
  
      const discountPercentage = oldPrice && currentPrice 
        ? Math.round(((oldPrice - currentPrice) / oldPrice) * 100) 
        : 0;


  return (
    <main className="main" style={{ transform: "none" }}>
  <div className="page-header breadcrumb-wrap">
    <div className="container">
      <div className="breadcrumb">
        <a href="index.html" rel="nofollow">
          Home
        </a>
        <span /> Fashion
        <span /> Abstract Print Patchwork Dress
      </div>
    </div>
  </div>
  <section className="mt-50 mb-50" style={{ transform: "none" }}>
    <div className="container" style={{ transform: "none" }}>
      <div className="row" style={{ transform: "none" }}>
        <div className="col-lg-9">
          <div className="product-detail accordion-detail">
            <div className="row mb-50">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="detail-gallery">
                  <span className="zoom-icon">
                    <i className="fi-rs-search" />
                  </span>
                  {/* MAIN SLIDES */}
                  <div className="product-image-slider slick-initialized slick-slider">
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 7065,
                          transform: "translate3d(-471px, 0px, 0px)"
                        }}
                      >
                      
                        <figure
                          className="border-radius-10 slick-slide slick-current  slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 471 }}
                        >
                          <img
                            src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </figure>
                    
                   
                     
                     
                
                        <figure
                          className="border-radius-10 slick-slide slick-cloned"
                          data-slick-index={13}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 471 }}
                        >
                          <img
                           src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* THUMBNAILS */}
                  <div className="slider-nav-thumbnails pl-15 pr-15 slick-initialized slick-slider">
                    <button
                      type="button"
                      className="slick-prev slick-arrow"
                      style={{}}
                    >
                      <i className="fi-rs-angle-left" />
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1691,
                          transform: "translate3d(-445px, 0px, 0px)"
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-5}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                           src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-4}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                           src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                          src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                          src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                         src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-current"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 83 }}
                        >
                          <img
                       src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 83 }}
                        >
                          <img
                          src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={2}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 83 }}
                        >
                          <img
                      src={QuickView[0].images.hover}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={3}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 83 }}
                        >
                          <img
                           src={QuickView[0].images.hover}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={4}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 83 }}
                        >
                          <img
                           src={QuickView[0].images.hover}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={5}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                            src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={6}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                          src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={7}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                          src={QuickView[0].images.default}
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={8}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                            src="/src/theme/assetss/imgs/shop/thumbnail-4.jpg"
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={9}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                            src="/src/theme/assetss/imgs/shop/thumbnail-5.jpg"
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={10}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                            src="/src/theme/assetss/imgs/shop/thumbnail-6.jpg"
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={11}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                            src="/src/theme/assetss/imgs/shop/thumbnail-7.jpg"
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={12}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                            src="/src/theme/assetss/imgs/shop/thumbnail-8.jpg"
                            alt="product image"
                          />
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={13}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 83 }}
                        >
                          <img
                            src="/src/theme/assetss/imgs/shop/thumbnail-9.jpg"
                            alt="product image"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="slick-next slick-arrow"
                      style={{}}
                    >
                      <i className="fi-rs-angle-right" />
                    </button>
                  </div>
                </div>
                {/* End Gallery */}
                <div className="social-icons single-share">
                  <ul className="text-grey-5 d-inline-block">
                    <li>
                      <strong className="mr-10">Share this:</strong>
                    </li>
                    <li className="social-facebook">
                      <a href="#">
                        <img
                          src="/src/theme/assetss/imgs/theme/icons/icon-facebook.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="social-twitter">
                      {" "}
                      <a href="#">
                        <img
                          src="/src/theme/assetss/imgs/theme/icons/icon-twitter.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="social-instagram">
                      <a href="#">
                        <img
                          src="/src/theme/assetss/imgs/theme/icons/icon-instagram.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="social-linkedin">
                      <a href="#">
                        <img
                          src="/src/theme/assetss/imgs/theme/icons/icon-pinterest.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="detail-info">
                  <h2 className="title-detail">
                    {QuickView[0].title}
                  </h2>
                  <div className="product-detail-rating">
                    <div className="pro-details-brand">
                      <span>
                        {" "}
                        Brands: <a href="shop-grid-right.html">Bootstrap</a>
                      </span>
                    </div>
                    <div className="product-rate-cover text-end">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: `${ratingWidth}%` }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted">
                        {" "}
                        (25 reviews)
                      </span>
                    </div>
                  </div>
                  <div className="clearfix product-price-cover">
                    <div className="product-price primary-color float-left">
                      <ins>
                        <span className="text-brand">{currentPrice}</span>
                      </ins>
                      <ins>
                        <span className="old-price font-md ml-15">{oldPrice}</span>
                      </ins>
                      <span className="save-price  font-md color3 ml-15">

                        {discountPercentage}% Off
                      </span>
                    </div>
                  </div>
                  <div className="bt-1 border-color-1 mt-15 mb-15" />
                  <div className="short-desc mb-30">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam rem officia, corrupti reiciendis minima nisi modi,
                      quasi, odio minus dolore impedit fuga eum eligendi?
                      Officia doloremque facere quia. Voluptatum, accusantium!
                    </p>
                  </div>
                  <div className="product_sort_info font-xs mb-30">
                    <ul>
                      <li className="mb-10">
                        <i className="fi-rs-crown mr-5" /> 1 Year AL Jazeera
                        Brand Warranty
                      </li>
                      <li className="mb-10">
                        <i className="fi-rs-refresh mr-5" /> 30 Day Return
                        Policy
                      </li>
                      <li>
                        <i className="fi-rs-credit-card mr-5" /> Cash on
                        Delivery available
                      </li>
                    </ul>
                  </div>
                  <div className="attr-detail attr-color mb-15">
                    <strong className="mr-10">Color</strong>
                    <ul className="list-filter color-filter">
                      <li>
                        <a href="#" data-color="Red">
                          <span className="product-color-red" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-color="Yellow">
                          <span className="product-color-yellow" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="#" data-color="White">
                          <span className="product-color-white" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-color="Orange">
                          <span className="product-color-orange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-color="Cyan">
                          <span className="product-color-cyan" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-color="Green">
                          <span className="product-color-green" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-color="Purple">
                          <span className="product-color-purple" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="attr-detail attr-size">
                    <strong className="mr-10">Size</strong>
                    <ul className="list-filter size-filter font-small">
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li className="active">
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                      <li>
                        <a href="#">XXL</a>
                      </li>
                    </ul>
                  </div>
                  <div className="bt-1 border-color-1 mt-30 mb-30" />
                  <div className="detail-extralink">
                    <div className="detail-qty border radius">
                      <a href="#" className="qty-down">
                        <i className="fi-rs-angle-small-down" />
                      </a>
                      <span className="qty-val">1</span>
                      <a href="#" className="qty-up">
                        <i className="fi-rs-angle-small-up" />
                      </a>
                    </div>
                    <div className="product-extra-link2">
                      <button  onClick={()=>handleCart(QuickView[0].id)}
                        type="submit"
                        className="button button-add-to-cart"
                      >
                        Add to cart
                      </button>
                    
                    
                    </div>
                  </div>
                  <ul className="product-meta font-xs color-grey mt-50">
                    <li className="mb-5">
                      SKU: <a href="#">FWM15VKT</a>
                    </li>
                    <li className="mb-5">
                      Tags:{" "}
                      <a href="#" rel="tag">
                        Cloth
                      </a>
                      ,{" "}
                      <a href="#" rel="tag">
                        Women
                      </a>
                      ,{" "}
                      <a href="#" rel="tag">
                        Dress
                      </a>{" "}
                    </li>
                    <li>
                      Availability:
                      <span className="in-stock text-success ml-5">
                        8 Items In Stock
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Detail Info */}
              </div>
            </div>
            <div className="tab-style3">
              <ul className="nav nav-tabs text-uppercase">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="Description-tab"
                    data-bs-toggle="tab"
                    href="#Description"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="Additional-info-tab"
                    data-bs-toggle="tab"
                    href="#Additional-info"
                  >
                    Additional info
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="Reviews-tab"
                    data-bs-toggle="tab"
                    href="#Reviews"
                  >
                    Reviews (3)
                  </a>
                </li>
              </ul>
              <div className="tab-content shop_info_tab entry-main-content">
                <div className="tab-pane fade show active" id="Description">
                  <div className="">
                    <p>
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                    </p>
                    <p>
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </p>
                    <ul className="product-more-infor mt-30">
                      <li>
                        <span>Type Of Packing</span> Bottle
                      </li>
                      <li>
                        <span>Color</span> Green, Pink, Powder Blue, Purple
                      </li>
                      <li>
                        <span>Quantity Per Case</span> 100ml
                      </li>
                      <li>
                        <span>Ethyl Alcohol</span> 70%
                      </li>
                      <li>
                        <span>Piece In One</span> Carton
                      </li>
                    </ul>
                    <hr className="wp-block-separator is-style-dots" />
                    <p>
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </p>
                    <h4 className="mt-30">Packaging &amp; Delivery</h4>
                    <hr className="wp-block-separator is-style-wide" />
                    <p>
                      Less lion goodness that euphemistically robin
                      expeditiously bluebird smugly scratched far while thus
                      cackled sheepishly rigid after due one assenting regarding
                      censorious while occasional or this more crane went more
                      as this less much amid overhung anathematic because much
                      held one exuberantly sheep goodness so where rat wry well
                      concomitantly.
                    </p>
                    <p>
                      Scallop or far crud plain remarkably far by thus far
                      iguana lewd precociously and and less rattlesnake contrary
                      caustic wow this near alas and next and pled the yikes
                      articulate about as less cackled dalmatian in much less
                      well jeering for the thanks blindly sentimental whimpered
                      less across objectively fanciful grimaced wildly some wow
                      and rose jeepers outgrew lugubrious luridly irrationally
                      attractively dachshund.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="Additional-info">
                  <table className="font-md">
                    <tbody>
                      <tr className="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                      <tr className="folded-wo-wheels">
                        <th>Folded (w/o wheels)</th>
                        <td>
                          <p>32.5″L x 18.5″W x 16.5″H</p>
                        </td>
                      </tr>
                      <tr className="folded-w-wheels">
                        <th>Folded (w/ wheels)</th>
                        <td>
                          <p>32.5″L x 24″W x 18.5″H</p>
                        </td>
                      </tr>
                      <tr className="door-pass-through">
                        <th>Door Pass Through</th>
                        <td>
                          <p>24</p>
                        </td>
                      </tr>
                      <tr className="frame">
                        <th>Frame</th>
                        <td>
                          <p>Aluminum</p>
                        </td>
                      </tr>
                      <tr className="weight-wo-wheels">
                        <th>Weight (w/o wheels)</th>
                        <td>
                          <p>20 LBS</p>
                        </td>
                      </tr>
                      <tr className="weight-capacity">
                        <th>Weight Capacity</th>
                        <td>
                          <p>60 LBS</p>
                        </td>
                      </tr>
                      <tr className="width">
                        <th>Width</th>
                        <td>
                          <p>24″</p>
                        </td>
                      </tr>
                      <tr className="handle-height-ground-to-handle">
                        <th>Handle height (ground to handle)</th>
                        <td>
                          <p>37-45″</p>
                        </td>
                      </tr>
                      <tr className="wheels">
                        <th>Wheels</th>
                        <td>
                          <p>12″ air / wide track slick tread</p>
                        </td>
                      </tr>
                      <tr className="seat-back-height">
                        <th>Seat back height</th>
                        <td>
                          <p>21.5″</p>
                        </td>
                      </tr>
                      <tr className="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>25″</p>
                        </td>
                      </tr>
                      <tr className="pa_color">
                        <th>Color</th>
                        <td>
                          <p>Black, Blue, Red, White</p>
                        </td>
                      </tr>
                      <tr className="pa_size">
                        <th>Size</th>
                        <td>
                          <p>M, S</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade" id="Reviews">
                  {/*Comments*/}
                  <div className="comments-area">
                    <div className="row">
                      <div className="col-lg-8">
                        <h4 className="mb-30">
                          Customer questions &amp; answers
                        </h4>
                        <div className="comment-list">
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="/src/theme/assetss/imgs/page/avatar-6.jpg"
                                  alt=""
                                />
                                <h6>
                                  <a href="#">Jacky Chan</a>
                                </h6>
                                <p className="font-xxs">Since 2012</p>
                              </div>
                              <div className="desc">
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "90%" }}
                                  ></div>
                                </div>
                                <p>
                                  Thank you very fast shipping from Poland only
                                  3days.
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <p className="font-xs mr-30">
                                      December 4, 2020 at 3:12 pm{" "}
                                    </p>
                                    <a
                                      href="#"
                                      className="text-brand btn-reply"
                                    >
                                      Reply <i className="fi-rs-arrow-right" />{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*single-comment */}
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="/src/theme/assetss/imgs/page/avatar-7.jpg"
                                  alt=""
                                />
                                <h6>
                                  <a href="#">Ana Rosie</a>
                                </h6>
                                <p className="font-xxs">Since 2008</p>
                              </div>
                              <div className="desc">
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "90%" }}
                                  ></div>
                                </div>
                                <p>Great low price and works well.</p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <p className="font-xs mr-30">
                                      December 4, 2020 at 3:12 pm{" "}
                                    </p>
                                    <a
                                      href="#"
                                      className="text-brand btn-reply"
                                    >
                                      Reply <i className="fi-rs-arrow-right" />{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*single-comment */}
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="/src/theme/assetss/imgs/page/avatar-8.jpg"
                                  alt=""
                                />
                                <h6>
                                  <a href="#">Steven Keny</a>
                                </h6>
                                <p className="font-xxs">Since 2010</p>
                              </div>
                              <div className="desc">
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "90%" }}
                                  ></div>
                                </div>
                                <p>
                                  Authentic and Beautiful, Love these way more
                                  than ever expected They are Great earphones
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <p className="font-xs mr-30">
                                      December 4, 2020 at 3:12 pm{" "}
                                    </p>
                                    <a
                                      href="#"
                                      className="text-brand btn-reply"
                                    >
                                      Reply <i className="fi-rs-arrow-right" />{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*single-comment */}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <h4 className="mb-30">Customer reviews</h4>
                        <div className="d-flex mb-30">
                          <div className="product-rate d-inline-block mr-15">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <h6>4.8 out of 5</h6>
                        </div>
                        <div className="progress">
                          <span>5 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            50%
                          </div>
                        </div>
                        <div className="progress">
                          <span>4 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            25%
                          </div>
                        </div>
                        <div className="progress">
                          <span>3 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "45%" }}
                            aria-valuenow={45}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            45%
                          </div>
                        </div>
                        <div className="progress">
                          <span>2 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow={65}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            65%
                          </div>
                        </div>
                        <div className="progress mb-30">
                          <span>1 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            85%
                          </div>
                        </div>
                        <a href="#" className="font-xs text-muted">
                          How are ratings calculated?
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*comment form*/}
                  <div className="comment-form">
                    <h4 className="mb-15">Add a review</h4>
                    <div className="product-rate d-inline-block mb-30"></div>
                    <div className="row">
                      <div className="col-lg-8 col-md-12">
                        <form
                          className="form-contact comment_form"
                          action="#"
                          id="commentForm"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control w-100"
                                  name="comment"
                                  id="comment"
                                  cols={30}
                                  rows={9}
                                  placeholder="Write Comment"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  type="text"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="website"
                                  id="website"
                                  type="text"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="button button-contactForm"
                            >
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-12">
                <h3 className="section-title style-1 mb-30">
                  Related products
                </h3>
              </div>
              <div className="col-12">
                <div className="row related-products">
                  <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap small hover-up">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="/src/theme/assetss/imgs/shop/product-2-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="/src/theme/assetss/imgs/shop/product-2-2.jpg"
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
                          >
                            <i className="fi-rs-search" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
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
                            Ulstra Bass Headphone
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
                  <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap small hover-up">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="/src/theme/assetss/imgs/shop/product-3-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="/src/theme/assetss/imgs/shop/product-4-2.jpg"
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
                          >
                            <i className="fi-rs-search" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
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
                          <span className="sale">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Smart Bluetooth Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span></span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap small hover-up">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="/src/theme/assetss/imgs/shop/product-4-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="/src/theme/assetss/imgs/shop/product-4-2.jpg"
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
                          >
                            <i className="fi-rs-search" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
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
                            HomeSpeak 12UEA Goole
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span></span>
                        </div>
                        <div className="product-price">
                          <span>$738.85 </span>
                          <span className="old-price">$1245.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap small hover-up mb-0">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="/src/theme/assetss/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="/src/theme/assetss/imgs/shop/product-3-2.jpg"
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
                          >
                            <i className="fi-rs-search" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
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
                            Dadua Camera 4K 2022EF
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span></span>
                        </div>
                        <div className="product-price">
                          <span>$89.8 </span>
                          <span className="old-price">$98.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-img banner-big wow fadeIn f-none animated mt-50"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <img
                className="border-radius-10"
                src="/src/theme/assetss/imgs/banner/banner-4.png"
                alt=""
              />
              <div className="banner-text">
                <h4 className="mb-15 mt-40">Repair Services</h4>
                <h2 className="fw-600 mb-20">
                  We're an Apple <br />
                  Authorised Service Provider
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 primary-sidebar sticky-sidebar"
          style={{
            position: "relative",
            overflow: "visible",
            boxSizing: "border-box",
            minHeight: 1
          }}
        >
          {/* Fillter By Price */}
          {/* Product sidebar Widget */}
          <div
            className="theiaStickySidebar"
            style={{
              paddingTop: 0,
              paddingBottom: 1,
              position: "static",
              transform: "none"
            }}
          >
            <div className="widget-category mb-30">
              <h5
                className="section-title style-1 mb-30 wow fadeIn animated animated animated"
                style={{ visibility: "visible" }}
              >
                Category
              </h5>
              <ul className="categories">
                <li>
                  <a href="shop-grid-right.html">Shoes &amp; Bags</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Blouses &amp; Shirts</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Dresses</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Swimwear</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Beauty</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Jewelry &amp; Watch</a>
                </li>
                <li>
                  <a href="shop-grid-right.html">Accessories</a>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget price_range range mb-30">
              <div className="widget-header position-relative mb-20 pb-10">
                <h5 className="widget-title mb-10">Fill by price</h5>
                <div className="bt-1 border-color-1" />
              </div>
              <div className="price-filter">
                <div className="price-filter-inner">
                  <div
                    id="slider-range"
                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div
                      className="ui-slider-range ui-corner-all ui-widget-header"
                      style={{ width: "73.9583%", left: "0%" }}
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "0%" }}
                    />
                    <span
                      tabIndex={0}
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "73.9583%" }}
                    />
                  </div>
                  <div className="price_slider_amount">
                    <div className="label-input">
                      <span>Range:</span>
                      <input
                        type="text"
                        id="amount"
                        name="price"
                        placeholder="Add Your Price"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group">
                <div className="list-group-item mb-10 mt-10">
                  <label className="fw-900">Color</label>
                  <div className="custome-checkbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox1"
                      defaultValue=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox1"
                    >
                      <span>Red (56)</span>
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox2"
                      defaultValue=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox2"
                    >
                      <span>Green (78)</span>
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox3"
                      defaultValue=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox3"
                    >
                      <span>Blue (54)</span>
                    </label>
                  </div>
                  <label className="fw-900 mt-15">Item Condition</label>
                  <div className="custome-checkbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox11"
                      defaultValue=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox11"
                    >
                      <span>New (1506)</span>
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox21"
                      defaultValue=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox21"
                    >
                      <span>Refurbished (27)</span>
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox31"
                      defaultValue=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox31"
                    >
                      <span>Used (45)</span>
                    </label>
                  </div>
                </div>
              </div>
              <a href="shop-grid-right.html" className="btn btn-sm btn-default">
                <i className="fi-rs-filter mr-5" /> Fillter
              </a>
            </div>
            <div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">
              <div className="widget-header position-relative mb-20 pb-10">
                <h5 className="widget-title mb-10">New products</h5>
                <div className="bt-1 border-color-1" />
              </div>
              <div className="single-post clearfix">
                <div className="image">
                  <img src="/src/theme/assetss/imgs/shop/thumbnail-3.jpg" alt="#" />
                </div>
                <div className="content pt-10">
                  <h5>
                    <a href="shop-product-detail.html">Chen Cardigan</a>
                  </h5>
                  <p className="price mb-0 mt-5">$99.50</p>
                  <div className="product-rate">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
              <div className="single-post clearfix">
                <div className="image">
                  <img src="/src/theme/assetss/imgs/shop/thumbnail-4.jpg" alt="#" />
                </div>
                <div className="content pt-10">
                  <h6>
                    <a href="shop-product-detail.html">Chen Sweater</a>
                  </h6>
                  <p className="price mb-0 mt-5">$89.50</p>
                  <div className="product-rate">
                    <div className="product-rating" style={{ width: "80%" }} />
                  </div>
                </div>
              </div>
              <div className="single-post clearfix">
                <div className="image">
                  <img src="/src/theme/assetss/imgs/shop/thumbnail-5.jpg" alt="#" />
                </div>
                <div className="content pt-10">
                  <h6>
                    <a href="shop-product-detail.html">Colorful Jacket</a>
                  </h6>
                  <p className="price mb-0 mt-5">$25</p>
                  <div className="product-rate">
                    <div className="product-rating" style={{ width: "60%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-img wow fadeIn mb-45 animated d-lg-block d-none"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <img src="/src/theme/assetss/imgs/banner/banner-11.jpg" alt="" />
              <div className="banner-text">
                <span>Women Zone</span>
                <h4>
                  Save 17% on <br />
                  Office Dress
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
  </section>
</main>

  )
}}

export default QuickView
