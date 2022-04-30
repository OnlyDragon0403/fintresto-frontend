import React from 'react';

const Features = () => {
    const greeting = 'Hello Function Component!';
  
    return (
        <section className="features-section spad gradient-bg">
            <div className="container text-white">
                <div className="section-title text-center">
                <h2>Our Services</h2>
                <p>
                    Fintreso aims to be your personal specialist in this fast moving
                    cryptocurrency space
                </p>
                </div>
                <div className="row">
                {/* feature */}
                <div className="col-md-6 col-lg-4 feature">
                    <i className="ti-mobile" />
                    <div className="feature-content">
                    <h4>Monitoring</h4>
                    <p>
                        Fintresto monitors &amp; manages your mining rigs from a distance
                        so your uptime is always maximized.
                    </p>
                    </div>
                </div>
                {/* feature */}
                <div className="col-md-6 col-lg-4 feature">
                    <i className="ti-shield" />
                    <div className="feature-content">
                    <h4>Safe &amp; Secure</h4>
                    <p>
                        2 Factor Authentication, Know-Your-Customer, Anti-Money
                        Laundering, SSL, ... We take safety seriously so you don't have to
                        worry.&nbsp;
                    </p>
                    </div>
                </div>
                {/* feature */}
                <div className="col-md-6 col-lg-4 feature">
                    <i className="ti-wallet" />
                    <div className="feature-content">
                    <h4>Wallet</h4>
                    <p>
                        Dedicated dashboard for your mining rigs and yield-farms. No need
                        to figure out what you are earning &amp; have, see it all on our
                        dashboard.
                    </p>
                    </div>
                </div>
                {/* feature */}
                <div className="col-md-6 col-lg-4 feature">
                    <i className="ti-headphone-alt" />
                    <div className="feature-content">
                    <h4>Experts Support</h4>
                    <p>
                        From mining rig to simple web3 wallet problems, we are here for
                        you.&nbsp;
                    </p>
                    </div>
                </div>
                {/* feature */}
                <div className="col-md-6 col-lg-4 feature">
                    <i className="ti-reload" />
                    <div className="feature-content">
                    <h4>Instant Exchange</h4>
                    <p>
                        In-house swapping service, fast &amp; secure. No more transferring
                        coins, you can do it all on your dashboard.&nbsp;
                    </p>
                    </div>
                </div>
                {/* feature */}
                <div className="col-md-6 col-lg-4 feature">
                    <i className="ti-panel" />
                    <div className="feature-content">
                    <h4>Yield-Farm</h4>
                    <p>
                        Our yield farm gives you great returns on stablecoins, Bitcoin,
                        Ethereum, ... No lock-ups, your money remains your money.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Features;