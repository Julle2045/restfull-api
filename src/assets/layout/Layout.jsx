import { Outlet } from "react-router-dom";
import React from "react";
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <section className="p-4v w-full">
            {/* header rummer også navbar */}
            <Header /> 

            <main className="my-5">
                <Outlet />
            </main>

            <Footer />

        </section>
    )
}

export default Layout;