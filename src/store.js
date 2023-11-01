import { applyMiddleware, createStore } from "redux";
import { reducer } from "./Redux/Reducers/reducer";
import axios from "axios";


import { add_product } from "./Redux/Actions/action";
import reduxthunk from 'redux-thunk'


const store = createStore(reducer,applyMiddleware(reduxthunk))
export default store ; 


   function fetchdatafromapi(){

return async (dispatch)=>{


   await axios.get("https://fakestoreapi.com/products").
   then((response)=>{
      // console.log("api data",response.data)
      // sending data to reducer that has been called using api 
   dispatch( add_product(response.data))

   }).catch((error)=>{
      console.log("error via api calling......",error)
   })




    
}
   






 
}

export {fetchdatafromapi}



