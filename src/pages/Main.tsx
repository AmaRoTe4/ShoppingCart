import NavBar from "../components/NavBar";
import productos from "../data/products.json"
import SideBar from "../components/SideBar";
import { useProducts } from "../store/products";

export default function Main() {
    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <NavBar />
            <div className="w-full h-full flex justify-between">
                <SideBar />
                <main className="h-full w-full max-w-[1200px] flex">
                    <ListProducts />
                </main>
            </div>
        </div>
    )
}

const ListProducts = () => {
    const { addProductsInCart } = useProducts()

    return (
        <ul className="overflow-y-scroll max-h-full w-full py-10 px-3 flex flex-col items-center gap-5">
            {productos && productos.map((n) => {
                return (
                    <li key={n.id} className="w-full py-2 px-5 flex gap-10 justify-between items-center border border-black max-w-[500px]">
                        <p>
                            {n.name}
                        </p>
                        <button onClick={() => addProductsInCart(n)} type="button" className="border border-black h-[40px] w-[40px] flex justify-center items-center bg-blue-600">
                            +
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}