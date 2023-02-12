// export const cartReducer = (state ={cartItems : []} , action) => {
//     switch(action.type){
//         case 'ADD_TO_CART':
//             return {
//                   ...state,
//                   cartItems:[...state.cartItems,action.payload]
                 

//             }
//         default : return state    

//     }
// }


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const alreadyExists = state.cartItems.find(
          (item) => item === action.payload
        );
        if (alreadyExists) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item === action.payload ? action.payload : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
      case "DELETE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item !== action.payload
          ),
        };
      default:
        return state;
    }
  };