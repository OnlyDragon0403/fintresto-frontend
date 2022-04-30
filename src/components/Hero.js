import React from 'react';

const Hero = () => {
    const greeting = 'Hello Function Component!';
  
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                <div className="col-md-6 hero-text">
                    <h2>
                    Fintresto
                    <br />
                    </h2>
                    <h4>Yield-Farming, Cryptocurrency Mining &amp; Swapping Service</h4>
                    <form className="hero-subscribe-from">
                    <input type="text" placeholder="Enter your email" />
                    <button className="site-btn sb-gradients">Get Started</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="img/device_1.png" className="laptop-image" alt="" />
                </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;