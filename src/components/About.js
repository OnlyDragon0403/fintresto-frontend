import React from 'react';

const About = () => {
    const greeting = 'Hello Function Component!';
  
    return (
        <section className="about-section spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 offset-lg-6 about-text">
                    <h2>About Fintresto</h2>
                    <h5>
                    Fintresto is a young company consisting of cryptocurrency
                    specialists
                    </h5>
                    <p>
                    Since 2013 we developed extensive knowledge about blockchains,
                    cryptocurrency mining and decentralized finance technology. We
                    combine all this knowledge to bring you Fintresto.&nbsp;
                    <br />
                    <br />
                    Cryptocurrency mining, Auto-compounding mining rewards into yield
                    farming, Mining as a Service, decentralized swapping service, ...
                    Fintresto has you covered.
                    </p>
                    <a href="" className="site-btn sb-gradients sbg-line mt-5">
                    Get Started
                    </a>
                </div>
                </div>
                <div className="about-img">
                <img src="img/about-img.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;