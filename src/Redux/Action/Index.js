import products from '../../product.json';


export function getAllProducts(){
    return  function(dispatch){
        return dispatch({
            type : 'GET_PRODUCTS',
            payload: products
        })
    }
}


export function searchProductsByName(payload){

        const prodName = products.filter((prod)=>new RegExp(payload,"i").test(prod.name) || new RegExp(payload,"i").test(prod.CODE)) 
        return {
                type:'GET_NAME',
                payload: prodName
            }
}

