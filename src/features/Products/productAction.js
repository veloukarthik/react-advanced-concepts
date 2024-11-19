export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILED = "GET_PRODUCTS_FAILED";

export const fetchProductsRequest = () =>({
    type: GET_PRODUCTS_REQUEST
})

export const fetchProductsSuccess = (products) =>({
    type: GET_PRODUCTS_SUCCESS,
    payload:products
})

export const fetchProductsFailed = (error) =>({
    type: GET_PRODUCTS_FAILED,
    payload:error
})

export const fetchProducts = () =>{
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        try {
          setTimeout(async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch(fetchProductsSuccess(data));
          }, 2000);
        } catch (error) {
          dispatch(fetchProductsFailed(error));
        }
      };
}

export const fetchProduct = (id) =>{
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        try {
          setTimeout(async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            if(data)
            {
                dispatch(fetchProductsSuccess(data));
                return;
            }
            dispatch(fetchProductsFailed('There is no product related to id'));
          }, 2000);
        } catch (error) {
          dispatch(fetchProductsFailed(error));
        }
      };
}