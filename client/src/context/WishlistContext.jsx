import { createContext, useState } from "react";
import Swal from "sweetalert2"

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [favs, setFavs] = useState(localStorage.getItem("Favs") ? JSON.parse(localStorage.getItem("Favs")) : [])

    localStorage.setItem("Favs", JSON.stringify(favs))

    const addToWishlist = (item) => {
        const existed = favs.find((x) => x._id === item._id)
        if(!existed) {
            setFavs([...favs, item])
            Swal.fire({
                icon: "success",
                title: "Added to Favs"
            })
        }Swal.fire({
            icon: "warning",
            title: "Already in Favs"
        })
    }

    const removeFromFavs = (id) => {
        setFavs(favs.filter(item => item._id !== id))
        Swal.fire({
            icon: "success",
            title: "Successfully Removed"
        })
    }

    const data = {favs, setFavs, addToWishlist, removeFromFavs}

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider