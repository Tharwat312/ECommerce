import React from 'react'
import Mainslider from 'Components/Mainslider/Mainslider';
import CategoriesSlider from 'Components/CategoriesSlider/CategoriesSlider';
import { Helmet } from 'react-helmet';
import Products from 'Components/Products/Products';
const Home = () => {

    return (
        <>
            <Mainslider />
            <CategoriesSlider />
            <Products />
            <Helmet>
                <title>Freshcart Home Page</title>
            </Helmet>
        </>
    )
}
export default Home;