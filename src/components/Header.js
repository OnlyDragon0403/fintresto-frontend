import React from 'react';

const Header = () => {
    const greeting = 'Hello Function Component!';
  
    return (
        <header className="header-section clearfix">
            <div className="container-fluid">
                <a href="#" className="site-logo">
                <img src="img/logo.png" alt="Fintresto" width={75} />
                </a>
                <div className="responsive-bar">
                <i className="fa fa-bars" />
                </div>
                <a href="" className="user">
                <i className="fa fa-user" />
                </a>
                <a href="" className="site-btn" contentEditable="true">
                Login / Register
                </a>
                <nav className="main-menu">
                <ul className="menu-list">
                    <li>
                    <a href="">About Fintresto</a>
                    </li>
                    <li>
                    <a href="">Finresto Services</a>
                    </li>
                    <li>
                    <a href="">Roadmap</a>
                    </li>
                    <li>
                    <a href="">Contact</a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;