import React, {
    createContext,
    useContext,
    userState,
    useEffect,
    useState
} from 'react'

import { toast } from 'react-hot-toast';


const Context = createContext();


export const StateContext = ({
    children
}) => {
    const [showCart, setShowCart] = useState
        (false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();


    const [totalQuantities, setTotalQuantites] = useState();

    const [qty, setQty] = useState(1);

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        //Adding Item if there are items previously existing in the cart
        if (checkProductInCart) {
            setTotalPrice((prevTotalPrive) => prevTotalPrice + product.price * quantity)
            setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + quantity)

            const updatedCartItem = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.qunatity + quantity,
                }
            })

            setCartItems(updatedCartItems);
            toast.success(`${qty} ${product.name} added to the cart.`);

        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    }

    return ( <Context.Provider value = {
            {
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
            }
        } > { children }
        </Context.Provider>


    )

}

export const useStateContext = () => useContext(Context);