import { createContext, useContext, useReducer } from "react"

const DispatchContext = createContext();
const StateContext = createContext();

const AppProvider = ({ children }) => {
    let initialState = {
        cartItems: []
    };

    let reducer = (state, action) => {
        // console.log("the state is ",state);
        // console.log("The action is ",action);
        console.log("eda monw",action);
        switch (action.type) {
            case "add_to_cart": return { ...state, cartItems: [...state.cartItems,action.payload] }
            default: return state;
        }

    }
    
    
    let [state, dispatch] = useReducer(reducer, initialState)
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export { AppProvider, DispatchContext, StateContext }// named export 