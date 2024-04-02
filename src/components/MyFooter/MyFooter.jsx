import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function MyFooter() {

    const { theme } = useContext(ThemeContext);

    return (
        <footer className={theme === "dark" ? "page-footer font-small blue pt-4 bg-dark text-light" : "page-footer font-small blue pt-4 bg-light"}>
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">I nostri social</h5>
                        <div className='p-5 d-flex justify-content-center align-items-center'>
                            <div className='ms-2 p-2'>
                                <FaFacebook style={{ fontSize: "30px" }} />
                            </div>
                            <div className='ms-2 p-2'>
                                <FaInstagram style={{ fontSize: "30px" }} />
                            </div>
                            <div className='ms-2 p-2'>
                                <FaTwitter style={{ fontSize: "30px" }} />
                            </div>
                            <div className='ms-2 p-2'>
                                <FaTiktok style={{ fontSize: "30px" }} />
                            </div>

                        </div>

                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Supporto</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className='fw-bold' style={{ color: "inherit" }}>Contattaci!!</a></li>
                            <li><a href="#!" className='fw-bold' style={{ color: "inherit" }}>FAQ</a></li>
                            <li><a href="#!" className='fw-bold' style={{ color: "inherit" }}>Downloads</a></li>
                            <li><a href="#!" className='fw-bold' style={{ color: "inherit" }}>Registrazione</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">EpiBooks</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className='fw-bold' style={{ color: "inherit" }}>Riguardo EpiBooks</a></li>
                            <li><a href="#!" className='fw-bold' style={{ color: "inherit" }}>I nostri Libri</a></li>
                            <li><a href="#!" className='fw-bold' style={{ color: "inherit" }}>Lavora con noi!</a></li>
                            <li><a href="#!" className='fw-bold' style={{ color: "inherit" }}>Iscriviti</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2024 Copyright:
                <a> EpiBooks.com</a>
            </div>

        </footer>

    );
}