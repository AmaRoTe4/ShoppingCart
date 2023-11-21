import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { useProducts } from "../store/products";

export default function SentOrder() {
    const { getProductsInCart, cleanProductsInCart } = useProducts()

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        form.reset()
        alert(`Enviado, Gracias ${formData.get("nombre")}!!!`)
        cleanProductsInCart()
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <NavBar />
            <div className="w-full h-full flex justify-between">
                <SideBar />
                <main className="h-full w-full max-w-[1200px] flex justify-center">
                    <form onSubmit={(e) => onSubmitForm(e)} className="flex flex-col gap-2 max-w-[400px] p-2 pt-20">
                        <input className="border px-2 py-1 rounded-md" type="text" id="nombre" name="nombre" placeholder="nombre" />
                        <input className="border px-2 py-1 rounded-md" type="text" id="apellido" name="apellido" placeholder="apellido" />
                        <input className="border px-2 py-1 rounded-md" type="text" id="telefono" name="telefono" placeholder="telefono" />
                        <p>Products: {getProductsInCart.length}</p>
                        <button type="submit" className="border px-2 py-1 rounded-md bg-green-600">
                            Enviar Carrito
                        </button>
                    </form>
                </main>
            </div>
        </div>
    )
}