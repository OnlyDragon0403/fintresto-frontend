import React from 'react';

const Process = () => {
    const greeting = 'Hello Function Component!';
  
    return (
        <section className="process-section spad">
            <div className="container">
                <div className="section-title text-center">
                <h2>Get Started With Fintresto</h2>
                <p>
                    Create your account, fill in the required details &amp; you're set to
                    go!
                </p>
                </div>
                <div className="row">
                <div className="col-md-4 process">
                    <div className="process-step">
                    <figure className="process-icon">
                        <img src="img/process-icons/1.png" alt="#" />
                    </figure>
                    <h4>Create your account</h4>
                    <p>
                        Click on Register/Login, create your account &amp; fill in the
                        required profile fields..
                    </p>
                    </div>
                </div>
                <div className="col-md-4 process">
                    <div className="process-step">
                    <figure className="process-icon">
                        <img src="img/process-icons/2.png" alt="#" />
                    </figure>
                    <h4>Log into Dashboard</h4>
                    <p>
                        Head over to your Dashboard &amp; check out the various options
                        you have.
                    </p>
                    </div>
                </div>
                <div className="col-md-4 process">
                    <div className="process-step">
                    <figure className="process-icon">
                        <img src="img/process-icons/3.png" alt="#" />
                    </figure>
                    <h4>Start farming!</h4>
                    <p>
                        Everything verified? Start earning yield or order your miner
                        today!
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Process;