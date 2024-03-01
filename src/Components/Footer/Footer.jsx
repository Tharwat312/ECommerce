import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <>
            <footer className='bg-main-light py-3 text-center'>
                <h5 className='text-capitalize'>get the FreshCart app</h5>
                <p className=''>We will send you a link, open it with your phone to download the app</p>
                <div className='d-flex align-items-center justify-content-center w-50 mx-auto py-3'>
                    <input className='form-control w-50' type="email" name="email" placeholder='Please enter your email' />
                    <button className='btn btn-info text-white text-capitalize'>send email</button>
                </div>
            </footer>
        </>
    )
}
export default Footer;