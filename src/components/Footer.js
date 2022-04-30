import React from 'react';

const Footer = () => {
    const greeting = 'Hello Function Component!';
  
    return (
        <footer className="footer-section">
            <div className="container">
            <div className="row spad">
                <div className="col-md-6 col-lg-3 footer-widget">
                <img src="img/logo.png" className="" alt="" width={50} />
                <p>Fintresto. Mining, Yield-Farms, Swaps.</p>
                </div>
                <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
                <h5 className="widget-title">Resources</h5>
                <ul>
                    <li>
                    <a href="#">Buying cryptocurrency</a>
                    </li>
                    <li>
                    <a href="#">Mining cryptocurrency</a>
                    </li>
                    <li>
                    <a href="#">Fintresto Blog</a>
                    </li>
                    <li>
                    <a href="#">Fintresto FAQ</a>
                    </li>
                </ul>
                </div>
                <div className="offset-lg-1 footer-widget col-lg-2 col-md-6 pl-0">
                <h5 className="widget-title">Quick Links</h5>
                <ul>
                    <li>
                    <a href="#">Roadmap</a>
                    </li>
                    <li>
                    <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                    <a href="#">Risk Disclosure</a>
                    </li>
                    <li>
                    <a href="#">Terms Of Use</a>
                    </li>
                </ul>
                </div>
                <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
                <h5 className="widget-title">Follow Us</h5>
                <div className="social">
                    <a href="" className="facebook">
                    <i className="fa fa-facebook" />
                    </a>
                    <a href="" className="google">
                    <i className="fa fa-google-plus" />
                    </a>
                    <a href="" className="instagram">
                    <i className="fa fa-instagram" />
                    </a>
                    <a href="" className="twitter">
                    <i className="fa fa-twitter" />
                    </a>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row">
                <div className="col-lg-12 text-center text-lg-right">
                    <ul className="footer-nav">
                    <li>
                        <a href="">Risk Disclosure</a>
                    </li>
                    <li>
                        <a href="">Terms of Use</a>
                    </li>
                    <li>
                        <a href="">Privacy Policy </a>
                    </li>
                    <li>
                        <a href="">info@fintresto.com</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;