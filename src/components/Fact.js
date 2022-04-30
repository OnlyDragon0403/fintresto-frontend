import React from 'react';

const Header = () => {
    const greeting = 'Hello Function Component!';
  
    return (
        <section className="fact-section gradient-bg">
            <div className="container">
                <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="fact">
                    <h2>
                        28
                        <br />
                    </h2>
                    <p>
                        Support <br /> Countries
                    </p>
                    <i className="ti-basketball" />
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="fact">
                    <h2>12K</h2>
                    <p>
                        Transactions <br /> per hour
                    </p>
                    <i className="ti-panel" />
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="fact">
                    <h2>50K</h2>
                    <p>
                        Largest <br /> Transactions
                    </p>
                    <i className="ti-stats-up" />
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="fact">
                    <h2>
                        13
                        <br />
                    </h2>
                    <p>
                        Years <br /> of Experience
                    </p>
                    <i className="ti-user" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Header;