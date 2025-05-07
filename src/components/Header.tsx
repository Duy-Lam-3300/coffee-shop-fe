import Link from "next/link";



export default function Header() {
    return (
        <header className="p-10 font-semibold text-lg h-[10vh]">
            <div className="flex justify-between max-w-7xl mx-auto items-center">
                <div className="">
                    <Link href="/"><p >Coffee Shop</p></Link>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/product" className="navItem">Product</Link>
                        </li>
                        <li>
                            <Link href="" className="navItem">Special Offers</Link>
                        </li>
                        <li>
                            <Link href="" className="navItem">The process</Link>
                        </li>
                        <li>
                            <Link href="" className="navItem">Packing</Link>
                        </li>
                        <li>
                            <Link href="" className="navItem">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-between items-center space-x-6">
                    <nav >
                        <ul className="flex justify-between space-x-4">
                            <li>Chat</li>
                            <li>Cart</li>
                        </ul>
                    </nav>
                    <button>Login/Signup</button>
                </div>
            </div>

        </header>
    )
}