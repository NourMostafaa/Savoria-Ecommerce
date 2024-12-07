import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // Get cart items from local storage
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
    const [cartItems, setCartItems] = useState(savedCartItems);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]); 

    const addToCart = (id) => {
        if (!cartItems[id]) {
            setCartItems({ ...cartItems, [id]: 1 });
        } else {
            setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
        }
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    };

    const totalCartPrice = () => {
        let total = 0;
        for (const key in cartItems) {
            if (cartItems[key] > 0) {
                let item = food_list.find((item) => item._id === key);
                total += item.price * cartItems[key];
            }
        }
        return total;
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        totalCartPrice,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
