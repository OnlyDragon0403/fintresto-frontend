import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <>
    {/* Page Preloder */}
    <div id="preloder">
      <div className="loader" />
    </div>
    {/* Header section */}
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
    {/* Header section end */}
    {/* Hero section */}
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
    {/* Hero section end */}
    {/* About section */}
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
    {/* About section end */}
    {/* Features section */}
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
    {/* Features section end */}
    {/* Process section */}
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
    {/* Process section end */}
    {/* Fact section */}
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
    {/* Fact section end */}
    {/* Team section */}
    {/* Team section */}
    {/* Review section */}
    {/* Review section end */}
    {/* Newsletter section */}
    {/* Newsletter section end */}
    {/* Blog section */}
    <section className="blog-section spad">
      <div className="container">
        <div className="section-title text-center">
          <h2>Latest News</h2>
          <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
        </div>
        <div className="row">
          {/* blog item */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="img/blog/1.jpg" alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">03 jan 2018</div>
                <h4 className="blog-title">
                  <a href="">
                    Coinbase to Reopen the GDAX Bitcoin Cash-Euro Order Book
                  </a>
                </h4>
                <div className="post-meta">
                  <a href="">
                    <span>by</span> Admin
                  </a>
                  <a href="">
                    <i className="fa fa-heart-o" /> 234 Likes
                  </a>
                  <a href="">
                    <i className="fa fa-comments-o" /> 08 comments
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="img/blog/2.jpg" alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 dec 2018</div>
                <h4 className="blog-title">
                  <a href="">
                    Blockchain Rolls Out Trading Feature for 22 States in the U.S
                  </a>
                </h4>
                <div className="post-meta">
                  <a href="">
                    <span>by</span> Admin
                  </a>
                  <a href="">
                    <i className="fa fa-heart-o" /> 234 Likes
                  </a>
                  <a href="">
                    <i className="fa fa-comments-o" /> 08 comments
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="img/blog/3.jpg" alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 aug 2018</div>
                <h4 className="blog-title">
                  <a href="">This Week in Bitcoin: Up, Down and Sideways</a>
                </h4>
                <div className="post-meta">
                  <a href="">
                    <span>by</span> Admin
                  </a>
                  <a href="">
                    <i className="fa fa-heart-o" /> 234 Likes
                  </a>
                  <a href="">
                    <i className="fa fa-comments-o" /> 08 comments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Blog section end */}
    {/* Footer section */}
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
  </>
    </div>
  );
}

export default App;
