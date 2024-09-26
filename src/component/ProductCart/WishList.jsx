import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const WishList = () => {
  const products = useSelector(store=>store.WishList)

   const removeDispatch=useDispatch()

  const removeFromCart=(id)=>{
     removeDispatch({type: 'WISHLIST_REMOVE', payload: id})
 
  }
 
  return (
    <div>
      <main className="main">
  <div className="page-header breadcrumb-wrap">
    <div className="container">
      <div className="breadcrumb">
        <Link to="/" >
          Home
        </Link>
    
        <span /> Wishlist
      </div>
    </div>
  </div>
  <section className="mt-50 mb-50">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
          {
            products.length===0? <h4 className='text-center'>No Item in Wishlist</h4> :
            <table className="table shopping-summery text-center">
              <thead>
                <tr className="main-heading">
                  <th scope="col" colSpan={2}>
                    Product
                  </th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock Status</th>
                  <th scope="col">Action</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
        { products.map(product => (
          <tr key={product.id}>
            <td className="image product-thumbnail">
              <img src={product.images.default} alt={product.title} />
            </td>
            <td className="product-des product-name">
              <h5 className="product-name">
                <a href="shop-product-right.html">
                  {product.title}
                </a>
              </h5>
              <p className="font-xs">
                Maboriosam in a tonto nesciung eget
                <br /> distingy magndapibus.
              </p>
            </td>
            <td className="price" data-title="Price">
              <span>{product.price.current.toFixed(2)} </span>
            
            </td>
            <td className="text-center" data-title="Stock">
              <span className="color3 font-weight-bold">In Stock</span>
            </td>
            <td className="text-right" data-title="Cart">
              <button className="btn btn-sm" onClick={() => addToCart(product)}>
                <i className="fi-rs-shopping-bag mr-5" />
                Add to cart
              </button>
            </td>
            <td className="action" data-title="Remove">
              <a onClick={() => removeFromCart(product.id)}>
                <i className="fi-rs-trash" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
            </table>
          }

          </div>
        </div>
      </div>
    </div>
  </section>
</main>

    </div>
  )
}

export default WishList
