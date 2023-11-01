

const add_product=(data)=>{
    return {
        type:"ADD_product",
        payload:data
    }
}



const ADD_TO_CART=(PRODUCT)=>{
    return {
        type:"ADD_PRODUCT_TO_CART",
       payload:PRODUCT 
    }
}

const REMOVE_PRODUCT_FROM_CART=(PRODUCT_ID)=>{
    return {
        type:"REMOVE_PRODUCT_FROM_CART",
       payload: PRODUCT_ID
    }
}

const INCREASE_PRODUCT_COUNT=(PRODUCT_ID)=>{
    return {
        type:"INCREASE_PRODUCT_COUNT",
        payload:PRODUCT_ID

    }
}



const DECREASE_PRODUCT_COUNT=(PRODUCT_ID)=>{
    return {
        type:"DECREASE_PRODUCT_COUNT",
        payload:PRODUCT_ID

    }
}


export {add_product, ADD_TO_CART, INCREASE_PRODUCT_COUNT, DECREASE_PRODUCT_COUNT , REMOVE_PRODUCT_FROM_CART}



