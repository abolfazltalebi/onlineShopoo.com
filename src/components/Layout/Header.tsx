import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between max-w-xl sm:max-w-4xl md:max-w-6xl mx-auto bg-amber-400 p-5 mt-6 rounded-full">
            <div className="flex items-center justify-center gap-6">
                <Link to={"/"}>
                    خانه
                </Link>
                <Link to={"/store"}>
                    فروشگاه
                </Link>
            </div>
            <div>
                <Link to={"/"}>
                    <button>سبد خرید</button>
                </Link>
            </div>
        </header>
    )
}
