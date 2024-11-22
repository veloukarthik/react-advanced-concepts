import { GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./productAction"

const initialState = {
    products: [],
    error: null,
    loading: false
}

 const ProductReducer = (state=initialState,action) =>{
    switch(action.type)
    {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products:action.payload
            }
        case GET_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        default:
            return state;
            
    }
}


export default ProductReducer;