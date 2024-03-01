import React from 'react'
import styles from './Layout.module.css'
import NavBar from 'Components/NavBar/NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from 'Components/Footer/Footer';
const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout;