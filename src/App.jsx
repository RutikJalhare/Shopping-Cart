import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom'
import { fetchdatafromapi } from './store'
import { ADD_TO_CART } from './Redux/Actions/action'
import './style.css'
import Pages from './Pages';



const App = () => {

  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);


  const data = useSelector(state=>state.data)
  const cart_array = useSelector(state=>state.cart)

 const dispatch=useDispatch()
 
 useEffect(()=>{
  dispatch(fetchdatafromapi())

 },[])

 const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const dd = data.slice(firstPostIndex, lastPostIndex);


  return (
    <>
<header>

  <div className="p-3 text-center bg-white border-bottom">
    <div className="container">
      <div className="row gy-3">

        <div className="col-lg-2 col-sm-4 col-4">
        <h1>
  ShopCart
      </h1>
        </div>
   

        <div className="order-lg-last col-lg-5 col-sm-8 col-8">
          <div className="d-flex float-end">

            <a  className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-shopping-cart m-1 me-md-2"></i><p className=" d-md-block mb-0"> <Link to='mycart'> My cart </Link>     </p><span className='lead bold '> {cart_array.length}</span> </a>
          </div>
        </div>
   
        <div className="col-lg-5 col-md-12 col-12">
          <div className="input-group float-center">
           
           
          </div>
        </div>
     
      </div>
    </div>
  </div>

 

  <div className="bg-primary text-white py-5">
    <div className="container py-5">
      <h1>
        Best products & <br />
        brands in our store
      </h1>
      <p>
        Trendy Products, Factory Prices, Excellent Service
      </p>
  
    </div>
  </div>

</header>

<section>
  <div className="container my-5">
    <header className="mb-4">
      <h3>New products</h3>
    </header>

    <div className="row">

{
  dd.map((data,pos)=>{
    return (

      <div  key={pos} className="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div className=" w-100 my-2 ">

      
        <div className="wrapper">
    <div className="card text-center">
    <Link to={`info/${pos}`}> 
        <div className="image"> <img src={data.image} width="300" / > </div>
        </Link>
        <div className="about-product text-center">
            <h3> {data.title}</h3>

            <h4>  ${data.price} </h4> 
            <p className="card-title">Rating : {data.rating.rate}</p>
            <button className="btn btn-success buy-now"    onClick={()=>{

dispatch( ADD_TO_CART(data))


          }}    >Add to cart</button>
        </div>
    </div>
</div>


         


        </div>
      </div>



    )
  })
}

    </div>

  <Pages
    totalPosts={data.length}
    postsPerPage={postsPerPage}
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}
/>
  </div>
</section>






    </>
  )
}

export default App


