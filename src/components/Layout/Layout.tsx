import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="space-y-24 mt-24 overflow-hidden Root">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
