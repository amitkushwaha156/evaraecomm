import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MenShirts = () => {
    const products = useSelector(store=>store.Shirt)



    const FoundItem=products.length;



   const ProductDispatch= useDispatch()

   const handleCart=(id) => {

         ProductDispatch({ type: 'ADD_TO_Cart', payload: id })
      }

   const handleWishList=(id) => {

              ProductDispatch({ type: 'ADD_TO_WISHLIST', payload: id })
      }
  
      
  return (
    <main className="main">
    <div className="page-header breadcrumb-wrap">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">
            Home
          </Link>
          <span /> MenShirts
        </div>
      </div>
    </div>
    <section className="mt-50 mb-50">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9">
            <div className="shop-product-fillter">
              <div className="totall-product">
                <p>
                  {" "}
                  We found <strong className="text-brand">{FoundItem}</strong> items for
                  you!
                </p>
              </div>
              <div className="sort-by-product-area">
                <div className="sort-by-cover mr-10">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>
                        <i className="fi-rs-apps" />
                        Show:
                      </span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>
                        {" "}
                        50 <i className="fi-rs-angle-small-down" />
                      </span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          50
                        </a>
                      </li>
                      <li>
                        <a href="#">100</a>
                      </li>
                      <li>
                        <a href="#">150</a>
                      </li>
                      <li>
                        <a href="#">200</a>
                      </li>
                      <li>
                        <a href="#">All</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sort-by-cover">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>
                        <i className="fi-rs-apps-sort" />
                        Sort by:
                      </span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>
                        {" "}
                        Featured <i className="fi-rs-angle-small-down" />
                      </span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          Featured
                        </a>
                      </li>
                      <li>
                        <a href="#">Price: Low to High</a>
                      </li>
                      <li>
                        <a href="#">Price: High to Low</a>
                      </li>
                      <li>
                        <a href="#">Release Date</a>
                      </li>
                      <li>
                        <a href="#">Avg. Rating</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row product-grid-3">

           { products.map(product => (
              <div key={product.id} className="col-lg-4 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img className="default-img" src={product.images.default} alt="" />
                        <img className="hover-img" src={product.images.hover} alt="" />
                      </a>
                    </div>
                    <div className="product-action-1">
                     
                      <button
                          key={products[0].actions[0].label}
                          aria-label={products[0].actions[0].label}
                          className="action-btn hover-up"
                          data-bs-toggle={products[0].actions[0].target ? "modal" : undefined}
                          data-bs-target={products[0].actions[0].target}
                          onClick={() => handleWishList(product.id)}
                           >
                          <i className={products[0].actions[0].icon} />
                        </button>
                      <button
                          key={products[0].actions[1].label}
                          aria-label={products[0].actions[1].label}
                          className="action-btn hover-up"
                          data-bs-toggle={products[0].actions[1].target ? "modal" : undefined}
                          data-bs-target={products[0].actions[0].target}
                          onClick={() => handleCart(product.id)}
                           >
                          <i className={products[0].actions[1].icon} />
                        </button>


                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      {product.badges.map(badge => (
                        <span className={badge.toLowerCase()} key={badge}>{badge}</span>
                      ))}
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="">{product.category}</a>
                    </div>
                    <h2>
                      <a href="">{product.title}</a>
                    </h2>
                    <div className="" title={product.rating}>
                      <span>
                        <span>{product.rating}</span>
                      </span>
                    </div>
                    <div className="product-price">
                      <span>${product.price.current} </span>
                      <span className="old-price">${product.price.old}</span>
                    </div>
                    <div className="product-action-1 show">
                      <button   aria-label="Add To Cart"  onClick={() => handleCart(product.id)} className="action-btn hover-up" >
                        <i className="fi-rs-shopping-bag-add" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

              
            </div>
            {/*pagination*/}
            <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link dot" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      16
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fi-rs-angle-double-small-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 primary-sidebar sticky-sidebar">
            <div className="widget-category mb-30">
              <h5 className="section-title style-1 mb-30 wow fadeIn animated">
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
            {/* Fillter By Price */}
            <div className="sidebar-widget price_range range mb-30">
              <div className="widget-header position-relative mb-20 pb-10">
                <h5 className="widget-title mb-10">Fill by price</h5>
                <div className="bt-1 border-color-1" />
              </div>
              <div className="price-filter">
                <div className="price-filter-inner">
                  <div  />
                  <div className="price_slider_amount">
                    <div className="label-input">
                      <span>Range:</span>
                      <input
                        type="range"
                        
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
            {/* Product sidebar Widget */}
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
            <div className="banner-img wow fadeIn mb-45 animated d-lg-block d-none">
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
    </section>
  </main>
  
  )
}

export default MenShirts
