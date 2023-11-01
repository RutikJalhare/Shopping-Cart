import React, { useState } from 'react'
import './cartstyle.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DECREASE_PRODUCT_COUNT, INCREASE_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART, adddummy } from './Redux/Actions/action'
const Cart = () => {

 const Cart_items= useSelector(state=>state.cart)

 // calculating the  totalprice
let totalPrice=0
 const   dispatch =useDispatch()


  return (
  <>
<div className="card">
            <div className="row">
                <div className="col-md-12 cart">
                    <div className="title">
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="lead   py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-shopping-cart m-1 me-md-2"></i><p className=" d-md-block mb-0"> <Link to='/'>Back To Shop</Link>     </p> </a>

                        <div className="row">

                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{ Cart_items.length} items</div>
                        </div>
                    </div>    

                    {
                        Cart_items.map((items, pos)=>{ 
         
                     {   totalPrice += items.Product_count *  items.product.price   
                    
           
                    }

                    return (


                        <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src={items.product.image} /></div>
                            <div className="col">
                                <div className="row text-muted">{items.product.title}</div>
                                <h5 className="col">$ {items.product.price}<span className="close"> </span></h5>
                            </div>
                            <div className="col">

                            <button  className="border"   onClick={  ()=>{     dispatch( DECREASE_PRODUCT_COUNT(pos))}    } >-</button> <a  className="border">{items.Product_count}</a> <button  className="border"  onClick={()=>{  dispatch(  INCREASE_PRODUCT_COUNT(pos)      )    }}   >+</button>
                            </div>
                           
                            <div className="col">$ {items.Product_count *  items.product.price}<span className="close"> <button className="btn"    onClick={  ()=>{     dispatch( REMOVE_PRODUCT_FROM_CART(pos))}    }     >REMOVE</button> </span></div>
                           
                       
                       
                        </div>
                    </div>



                    )
                    
                    
                    
                    
                    })
                    }
                  



                 
                </div>
                <div className="col-12 summary">
                    <div><h5><b>Summary</b></h5></div>
               
                    <div className="row">
                        <div className="col" >ITEMS  { Cart_items.length}</div>
                        <div className="col text-right">&euro; {totalPrice}.00  </div>
                    </div>
                
                    <div className="row" >
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; {totalPrice}.00</div>
                    </div>
           
                </div>
            </div>
            
        </div>


  </>
  )
}

export default Cart
