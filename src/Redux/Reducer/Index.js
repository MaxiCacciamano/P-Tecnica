
const initialState = {
    products:[],
    allRecipe:[],
    recipeDetail:[],
}

export default function rootReducer(state=initialState, action){
    // console.log(action.payload)
    switch(action.type){
        case 'GET_PRODUCTS':
            console.log(action.payload)
            return{
                ...state,
                products: action.payload,
                allProducts: action.payload
            }
        
        case 'GET_NAME':
            return{
                ...state,
                products: action.payload
            }
        
            default:
                return state;
    }
}
