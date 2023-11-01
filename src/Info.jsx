import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchdatafromapi } from './store'
import { ADD_TO_CART } from './Redux/Actions/action'

const Info = () => {

  const {productid}= useParams()
  const dispatch=useDispatch()

  let productDetails=useSelector(state=>state.data[productid])
 

let moreproduct = useSelector(state=>state.data.slice(0,6))

   useEffect(()=>{
    dispatch(fetchdatafromapi())
   },[])

  return (
  
<>
<header>

  <div className="p-3 text-center bg-white border-bottom">
    <div className="container">
      <div className="row gy-3">
       
        <div className="col-lg-2 col-sm-4 col-4">
          <a href="https://mdbootstrap.com/" target="_blank" className="float-start">
       
          </a>
        </div>
   
        <div className="order-lg-last col-lg-5 col-sm-8 col-8">
          <div className="d-flex float-end">
          <a  className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-shopping-cart m-1 me-md-2"></i><p className=" d-md-block mb-0"> <Link to='/mycart'> My cart</Link>     </p> </a>
  </div>
        </div>
 

      
        <div className="col-lg-5 col-md-12 col-12">
          <div className="input-group float-center">
            <div className="form-outline">
            <h4 className="title text-dark">
        Product Details
          </h4>
            
            </div>
       
          </div>
        </div>
      
      </div>
    </div>
  </div>



  <div className="bg-primary">
    <div className="container py-4">
    </div>
  </div>

</header>


<section className="py-5">
  <div className="container">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp">
            <img style={{ "width": '100%'  , "height": "70vh", "margin": "auto"}} className="rounded-4 fit" src={productDetails.image}/>
          </a>
        </div>
    

      </aside>
      <main className="col-lg-6">
        <div className="ps-lg-3">
          <h4 className="title text-dark">


          {productDetails.title}
          </h4>
          <div className="d-flex flex-row my-3">
            <div className="text-warning mb-1 me-2">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span className="ms-1">
                4.5
              </span>
            </div>
            <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>{productDetails.rating.count} orders</span>
            <span className="text-success ms-2">In stock</span>
          </div>

          <div className="mb-3">
            <span className="h5">${productDetails.price}</span>
            <span className="text-muted">/per box</span>
          </div>

          <p>
          {productDetails.description}
          </p>

          <div className="row">
            <dt className="col-3">Type:</dt>
            <dd className="col-9">{productDetails.category}</dd>

          </div>

          <hr />

         
        
          <button  className="btn btn-primary shadow-0"   onClick={()=>{
dispatch( ADD_TO_CART(productDetails))

          }}  > <i className="me-1 fa fa-shopping-basket"></i> Add to cart </button>

        </div>
      </main>
    </div>
  </div>
</section>


<section className="bg-light border-top py-4">
  <div className="container">
    <div className="row gx-4">
      <div className="col-lg-8 mb-4">
        <div className="border rounded-2 px-3 py-2 bg-white">

          <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item d-flex" role="presentation">
              <a className="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
            </li>
            <li className="nav-item d-flex" role="presentation">
              <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
            </li>
            <li className="nav-item d-flex" role="presentation">
              <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
            </li>
            <li className="nav-item d-flex" role="presentation">
              <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Seller profile</a>
            </li>
          </ul>
        
          <div className="tab-content" id="ex1-content">
            <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
              <p>
                With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-check text-success me-2"></i>Some great feature name here</li>
                    <li><i className="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                    <li><i className="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                    <li><i className="fas fa-check text-success me-2"></i>Optical heart sensor</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 mb-0">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Easy fast and ver good</li>
                    <li><i className="fas fa-check text-success me-2"></i>Some great feature name here</li>
                    <li><i className="fas fa-check text-success me-2"></i>Modern style and design</li>
                  </ul>
                </div>
              </div>
              <table className="table border mt-3 mb-2">
                <tr>
                  <th className="py-2">Display:</th>
                  <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                </tr>
                <tr>
                  <th className="py-2">Processor capacity:</th>
                  <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                </tr>
                <tr>
                  <th className="py-2">Camera quality:</th>
                  <td className="py-2">720p FaceTime HD camera</td>
                </tr>
                <tr>
                  <th className="py-2">Memory</th>
                  <td className="py-2">8 GB RAM or 16 GB RAM</td>
                </tr>
                <tr>
                  <th className="py-2">Graphics</th>
                  <td className="py-2">Intel Iris Plus Graphics 640</td>
                </tr>
              </table>
            </div>
            <div className="tab-pane fade mb-2" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
              Tab content or sample information now <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </div>
            <div className="tab-pane fade mb-2" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
              Another tab content or sample information now <br />
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </div>
            <div className="tab-pane fade mb-2" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
              Some other tab content or sample information now <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </div>
        
        </div>
      </div>
      <div className="col-lg-4">
        <div className="px-0 border rounded-2 shadow-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Similar items  </h5>
             {
              moreproduct.map((items,pos)=>{
                return(
    <div className="d-flex mb-3">
                

                <Link to={`/info/${pos}`}>  
                <img src={items.image} className="img-md img-thumbnail" />
                  </Link>
                
             
                <div className="info">
                 
                 {items.title} <br />
                    Line Mounts
       
                  <strong className="text-dark"> ${items.price}</strong>
                </div>
              </div>
                )
              })
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





</>


  )
}

export default Info
