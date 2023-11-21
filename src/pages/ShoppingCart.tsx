import NavBar from "../components/NavBar";
import productos from "../data/products.json"
import SideBar from "../components/SideBar";
import { useProducts } from "../store/products";

export default function ShoppingCart() {
    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <NavBar />
            <div className="w-full h-full flex justify-between">
                <SideBar />
                <main className="w-full h-full max-w-[1200px] flex flex-col items-center gap-5">
                    <h1>Carrito</h1>
                    <ListProducts />
                </main>
            </div>
        </div>
    )
}

const ListProducts = () => {
    const { addProductsInCart, removeProductsInCart, getProductsInCart } = useProducts()

    return (
        <ul className="overflow-y-scroll max-h-full w-full py-10 px-3 flex flex-col items-center gap-5">
            {getProductsInCart && getProductsInCart.map((n) => {
                return (
                    <li key={n.id} className="w-full py-2 px-5 flex gap-10 justify-between items-center border border-black max-w-[500px]">
                        <p>
                            {productos.find(m => m.id === n.id)?.name}
                        </p>
                        <span className="flex gap-2">
                            <button onClick={() => addProductsInCart(n)} type="button" className="border border-black h-[40px] w-[40px] flex justify-center items-center bg-blue-600">
                                +
                            </button>
                            <button onClick={() => removeProductsInCart(n.id, 0)} type="button" className="border border-black h-[40px] w-[40px] flex justify-center items-center bg-blue-600">
                                -
                            </button>
                        </span>
                    </li >
                )
            })}
        </ul >
    )
}